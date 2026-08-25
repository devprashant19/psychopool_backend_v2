require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'prashant1901';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Jungle mein more nacha, kisne dekha?", options: ["More ne", "Chor ne", "Nani ne", "Nana ne"], timeLimit: 30 },
    { id: 'q2', text: "Puppy ko dekh kar aap kya karte ho?", options: ["Puppy ko khana dete ho", "Puppy ka khana le lete ho", "Puppy ko kha lete ho", "Puppy aapko kha leta hai"], timeLimit: 30 },
    { id: 'q3', text: "Agar aapko ek din ka Raja bana diya jaye, toh aap kya karoge?", options: ["Rani ban jaunga", "AQI kam kar dunga", "Tax 200 percent kar dunga", "Dusre din bhi ban jaunga"], timeLimit: 30 },
    { id: 'q4', text: "If you were to be given a nickname, what would it be?", options: ["Kitty", "Sona", "Kaliya", "Cutu"], timeLimit: 30 },
    { id: 'q5', text: "Worst state to be born in?", options: ["Solid state", "Liquid state", "Gaseous state", "Bose-Einstein Condensate"], timeLimit: 30 },
    { id: 'q6', text: "If you could give 'Mr. Universe' to someone, who would it be?", options: ["Hrithik Roshan", "Verka wale bhaiya", "Zehri Baba", "The person anchoring right now"], timeLimit: 30 },
    { id: 'q7', text: "Sabse zyada speed kiski hai?", options: ["College ke WiFi ki", "WiFi ke college ki", "WiFi ke WiFi ki", "College ke college ki"], timeLimit: 30 },
    { id: 'q8', text: "Sabse zyada pani kidhar aata hai?", options: ["Nal mein", "KBH mein", "Rajasthan mein", "Baadal mein"], timeLimit: 30 },
    { id: 'q9', text: "Most dangerous animal found in Hamirpur?", options: ["Leopard", "Monkey", "Vlog banane wale", "Vlog dekhne wale"], timeLimit: 30 },
    { id: 'q10', text: "Sabse zyada tedha kya hai?", options: ["Tedhe Medhe", "Pipe", "Himachal ke raaste", "Snake"], timeLimit: 30 }
  ],
  2: [
    { id: 'q11', text: "Kaun se color ka dupatta jaldi udd jata hai?", options: ["Lal color", "Peela color", "Neela color", "Hara color"], timeLimit: 30 },
    { id: 'q12', text: "Agar chachu ne aapko sheesha todte hue pakad liya, toh aap kya karoge?", options: ["Haath jodoge", "Pair jodoge", "Haath aur pair dono jodoge", "Sheesha jodoge"], timeLimit: 30 },
    { id: 'q13', text: "Agar zombie ko vampire kaat le toh kya hoga?", options: ["Zombie vampire ban jayega", "Vampire zombie ban jayega", "Dono insan ban jayenge", "Dono mar jayenge"], timeLimit: 30 },
    { id: 'q14', text: "Kiski placement nahi lagegi?", options: ["Jo Genesis mein anchoring karte hain", "Jo khelte hain", "Jo nahi aate", "Jo organize karte hain"], timeLimit: 30 },
    { id: 'q15', text: "Time kaisa chal raha hai?", options: ["Kharab", "Bahut kharab", "Paune nau", "Naune pau"], timeLimit: 30 },
    { id: 'q16', text: "Dil le gayi kudi __ di", options: ["Ambika di", "Parvati di", "Manimahesh di", "Satpura di"], timeLimit: 30 },
    { id: 'q17', text: "GDG ke event se wapas jaake kya karoge?", options: ["So jaunga", "Jaag jaunga", "Bata nahi sakta", "Jaanke kya karega"], timeLimit: 30 },
    { id: 'q18', text: "Sabse zyada gyaan kaun deta hai?", options: ["Gyaani", "College ke seniors", "Professors", "Manmohan chachu"], timeLimit: 30 },
    { id: 'q19', text: "Ek chutki sindoor ki keemat kya hai?", options: ["Cheeni se zyada", "Cheeni se kam", "Cheeni jitni", "Dusri chutki jitni"], timeLimit: 30 },
    { id: 'q20', text: "Agar dost kue mein gire toh tum kya karoge?", options: ["Khud kue mein gir jaoge", "Ek aur kua khod doge", "Kue ko kue mein gira doge", "Dost ko kue se nikal doge"], timeLimit: 30 }
  ],
  3: [
    { id: 'q21', text: "THAT'S WHAT SHE SAID. But she said what?", options: ["Bhaiya side hona", "You deserve better", "Ek plate aloo patties", "Slay queen"], timeLimit: 30 },
    { id: 'q22', text: "Lakdi ki kathi, kathi pe kya?", options: ["Ghoda", "Bhagoda", "Roll", "Pakoda"], timeLimit: 30 },
    { id: 'q23', text: "Who do you want in Hill Fair 2027?", options: ["Subhashini Sahu", "Dolly Chaiwala", "Puneet Superstar", "Samay Raina"], timeLimit: 30 },
    { id: 'q24', text: "Acid mein base daloge toh kya banega?", options: ["Basid", "Ase", "Seid", "Salt + water"], timeLimit: 30 },
    { id: 'q25', text: "12 March, 1930 ke revolt mein kaun si march hui thi?", options: ["Gandhi march", "Aandhi march", "Dandi march", "Chandi march"], timeLimit: 30 }
  ]
};

// Dynamically prefix options with A., B., C., D. to ensure uniqueness
Object.keys(QUESTIONS).forEach(round => {
  QUESTIONS[round].forEach(q => {
    q.options = q.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`);
  });
});

module.exports = { ADMIN_PASSWORD, QUESTIONS };