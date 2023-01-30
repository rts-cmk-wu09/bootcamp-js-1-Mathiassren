const quotes = [
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
  },
  {
    text: "It’s not a bug; it’s an undocumented feature. ― Anonymous",
  },
  {
    text: "First, solve the problem. Then, write the code. – John Johnson",
  },
  {
    text: "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  },
  {
    text: "Make it work, make it right, make it fast. – Kent Beck",
  },
  {
    text: "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  },
  {
    text: "Of course, bad code can be cleaned up. But it’s very expensive.” — Robert C. Martin",
  },
  {
    text: "Confusion is part of programming. ― Felienne Hermans",
  },
  {
    text: "If we want users to like our software, we should design it to behave like a likable person.  – Alan Cooper",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
  },
];

const quoteText = document.getElementById("text");

function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerHTML = quotes[randomIndex].text;
  quoteAuthor.innerHTML = quotes[randomIndex].author;
}

displayQuote();
