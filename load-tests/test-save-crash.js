const { io } = require("socket.io-client");

const URL = "https://psycho-pool-backend.onrender.com";
const TOTAL_CLIENTS = 500;
const ADMIN_PASSWORD = "***REMOVED***";

const clients = [];
let myPlayerIds = {};

async function run() {
  console.log("1️⃣  Joining 500 Users...");
  
  // 1. Join
  for (let i = 0; i < TOTAL_CLIENTS; i++) {
    const socket = io(URL, { transports: ["websocket"] });
    
    socket.on("join_success", (data) => {
      myPlayerIds[i] = data.playerId;
    });

    clients.push(socket);
    await new Promise(r => setTimeout(r, 5)); // Fast join
  }
  console.log("✅ Users Joined. Waiting for DB sync...");
  await new Promise(r => setTimeout(r, 2000));

  // 2. Everyone Votes "Red" (So everyone wins -> Maximum DB Writes)
  console.log("2️⃣  Submitting 500 Winning Votes...");
  clients.forEach((socket, i) => {
    if (myPlayerIds[i]) {
      socket.emit("submit_answer", { 
        playerId: myPlayerIds[i], 
        answer: "Red" 
      });
    }
  });

  // 3. Admin Triggers Calculation
  console.log("3️⃣  Admin Triggering Calculation (The Crash Point)...");
  const adminSocket = io(URL, { transports: ["websocket"] });
  
  adminSocket.emit("admin_login", ADMIN_PASSWORD);
  
  setTimeout(() => {
    console.time("ResultCalculation");
    adminSocket.emit("admin_reveal_results");
  }, 1000);

  adminSocket.on("minority_result", () => {
    console.timeEnd("ResultCalculation");
    console.log("🎉 SUCCESS! Results Calculated and Sent without crash.");
    process.exit(0);
  });
}

run();