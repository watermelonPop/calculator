let numPrev = 4;

var input = document.getElementById("userInput");
input.select();

scrollToBottom();

function scrollToBottom(){
        var scrollObj = document.getElementsByClassName("prevCalcDiv")[0]
        scrollObj.scrollTop = scrollObj.scrollHeight-80;        
}
function addPrevCalc(calc, result){
        numPrev++;
        document.getElementsByClassName("prevCalcDiv")[0].innerHTML += "<div class='calcResDiv instance" + numPrev + "'><p class='calc'>" + calc + "</p> <p class='prevResult'>" + result + "</p></div>";
        scrollToBottom();
}

addPrevCalc("1/2", "0.5");