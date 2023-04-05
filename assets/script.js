//The completed application should meet the following criteria:

//As a user, I want to start the game by clicking on a button. 
//  Create button in HTML and create an EventListener in Script

//As a user, I want to try and guess the correct answer by pressing a button.
//  Create an Array for all of the answers

// create variables to reference DOM elements
    var timeRemaining;
    var answers;
//    var startButton;
    var usersInfo;
    var saveButton;
    var highScores;
    var questions;
    
    var things = ["red", "blue", "green"]
    
    var buttonPlace = document.getElementById("test")
    
    function buttonTime (){

        var button = document.createElement("button")
        button.textContent = "WOW"

//        buttonPlace.append(button)


    }

buttonTime()

//startButton
const startButton = document.getElementById("btn");

function startQuiz (){
    console.log("Hello");
    btn.style.display = 'none';
    timeMachine()
}
startButton.addEventListener("click", startQuiz);

function timeMachine (){

setInterval(displayHello, 1000);
var count = 69
function displayHello() {
var timer = document.getElementById("counter");
timer.innerHTML = count 
count = count - 1
if (count < 0) {
    ;
}

}
}
//  quiz container
var questions = [
        {
            question1: "Which serial killer stored a body in their bathtub and proceeded to shower over them for a month?",
            answers: ['1.John Wayne Gacy','2.Jeffrey Dahmer','3.Ted Bundy','4.Gary Ridgway'],
                // 1: 'John Wayne Gacy',
                // 2: 'Jeffrey Dahmer',
                // 3: 'Ted Bundy',
                // 4: 'Gary Ridgway'
            // },
            correctAnswer: '2'
        },
        {
            question2: "Which serial killer helped in the investigation to catch the Green River Killer?",
            answers: {
                1: 'Dennis Rader',
                2: 'Ed Gein',
                3: 'Aileen Wuornos',
                4: 'Ted Bundy'
            },
            correctAnswer: '4'
        },
        {
            question3: "Which serial killer was known as The Killer Clown?",
            answers: {
                1: 'John Wayne Gacy',
                2: 'H.H. Holmes',
                3: 'Edmund Kemper',
                4: 'Rodney Alcala'
            },
            correctAnswer: '1'
        },
        {
            question4: "Which serial killer was a professional wrestler and was known as The Old Lady Killer?",
            answers: {
                1: 'David Berkowitz',
                2: 'Aileen Wuornos',
                3: 'Juan Barraza',
                4: 'Ted Bundy'
            },
            correctAnswer: '3'
        },
        {
            question5: "Which serial killer has confessed to killing as many as 71 women even though only 49 are confirmed",
            answers: {
                1: 'Jeffrey Dahmer',
                2: 'Ted Bundy',
                3: 'John Wayne Gacy',
                4: 'Gary Ridgway'
            },
            correctAnswer: '4'
        }
    ]

//  start game
//      hide start button
//     const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
//     //hide the button
//     btn.style.display = 'none';

// //As a user, I want the game to be timed.
//     console.time('timeRemaining');
 
//     for (var i = 0; i < 100000000;i++);
 
//     console.timeEnd('timeRemaining');

// });
//      show the quiz container
var quizContainer =
document.getElementById('quiz');
var resultsContainer = 
document.getElementById('results');
var submitButton = 
document.getElementById('submit');
//      display first question and answers
var myQuestions = [
{}
]

//      each question should be a card 
//      each answer should be a button
//      5 separate questions with four answers for each

//      start timer
//      display countdown on screen

//As a user, I want to win the game when I have guessed the correct answer and clicked the corresponding button.
//   var handleAnswerClicks = function (event) {
//     event.preventDefault();
//     if (question1 = 2)
//   }

//      handle answer clicks
//      if
//      answer is correct  
//          restart timer
//          display next question
//              
//      if
//      answer is WRONG
//          subtract time from timer
//          make sure time is displayed correctly on page
//          flash wrong answer message (setTimeout)
//      
//     update question variable to next question
//     display question on page
//
//      if
//      last question is reached
//      trigger quiz failure

//As a user, I want to lose the game when the timer runs out before I have guessed all the answers.
//      if
//      timer hits zero
//          trigger quiz failure

//As a user, I want to see my total wins and losses on the screen at the end of the quiz. 
//  function
//      saving high scores
//          get value of user input (name/initials)
//          validate input
//          retreive existing data from local storage
//          update win/loss data
//          save updated data back to local storage
//          redirect to start screen after save

//### Specifications

//When a user presses a letter key, the user's guess should be captured as a key event.
//  Register key and display users guess as key event

//When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 
//  Turn correct guesses into key events that change the unfilled "_" to the corresponding letter

//When a user wins or loses a game, a message should appear and the timer should stop. 

//When a user clicks the start button, the timer should reset. 

//When a user refreshes or returns to the brower page, the win and loss counts should persist.