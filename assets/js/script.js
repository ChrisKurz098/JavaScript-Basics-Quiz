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

    drawQuestion(questionArray);
}
///////////////Displays the questions and choices and waits for input
function drawQuestion(array){
 let   questionNumber =0;
const quizCard = document.getElementById("quizCard");
const questionEl = document.getElementById("questionText");
const codeEl = document.getElementById("codeText");
const choiceA = document.getElementById("answerA");
const choiceB = document.getElementById("answerB");
const choiceC = document.getElementById("answerC");
const choiceD = document.getElementById("answerD");

questionEl.textContent = array[questionNumber].question;
codeEl.textContent = array[questionNumber].code;
choiceA.textContent = array[questionNumber].choiceA;
choiceB.textContent = array[questionNumber].choiceB;
choiceC.textContent = array[questionNumber].choiceC;
choiceD.textContent = array[questionNumber].choiceD;
function checkAnswer(event){
    const element = event.taget;
    console.log(element);
    if (element.dataset.choiceNumber === array[questionNumber].correct)
    {alert("Correct")} else {alert("Wrong")}
    
}
}

function drawFinishCard(completed) {
    document.getElementById("startCard").style.display="none";
    document.getElementById("quizCard").style.display="none";
    document.getElementById("finishCard").style.display="block";
}


document.getElementById("startButton").addEventListener("click",initQuestions);

//check if an answer is being clicked
document.getElementById("choiceButtons").addEventListener("click",checkAnswer);

