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
    { id: 'q6', text: "Agar Soham sir naraz ho jayein to unhe kaise manayein?", options: ["Samosa khila kar", "Sorry bol kar", "Ujjwal sir ko bula kar", "Manane ki zarurat nahi"], timeLimit: 20 },
    { id: 'q7', text: "Ujjwal sir ka sabse bada dushman kaun?", options: ["Bugs in code", "College ka WiFi", "Subah 8 baje ki class", "Soham sir ke PJ's"], timeLimit: 20 },
    { id: 'q8', text: "Soham sir ka weekend kahan guzarta hai?", options: ["Library mein", "Hostel ke room mein", "OAT ki stairs par", "GDG meetings mein"], timeLimit: 20 },
    { id: 'q9', text: "Jab code mein bug aaye to Ujjwal sir kya karte hain?", options: ["Laptop band", "Soham sir ko call", "Chai break", "ChatGPT se puchte hain"], timeLimit: 20 },
    { id: 'q10', text: "Soham sir ke phone ka password kya ho sakta hai?", options: ["123456", "Ujjwal123", "password", "ilovegdg"], timeLimit: 20 }
  ],
  3: [
    { id: 'q11', text: "Ujjwal sir ko gussa kab aata hai?", options: ["Jab Soham sir late aate hain", "Jab internet nahi chalta", "Jab assignment due ho", "Jab mess mein tinda bane"], timeLimit: 20 },
    { id: 'q12', text: "Soham sir ka sapna kya hai?", options: ["Billionaire banna", "Ujjwal sir se peecha chhudana", "GDG lead banna forever", "World tour karna"], timeLimit: 20 },
    { id: 'q13', text: "Ujjwal sir sabse zyada kya bolte hain?", options: ["Bhai code review kar de", "Main kal se padhunga", "Soham sir kahan reh gaye", "Arey yaar"], timeLimit: 20 },
    { id: 'q14', text: "Soham sir ka favorite hero kaun hai?", options: ["Ujjwal sir", "Shahrukh Khan", "Iron Man", "Salman Khan"], timeLimit: 20 },
    { id: 'q15', text: "Final question: Ujjwal and Soham are...?", options: ["Best Friends", "Frenemies", "Coding Partners", "All of the above"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };