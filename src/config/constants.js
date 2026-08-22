require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'hello1234';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Bhushan aur Thakur mein sabse pehle GDG ka task kaun khatam karta hai?", options: ["Bhushan", "Thakur", "Dono mil kar", "Kabhi time pe nahi hota"], timeLimit: 20 },
    { id: 'q2', text: "Thakur ka sabse bada talent kya hai?", options: ["Design banana", "Coding karna", "Event host karna", "Sabko manage karna"], timeLimit: 20 },
    { id: 'q3', text: "Jab meeting hoti hai toh Bhushan ka role kya hota hai?", options: ["Silent observer", "Idea generator", "Execution master", "All-rounder"], timeLimit: 20 },
    { id: 'q4', text: "Thakur aur Bhushan ki dosti kaisi hai?", options: ["Ekdum Jai-Veeru jaisi", "Tom and Jerry jaisi", "Professional", "Bas GDG tak"], timeLimit: 20 },
    { id: 'q5', text: "Dono mein se sabse zyada coffee/chai kaun peeta hai?", options: ["Thakur", "Bhushan", "Dono nahi", "Pata nahi"], timeLimit: 20 }
  ],
  2: [
    { id: 'q6', text: "Ujjwal sir ko konsi mithai pasand hai?", options: ["Barfi", "Kulfi", "Kajukatli", "Rasgulla"], timeLimit: 20 },
    { id: 'q7', text: "Soham sir ko sabse zyada pyara kya hai?", options: ["GDG Community", "Coding", "Tech events", "Apna Laptop"], timeLimit: 20 },
    { id: 'q8', text: "Ujjwal sir ka favourite timepass kya hai?", options: ["Coding", "Sone ki acting karna", "Naye tech explore karna", "Gaming"], timeLimit: 20 },
    { id: 'q9', text: "Soham sir jab code karte hain toh unki go-to line kya hoti hai?", options: ["Mera code chal gaya!", "Ye bug kahan se aaya?", "Deploy kar do", "Bhai kya kar raha hai?"], timeLimit: 20 },
    { id: 'q10', text: "Ujjwal aur Soham ki jodi GDG mein kiske jaisi hai?", options: ["Batman-Robin", "Iron Man-Captain America", "Munna-Circuit", "Jethalal-Bhide"], timeLimit: 20 }
  ],
  3: [
    { id: 'q11', text: "Agar Bhushan ko GDG ka head bana diya jaye toh sabse pehle kya badlega?", options: ["Meetings ka time", "Event ka format", "Kuch nahi", "Canteen ka menu"], timeLimit: 20 },
    { id: 'q12', text: "Thakur sabse zyada kahan time spend karta hai?", options: ["Library mein", "OAT par", "GDG meetings mein", "Computer lab mein"], timeLimit: 20 },
    { id: 'q13', text: "Jab naya task milta hai toh Bhushan ka pehla reaction kya hota hai?", options: ["Excited!", "'Ho jayega sir'", "'Kaise hoga?'", "'Thakur karega'"], timeLimit: 20 },
    { id: 'q14', text: "Thakur ka favourite event GDG mein kaunsa raha hai?", options: ["DevFest", "Hash Code", "Study Jams", "Orientation"], timeLimit: 20 },
    { id: 'q15', text: "In dono (Bhushan aur Thakur) mein sabse achha presentation kaun deta hai?", options: ["Bhushan", "Thakur", "Dono ka style alag hai", "Ujjwal sir decide karenge"], timeLimit: 20 }
  ],
  4: [
    { id: 'q16', text: "Soham sir ka sabse bada advice juniors ke liye kya hota hai?", options: ["DSA karo", "Development karo", "Open Source mein jao", "Chill karo"], timeLimit: 20 },
    { id: 'q17', text: "Agar Ujjwal sir ko koi super power mile toh wo kya hogi?", options: ["Bina soche code compile hona", "Mind reading", "Teleportation", "Infinite coffee"], timeLimit: 20 },
    { id: 'q18', text: "Soham sir GDG meetings mein sabse zyada kis baat par focus karte hain?", options: ["Teamwork", "Code quality", "Punctuality", "Event fun"], timeLimit: 20 },
    { id: 'q19', text: "Ujjwal sir ka favourite tech stack kaunsa ho sakta hai?", options: ["MERN", "Next.js", "Python", "Sab aata hai"], timeLimit: 20 },
    { id: 'q20', text: "GDG mein sabse zyada active kaun rehta hai?", options: ["Soham sir", "Ujjwal sir", "Thakur", "Bhushan"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };