const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#question');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnwsers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'What does css stand for?',
        choice1: 'Concord Style Sheet',
        choice2: 'Conquer Southern Sea',
        choice3: 'Cascade Style Sheet',
        choice4: 'Crime Scene Syndicate',
        anwser: 'Cascade Style Sheet',
    },
    {
        question: 'What is an example of a third party API?',
        choice1: 'Google',
        choice2: 'Overwatch',
        choice3: 'RAZR',
        choice4: 'Cousin Joes third holiday party',
        anwser: 'Google',
    },
    {
        question: 'What does css stand for?',
        choice1: 'Concord Style Sheet',
        choice2: 'Conquer Southern Sea',
        choice3: 'Cascade Style Sheet',
        choice4: 'Crime Scene Syndicate',
        anwser: 'Cascade Style Sheet',
    },
    {
        question: 'What is the purpose of JavaScript?',
        choice1: 'A.I. writing code in html',
        choice2: 'Make webpages interactive',
        choice3: 'To find the location of Sasquatch',
        choice4: 'Allows users to create repositories to save projects created from html',
        anwser: 'Make webpages interactive',
    },
    {
        question: 'Who has the best coding bootcamp in Texas?',
        choice1: 'UT of dallas',
        choice2: 'UNT',
        choice3: 'The Going Merry',
        choice4: 'SMU',
        anwser: 'SMU',
    }
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startQuiz =() => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem ('mostRecentScore', score)

        return window.location.assign('/end.html')

        questionCounter++
        progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
        progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

        const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionsIndex]
        question.innerText = currentQuestion.question

        choices.forEach(choice => {
            const number = choice.dataset['number']
            choice.innerText = currentQuestion['choice' + number]
        })

        availableQuestions.splice(questionsIndex, 1)

        acceptingAnwsers = true
    }

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if(!acceptingAnwsers) return

            acceptingAnwsers = false
            const selectedChoice = e.target
            const selectedAnwser = selectedChoice.dataset['number']

            let classToApply = selectedAnwser == currentQuestion.anwser ? 'correct' : 'incorrect'

            if(classToApply === 'correct') {
                incrementScore(SCORE_POINTS)
            };

            selectedChoice.parentElement.classList.add(classToApply)
            
            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply)
                getNewQuestion()
            }, timeout);

        }, 1000)
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startQuiz ()
}
