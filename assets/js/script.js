// PSEUDO CODE!!!!

// THE FIRST PAGE SHOULD HAVE A TITLE AND A BRIEF INTRODUCTION ABOUT TAKING A CODING RELATED QUIZ. THERE SHOULD BE A START BUTTON TO INITIATE THE QUIZ. 

// THERE SHOULD BE FIVE QUESTIONS, EACH WITH AN ORDERED LIST OF ANSWERS FROM WHICH TO CHOOSE. WHEN YOU ANSWER A QUESTION, YOU SHOULD BE NOTIFIED WHETHER YOUR ANSWER WAS CORRECT OR WRONG. YOU SHOULD BE ABLE TO SEE A TIMER COUNTING DOWN.

// IF YOU GET A QUESTION WRONG, SOME TIME SHOULD BE SUBTRACTED FROM THE CLOCK.

// AFTER FIVE QUESTIONS, OR IF THE TIMER HITS ZERO, YOU SHOULD SEE AN "ALL DONE!" SORT OF MESSAGE, AND BELOW THAT SHOULD BE A DISPLAY OF YOUR SCORE, WHICH IS A POINT FOR EVERY SECOND REMAINING ON THE CLOCK, AND A FIELD WHERE YOU CAN ENTER YOUR INITIALS FOR THE HIGH SCORE LIST, ALONG WITH A SUBMIT BUTTON.

// AFTER YOU HIT SUBMIT, YOU SHOULD BE TAKEN TO A SCOREBOARD THAT DISPLAYS HIGH SCORES WITH INITIALS, AND A BUTTON TO START THE QUIZ AGAIN

// I WILL NEED EVENT LISTENERS FOR CLICKS ON THE ANSWERS. 

// DO I CREATE ARRAYS FOR THE QUESTIONS, AND ARRAYS FOR ANSWERS 1, 2, 3, AND 4? OR ARRAYS FOR THE OPTIONS FOR Q1, OPTIONS FOR Q2, AND SO ON?
var startButton = document.querySelector("button");
var optionOne = document.querySelector("#optionOne");
var optionTwo = document.querySelector("#optionTwo");
var optionThree = document.querySelector("#optionThree");
var optionFour = document.querySelector("#optionFour");
var canGuess = false;

var theQuestions = ["In an HTML document, where should you include reference to the JavaScript?", "Question 2", "Question 3", "Question 4", "Question 5"];
console.log(theQuestions);
var answersOne = ["The body section", "Answer 1 dash 2", "Answer 1 dash 3", "Answer 1 dash 4", "Answer 1 dash 5"];
var answersTwo = ["The head section", "Answer 2 dash 2", "Answer 2 dash 3", "Answer 2 dash 4", "Answer 2 dash 5"];
var answersThree = ["Both the head section and the body section", "Answer 3 dash 2", "Answer 3 dash 3", "Answer 3 dash 4", "Answer 3 dash 5"];
var answersFour = ["Neither the head nor the body section", "Answer 4 dash 2", "Answer 4 dash 3", "Answer 4 dash 4", "Answer 4 dash 5"];
var correctAnswers = ["The body section"];

readyPlayerOne();

function readyPlayerOne () {
    document.querySelector("#intro").innerHTML = "We're going to ask you five questions about coding basics. A timer will count down while you do this. If you answer a question incorrectly, 10 seconds will be subtracted from the remaining time.";
    optionOne.style.display = "none";
    optionTwo.style.display = "none";
    optionThree.style.display = "none";
    optionFour.style.display = "none";
}

function displayQuestion () {

}

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    canGuess = true;
    optionOne.style.display = "block";
    optionTwo.style.display = "block";
    optionThree.style.display = "block";
    optionFour.style.display = "block";
    document.querySelector("#intro").innerHTML = "";
    startButton.style.display = "none";
    document.querySelector("#questionHeader").innerHTML = theQuestions[0];
    document.querySelector("#optionOne").innerHTML = answersOne[0];
    document.querySelector("#optionTwo").innerHTML = answersTwo[0];
    document.querySelector("#optionThree").innerHTML = answersThree[0];
    document.querySelector("#optionFour").innerHTML = answersFour[0];
})

optionOne.addEventListener("click", function(event) {
    event.preventDefault();
    if (!canGuess) {
        return;
    }
    var optionGuessed = event.target.innerHTML;
    console.log(optionGuessed);
    for (var i = 0; i < correctAnswers.length; i++) {
        if (optionGuessed == correctAnswers[i]) {
            document.querySelector("#praise").textContent = "Last answer: Correctomundo!"
            scorn.style.display = "none"
        } else {
            document.querySelector("#scorn").textContent = "Last answer: WRONG! 15 POINTS LOST."
            praise.style.display = "none"
        
        }
        canGuess = false;
    }
})

optionTwo.addEventListener("click", function(event) {
    event.preventDefault();
    if (!canGuess) {
        return;
    }
    var optionGuessed = event.target.innerHTML;
    console.log(optionGuessed);
    for (var i = 0; i < correctAnswers.length; i++) {
        if (optionGuessed == correctAnswers[i]) {
            document.querySelector("#praise").textContent = "Last answer: Correctomundo!"
            scorn.style.display = "none"
        } else {
            document.querySelector("#scorn").textContent = "Last answer: WRONG! 15 POINTS LOST."
            praise.style.display = "none"
        }
        canGuess = false;
    }
})

// function checkAnswers() {

// } 