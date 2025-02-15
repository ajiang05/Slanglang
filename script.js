// Sample Data
const slangTerms = [
  {
    term: "yeet",
    definition: "to throw something with force",
    example: "I yeeted the ball across the room.",
  },
  {
    term: "lit",
    definition: "something exciting or excellent",
    example: "This party is lit!",
  },
  {
    term: "savage",
    definition: "extremely cool or impressive",
    example: "That comeback was savage.",
  },
];

const quizzes = [
  {
    term: "yeet",
    question: "What does 'yeet' mean?",
    correctAnswer: "to throw something with force",
  },
  {
    term: "lit",
    question: "What does 'lit' mean?",
    correctAnswer: "something exciting or excellent",
  },
];

let streakCount = 0;
let pointsCount = 0;

// DOM Elements
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswer = document.getElementById("quizAnswer");
const submitQuiz = document.getElementById("submitQuiz");
const quizFeedback = document.getElementById("quizFeedback");
const streakCountDisplay = document.getElementById("streakCount");
const pointsCountDisplay = document.getElementById("pointsCount");
const randomSlangButton = document.getElementById("randomSlangButton");
const randomSlangResult = document.getElementById("randomSlangResult");

// Search Functionality
searchButton.addEventListener("click", () => {
  const query = searchInput.value.toLowerCase();
  const results = slangTerms.filter((term) => term.term.includes(query));
  displaySearchResults(results);
});

function displaySearchResults(results) {
  searchResults.innerHTML = "";
  if (results.length === 0) {
    searchResults.innerHTML = "<p>No results found.</p>";
  } else {
    results.forEach((result) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${result.term}</strong>: ${result.definition}</p>
        <p><em>Example: ${result.example}</em></p>
      `;
      searchResults.appendChild(div);
    });
  }
}

// Quiz Functionality
function loadDailyQuiz() {
  const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
  quizQuestion.textContent = randomQuiz.question;
  quizAnswer.value = "";
  quizFeedback.textContent = "";
}

submitQuiz.addEventListener("click", () => {
  const userAnswer = quizAnswer.value.trim().toLowerCase();
  const correctAnswer = quizzes.find(
    (q) => q.question === quizQuestion.textContent
  ).correctAnswer;

  if (userAnswer === correctAnswer) {
    quizFeedback.textContent = "Correct! Good job!";
    streakCount++;
    pointsCount += 10;
  } else {
    quizFeedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    streakCount = 0;
  }

  streakCountDisplay.textContent = streakCount;
  pointsCountDisplay.textContent = pointsCount;
  loadDailyQuiz(); // Load a new quiz
});

// Random Slang Functionality
randomSlangButton.addEventListener("click", () => {
  const randomTerm = getRandomSlang();
  displayRandomSlang(randomTerm);
});

function getRandomSlang() {
  const randomIndex = Math.floor(Math.random() * slangTerms.length);
  return slangTerms[randomIndex];
}

function displayRandomSlang(term) {
  randomSlangResult.innerHTML = `
    <p><strong>${term.term}</strong>: ${term.definition}</p>
    <p><em>Example: ${term.example}</em></p>
  `;
}

// Initialize
loadDailyQuiz();
