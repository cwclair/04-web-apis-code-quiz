// PSEUDO CODE!!!!

// THE FIRST PAGE SHOULD HAVE A TITLE AND A BRIEF INTRODUCTION ABOUT TAKING A CODING RELATED QUIZ. THERE SHOULD BE A START BUTTON TO INITIATE THE QUIZ. 

// THERE SHOULD BE FIVE QUESTIONS, EACH WITH AN ORDERED LIST OF ANSWERS FROM WHICH TO CHOOSE. WHEN YOU ANSWER A QUESTION, YOU SHOULD BE NOTIFIED WHETHER YOUR ANSWER WAS CORRECT OR WRONG. YOU SHOULD BE ABLE TO SEE A TIMER COUNTING DOWN.

// IF YOU GET A QUESTION WRONG, SOME TIME SHOULD BE SUBTRACTED FROM THE CLOCK.

// AFTER FIVE QUESTIONS, OR IF THE TIMER HITS ZERO, YOU SHOULD SEE AN "ALL DONE!" SORT OF MESSAGE, AND BELOW THAT SHOULD BE A DISPLAY OF YOUR SCORE, WHICH IS A POINT FOR EVERY SECOND REMAINING ON THE CLOCK, AND A FIELD WHERE YOU CAN ENTER YOUR INITIALS FOR THE HIGH SCORE LIST, ALONG WITH A SUBMIT BUTTON.

// AFTER YOU HIT SUBMIT, YOU SHOULD BE TAKEN TO A SCOREBOARD THAT DISPLAYS HIGH SCORES WITH INITIALS, AND A BUTTON TO START THE QUIZ AGAIN

// I WILL NEED EVENT LISTENERS FOR CLICKS ON THE ANSWERS. 

// DO I CREATE ARRAYS FOR THE QUESTIONS, AND ARRAYS FOR ANSWERS 1, 2, 3, AND 4? OR ARRAYS FOR THE OPTIONS FOR Q1, OPTIONS FOR Q2, AND SO ON?
const theQuestions = ["In an HTML document, where should you include reference to the JavaScript?", "How do you create a function in JavaScript?", "Which operator is used to assign a value to a variable?", "How would you call a function named myFunction?", "How would one write an if statement to execute code if the variable i is not equal to 5?"];
console.log(theQuestions);
const answersOne = ["The body section", "function = myFunction()", "Equal sign (=)", "call myFunction()", "if (i <> 5)"];
const answersTwo = ["The head section", "function:myFunction()", "Asterisk (*)", "call function myFunction()", "if i <> 5"];
const answersThree = ["Both the head section and the body section", "function myFunction()", "Hyphen (-)", "myFunction()", "if i =! 5 then"];
const answersFour = ["Neither the head nor the body section", "Any of these is fine", "The letter x", "Any of these will call that function", "if (i != 5)"];
const correctAnswers = ["The body section", "function myFunction()", "Equal sign (=)", "myFunction()", "if (i != 5)"];

var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#countdown");
var questionsAnswered = 0;

document.querySelector("#intro").innerHTML = "We're going to ask you five questions about coding basics. A timer will count down while you do this. If you answer a question incorrectly, 15 seconds will be subtracted from the remaining time. Your final score will equal the number of seconds remaining at the end of the quiz.";
quizContainer.style.display = "none";
enterInits.style.display = "none";
savedScores.style.display = "none";


startButton.addEventListener("click", function(event) {
    event.preventDefault();
    quizContainer.style.display = "block";
    document.querySelector("#intro").innerHTML = "";
    startButton.style.display = "none";
    countdown();
    document.querySelector("#questionHeader").innerHTML = theQuestions[0];
    document.querySelector("#optionOne").innerHTML = answersOne[0];
    document.querySelector("#optionTwo").innerHTML = answersTwo[0];
    document.querySelector("#optionThree").innerHTML = answersThree[0];
    document.querySelector("#optionFour").innerHTML = answersFour[0];
})

function countdown() {
    var timeLeft = 75;
    grandTotal = timeLeft;
    var intervalId = setInterval(function() {
        timerEl.textContent = "Seconds remaining: " + timeLeft;
        console.log(timerEl.textContent);
        if (timeLeft <= 15) {
            timerEl.setAttribute("style", "color: red;")
        }
        if (timeLeft <= 0) {
            grandTotal = 0;
            clearInterval(intervalId);
            finalScore();
        }
        timeLeft--;
    }, 1000)

    const answerOptions = document.querySelectorAll("li");
        answerOptions.forEach(li => {
            li.addEventListener("click", function(event){
                event.preventDefault();
                var optionGuessed = event.target.innerHTML;
                if (correctAnswers.includes(optionGuessed)) {
                    praise.setAttribute("style", "color:green");
                    document.querySelector("#praise").textContent = "Last answer: Correct!"
                } else {
                    praise.setAttribute("style", "color: red");
                    document.querySelector("#praise").textContent = "Last answer: WRONG! 15 POINTS LOST.";
                    timeLeft -= 15;
                }
            questionsAnswered++;
            if (questionsAnswered === 5) {  
                grandTotal = timeLeft;
                finalScore();
                clearInterval(intervalId);
                console.log("The game should end now.");
                console.log(grandTotal);
            } else {
                nextQuestion()
            }
        })
    });        
}




function nextQuestion() {
        document.querySelector("#questionHeader").innerHTML = theQuestions[questionsAnswered];
        document.querySelector("#optionOne").innerHTML = answersOne[questionsAnswered];
        document.querySelector("#optionTwo").innerHTML = answersTwo[questionsAnswered];
        document.querySelector("#optionThree").innerHTML = answersThree[questionsAnswered];
        document.querySelector("#optionFour").innerHTML = answersFour[questionsAnswered];
           
    }


function finalScore() {
    quizContainer.style.display = "none";
    praise.style.display = "none";
    timerEl.style.display = "none";

    document.querySelector("#intro").innerHTML = "All done!<br><br>Your final score is " + grandTotal;
    enterInits.style.display = "block";


}

function showRecordedScore () {
    var initials = localStorage.getItem("initials");
    var endScore = localStorage.getItem("endScore");
    savedScores.style.display = "block";
    document.querySelector("#intro").innerHTML = "";
    enterInits.style.display = "none";
    document.querySelector("#yourSavedScore").textContent = initials + ": " + endScore;
    var playAgainButton = document.createElement("button");
    var playAgainButtonText = document.createTextNode("Play again");
    playAgainButton.appendChild(playAgainButtonText);
    document.body.appendChild(playAgainButton);
    playAgainButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("reload");
        location.reload();
    })
}


var initialsInput = document.querySelector("#initials");
var initialsButton = document.querySelector("#submitInitials");

initialsButton.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = initialsInput.value;
    
    localStorage.setItem("initials", initials);
    localStorage.setItem("endScore", grandTotal);
    showRecordedScore();
})

