require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'hello1234';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Ujjwal sir ko konsi mithai psnd h?", options: ["barfi", "kulfi", "kajukatli", "soham sir"], timeLimit: 20 },
    { id: 'q2', text: "Soham sir ko sbse zyada pyara kya hai?", options: ["paisa", "gdg", "junior ldkia", "backchodi"], timeLimit: 20 },
    { id: 'q3', text: "Ujjwal sir ka favourite timepass kya hai?", options: ["Coding", "Sleeping", "Soham sir ko pareshan karna", "Gaming"], timeLimit: 20 },
    { id: 'q4', text: "Soham sir ki go-to line kya hai?", options: ["Bhai kya kar raha hai?", "Mera code chal gaya!", "Ujjwal kahan hai?", "Bhook lagi hai"], timeLimit: 20 },
    { id: 'q5', text: "Ujjwal aur Soham ki jodi kiske jaisi hai?", options: ["Jai-Veeru", "Tom-Jerry", "Munna-Circuit", "Jethalal-Bhide"], timeLimit: 20 }
  ],
  2: [
    { id: 'q6', text: "Bhushan aur Thakur mein sabse zyada GDG ka kaam kaun karta hai?", options: ["Bhushan", "Thakur", "Dono nahi", "Seniors karwate hain"], timeLimit: 20 },
    { id: 'q7', text: "Thakur ka sabse bada dar kya hai?", options: ["Soham sir ka gussa", "Ujjwal sir ka task", "Bugs in code", "Exams"], timeLimit: 20 },
    { id: 'q8', text: "Bhushan ki favorite hobby kya hai?", options: ["Seniors ki baat sunna", "Thakur se ladna", "Event organize karna", "Sohna"], timeLimit: 20 },
    { id: 'q9', text: "Ujjwal aur Soham ke samne Bhushan aur Thakur ki halat kaisi hoti hai?", options: ["Sher ke samne bakri", "Best friends", "Ekdum chill", "Bohot serious"], timeLimit: 20 },
    { id: 'q10', text: "Thakur ko sabse zyada pareshan kaun karta hai?", options: ["Bhushan", "Soham sir", "Ujjwal sir", "Khud ka code"], timeLimit: 20 }
  ],
  3: [
    { id: 'q11', text: "Agar Soham sir naraz ho jayein to unhe kaise manayein?", options: ["Samosa khila kar", "Sorry bol kar", "Ujjwal sir ko bula kar", "Manane ki zarurat nahi"], timeLimit: 20 },
    { id: 'q12', text: "Ujjwal sir ka sabse bada dushman kaun?", options: ["Bugs in code", "College ka WiFi", "Subah 8 baje ki class", "Soham sir ke PJ's"], timeLimit: 20 },
    { id: 'q13', text: "Soham sir ka weekend kahan guzarta hai?", options: ["Library mein", "Hostel ke room mein", "OAT ki stairs par", "GDG meetings mein"], timeLimit: 20 },
    { id: 'q14', text: "Jab code mein bug aaye to Ujjwal sir kya karte hain?", options: ["Laptop band", "Soham sir ko call", "Chai break", "ChatGPT se puchte hain"], timeLimit: 20 },
    { id: 'q15', text: "Soham sir ke phone ka password kya ho sakta hai?", options: ["123456", "Ujjwal123", "password", "ilovegdg"], timeLimit: 20 }
  ],
  4: [
    { id: 'q16', text: "Jab meeting hoti hai to Bhushan ka excuse kya hota hai?", options: ["Network issue hai", "Hostel mein light nahi hai", "Thakur bula raha hai", "Main raste mein hoon"], timeLimit: 20 },
    { id: 'q17', text: "Thakur ka go-to dialogue kya hai?", options: ["Sir ho jayega", "Bhushan karega", "Mujhe nahi aata", "Main busy hoon"], timeLimit: 20 },
    { id: 'q18', text: "Bhushan aur Thakur ki jodi ko kya naam dein?", options: ["Chota Bheem & Raju", "Motu & Patlu", "Karan & Arjun", "Junior Jai-Veeru"], timeLimit: 20 },
    { id: 'q19', text: "Jab event successfully conduct ho jaye to credit kaun leta hai?", options: ["Bhushan", "Thakur", "Dono milke", "Seniors le jaate hain"], timeLimit: 20 },
    { id: 'q20', text: "Bhushan and Thakur in 4th year will be like...?", options: ["Ujjwal & Soham 2.0", "Bahut strict seniors", "Ekdum chill", "Pata nahi"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };