'use strict';

let currentQuestionIndex = 0;
let quizData = [];
let score = 0;

async function fetchQuizData() {
  try {
    const response = await fetch('http://localhost:3000/api/v1/questions');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    quizData = await response.json();
    displayQuestion(currentQuestionIndex);  
  } catch (error) {
    console.error('Error fetching quiz data:', error);
  }
}

function displayQuestion(questionIndex) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ''; 

  const questionData = quizData[questionIndex];
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  questionDiv.innerHTML = `<h2>Question ${questionIndex + 1}/${quizData.length}: ${questionData.question}</h2>`;

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';

  Object.values(questionData.options).forEach((option) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';

    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = `question-${questionData.id}`;
    radioInput.value = option;

    const label = document.createElement('label');
    label.textContent = option;
    label.className = 'label';

    optionDiv.appendChild(radioInput);
    optionDiv.appendChild(label);
    optionsDiv.appendChild(optionDiv);
  });

  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(optionsDiv);
  const submitButton = document.createElement('button');
  submitButton.className = 'button';
  submitButton.textContent = 'Submit';
  submitButton.addEventListener('click', () => submitAnswer(questionData.answer));
  quizContainer.appendChild(submitButton);
  const nextButton = document.createElement('button');
  nextButton.className = 'button';
  nextButton.textContent = 'Next Question';
  nextButton.addEventListener('click', () => displayNextQuestion());
  quizContainer.appendChild(nextButton);
  const feedbackDiv = document.createElement('div');
  feedbackDiv.id = 'feedback';
  quizContainer.appendChild(feedbackDiv);
}

function submitAnswer(correctAnswer) {
    console.log(correctAnswer)
    const selectedOption = document.querySelector(`input[name="question-${quizData[currentQuestionIndex].id}"]:checked`);
     
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }
  
    if (selectedOption.value === correctAnswer) {
      score++;
      score++;  
    document.getElementById('feedback').textContent = 'Correct!';
  } else {
    document.getElementById('feedback').textContent = `Incorrect. Correct answer: ${correctAnswer}`;
  }
    }
  
 
function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion(currentQuestionIndex);
  } else {
    displayScore();
  }
}

function displayScore() {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ''; 

  const scoreDiv = document.createElement('div');
  scoreDiv.className = 'score';
  scoreDiv.innerHTML = `<h2>Total Score: ${score}/${quizData.length}</h2>`;
  quizContainer.appendChild(scoreDiv);
  const restartButton = document.createElement('button');
  restartButton.className = 'button';
  restartButton.textContent = 'Restart Quiz';
  restartButton.addEventListener('click', () => restartQuiz());
  quizContainer.appendChild(restartButton);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion(currentQuestionIndex);
}

fetchQuizData();
