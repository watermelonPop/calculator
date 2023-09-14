let numPrev = 0;
let secondOn = false;
let alphaOn = false;
//mode options
//radian or degree
let isRadian = true;
let allPrevCalc = [];
let allPrevAns = [];
let allVars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ"];
let varStorage = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ"];
let selectedDivChild = [-1, -1];

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
        allPrevCalc.push(calc);
        allPrevAns.push(result);
}

function displayInput(val){
        document.getElementById("userInput").value += val;
}

document.getElementsByClassName("radianOption")[0].focus();

function setRadian(boolVal){
        isRadian = boolVal;
        if(isRadian){
                document.getElementById("radianbtn").style.backgroundColor = "#DFAFB1";
                document.getElementById("radianbtn").style.color = "white";
                document.getElementById("radianbtn").style.borderRadius = "15.2px";
                document.getElementById("degreeBtn").style.backgroundColor = "transparent";
                document.getElementById("degreeBtn").style.color = "black";
        }else{
                document.getElementById("radianbtn").style.backgroundColor = "transparent";
                document.getElementById("radianbtn").style.color = "black";
                document.getElementById("degreeBtn").style.borderRadius = "15.2px";
                document.getElementById("degreeBtn").style.backgroundColor = "#DFAFB1";
                document.getElementById("degreeBtn").style.color = "white";
        }
}

function allOccurencesTrig(source, find) {
        if (!source) {
          return [];
        }
        if (!find) {
            return source.split('').map(function(_, i) { return i; });
        }
        var result = [];
        var i = 0;
        while(i < source.length) {
          if (source.substring(i, i + find.length) == find) {
                if(i-1 >= 0){
                        if(source.substring(i-1, i) != "a"){
                                let impInd = source.substring(i, source.length).indexOf(")");
                                impInd += i;
                                result.push(impInd);
                                i += find.length;
                        }else{
                                i++;
                        }
                }else{
                        let impInd = source.substring(i, source.length).indexOf(")");
                        impInd += i;
                        result.push(impInd);
                        i += find.length; 
                }
          } else {
            i++;
          }
        }
        return result;
}

function allOccurencesLog(source, find){
        if (!source) {
                return [];
        }
        if (!find) {
                return source.split('').map(function(_, i) { return i; });
        }
        var result = [];
        var i = 0;
        while(i < source.length) {
                if (source.substring(i, i + find.length) == find) {
                        let impInd = source.substring(i, source.length).indexOf(")");
                        impInd += i;
                        result.push(impInd);
                        i += find.length;
                } else {
                        i++;
                }
        }
        return result;
}

function parseEq(eq){
        //replace all x with *
        //replace all / with /
        let ret = eq.replace(/×/g, '*');
        ret = ret.replace(/÷/g, '/');
        ret = ret.replace(/𝝿/g, 'PI');
        ret = ret.replace(/√/g, 'sqrt');
        if(isRadian == false){
                if(ret.includes("sin") || ret.includes("cos") || ret.includes("tan")){
                        let sinOccur = allOccurencesTrig(ret, "sin");
                        for(let i = 0; i < sinOccur.length; i++){
                                ret = ret.substring(0, sinOccur[i]) + " deg" + ret.substring(sinOccur[i], ret.length);
                        }
                        let cosOccur = allOccurencesTrig(ret, "cos");
                        for(let i = 0; i < cosOccur.length; i++){
                                ret = ret.substring(0, cosOccur[i]) + " deg" + ret.substring(cosOccur[i], ret.length);
                        }
                        let tanOccur = allOccurencesTrig(ret, "tan");
                        for(let i = 0; i < tanOccur.length; i++){
                                ret = ret.substring(0, tanOccur[i]) + " deg" + ret.substring(tanOccur[i], ret.length);
                        }
                }
        }
        if(ret.includes("log(")){
                let logOccur = allOccurencesLog(ret, "log(");
                for(let i = 0; i < logOccur.length; i++){
                        ret = ret.substring(0, logOccur[i]) + ", 10" + ret.substring(logOccur[i], ret.length);
                }
        }
        if(ret.includes("ln(")){
                let lnOccur = allOccurencesLog(ret, "ln(");
                for(let i = 0; i < lnOccur.length; i++){
                        ret = ret.substring(0, lnOccur[i]) + ", e" + ret.substring(lnOccur[i], ret.length);
                }
        }
        for(let i = 0; i < allVars.length; i++){
                if(ret.includes(allVars[i])){
                        ret = ret.replaceAll(allVars[i], varStorage[i]);
                }
        }
        return ret;
}

function solve(eq){
        let ogEq = eq;
        eq = parseEq(eq);
        if(eq.includes("→")){
                let variable = eq.trim().substring(0, 1);
                if(allVars.includes(variable)){
                        if(eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length).trim() == ""){
                                addPrevCalc(ogEq, "error");
                                clears();
                        }else{
                                varStorage[allVars.indexOf(variable)] = eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length);
                                addPrevCalc(ogEq, eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length));
                                clears();
                        }
                }else{
                        addPrevCalc(ogEq, "error");
                        clears();
                }
        }
        else{
                let ans = "error";
                try{
                        ans = math.evaluate(eq);
                        if(parseFloat(ans) < math.pow(10, -15) && parseFloat(ans) > -1*math.pow(10, -15)){
                                ans = "0";
                        }
                }catch(error){
                }
                addPrevCalc(ogEq, ans);
                clears();
        }
}

