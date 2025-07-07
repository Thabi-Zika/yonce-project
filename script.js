const button = document.getElementById('slayBtn');
const quote = document.getElementById('quote');



const affirmations = [
  "I woke up like this. Flawless.",
  "Perfection is the disease of a nation.",
  "Feelin’ myself.",
  "Me, myself, and I — that's all I got in the end.",
  "I’m a grown woman. I can do whatever I want.",
  "Strong enough to bear the children… then get back to business.",
  "Bow down, witches.",
  "I ain’t sorry.",
  "I dream it, I work hard, I grind ’til I own it.",
  "Who run the world? Girls."
];

button.addEventListener('click', () =>  {
 const randomIndex = Math.floor(Math.random() * affirmations.length)
 quote.textContent = affirmations[randomIndex];
 quote.style.display = 'block';

});