const questions = [
  {
    question: 'What does HTML stand for?',
    choices: [
      'Hyper Text Markup Language',
      'High Tech Machine Language',
      'Hyperlink Texting Markup Link',
      'Highly Technical Markup Language',
    ],
    answer: 0,
  },
  {
    question:
      'What programming language is used to create interactive elements on a web page?',
    choices: ['Java', 'JavaScript', 'C++', 'Python'],
    answer: 1,
  },
  // Add more questions here
]

let currentQuestion = 0
let score = 0

const questionEl = document.getElementById('question')
const answerChoicesEl = document.getElementById('answer-choices')
const submitButton = document.getElementById('submit-answer')
const feedbackEl = document.getElementById('feedback')
const scoreEl = document.getElementById('score')

function displayQuestion() {
  const question = questions[currentQuestion]
  questionEl.textContent = question.question
  answerChoicesEl.innerHTML = ''
  question.choices.forEach((choice, index) => {
    const answerChoiceEl = document.createElement('li')
    const radioInput = document.createElement('input')
    radioInput.type = 'radio'
    radioInput.name = 'answer'
    radioInput.value = index
    answerChoiceEl.textContent = choice
    answerChoiceEl.appendChild(radioInput)
    answerChoicesEl.appendChild(answerChoiceEl)
  })
}

function checkAnswer() {
  const selectedChoice = document.querySelector('input[name="answer"]:checked')
  if (selectedChoice) {
    const correctAnswer = questions[currentQuestion].answer
    if (selectedChoice.value === correctAnswer.toString()) {
      feedbackEl.textContent = 'Correct!'
      score++
    } else {
      feedbackEl.textContent =
        'Incorrect. The correct answer is: ' +
        questions[currentQuestion].choices[correctAnswer]
    }
    scoreEl.textContent = 'Score: ' + score + '/' + questions.length
    currentQuestion++
    if (currentQuestion === questions.length) {
      submitButton.textContent = 'Finish Quiz'
      submitButton.removeEventListener('click', checkAnswer)
      submitButton.addEventListener('click', function () {
        alert(
          'You finished the quiz with a score of ' +
            score +
            ' out of ' +
            questions.length
        )
      })
    } else {
      displayQuestion()
    }
  } else {
    feedbackEl.textContent = 'Please select an answer'
  }
}

displayQuestion()

const answerForm = document.getElementById('answer-form')
answerForm.addEventListener('submit', function (event) {
  event.preventDefault()
  checkAnswer()
})
