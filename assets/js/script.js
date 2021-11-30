document.getElementById("quizCard").style.display = "none";
document.getElementById("finishCard").style.display = "none";

getHighScore();
document.getElementById("startButton").addEventListener("click", initQuestions);


function getHighScore() {
    initHighScore();
    let scoreData = loadHighScore();
    let topName = scoreData[0].name;
    let topScore = scoreData[0].score;

    document.getElementById("highScoreDisplay").textContent = "Current Leader: \n" + topName + " with a score of " + topScore;
    document.getElementById("scoreDisplay1").textContent = scoreData[0].name + ':' + scoreData[0].score;
    document.getElementById("scoreDisplay2").textContent = scoreData[1].name + ':' + scoreData[1].score;
    document.getElementById("scoreDisplay3").textContent = scoreData[2].name + ':' + scoreData[2].score;
    document.getElementById("scoreDisplay4").textContent = scoreData[3].name + ':' + scoreData[3].score;
    document.getElementById("scoreDisplay5").textContent = scoreData[4].name + ':' + scoreData[4].score;
}



function initQuestions() {
    // initiate a JSON key if one doesnt exist

    array = [
        {
            question: "What tag do we use to indicate a script in HTML?",
            code: "",
            choiceA: "script = script.js",
            choiceB: "<script></script>",
            choiceC: "<code></code>",
            choiceD: "href = './script.js'",
            correct: "B"
        },
        {
            question: "What syntax can we use to identify this HTML element in JS?",
            code: "<div id = “divElement”> Here is a Div element </div>",
            choiceA: "html.divElement",
            choiceB: "document.getElementsByClass('divElement')",
            choiceC: ".divElement",
            choiceD: "document.getElementById('divElement')",
            correct: "D"
        },
        {
            question: "Where should we insert JavaScript in an HTML file?",
            code: "",
            choiceA: "<body>",
            choiceB: "<head>",
            choiceC: "<a>",
            choiceD: "<code>",
            correct: "A"
        },
        {
            question: "How would we change the color of the font for 'textEl'?",
            code: "let textEl =  document.getElementById(“textBox”);",
            choiceA: "color: red",
            choiceB: "textEl.color",
            choiceC: "textEl.style.color",
            choiceD: "textEl {color: red;}",
            correct: "C"
        },
        {
            question: "Which of these variables is an object?",
            code: "let A = [1,2,3,4];\nlet B = runProgram();\nlet C = {food: grapes};\nlet D = Math.floor(Math.random(1)*10);",
            choiceA: "A",
            choiceB: "B",
            choiceC: "C",
            choiceD: "D",
            correct: "C"
        },
        {
            question: "What does X equal?",
            code: "Let X = example(5,10);\nfunction example(a,b){\nlet Z = a+b;\nreturn Z;\n}",
            choiceA: "z",
            choiceB: "10",
            choiceC: "5",
            choiceD: "15",
            correct: "D"
        },
        {
            question: "What is the best way to repeat a piece of code for a known number of times?",
            code: "",
            choiceA: "if statment",
            choiceB: "for loop",
            choiceC: "while loop",
            choiceD: "else if",
            correct: "B"
        },
        {
            question: "What would you use to create a browser pop up message?",
            code: "",
            choiceA: "window.message();",
            choiceB: "browser.message = 'string'",
            choiceC: "alert()",
            choiceD: "All of the above",
            correct: "C"
        },
        {
            question: "This code throws an error. What could we do to fix it?",
            code: "myFunction();\nvar myFunction = function() {\nconsole.log('Hello!');\n};",
            choiceA: "Put the function call after the function",
            choiceB: "replace 'myFunction()' with 'function()'",
            choiceC: "Put '{}' around 'console.log('Hello!)'",
            choiceD: "This code should work just fine",
            correct: "A"
        },
        {
            question: "If we use localStorage to save a value, that value will be:",
            code: "",
            choiceA: "Saved to an HTML doc",
            choiceB: "Saved to a server",
            choiceC: "Available on any computer the user is log in to",
            choiceD: "Available only on the computer it was saved on",
            correct: "D"
        },
        {
            question: "What syntax is used to run a function on a mouse click?",
            code: "",
            choiceA: "EventTarget.addEventListener(“click”,function())",
            choiceB: "Eventtarget.mouseClick = true",
            choiceC: "if (click == true)",
            choiceD: "onMouseClick.function()",
            correct: "A"
        },
        {
            question: "Which selection is the correct way to start an if statement in JS?",
            code: "",
            choiceA: "if x == 5",
            choiceB: "if (x == 5)",
            choiceC: "if x ==5 then {}",
            choiceD: "if (x == 5) then {}",
            correct: "B"
        },
        {
            question: "How do you write an if statement to check if something is NOT equal to 10?",
            code: "",
            choiceA: "if (x != 10)",
            choiceB: "if (x not 10)",
            choiceC: "!if (x == 10)",
            choiceD: "if (10 == x)",
            correct: "A"
        },
        {
            question: "How do you start a for loop?",
            code: "",
            choiceA: "for (i = 0: i < number: i++)",
            choiceB: "for (i = 0, i < number, i++)",
            choiceC: "for (i = 0; i < number; i++)",
            choiceD: "for ([i = 0], [i < number], [i++])",
            correct: "C"
        },
        {
            question: "How do you make a single line comment in JS code?",
            code: "",
            choiceA: "<!--comment",
            choiceB: "//comment",
            choiceC: "**comment",
            choiceD: "*/comment",
            correct: "B"
        },
        {
            question: "What will the following function return?",
            code: "let result = test(“string”);\nfunction test(input){\nif (input = NaN) {\nreturn 10;\n}\nelse{\nreturn input;\n}}",
            choiceA: "10",
            choiceB: "'string'",
            choiceC: "false",
            choiceD: "NaN",
            correct: "A"
        },
        {
            question: "What will the value of newText be?",
            code: "Let text = “Hello! My name is Greg.”;\nLet newText = text.replace(“greg”,”sam”);",
            choiceA: "Hello! My name is sam.",
            choiceB: "Hello! My name is Sam.",
            choiceC: "Hello! My name is Greg.",
            choiceD: "Sam! My name is Greg.",
            correct: "C"
        },
        {
            question: "What syntax do we use to make text all lower case?",
            code: "",
            choiceA: "makeLowerCase",
            choiceB: "setLowerCase",
            choiceC: "allLowerCase",
            choiceD: "toLowerCase",
            correct: "D"
        },
        {
            question: "What would you do to make selectedLetter = “D”?",
            code: "let array=[“A”,”B”,”C”,”D”];\nlet selectedLetter = ???",
            choiceA: "array[0]",
            choiceB: "array[3]",
            choiceC: "array['D']",
            choiceD: "array[4]",
            correct: "B"
        },
        {
            question: "How would you get Johns age?",
            code: "Array = [\n{\nname: “John”, \nage: 34\n},\n {\nname: “Bill”,\n age: 66\n}];\njohnsAge = ???;",
            choiceA: "John.age",
            choiceB: "array[0].age",
            choiceC: "array[1].age",
            choiceD: "array[0].name.age",
            correct: "B"
        }
    ];

    array = randomizeArray(array);
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
    let randomChoice = randomizeArray(array = [1, 2, 3, 4]);
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
    timerDisplay.style.animation = "colorPulseRed .5s linear .5s infinite alternate";

    runQuestions(questionArray, 0);
    ///////////////Displays the questions and choices and waits for input
    function runQuestions(array, questionNum) {

        /*for some reason you can't just remove an animation then add it 
        again to repeat the animation. You have to add a pause somehow then remove the animation
         then add the animation and it will run again. I did this with setInterval. It doesnt even have wait 
         for as long as you set the animation duration but it will cut it sgort if its less */
        let resetAnimation = setInterval(function () {
            questionEl.style.animation = "none";
            codeEl.style.animation = "none";
            clearInterval(resetAnimation);
        }, 300);



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
        else {

            codeEl.style.display = "flex";
            codeEl.style.animation = "codeAnimation .3s";

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

                questionEl.style.animation = "pushCardLeft .2s";

                runQuestions(array, questionNum);

                return;

            }
            else {

                questionNum++;
                result.textContent = "Wrong";

                questionEl.style.animation = "pushCardLeft .2s";

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
    const bonus = (numCorrect * 20);
    const finalScore = (score + bonus);
    finishEl.style.whiteSpace = "pre";

    let currentHighScore = loadHighScore();
    //checks the lowest score

    let checkScore = checkHighScore(finalScore, currentHighScore);
    console.log("Check Score: ", checkScore);

    if (completed) {
        finishEl.textContent = "Your Time: " + score +
            "\nNumber Correct: " + numCorrect + "/20" +
            "\nCorrect Answer Bonus: " + (bonus);


        printScore.textContent = "Final Score: " + finalScore;
        printScore.id = "finalScoreDisplay";
        finishEl.appendChild(printScore);
    }
    else {
        finishEl.textContent = "Sorry, but your time ran out!"
        return;
    }

    if (checkScore != undefined) {
        printScore.style.animation = "colorPulseGreen .5s linear 0s infinite alternate";
        askForName(finalScore, element, checkScore);
    }
}



////////////////////////////////////////High Score Code////////////////////////////////////////

function initHighScore() {
    checkIfHighScore = localStorage.getItem("highScore")
    console.log(checkIfHighScore);
    if (!checkIfHighScore) {
        let defaultScore = [{
            name: "Chris",
            score: 450
        },
        {
            name: "Joe",
            score: 400
        },
        {
            name: "Nikki",
            score: 350
        },
        {
            name: "Jake",
            score: 320
        },
        {
            name: "Jude",
            score: 290
        }];
        localStorage.setItem("highScore", JSON.stringify(defaultScore));

    };
    return;
}

/////////////////LOAD SCORE FUNCTION/////////////////////////////
function loadHighScore() {
    let currentHighScore = localStorage.getItem("highScore");
    currentHighScore = JSON.parse(currentHighScore);
    return currentHighScore;
}
/////////////////SAVE SCROE FUNCTION/////////////////////////////
function saveHighScore(newHighScore) {
    localStorage.setItem("highScore", JSON.stringify(newHighScore));
    return;
}

///////////////New highscore input//////////////////////////////
function askForName(newScore, element,checkScore) {
    //create new dif to handle eventListener "submit"
    let inputFormEl = document.createElement("form");
    inputFormEl.className = "userInputForm";
    inputFormEl.textContent = "You Have The New Highscore!";
    //  inputFormEl.style.animation = "borderPulseGreen .5s linear 0s infinite alternate";
    element.appendChild(inputFormEl);

    const inputNameLable = document.createElement("lable");
    inputNameLable.className = "userInput";
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
    submitBtn.textContent = "Submit";
    inputFormEl.appendChild(submitBtn);

    inputFormEl.addEventListener("submit", function getNewUser() {
        let newName = inputEl.value;
        let scoreList = loadHighScore();
        scoreList[checkScore].name = newName;
        scoreList[checkScore].score = newScore;
        console.log(scoreList);
        saveHighScore(scoreList);
   
        return;
    });


}

function checkHighScore(finalScore, scoreList) {
    for (i = 0; i < scoreList.length; i++) {
        if (finalScore > scoreList[i].score) {
            return i;
        }
    }

}

////JSON key is highScore
////highScore contains obj with name and score (highScore.name and highScore.score)


///////////////////////////////////////Shuffle array function//////////////////////
function randomizeArray(array) {
    let counter = array.length;
    let current = counter - 1;
    //this while loop will take the last array item and swap it with a random array item, then it moves on to the second to last item, repeats, and so on until it reaches the start of the array
    while (counter > 0) {
        //this can only equal 0 to counter-1 (array.length-1) because of Math.floor so this number can represent the array index number rather than the length 
        let randomNum = Math.floor(Math.random(1) * counter);
        //save the values of the index
        let a = array[current];
        let b = array[randomNum];
        //swap the values
        array[current] = b;
        array[randomNum] = a;
        counter--;
        current--;
    }
    return array;
}