function clears(){
        document.getElementById("userInput").value = "";
}

function deletes(){
        document.getElementById("userInput").value = document.getElementById("userInput").value.substring(0, document.getElementById("userInput").value.length - 1);
}

function modeBtn(){
        if(secondOn){
                showScreen("normDiv");
                toggle2nd();
        }
        else{
                showScreen("modeDiv");
        }
}


function showScreen(showId){
        document.getElementById(showId).style.display = "block";

        if(showId != "normDiv"){
                document.getElementById("normDiv").style.display = "none";
        }
        if(showId != "modeDiv"){
                document.getElementById("modeDiv").style.display = "none";
        }
        if(showId != "offDiv"){
                document.getElementById("offDiv").style.display = "none";
        }
}

function toggle2nd(){
        if(secondOn){
                secondOn = false;
                document.getElementById("secBtn").style.backgroundColor = "#96C0E9";
                document.getElementById("secBtn").style.color = "black";
        }else{
                secondOn = true;
                document.getElementById("secBtn").style.backgroundColor = "#DFAFB1";
                document.getElementById("secBtn").style.color = "white";
                alphaOn = false;
                document.getElementById("alphaBtn").style.backgroundColor = "#B1E010";
                document.getElementById("alphaBtn").style.color = "black";
        }
}

function toggleAlpha(){
        if(alphaOn){
                alphaOn = false;
                document.getElementById("alphaBtn").style.backgroundColor = "#B1E010";
                document.getElementById("alphaBtn").style.color = "black";
        }else{
                alphaOn = true;
                document.getElementById("alphaBtn").style.backgroundColor = "#DFAFB1";
                document.getElementById("alphaBtn").style.color = "white";
                secondOn = false;
                document.getElementById("secBtn").style.backgroundColor = "#96C0E9";
                document.getElementById("secBtn").style.color = "black";
        }
}



function sinBtn(){
        if(secondOn){
                //do inverse sin
                displayInput('asin(');
                toggle2nd();
        }else if(alphaOn){
                displayInput('E');
                toggleAlpha();
        }
        else{
                displayInput('sin(');
        }
}

function cosBtn(){
        if(secondOn){
                //do inverse sin
                displayInput('acos(');
                toggle2nd();
        }else if(alphaOn){
                displayInput('F');
                toggleAlpha();
        }
        else{
                displayInput('cos(');
        }
}

function tanBtn(){
        if(secondOn){
                //do inverse sin
                displayInput('atan(');
                toggle2nd();
        }else if(alphaOn){
                displayInput('G');
                toggleAlpha();
        }
        else{
                displayInput('tan(');
        }
}

function superBtn(){
        if(secondOn){
                displayInput("𝝿");
                toggle2nd();
        }else if(alphaOn){
                displayInput('H');
                toggleAlpha();
        }
        else{
                displayInput("^(");
        }
}

function squaredBtn(){
        if(secondOn){
                displayInput("√(");
                toggle2nd();
        }else if(alphaOn){
                displayInput("I");
                toggleAlpha();
        }
        else{
                displayInput('^(2)');
        }
}

function divisionBtn(){
        if(secondOn){
                displayInput("e");
                toggle2nd();
        }else if(alphaOn){
                displayInput("M");
                toggleAlpha();
        }
        else{
                if(document.getElementById("userInput").value == ""){
                        displayInput(allPrevAns[allPrevAns.length-1]);
                }
                displayInput(' ÷ ');
        }
}

function logBtn(){
        if(secondOn){
                displayInput("10^(");
                toggle2nd();
        }else if(alphaOn){
                displayInput("N");
                toggleAlpha();
        }
        else{
                displayInput('log(');
        }
}

function lnBtn(){
        if(secondOn){
                displayInput("e^(");
                toggle2nd();
        }else if(alphaOn){
                displayInput("S");
                toggleAlpha();
        }
        else{
                displayInput('ln(');
        }
}

function onBtn(){
        if(secondOn){
                showScreen("offDiv");
                toggle2nd();
        }else{
                showScreen("normDiv");
        }
}

function periodBtn(){
        if(secondOn){
                displayInput("i");
                toggle2nd();
        }else if(alphaOn){
                displayInput(":");
                toggleAlpha();
        }
        else{
                displayInput('.');
        }
}

function negBtn(){
        if(secondOn){
                displayInput(allPrevAns[allPrevAns.length-1]);
                toggle2nd();
        }else if(alphaOn){
                displayInput("?");
                toggleAlpha();        
        }
        else{
                displayInput('-');
        }
}

function addBtn(){
        if(alphaOn){
                displayInput('"');
                toggleAlpha();
        }else{
                if(document.getElementById("userInput").value == ""){
                        displayInput(allPrevAns[allPrevAns.length-1]);
                }
                displayInput(' + ');
        }
}

