const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#question')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {};
let acceptingAnwsers = true;
let score = o;
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
        question: 'What does css stand for?',
        choice1: 'Concord Style Sheet',
        choice2: 'Conquer Southern Sea',
        choice3: 'Cascade Style Sheet',
        choice4: 'Crime Scene Syndicate',
        anwser: 'Cascade Style Sheet',
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
        question: 'What does css stand for?',
        choice1: 'Concord Style Sheet',
        choice2: 'Conquer Southern Sea',
        choice3: 'Cascade Style Sheet',
        choice4: 'Crime Scene Syndicate',
        anwser: 'Cascade Style Sheet',
    },
    {
        question: 'What does css stand for?',
        choice1: 'Concord Style Sheet',
        choice2: 'Conquer Southern Sea',
        choice3: 'Cascade Style Sheet',
        choice4: 'Crime Scene Syndicate',
        anwser: 'Cascade Style Sheet',
    },
]