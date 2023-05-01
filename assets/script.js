//The completed application should meet the following criteria:

//As a user, I want to start the game by clicking on a button. 
//  Create button in HTML and create an EventListener in Script

//As a user, I want to try and guess the correct answer by pressing a button.
//  Create an Array for all of the answers


var questions = [
    "Which serial killer stored a body in their bathtub and proceeded to shower over them for a month?",
    "Which serial killer helped in the investigation to catch the Green River Killer?",
    "Which serial killer was known as The Killer Clown?",
    "Which serial killer was a professional wrestler and was known as The Old Lady Killer?",
    "Which serial killer has confessed to killing as many as 71 women even though only 49 are confirmed?"];
var options = [
    [2, 'John Wayne Gacy','Jeffrey Dahmer','Ted Bundy','Gary Ridgway'],
    [4, 'Dennis Rader','Ed Gein','Aileen Wuornos','Ted Bundy'],
    [1, 'John Wayne Gacy','H.H. Holmes','Edmund Kemper','Rodney Alcala'],
    [3, 'David Berkowitz','Aileen Wuornos','Juan Barraza','Ted Bundy'],
    [4, 'Jeffrey Dahmer','Ted Bundy','John Wayne Gacy','Gary Ridgway']
];

var highScores = []
// create variables to reference DOM elements
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#start");
var usersInfo = document.querySelector("#info");
var optionsField = document.querySelector("#options");
var replayButton = document.querySelector("#replay");
var assessment = document.querySelector("#assessment");
var scoresLink = document.querySelector("#scores-link");
var playScreen = document.querySelector(".play");
    
// Global variables 
var timeLeft
var gameTimer
var place = 0 
var score = 0
var outcome
var pause = false;

//As a user, I want to lose the game when the timer runs out before I have guessed all the answers.
function startTimer() {
    timeLeft = 50
    timer.textContent = timeLeft + "seconds left";
    gameTimer = setInterval(function(){
        timeLeft--
        timer.textContent = timeLeft + "seconds left";
        if(timeLeft<=0) {
            timesUp();
        }
    },1000)
}

//As a user, I want to see my total wins and losses on the screen at the end of the quiz. 
function timesUp() {
    clearInterval(gameTimer)
    timer.textContent = "Out of time!";
    outcome = "lose";
    endGame();
}

function retrieveScores() {
    var storeScores = JSON.parse(localStorage.getItem("scores"));
    if (storeScores !== null) {
        highScores = storeScores;
    }
}

function renderScores() {
    var scoreList = document.querySelector(".play table");

    highScores.sort((a,b)=> b[1] - a[1])
    scoreList.innerHTML=""

    usersInfo.setAttribute("style","display:none")
    startButton.removeAttribute("style");
    while(document.querySelector(".play .hide")){
        var hide = document.querySelector(".hide")
        playScreen.removeChild(hide)
    }

    for (i=0;i<highScores.length;i++) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        tr.setAttribute("class","hide")
        td1.textContent=highScores[i][0]
        td1.setAttribute("class","hide")
        td2.textContent=highScores[i][1]
        td2.setAttribute("class","hide")
        tr.appendChild(td1)
        tr.appendChild(td2)
        scoreList.appendChild(tr)
    }
}

function storeScores() {
    highScores.sort((a,b) => b[1] - a[1])
    localStorage.setItem("scores",JSON.stringify(highScores))
}

function renderQs() {
    optionsField.innerHTML=""
    usersInfo.removeAttribute("style");
    startButton.setAttribute("style","display:none");

    if (place >= questions.length) {
        outcome = "win";
        endGame();
    } else {
        usersInfo.textContent = questions[place]
        for (i=1;i<options[place].length;i++) {
            var li = document.createElement("li")
            li.textContent=options[place][i];
            li.dataset.index=i;
            optionsField.appendChild(li)
        }

        pause = false;
    }
}

function endGame() {
    clearInterval(gameTimer)
    place = 0;
    if (outcome === "lose") {
        startButton.textContent="Try Again!";
        startButton.removeAttribute("style");
        optionsField.innerHTML="";
        usersInfo.textContent = "You Lost!"
    }else{
        usersInfo.textContent="You Won!"
        timer.textContent = "Thank you for playing!"
        score = timeLeft
        
        var scoreInfo = document.createElement("h3")
        scoreInfo.setAttribute("class", "hide")
        scoreInfo.textContent = "Your score is: " + score;
        playScreen.appendChild(scoreInfo);

        var instruct = document.createElement("p")
        instruct.setAttribute("class","hide")
        instruct.textContent = "Enter your initials here to save your score for later!"
        playScreen.appendChild(instruct);

        var scoreForm = document.createElement("form");
        scoreForm.setAttribute("class","hide")

        var textbox = document.createElement("input");
        textbox.setAttribute("type","text")
        textbox.setAttribute("placeholder","Enter your initials!")
        textbox.setAttribute("minlength","1")
        textbox.setAttribute("maxlength", "4")

        var submit = document.createElement("input");
        submit.setAttribute("type","submit")
        submit.setAttribute("value","Submit")
        submit.setAttribute("class","submit")
        scoreForm.appendChild(textbox);
        scoreForm.appendChild(submit);
        playScreen.appendChild(scoreForm);
    }
}

document.addEventListener("submit",function(event){
    event.preventDefault();
    event.target.matches("form")

    retrieveScores();

    var initialsInput = document.querySelector("form input");

    var initials = initialsInput.value.trim();
    initials = initials.toUpperCase();
    if (initials === "") {
        return;
    }

    var newScore = []
    newScore.push(initials);
    newScore.push(score);
    highScores.push(newScore)

    storeScores();
    renderScores();

    startButton.textContent= "Play Again?"
})

optionsField.addEventListener("click",function(event){
    if (pause) {
        return;
    }
    var answer = event.target;
    var answersIndex = answer.getAttribute("data-index");
    var correct = options[place][0]

    if (answer.matches("li")) {
        if(answersIndex==correct) {
        answer.setAttribute("class","correct");
    }else{
        answer.setAttribute("class","wrong");
        assessment.textContent="The Correct Answer is: " + options[place][correct]
        timeLeft -= 10
        if(timeLeft<=0) {
            timesUp();
            return;
        }else{
            timer.textContent = timeLeft + " seconds left";
        }
    } 

        pause = true;
        setTimeout(function(){
            assessment.textContent = ""
            place++;
            renderQs();
        },1000);
    }
})

scoresLink.addEventListener("click",function(){
    clearInterval(gameTimer);
    place=0
    timer.textContent = "Press the button to start playing!";
    assessment.textContent="";
    optionsField.innerHTML="";
    retrieveScores();
    renderScores();
})

startButton.addEventListener("click",function(){
    for (i=0;i<highScores.length;i++) {
        var hide = document.querySelector(".hide")
        var table = document.querySelector(".play table")
        table.removeChild(hide)
    }
    assessment.textContent=""
    startTimer();
    renderQs();
})
//### Specifications

//When a user presses a letter key, the user's guess should be captured as a key event.
//  Register key and display users guess as key event

//When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 
//  Turn correct guesses into key events that change the unfilled "_" to the corresponding letter

//When a user wins or loses a game, a message should appear and the timer should stop. 

//When a user clicks the start button, the timer should reset. 

//When a user refreshes or returns to the brower page, the win and loss counts should persist.