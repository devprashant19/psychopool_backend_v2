require("dotenv").config();

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD||'hello1234';

const QUESTIONS = {
  1: [
    { id: 'q1', text: "Thakur jab offline hota hai toh kahan milta hai?", options: ["Nescafe par", "Hostel ke room mein rote hue", "Library mein", "Gym mein 'body' banate hue"], timeLimit: 20 },
    { id: 'q2', text: "Divyansh ko Bengali log kyu pasand hain?", options: ["Usko Rosogolla psnd hai", "Secret crush hai", "Bhasha acchi lagti hai", "Usko sb bhalo bashi"], timeLimit: 20 },
    { id: 'q3', text: "In dono mein se jaldi kaun 'pighal' jata hai?", options: ["Thakur definitely", "Bhushan (chupa rustam)", "Dono sakht launde hain", "Ujjwal sir"], timeLimit: 20 },
    { id: 'q4', text: "Daksh ko aankh ke niche kisne kiss di?", options: ["Madhumakkhi ne", "Soham sir ne", "Uski crush ne", "Kisi ne nhi(bechara)"], timeLimit: 20 },
    { id: 'q5', text: "Agar Bhushan ek supervillain ban jaye toh uska masterplan kya hoga?", options: ["Sabka khana khana", "Thakur ko banish karna", "GDG pe kabza", "Purane pyaar se intekaam"], timeLimit: 20 }
  ],
  2: [
    { id: 'q6', text: "Shlok ka 'Simp' level (1-100) kitna hai?", options: ["0 (Sakht launda)", "50 (Kabhi kabhi pighalta hai)", "100 (Ultra Max Pro)", "Limit ke bahar"], timeLimit: 20 },
    { id: 'q7', text: "Ujjwal sir ko agar sach mein gussa aa jaye toh kya hota hai?", options: ["Sbko gaali milti h", "Soham sir ki bolti band", "Kuchni hota", "Kya hi kr lenge"], timeLimit: 20 },
    { id: 'q8', text: "GDG me kitne couples hai?", options: ["1", "2", "3", "4"], timeLimit: 20 },
    { id: 'q9', text: "Soham sir ka sabse dark secret kya hai?", options: ["Wo code ChatGPT se chaapte hain", "Unka koi 'hidden' talent hai", "Unko React nahi aata", "Wo single nahi hain"], timeLimit: 20 },
    { id: 'q10', text: "Kya Saurabh Sir GB road gaye the?", options: ["Yes", "Yes", "Yes", "Yes"], timeLimit: 20 }
  ]
};

module.exports = { ADMIN_PASSWORD, QUESTIONS };