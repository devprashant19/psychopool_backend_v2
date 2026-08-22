require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'hello1234';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Bhushan aur Thakur ka sabse bada 'kalesh' kis baat pe hota hai?", options: ["Code fattne par", "Ek dusre ko blame karne par", "Samosa ke aakhri tukde par", "Crush ke msg pe"], timeLimit: 20 },
    { id: 'q2', text: "Agar GDG mein koi kaand ho jaye, toh sabse pehle kaun phasega?", options: ["Thakur ka overconfidence", "Bhushan ka silence", "Dono nahi", "Soham sir phasa denge"], timeLimit: 20 },
    { id: 'q3', text: "Thakur jab offline hota hai toh kahan milta hai?", options: ["Nescafe par", "PG ke room mein rote hue", "Canteen mein", "Gym mein 'body' banate hue"], timeLimit: 20 },
    { id: 'q4', text: "Bhushan ka secret talent kya hai?", options: ["Code ko bina run kiye submit karna", "Meetings se gayab hona", "Thakur ko taunt marna", "Sleeping with open eyes"], timeLimit: 20 },
    { id: 'q5', text: "In dono mein se jaldi kaun 'pighal' jata hai?", options: ["Thakur definitely", "Bhushan (chupa rustam)", "Dono sakht launde hain", "Ujjwal sir"], timeLimit: 20 }
  ],
  2: [
    { id: 'q6', text: "Soham sir ki aisi kaunsi aadat hai jo Ujjwal sir ko trigger karti hai?", options: ["Late reply karna", "'Bhai tu kar lena'", "Faltu Gyaan dena", "Paise udhaar lena"], timeLimit: 20 },
    { id: 'q7', text: "Ujjwal sir ko agar sach mein gussa aa jaye toh kya hota hai?", options: ["Server down", "Soham sir ki bolti band", "'Main GDG chhod raha hu'", "Sab normal rehta hai"], timeLimit: 20 },
    { id: 'q8', text: "Soham sir ka sabse dark secret kya hai?", options: ["Wo code ChatGPT se chaapte hain", "Unka koi 'hidden' talent hai", "Unko React nahi aata", "Wo single nahi hain"], timeLimit: 20 },
    { id: 'q9', text: "Ujjwal sir kis baat par sabse jaldi flex karte hain?", options: ["Apni coding speed pe", "Apne looks pe", "GDG lead banne par", "Sarcasm pe"], timeLimit: 20 },
    { id: 'q10', text: "Agar Soham aur Ujjwal ka ek din ka 'breakup' ho jaye, toh pehle text kaun karega?", options: ["Soham sir rote hue", "Ujjwal sir (attitude me)", "Koi nahi", "Thakur bich-bchav karega"], timeLimit: 20 }
  ],
  3: [
    { id: 'q11', text: "Bhushan ka sabse bada 'bruh' moment kab hota hai?", options: ["Jab code production pe fatt jaye", "Jab Thakur uski credit le jaye", "Jab crush 'bhaiya' bol de", "Jab WiFi na chale"], timeLimit: 20 },
    { id: 'q12', text: "Thakur ko sabse zyada attitude kis baat ka hai?", options: ["Apni 'so-called' coding skills ka", "Apni hairstyle ka", "Seniors se connection ka", "Bas aise hi bewajah"], timeLimit: 20 },
    { id: 'q13', text: "Agar Bhushan ek supervillain ban jaye toh uska masterplan kya hoga?", options: ["Sabka code delete karna", "Thakur ko banish karna", "GDG pe kabza", "Canteen free karna"], timeLimit: 20 },
    { id: 'q14', text: "Thakur ka 'Simp' level (1-100) kitna hai?", options: ["0 (Sakht launda)", "50 (Kabhi kabhi pighalta hai)", "100 (Ultra Max Pro)", "Limit ke bahar"], timeLimit: 20 },
    { id: 'q15', text: "Bhushan aur Thakur mein sabse zyada 'nalla' (unproductive) kaun hai?", options: ["Thakur obviously", "Bhushan openly", "Dono ek barabar hain", "Ujjwal sir tay karenge"], timeLimit: 20 }
  ],
  4: [
    { id: 'q16', text: "Soham sir ki kaunsi baat par BHAROSA nahi karna chahiye?", options: ["'Bhai 5 min mein pahunch raha hu'", "'Ye feature kal tak ho jayega'", "'Mera code bug-free hai'", "'Main single hu'"], timeLimit: 20 },
    { id: 'q17', text: "Ujjwal sir ka 'red flag' kya hai?", options: ["Reply 3 din baad dena", "Har baat par sarcasm", "Soham ko bina wajah roast karna", "Perfectionism ki beemari"], timeLimit: 20 },
    { id: 'q18', text: "Soham sir ka sabse bada flex jo bilkul SACH NAHI hai?", options: ["'Main bahut busy insaan hu'", "'Mujhe sab aata hai'", "'Main gym jaata hu'", "'Ladkiyan mujh par fida hain'"], timeLimit: 20 },
    { id: 'q19', text: "Ujjwal sir aur Soham sir jab akele hote hain toh kya discuss karte hain?", options: ["Agla GDG event", "'Bhai career ka kya hoga?'", "Gossip and Kalesh", "'Thakur aur Bhushan ka kya karein?'"], timeLimit: 20 },
    { id: 'q20', text: "Aakhri sawaal: In charo mein sabse bada 'Pookie' kaun hai?", options: ["Soham sir (obviously)", "Ujjwal sir (secretly)", "Thakur (wannabe)", "Bhushan (cutie)"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };