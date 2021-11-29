document.getElementById("quizCard").style.display = "none";
document.getElementById("finishCard").style.display = "none";

getHighScore();
document.getElementById("startButton").addEventListener("click", initQuestions);


function getHighScore() {
    initHighScore();
    let scoreData = loadHighScore();
    let topName = scoreData.name;
    let topScore = scoreData.score;

    document.getElementById("highScoreDisplay").textContent ="Current Leader: \n" + topName + " with a score of " + topScore;
}



function initQuestions() {
    // initiate a JSON key if one doesnt exist

    array = [
        {
            question: "Here is question 1 [B]",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "Here is question 2 [D]",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "D"
        },
        {
            question: "Here is question 3 [A]",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "Here is question 4 [C]",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "Here is question 5 [A]",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
    ];

    startQuiz(array);
}


///////////////Here is the main game logic////////////
function startQuiz(questionArray) {

    //hide startCard element
    document.getElementById("startCard").style.display = "none";
    document.getElementById("finishCard").style.display = "none";
    document.getElementById("quizCard").style.display = "block";
    let numCorrect = 0; //the number of correct answers
    let time = 60;
    let timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = "Time: " + time;

    //define  all of the quizCard elements
    const quizCard = document.getElementById("quizCard");
    const questionEl = document.getElementById("questionText");
    const codeEl = document.getElementById("codeText");
    const choiceA = document.getElementById("answerA");
    const choiceB = document.getElementById("answerB");
    const choiceC = document.getElementById("answerC");
    const choiceD = document.getElementById("answerD");
    const result = document.getElementById("result");
    const buttonsEl = document.getElementById("choiceButtons");

    //start timer
    let timer = setInterval(function () {
        time--;
        timerDisplay.textContent = "Time: " + time;

        if (time <= 0) {
            clearInterval(timer);
            drawFinishCard(false);
        }

    }, 1000);


    runQuestions(questionArray, 0);
    ///////////////Displays the questions and choices and waits for input
    function runQuestions(array, questionNum) {
        //if we have passed the last question, go to finishCard and return from function
        if (questionNum > array.length - 1) {
            clearInterval(timer);
            drawFinishCard(true, time, numCorrect);
            return;
        }

        //display all new element text for current question
        questionEl.textContent = array[questionNum].question;
        codeEl.textContent = array[questionNum].code;
        choiceA.textContent = array[questionNum].choiceA;
        choiceB.textContent = array[questionNum].choiceB;
        choiceC.textContent = array[questionNum].choiceC;
        choiceD.textContent = array[questionNum].choiceD;


        //listen for button click then run check function
        buttonsEl.addEventListener("pointerup", function checkAnswer(event) {
            //remove event listener so that when the function runs again, the event listsner isn't duplicated
            buttonsEl.removeEventListener("pointerup", checkAnswer);
            let selectedChoiceEl = event.target;

            if (selectedChoiceEl.dataset.choice === array[questionNum].correct) {
                questionNum++;
                numCorrect++;
                result.textContent = "Correct";
                runQuestions(array, questionNum);
                return;
            }
            else {
                questionNum++;
                result.textContent = "Wrong";
                runQuestions(array, questionNum);
                return;
            }

        });

    }
}

////Print  results to screan
function drawFinishCard(completed, score, numCorrect) {
    const element = document.getElementById("finishCard");
    element.style.display = "block";
    document.getElementById("startCard").style.display = "none";
    document.getElementById("quizCard").style.display = "none";




    const finishEl = document.getElementById("finishCard");
    const bonus = (numCorrect * 5);
    const finalScore = (score + bonus)
    finishEl.style.whiteSpace = "pre";

    let currentHighScore = loadHighScore();
    let scoreToBeat = currentHighScore.score;
    console.log(scoreToBeat);
    let checkScore = checkHighScore(finalScore, scoreToBeat);
    console.log(checkScore);

    if (completed) {
        finishEl.textContent = "Your Time: " + score +
            "\nCorrect Answer Bonus: " + (bonus) +
            "\nFinal Score: " + finalScore +
            "\nHighScore: " + scoreToBeat;
    }
    else {
        finishEl.textContent = "Sorry, but your time ran out!"
        return;
    }

    if (checkScore) {
        askForName(finalScore, element);
        //display high score input screen
    }
}



////////////////////////////////////////High Score Code////////////////////////////////////////

function initHighScore() {
    checkIfHighScore = localStorage.getItem("highScore")
    console.log(checkIfHighScore);
    if (!checkIfHighScore) {
        defaultScore = {
            name: "CK",
            score: 50
        };
        localStorage.setItem("highScore", JSON.stringify(defaultScore));
        console.log(checkIfHighScore);
    }
    return;
}

/////////////////LOAD SCORE FUNCTION/////////////////////////////
function loadHighScore() {
    let currentHighScore = localStorage.getItem("highScore")
    currentHighScore = JSON.parse(currentHighScore);
    return currentHighScore;
}
/////////////////SAVE SCROE FUNCTION/////////////////////////////
function saveHighScore(newHighScore) {
    localStorage.setItem("highScore", JSON.stringify(newHighScore));
    return;
}

///////////////New highscore input//////////////////////////////
function askForName(newScore, element) {
    //create new dif to handle eventListener "submit"
    const inputFormEl = document.createElement("form");
    inputFormEl.className = "userInputForm";
    inputFormEl.textContent = "You Have The New Highscore!"
    element.appendChild(inputFormEl);

    const inputNameLable = document.createElement("lable")
    inputNameLable.setAttribute("for", "inputArea");
    inputNameLable.textContent = "Please Enter Your Name Here:";
    inputFormEl.appendChild(inputNameLable);

    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text")
    inputEl.className = "inputUserName";
    inputEl.setAttribute("name", "inputArea");
    inputFormEl.appendChild(inputEl);

    const submitBtn = document.createElement("button");
    submitBtn.className = ("submitButton");
    submitBtn.textContent = "Submit"
    inputFormEl.appendChild(submitBtn);

    inputFormEl.addEventListener("submit", function getNewUser() {
        let newName = inputEl.value;
        let newHighScoreData =
        {
            name: newName,
            score: newScore
        };
        console.log(newHighScoreData);
        saveHighScore(newHighScoreData);
        return;
    });


}

function checkHighScore(finalScore, currentHighScore) {
    if (finalScore < currentHighScore) {
        return false;
    }
    else { return true; }
}

////JSON key is highScore
////highScore contains obj with name and score (highScore.name and highScore.score)





