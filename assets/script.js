var timerE1 = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var startQuizBtn = document.querySelector(".startQuiz");
var questionContainerElement = document.getElementById("container");
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

var secondsLeft = 200;



function startQuiz(){

    timer();

    var startDivEl = document.getElementById("startDiv");
         startDivEl.style.display="none";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide");

    setNextQuestion()
}

function timer(event){
    
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        
      secondsLeft--;
      timerE1.textContent = secondsLeft + " Seconds left";
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to end quiz
        quizEnd();
      }
  
    }, 1000);
  }
  
  
  
function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
questionElement.innerText = question.question
question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}


function quizEnd(){

}

function highScore(){

}

function finalScore(){

}

startQuizBtn.onclick = startQuiz;



var questions =[
{
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below?',
    answers: [
        {Text: '<js>', correct: false},
        {Text: '<script>', correct: true},
        {Text: '<scripting>', correct: false},
        {Text: '<javascript>', correct: false}
    ]
}
]

var aquestions = [
    {
       question: "Inside which HTML element do we put the JavaScript?",
        choices: [
            "<js>",
            "<scripting>",
            "<script>",
            "<javascript>",],
        answer:"<script>"
    },
    {
        title: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        choices: [
            "document.getElement('p').innerHTML = 'Hello World!';",
            "document.getElementByName('p').innerHTML = 'Hello World!';",
            "document.getElementById('demo').innerHTML = 'Hello World!';",
            "#demo.innerHTML = 'Hello World!';"],
        answer:"document.getElementById('demo').innerHTML = 'Hello World!';"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: [
            "The <body> section",
            "The <head> section",
            "Both the <head> section and the <body> section are correct"],
        answer:"Both the <head> section and the <body> section are correct"
    },
    {
        title: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: [
            "<script href='xxx.js'>",
            "<script name='xxx.js'>",
            "<script src='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: [
            "alertBox('Hello World');",
            "msgBox('Hello World');",
            "alert('Hello World');",
            "msg('Hello World');"],
        answer:"alert('Hello World');"
    },
    {
        title: "How do you create a function in JavaScript?",
        choices: [
            "function:myFunction()",
            "function myFunction()",
            "function = myFunction()"],
        answer:"function myFunction()"
    },
    {
        title: "How do you call a function named 'myFunction'?",
        choices: [
            "call function myFunction()",
            "call myFunction()",
            "myFunction()"],
        answer:"myFunction()"
    },
    {
        title: "How to write an IF statement in JavaScript?",
        choices: [
            "if i = 5",
            "if i = 5 then",
            "if i == 5 then",
            "if (i == 5)"],
        answer:"if (i == 5)"
    },
    {
        title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: [
            "if i <> 5",
            "if i =! 5 then",
            "if (i != 5)",
            "if (i <> 5)"],
        answer:"if (i != 5)"
    },
    {
        title: "How does a WHILE loop start?",
        choices: [
            "while i = 1 to 10",
            "while (i <= 10)",
            "while (i <= 10; i++)"],
        answer:"while (i <= 10)"
    },
    ];