function subBtn(){
        if(secondOn){
                displayInput("]");
                toggle2nd();
        }
        else if(alphaOn){
                displayInput("W");
                toggleAlpha();
        }else{
                if(document.getElementById("userInput").value == ""){
                        displayInput(allPrevAns[allPrevAns.length-1]);
                }
                displayInput(' - ');
        }
}

function multBtn(){
        if(secondOn){
                displayInput("[");
                toggle2nd();
        }else if(alphaOn){
                displayInput("R");
                toggleAlpha();
        }else{
                if(document.getElementById("userInput").value == ""){
                        displayInput(allPrevAns[allPrevAns.length-1]);
                }
                displayInput(' × ');
        }
}

function stoBtn(){
        if(alphaOn){
                displayInput("X");
                toggleAlpha();
        }else{
                displayInput(' → ');
        }
}

function mathBtn(){
        if(alphaOn){
                displayInput("A");
                toggleAlpha();
        }
}

function appsBtn(){
        if(alphaOn){
                displayInput("B");
                toggleAlpha();
        }
}

function prgmBtn(){
        if(alphaOn){
                displayInput("C");
                toggleAlpha();
        }
}

function inverseBtn(){
        if(alphaOn){
                displayInput("D");
                toggleAlpha();
        }else{
                displayInput("^(-1)");
        }
}

function commaBtn(){
        if(alphaOn){
                displayInput("J");
                toggleAlpha();
        }else{
                displayInput(',');
        }
}

function frontParenBtn(){
        if(secondOn){
                displayInput("{");
                toggle2nd();
        }else if(alphaOn){
                displayInput("K");
                toggleAlpha();
        }else{
                displayInput("(");
        }
}

function backParenBtn(){
        if(secondOn){
                displayInput("}");
                toggle2nd();
        }else if(alphaOn){
                displayInput("L");
                toggleAlpha();
        }else{
                displayInput(")");
        }
}

function sevenBtn(){
        if(alphaOn){
                displayInput("O");
                toggleAlpha();
        }else{
                displayInput('7');
        }
}

function eightBtn(){
        if(alphaOn){
                displayInput("P");
                toggleAlpha();
        }else{
                displayInput('8');
        }
}


function nineBtn(){
        if(alphaOn){
                displayInput("Q");
                toggleAlpha();
        }else{
                displayInput('9');
        }
}


function fourBtn(){
        if(alphaOn){
                displayInput("T");
                toggleAlpha();
        }else{
                displayInput('4');
        }
}


function fiveBtn(){
        if(alphaOn){
                displayInput("U");
                toggleAlpha();
        }else{
                displayInput('5');
        }
}

function sixBtn(){
        if(alphaOn){
                displayInput("V");
                toggleAlpha();
        }else{
                displayInput('6');
        }
}


function oneBtn(){
        if(alphaOn){
                displayInput("Y");
                toggleAlpha();
        }else{
                displayInput('1');
        }
}


function twoBtn(){
        if(alphaOn){
                displayInput("Z");
                toggleAlpha();
        }else{
                displayInput('2');
        }
}


function threeBtn(){
        if(alphaOn){
                displayInput("θ");
                toggleAlpha();
        }else{
                displayInput('3');
        }
}

function zeroBtn(){
        if(alphaOn){
                displayInput(" ");
                toggleAlpha();
        }else{
                displayInput('0');
        }
}

function navigateInput(goingLeft){
        if(goingLeft){
                
        }
}

function focusPrev(num, child){
        unfocusPrev();
        let divChilds = document.getElementsByClassName("calcResDiv instance" + num)[0].children;
        divChilds[child].style.color = "#DFAFB1";
        selectedDivChild = [num, child];
        let off = divChilds[child].offsetTop;
        document.getElementsByClassName("prevCalcDiv")[0].scrollTop = off-50;
}

function unfocusPrev(){
        let prevC = document.getElementsByClassName("calc");
        let prevA = document.getElementsByClassName("prevResult");

        for(let i = 0; i < prevC.length; i++){
                prevC[i].style.color = "black";
        }
        for(let i = 0; i < prevA.length; i++){
                prevA[i].style.color = "black";
        }
}

function scrollPrev(goingUp){
        if(goingUp){
                if(selectedDivChild[0] == -1){
                        focusPrev(allPrevAns.length, 1);
                }else if(selectedDivChild[0] == 1 && selectedDivChild[1] == 0){
                        focusPrev(selectedDivChild[0], selectedDivChild[1]);
                }
                else{
                        if(selectedDivChild[1] == 0){
                                focusPrev(selectedDivChild[0]-1, 1);
                        }else if(selectedDivChild[1] == 1){
                                focusPrev(selectedDivChild[0], 0);
                        }
                }
        }else{
                if(selectedDivChild[0] == allPrevAns.length && selectedDivChild[1] == 1){
                        unfocusPrev();
                        selectedDivChild = [-1, -1];
                }else{
                        if(selectedDivChild[1] == 0){
                                focusPrev(selectedDivChild[0], 1);
                        }else if(selectedDivChild[1] == 1){
                                focusPrev(selectedDivChild[0]+1, 0);
                        }
                }
        }
}
