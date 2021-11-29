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
            question: "What HTML tag do we use to indicate a script in  HTML?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "<script></script>",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "What JS syntax can we use to identify this HTML element?",
            code: "<div id = “divElement”> Here is a Div element </div>",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "document.getElementById(“divElement”)",
            correct: "D"
        },
        {
            question: "Where should we insert the JavaScript in an HTML file?",
            code: "",
            choiceA: "<body>",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "How would we change the color of the font for “textEl”?",
            code: "let textEl =  document.getElementById(“textBox”);",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "textEl.style.color",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "Which of these variables contains an object?",
            code: "let A = [1,2,3,4];\nlet B = runProgram();\nlet C = {food: grapes};\nlet D = Math.floor(Math.random(1)*10);",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "C",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "What does X equal?",
            code: "Let X = example(5,10);\nfunction example(a,b){\nlet Z = a+b;\nreturn Z;\n}",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "15",
            correct: "D"
        },
        {
            question: "What can we use to repeat a piece of code for a known number of times?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "for loop",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "What would you use to create a browser pop up message?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "alert()",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "This code throws an error. What could we do to fix it?",
            code: "myFunction();\nvar myFunction = function() {\nconsole.log('Hello!');\n};",
            choiceA: "Put the function call after the function",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "If we use localStorage to save a value, that value will be:",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "Available only on the computer it was saved on",
            correct: "D"
        },
        {
            question: "What syntax is used to run a function on a mouse click?",
            code: "",
            choiceA: "EventTarget.addEventListener(“click”,function())",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "Which selection is the correct way to write an if statement in JS?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "if (x==5)",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "How do you write an if statement if something is NOT equal to 10?",
            code: "",
            choiceA: "if (x !=10)",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "How do you start a for loop?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "for (i =0; i < number; i++)",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "How do you make a single line comment in JS code?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "//comment",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "What will the following function return?",
            code: "let result = test(“string”);\nfunction test(input){\nif (input = NaN) {\nreturn 10;\n}\nelse{\nreturn input;\n}}",
            choiceA: "10",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "A"
        },
        {
            question: "What will the value of newText be?",
            code: "Let text = “Hello! My name is Greg.”;\nLet newText = text.replace(“greg”,”sam”);",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "Hello! My name is Greg.",
            choiceD: "FourthChoice",
            correct: "C"
        },
        {
            question: "What syntax do we use to make text all lower case?",
            code: "",
            choiceA: "FirstChoice",
            choiceB: "SecondChoice",
            choiceC: "ThirdChoice",
            choiceD: "toLowerCase",
            correct: "D"
        },
        {
            question: "What would you do to make selectedLetter = “B”?",
            code: "let array=[“A”,”B”,”C”,”D”];\nlet selectedLetter = ???",
            choiceA: "FirstChoice",
            choiceB: "array[1]",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
        {
            question: "How would you get Johns age?",
            code: "Array = [{name: “John”, age: 34}, {name: “Bill”, age: 66];\njohnsAge = ???;",
            choiceA: "FirstChoice",
            choiceB: "array[0].age",
            choiceC: "ThirdChoice",
            choiceD: "FourthChoice",
            correct: "B"
        },
    ];

    array = randomArray(array);
    startQuiz(array);
}


///////////////Here is the main game logic////////////
function startQuiz(questionArray) {

    //hide startCard element
    document.getElementById("startCard").style.display = "none";
    document.getElementById("finishCard").style.display = "none";
    document.getElementById("quizCard").style.display = "block";
    let numCorrect = 0; //the number of correct answers
    let time = 240;
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

    //randomize choice order
    let randomChoice = randomArray(array=[1,2,3,4]);
    choiceA.style.order = randomChoice[0];
    choiceB.style.order = randomChoice[1];
    choiceC.style.order = randomChoice[2];
    choiceD.style.order = randomChoice[3];

    //start timer
    let timer = setInterval(function () {
        time--;
        timerDisplay.textContent = "Time: " + time;

        if (time <= 0) {
            clearInterval(timer);
            drawFinishCard(false);
        }

    }, 1000);
    timerDisplay.style.animation = "colorPulseRed .5s linear .5s infinite alternate"

    runQuestions(questionArray, 0);
    ///////////////Displays the questions and choices and waits for input
    function runQuestions(array, questionNum) {
        //if we have passed the last question, go to finishCard and return from function
        if (questionNum > array.length - 1) {
            timerDisplay.style.animation = "none";
            clearInterval(timer);
            drawFinishCard(true, time, numCorrect);
            return;
        }

        ///Hide code element if no code
        if (array[questionNum].code === "") {
            codeEl.style.display = "none";
        }
        else{
            codeEl.style.display = "flex";
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

    //here is where the final scroe will be displayed
    const printScore = document.createElement("div");

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
            "\nHighScore: " + scoreToBeat;
            
            
            printScore.textContent = "Final Score: " + finalScore ;
            printScore.id = "finalScoreDisplay";
            finishEl.appendChild(printScore);
    }
    else {
        finishEl.textContent = "Sorry, but your time ran out!"
        return;
    }

    if (checkScore) {
        printScore.style.animation = "colorPulseGreen .5s linear 0s infinite alternate";
        askForName(finalScore, element);
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
    let inputFormEl = document.createElement("form");
    inputFormEl.className = "userInputForm";
    inputFormEl.textContent = "You Have The New Highscore!";
    //  inputFormEl.style.animation = "borderPulseGreen .5s linear 0s infinite alternate";
    element.appendChild(inputFormEl);

    const inputNameLable = document.createElement("lable");
    inputNameLable.className="userInput";
    inputNameLable.setAttribute("for", "inputArea");
    inputNameLable.textContent = "Please Enter Your Name Here:";
    inputFormEl.appendChild(inputNameLable);

    
    const inputEl = document.createElement("input");
    inputEl.setAttribute("type", "text");
    inputEl.className = "userInput";
    inputEl.id = "inputFeild";
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


function randomArray(array){
    let counter = array.length;
    let current = counter-1;
//this while loop will take the last array item and swap it with a random array item, then it moves on to the second to last item, repeats, and so on until it reaches the start of the array
    while (counter>0){
        //this can only equal 0 to counter-1 (array.length-1) because of Math.floor so this number can represent the array index number rather than the length 
        let randomNum= Math.floor(Math.random(1)*counter); 
        //save the values of the index
        let a = array[current];
        let b = array[randomNum];
        //swap the values
        array[current] = b;
        array[randomNum]=a;
        counter--;
        current--;
    }
    return array;
}



