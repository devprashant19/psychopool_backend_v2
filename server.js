require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// Redis for Multi-Server Scaling
const { createClient } = require("redis"); 
const { createAdapter } = require("@socket.io/redis-adapter");

// Imports from new structure
const { connectDB } = require('./src/config/db');
const socketManager = require('./src/sockets');

// Strict CORS setup
const allowedOrigins = [
  process.env.FRONTEND_URL, 
  "http://localhost:5173", 
  "http://localhost:8080"
].filter(Boolean);

// App Setup
const app = express();
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
const server = http.createServer(app);

// Socket Setup
const io = new Server(server, { 
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true
  } 
});

// Initialize Systems
connectDB();

// --- 🔴 MULTI-SERVER MODE (REDIS ACTIVE) ---
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1'; 
const pubClient = createClient({ url: `redis://${REDIS_HOST}:6379` });
const subClient = pubClient.duplicate();
const stateSubClient = pubClient.duplicate(); // Separate client for state syncing

Promise.all([pubClient.connect(), subClient.connect(), stateSubClient.connect()]).then(() => {
  io.adapter(createAdapter(pubClient, subClient));
  
  // Make pubClient global so socket handlers can use it
  global.redisPub = pubClient;

  // Listen for admin state changes from other containers
  stateSubClient.subscribe('state_sync', (message) => {
    try {
      const state = require('./src/state/gameState');
      const newState = JSON.parse(message);
      // Merge all top-level properties (gameState, gamePhase, etc.)
      Object.assign(state, newState);
      console.log('🔄 State synchronized from Redis Pub/Sub:', state.gamePhase);
    } catch (err) {
      console.error('Failed to parse state_sync message', err);
    }
  });

  console.log(`✅ Scalable Multi-Server Mode Active: Redis connected at ${REDIS_HOST}`);
  
  // Pass control to your socket logic immediately
  socketManager(io);
}).catch(err => {
  console.error("❌ Redis Connection Error (Cannot start server without Redis):", err);
  process.exit(1);
});
// -----------------------------------------------------------

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));