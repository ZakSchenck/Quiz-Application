let questionElement = document.querySelector('#question');
let answerButtons = document.querySelectorAll('.grid-item');
let next = document.querySelector('#next');
let startButton = document.querySelector('#start-button');
let answerContainer = document.querySelector('.answer-grid');
let restartButton = document.querySelector('#restart');
let bar = document.querySelector('.bar');
let percent = document.querySelector('#span-percent');

let questions = [{
    question: "What does DOM stand for?",
    choice1: "Document Object Model",
    choice2: "Debrah Owns Mandolins",
    choice3: "Doctor of Oriental Medicine",
    choice4: "Disk on Module",
    answer: "q1",
    currentChoice: null
},
{
    question: "Who created Javascript?",
    choice1: "Leonardo DiCaprio",
    choice2: "Guido van Rossum",
    choice3: "Brendan Eich",
    choice4: "Bjarne Stroustrup",
    answer: "q3",
    currentChoice: null
},
{
    question: "Which framework is mainly used for the Front End?",
    choice1: "Express.js",
    choice2: "Ruby on Rails",
    choice3: "Django",
    choice4: "React",
    answer: "q4",
    currentChoice: null
}
]

let index = 0;
let score = 0;

function removeActive() {
    answerButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });
}

answerButtons.forEach(function (button) {
    button.addEventListener('click', function (el) {
        questions[index].currentChoice = el.target.id;
        removeActive();
        button.classList.add('active');
    });
});

function load() {
    questionElement.innerText = questions[index].question;
    answerButtons[0].innerText = questions[index].choice1;
    answerButtons[1].innerText = questions[index].choice2;
    answerButtons[2].innerText = questions[index].choice3;
    answerButtons[3].innerText = questions[index].choice4;
};

// Function which executes changing questions

function nextFunction() {
    if (questions[index].answer === questions[index].currentChoice) {
        score++;
    }
    index++;
    if (index < questions.length) {
        load();
    }
};

// function resetQuiz() {
//     score = 0;
//     index = 0;
//     questions.forEach(function(question) {
//         question.currentChoice = null;
//     });
//     answerContainer.classList.remove('hidden');
//     document.querySelector('.results').classList.add('hidden');
//     questionElement.classList.remove('hidden');
//     next.classList.remove('hidden');
//     restartButton.classList.add('hidden');
//     document.querySelector('.results').innerHTML = '';
//     bar.style.width = 0
//     percent.innerHTML = '0%';
// }

next.addEventListener('click', function () {
    removeActive();
    nextFunction();
    bar.style.width = (bar.clientWidth + 90) + 'px'
    if (bar.style.width === '90px') {
        percent.innerHTML = '33%';
    } else if (bar.style.width === '180px') {
        percent.innerHTML = '66%';
        next.innerText = 'Submit';
    } else if (bar.style.width === '270px') {
        percent.innerHTML = '100%';
        answerContainer.classList.add('hidden');
        document.querySelector('.results').classList.remove('hidden');
        questionElement.classList.add('hidden');
        next.classList.add('hidden');
        restartButton.classList.remove('hidden');
        document.querySelector('.results').innerHTML = `<h1>You have completed the quiz with a ${score}/3 score.</h1>`;
    };
});

load();













