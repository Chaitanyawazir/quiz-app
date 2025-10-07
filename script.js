const questions = [
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hypertext Markdown Language", correct: false },
      { text: "Hyperloop Machine Language", correct: false },
      { text: "Helicopters Terminals Motorboats Lamborginis", correct: false }
    ]
  },
  {
    question: "What year was JavaScript launched?",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
      {
    question: "which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "href", correct: false },
      { text: "a", correct: true },
      { text: "link", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "which of the following is used to reada HTML page and render it ?",
    answers: [
      { text: "web server", correct: false },
      { text: "web matrix", correct: false },
      { text: "web browser", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "which of the folloeing is not associated with web socket communication ?",
    answers: [
      { text: "https", correct: false },
      { text: "wss", correct: false },
      { text: "http", correct: true },
      { text: "ws", correct: false }
    ]
  },
   {
    question: "which of the folloeing is not associated with web socket communication ?",
    answers: [
      { text: "https", correct: false },
      { text: "wss", correct: false },
      { text: "http", correct: true },
      { text: "ws", correct: false }
    ]
  },
 {
    question: "which of the following property defines label for a list of items?",
    answers: [
      { text: "list-style-type", correct: true },
      { text: "list-style-image", correct: false },
      { text: "list-styleist-style-type", correct: false},
      { text: "none of the above", correct: false }
    ]
  },

{
    question: "which of the following is the web application equivalent to queryselectorAll()",
    answers: [
      { text: "#()", correct:  false},
      { text: "&()", correct: false },
      { text: "!()", correct: false},
      { text: "$()", correct: true }
    ]
  },






































];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next ➡";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `🎉 You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "🔄 Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
