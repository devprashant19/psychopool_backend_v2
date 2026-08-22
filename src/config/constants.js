require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'hello1234';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Bhushan aur Thakur GDG ke liye apna khoon paseena ek karte hain, par sabse zyada 'simp' kaun hai?", options: ["Thakur (Simp Max Pro)", "Bhushan (Chupa Rustam)", "Dono sakht launde hain", "Ujjwal sir"], timeLimit: 20 },
    { id: 'q2', text: "Agar raat ke 3 baje GDG ka kaam karna ho, toh kiska laptop khula milega?", options: ["Bhushan ka", "Thakur ka", "Dono rote hue code kar rahe honge", "Soham sir jaga denge"], timeLimit: 20 },
    { id: 'q3', text: "Thakur jab GDG ke kaam se free hota hai toh kya karta hai?", options: ["Crush ko message", "Nescafe pe chill", "Doosra GDG task dhoondhta hai", "Sota hai"], timeLimit: 20 },
    { id: 'q4', text: "Bhushan ka sabse bada 'bruh' moment kab hota hai?", options: ["Jab code production pe fatt jaye", "Jab Thakur uski credit le jaye", "Jab crush 'bhaiya' bol de", "Jab WiFi na chale"], timeLimit: 20 },
    { id: 'q5', text: "In dono ki din raat mehnat dekh kar seniors (Ujjwal/Soham) ka reaction kaisa hota hai?", options: ["Proud parents wale aansu", "'Abhi aur kaam baaki hai'", "'Hamare time pe zyada tough tha'", "'Chalo hum chill karte hain'"], timeLimit: 20 }
  ],
  2: [
    { id: 'q6', text: "Pichle saal Soham aur Ujjwal ne GDG me bohot mehnat ki, par ab unka favourite timepass kya hai?", options: ["Juniors (Thakur/Bhushan) pe order chalana", "Sona", "Nayi tech seekhna", "Coding"], timeLimit: 20 },
    { id: 'q7', text: "Ujjwal sir ko konsi mithai pasand hai?", options: ["Barfi", "Kulfi", "Kajukatli", "Soham sir"], timeLimit: 20 },
    { id: 'q8', text: "Soham sir ko sabse zyada pyara kya hai?", options: ["Paisa", "GDG", "Junior ladkiyan", "Backchodi"], timeLimit: 20 },
    { id: 'q9', text: "Jab Ujjwal aur Soham apne 'struggle days' yaad karte hain toh kya bolte hain?", options: ["'Hamare time pe... '", "'Bhushan aur Thakur ko aur ragdo'", "'Achha hua khatam ho gaya'", "'Bhai rona aa raha hai'"], timeLimit: 20 },
    { id: 'q10', text: "Ujjwal aur Soham ki jodi kiske jaisi hai?", options: ["Jai-Veeru", "Tom-Jerry", "Munna-Circuit", "Jethalal-Bhide"], timeLimit: 20 }
  ],
  3: [
    { id: 'q11', text: "Agar Bhushan ek supervillain ban jaye toh uska masterplan kya hoga?", options: ["Thakur ko GDG se nikalna", "Sabka code delete karna", "Canteen free karna", "Pata nahi"], timeLimit: 20 },
    { id: 'q12', text: "Thakur ko sabse zyada attitude kis baat ka hai?", options: ["Apni 'so-called' coding skills ka", "Apni hairstyle ka", "Apni GDG dedication ka", "Bas aise hi bewajah"], timeLimit: 20 },
    { id: 'q13', text: "Jab event successful hota hai, toh sach mein credit kiska banta hai?", options: ["Thakur ka", "Bhushan ka", "Dono milke party karte hain", "Ujjwal sir aake frame le jaate hain"], timeLimit: 20 },
    { id: 'q14', text: "Bhushan aur Thakur mein sabse zyada nakhre kiske hain?", options: ["Thakur (Drama Queen)", "Bhushan (Silent Nakhre)", "Dono bohot chill hain", "Seniors ke aage kiski chalti hai"], timeLimit: 20 },
    { id: 'q15', text: "Aakhri sawal: Bhushan and Thakur in 4th year will be like...?", options: ["Ujjwal & Soham 2.0", "Bahut strict seniors", "Ekdum chill", "Pata nahi"], timeLimit: 20 }
  ],
  4: [
    { id: 'q16', text: "Soham sir ki go-to line kya hai?", options: ["'Bhai kya kar raha hai?'", "'Mera code chal gaya!'", "'Ujjwal kahan hai?'", "'Bhook lagi hai'"], timeLimit: 20 },
    { id: 'q17', text: "Ujjwal sir ka 'red flag' kya hai?", options: ["Reply 3 din baad dena", "Har baat par sarcasm", "Soham ko bina wajah roast karna", "Perfectionism ki beemari"], timeLimit: 20 },
    { id: 'q18', text: "Soham sir ka sabse bada flex jo bilkul SACH NAHI hai?", options: ["'Main bahut busy insaan hu'", "'Mujhe sab aata hai'", "'Main gym jaata hu'", "'Ladkiyan mujh par fida hain'"], timeLimit: 20 },
    { id: 'q19', text: "Ujjwal sir aur Soham sir jab akele hote hain toh kya discuss karte hain?", options: ["Agla GDG event", "'Bhai career ka kya hoga?'", "Gossip and Kalesh", "'Thakur aur Bhushan ka kya karein?'"], timeLimit: 20 },
    { id: 'q20', text: "In charo (Ujjwal, Soham, Bhushan, Thakur) mein sabse bada 'Pookie' kaun hai?", options: ["Soham sir (obviously)", "Ujjwal sir (secretly)", "Thakur (wannabe)", "Bhushan (cutie)"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };