const { io } = require("socket.io-client");

// Configuration
const TOTAL_BOTS = 1500;
const SERVER_URL = "https://psycho-pool-backend-518372760875.asia-south2.run.app"; 
// Change to "http://localhost:4000" if you want to test your local backend instead

const bots = [];

console.log(`🚀 Starting Load Test with ${TOTAL_BOTS} bots targeting ${SERVER_URL}...`);
console.log(`Please wait while bots are spawned. This takes ~20 seconds to avoid crashing your local PC's network adapter...`);

for (let i = 1; i <= TOTAL_BOTS; i++) {
  // Stagger connections by 15ms each to prevent overwhelming the local OS network stack
  setTimeout(() => {
    const socket = io(SERVER_URL, {
      transports: ["websocket"],
      reconnection: false // Don't try to reconnect if disconnected to prevent infinite loops during testing
    });

    socket.on("connect", () => {
      // 1. Automatically join the game when connected
      const botName = `Bot_${i}_${Math.floor(Math.random() * 9999)}`;
      socket.emit("join_game", { name: botName });
    });

    // 2. Automatically listen for questions triggered by the Admin
    socket.on("new_question", (data) => {
      if (data && data.options) {
        // Pick a random option
        const randomOption = data.options[Math.floor(Math.random() * data.options.length)];
        
        // Random delay between 1 and 8 seconds to simulate human thinking 
        // This is CRITICAL. If 1500 bots emit a packet on the exact same millisecond, 
        // it acts as a DDoS attack and will crash your local internet router.
        const delayMs = Math.floor(Math.random() * 7000) + 1000;
        
        setTimeout(() => {
          socket.emit("submit_answer", { answer: randomOption });
          
          // Only log a few bots to prevent the terminal from lagging
          if (i % 100 === 0) { 
            console.log(`🤖 Bot #${i} voted for: ${randomOption}`);
          }
        }, delayMs);
      }
    });
    
    socket.on("disconnect", () => {
      if (i % 500 === 0) console.log(`⚠️ Bot #${i} disconnected`);
    });

    bots.push(socket);

    if (i % 250 === 0 || i === TOTAL_BOTS) {
      console.log(`✅ Spawned ${i}/${TOTAL_BOTS} bots...`);
    }
  }, i * 15); 
}

console.log("The script is running! Go to your Admin Dashboard and click 'Next Question'. The bots will automatically answer within 8 seconds!");
