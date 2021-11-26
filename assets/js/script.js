document.getElementById("quizCard").style.display="none";
document.getElementById("finishCard").style.display="none";

function initQuestions(){
    array=[
        {
            question: "Here is question 1",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct : "B"
        },
        {
            question: "Here is question 2",
            code: "code Example",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "D"
        },
    ]
    startQuiz(array);
}
function startQuiz(questionArray) {
    //hide startCard element
    document.getElementById("startCard").style.display="none";
    document.getElementById("finishCard").style.display="none";
    document.getElementById("quizCard").style.display="block";
    
    let time = 10;
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

    getQuestion(questionArray);
}
///////////////Displays the questions and choices and waits for input
function getQuestion(array){
    questionNumber =0;

}

function drawFinishCard(completed) {
    document.getElementById("startCard").style.display="none";
    document.getElementById("quizCard").style.display="none";
    document.getElementById("finishCard").style.display="block";
}


document.getElementById("startButton").addEventListener("click",initQuestions);

