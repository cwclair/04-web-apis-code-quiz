// Arrays for the five quiz questions and sets of answers for choices 1, 2, 3, and 4

const theQuestions = ["In an HTML document, where should you include reference to the JavaScript?", "How do you create a function in JavaScript?", "Which operator is used to assign a value to a variable?", "How would you call a function named myFunction?", "How would one write an if statement to execute code if the variable i is not equal to 5?"];
const answersOne = ["The body section", "function = myFunction()", "Equal sign (=)", "call myFunction()", "if (i <> 5)"];
const answersTwo = ["The head section", "function:myFunction()", "Asterisk (*)", "call function myFunction()", "if i <> 5"];
const answersThree = ["Both the head section and the body section", "function myFunction()", "Hyphen (-)", "myFunction()", "if i =! 5 then"];
const answersFour = ["Neither the head nor the body section", "Any of these is fine", "The letter x", "Any of these will call that function", "if (i != 5)"];
const correctAnswers = ["The body section", "function myFunction()", "Equal sign (=)", "myFunction()", "if (i != 5)"];

// Variables for the start button, the timer area, and a starting point for the variable that keeps track of how many questions have been answered. The latter is used in a for loop to run through the questions.

var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector("#countdown");
var questionsAnswered = 0;

// This displays the intro text and turns off the display for other divs.

document.querySelector("#intro").innerHTML = "We're going to ask you five questions about coding basics. A timer will count down while you do this. If you answer a question incorrectly, 15 seconds will be subtracted from the remaining time. Your final score will equal the number of seconds remaining at the end of the quiz.";
quizContainer.style.display = "none";
enterInits.style.display = "none";
savedScores.style.display = "none";

// Listener event for the user clicking on the start button

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

// Function for the timer

function countdown() {
    var timeLeft = 75;
    grandTotal = timeLeft;
    var intervalId = setInterval(function() {
        timerEl.textContent = "Seconds remaining: " + timeLeft;
        // Changes the timer text color to red once the time nears the end 
        if (timeLeft <= 15) {
            timerEl.setAttribute("style", "color: red;")
        }
        // End the quiz if timer hits zero 
        if (timeLeft <= 0) {
            grandTotal = 0;
            clearInterval(intervalId);
            finalScore();
        }
        timeLeft--;
    }, 1000)

    // Adds listener event to all list items in the quiz; provides correct/incorrect messages in different colors after the user makes a choice 
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
                // Adds one to the questions answered variable 
                questionsAnswered++;
                // Ends the quiz if the user has answered all five questions, otherwise proceeds to next question 
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



// Loads the question and answer options for the next question 
function nextQuestion() {
        document.querySelector("#questionHeader").innerHTML = theQuestions[questionsAnswered];
        document.querySelector("#optionOne").innerHTML = answersOne[questionsAnswered];
        document.querySelector("#optionTwo").innerHTML = answersTwo[questionsAnswered];
        document.querySelector("#optionThree").innerHTML = answersThree[questionsAnswered];
        document.querySelector("#optionFour").innerHTML = answersFour[questionsAnswered];
           
    }

// Turns off display for some areas, displays the user's score 
function finalScore() {
    quizContainer.style.display = "none";
    praise.style.display = "none";
    timerEl.style.display = "none";

    document.querySelector("#intro").innerHTML = "All done!<br><br>Your final score is " + grandTotal;
    enterInits.style.display = "block";


}

// Gets values stored in local storage to be used in displaying score, clears out intro text area, creates play again button, adds listener event for the play again button
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
        location.reload();
    })
}

// Sets local storage values for initials and score 
var initialsInput = document.querySelector("#initials");
var initialsButton = document.querySelector("#submitInitials");

initialsButton.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = initialsInput.value;
    
    localStorage.setItem("initials", initials);
    localStorage.setItem("endScore", grandTotal);
    showRecordedScore();
})

