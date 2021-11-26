function drawStartCard() {

}

function drawQuestionCard() {
    //create elements


    let time = 120;
    let timer = setInterval(function () {
        time--;
        document.getElementById("timerDisplay").textContent = "Time: " + time;
        if (timer <= 0) {
            drawFinishCard(false);
            clearInterval(timer);
        }
    }, 1000);


}

function drawFinishCard(completed) {

}


function clearCard() {
    //clears all elements by removing surrounding div
}



drawQuestionCard();