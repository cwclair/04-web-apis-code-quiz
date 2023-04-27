# 04-web-apis-code-quiz
Build a timed coding quiz with multiple-choice questions.

## Your Task
This challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.

This week’s coursework will equip you with all the skills you need to succeed in this assignment.


## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Description of the Work
To populate the quiz, I created six arrays: one for the list of five questions that would be asked; one for the five answers that would appear in slot 1; one for the five answers that would appear in slot 2; one for the five answers that would appear in slot 3; one for the five answers that would appear in slot 4; and one that would contain all of the correct answers.

I set some variables up front: one for the Start Button, one for the element with an ID of "countdown", and one called "questionsAnswered," which I initially set to zero.

I created a greeting message for the user when the site is loaded, and a "Start the Quiz" button. The start button has an event listener attached to it. On click: the start button is no longer displayed; the intro text is emptied; the quiz container appears, which holds the text areas for the question and an unordered list of the four possible answers; and the timer appears and begins counting down from 75. The question and the four answer options with the index of 0 populate the quiz container.

The function "countdown" sets the timer interval. A variable "timeLeft" is set at 75. (This variable is used for scoring purposes, so I set another variable, grandTotal, equal to timeLeft.) The timerEl text content is set to display "Seconds remaining:" and the number value of timeLeft. I added an if/else statement, that if the time remaining is less than or equal to 15, the text color changes to red, because WARNING! I also set a trigger that if the timeLeft variable is less than or equal to zero (and because of the wrong-answer penalty, the timer could drop below zero, despite a 1000ms interval setting), the grandTotal variable is set to 0, the interval is cleared, and we proceed to the "final score" page.

I added a listener event to the list items, that when a click occurs on any of the list items, the answer selected would be compared to the array of correct answers. If the answer was found within the correct answers array, a "praise" message, green in color, would appear underneath the quiz container, reading "Last answer: Correct!" If the answer was not found within the correct answers array, a message, red in color, would appear under the quiz container, saying "Last answer: WRONG! 15 POINTS LOST." and the timeLeft variable would be set to a numeric value 15 lower than its current value. The questionsAnswered variable goes up by a value of 1 (courtesy of the ++). And if the questionsAnswered variable is equal to 5, the grandTotal variable is set equal to timeLeft, the interval is cleared, and the user proceeds to the final score screen. Else, the quiz is not finished, and the nextQuestion function is called. The nextQuestion function pulls the question and potential answers with the index value equivalent to the questionsAnswered variable. In other words, after the user answers the first question, questionsAnswered is set to 1, and the index [1] pulls the second question/answers set.

Once either the timer hits zero or the fifth question is answered, the game proceeds to a final score page. The quiz container, the praise message div, and the timer div are set to display: none, the intro text field is populated with an "All done" and "Your score is" with the score set to grandTotal. A new line appears asking the user to enter their initials. The score and initials are saved in local storage, and are displayed on the next screen, as a listener event has been set on the initials button. The function showRecordedScore gets the info in local storage and displays it. A play again button appears; if it is clicked, the page reloads.

## Overview of Site

