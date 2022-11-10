var timerE1 = document.querySelector(".timer");
var mainEl = document.getElementById("main");
var startQuizBtn = document.querySelector(".start");






var secondsLeft = 200;

const questions = [
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    {
        title: "",
        choices: [""],
        answer:""
    },
    ];


function startQuiz(){

    timer();

}

function timer(){
    
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
  
  
  
function getQuestion(){

}

function answerPicked(){

}

function quizEnd(){

}

function highScore(){

}

function finalScore(){

}

startQuizBtn.onclick = startQuiz;