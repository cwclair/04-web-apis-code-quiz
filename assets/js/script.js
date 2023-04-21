// PSEUDO CODE!!!!

// THE FIRST PAGE SHOULD HAVE A TITLE AND A BRIEF INTRODUCTION ABOUT TAKING A CODING RELATED QUIZ. THERE SHOULD BE A START BUTTON TO INITIATE THE QUIZ. 

// THERE SHOULD BE FIVE QUESTIONS, EACH WITH AN ORDERED LIST OF ANSWERS FROM WHICH TO CHOOSE. WHEN YOU ANSWER A QUESTION, YOU SHOULD BE NOTIFIED WHETHER YOUR ANSWER WAS CORRECT OR WRONG. YOU SHOULD BE ABLE TO SEE A TIMER COUNTING DOWN.

// IF YOU GET A QUESTION WRONG, SOME TIME SHOULD BE SUBTRACTED FROM THE CLOCK.

// AFTER FIVE QUESTIONS, OR IF THE TIMER HITS ZERO, YOU SHOULD SEE AN "ALL DONE!" SORT OF MESSAGE, AND BELOW THAT SHOULD BE A DISPLAY OF YOUR SCORE, WHICH IS A POINT FOR EVERY SECOND REMAINING ON THE CLOCK, AND A FIELD WHERE YOU CAN ENTER YOUR INITIALS FOR THE HIGH SCORE LIST, ALONG WITH A SUBMIT BUTTON.

// AFTER YOU HIT SUBMIT, YOU SHOULD BE TAKEN TO A SCOREBOARD THAT DISPLAYS HIGH SCORES WITH INITIALS, AND A BUTTON TO START THE QUIZ AGAIN

// I WILL NEED EVENT LISTENERS FOR CLICKS ON THE ANSWERS. 

// DO I CREATE ARRAYS FOR THE QUESTIONS, AND ARRAYS FOR ANSWERS 1, 2, 3, AND 4? OR ARRAYS FOR THE OPTIONS FOR Q1, OPTIONS FOR Q2, AND SO ON?
var startButton = document.querySelector("button");
var timerId;



var theQuestions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
console.log(theQuestions);
var answersOne = ["Answer 1 dash 1", "Answer 1 dash 2", "Answer 1 dash 3", "Answer 1 dash 4", "Answer 1 dash 5"];
var answersTwo = ["Answer 2 dash 1", "Answer 2 dash 2", "Answer 2 dash 3", "Answer 2 dash 4", "Answer 2 dash 5"];
var answersThree = ["Answer 3 dash 1", "Answer 3 dash 2", "Answer 3 dash 3", "Answer 3 dash 4", "Answer 3 dash 5"];
var answersFour = ["Answer 4 dash 1", "Answer 4 dash 2", "Answer 4 dash 3", "Answer 4 dash 4", "Answer 4 dash 5"];
console.log(answersThree[3]);


document.querySelector("#intro").innerHTML = "We're going to ask you five questions about coding basics. A timer will count down while you do this. If you answer a question incorrectly, 10 seconds will be subtracted from the remaining time.";

function displayQuestion () {

}

startButton.addEventListener("click", function(event) {
    document.querySelector("#intro").innerHTML = "";
    startButton.style.display = "none";
    
})




function setClock() {
    timerId = setInterval(function() {
}, 75000);
}
    console.log(timerId);
setClock();