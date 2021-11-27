document.getElementById("quizCard").style.display = "none";
document.getElementById("finishCard").style.display = "none";

function initQuestions() {
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

    let timer = setInterval(function () {
        time--;
        timerDisplay.textContent = "Time: " + time;

        if (time <= 0) {
            clearInterval(timer);
            drawFinishCard(false);
        }

    }, 1000);

    drawQuestion(questionArray, 0);

    ///////////////Displays the questions and choices and waits for input
    function drawQuestion(array, questionNum) {
        if (questionNum >= array.length) {
            clearInterval(timer);
            drawFinishCard(true, time,numCorrect);
            return;
        }
        const quizCard = document.getElementById("quizCard");
        const questionEl = document.getElementById("questionText");
        const codeEl = document.getElementById("codeText");
        const choiceA = document.getElementById("answerA");
        const choiceB = document.getElementById("answerB");
        const choiceC = document.getElementById("answerC");
        const choiceD = document.getElementById("answerD");
        const result = document.getElementById("result");
        const buttonsEl = document.getElementById("choiceButtons");

        //display all new element text
        questionEl.textContent = array[questionNum].question;
        codeEl.textContent = array[questionNum].code;
        choiceA.textContent = array[questionNum].choiceA;
        choiceB.textContent = array[questionNum].choiceB;
        choiceC.textContent = array[questionNum].choiceC;
        choiceD.textContent = array[questionNum].choiceD;

        console.log("number of questions: " + array.length);
        console.log("question Number: " + questionNum);
        //listen for button click then run check function
        buttonsEl.addEventListener("pointerup", function (event) {
            let selectedChoiceEl = event.target;

            if (selectedChoiceEl.dataset.choice === array[questionNum].correct) {
                questionNum++;
                numCorrect++;
                result.textContent = "Correct";
                drawQuestion(array, questionNum);
                return;
            }
            else {
                questionNum++;
                result.textContent = "Wrong";
                drawQuestion(array, questionNum);
                return;
            }

        });

    }
}

////Print  results to screan
function drawFinishCard(completed, score,numCorrect) {

    document.getElementById("startCard").style.display = "none";
    document.getElementById("quizCard").style.display = "none";
    document.getElementById("finishCard").style.display = "block";

    const finishEl = document.getElementById("finishCard");
    const bonus = (numCorrect*5);
    const finalScore = (score+bonus)
    finishEl.style.whiteSpace = "pre";
    if (completed) {
        finishEl.textContent = "Your Time: " + score + 
        "\nCorrect Answer Bonus: " + (bonus) +
        "\nFinal Score: " + finalScore;

        //check for highscore
        //if highscore ask for initials
        //save high score
    }
    else {
        finishEl.textContent = "Sorry, but your time ran out!"
    }
}


document.getElementById("startButton").addEventListener("click", initQuestions);

//check if an answer is being clicked


