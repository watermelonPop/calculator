let numPrev = 0;
let secondOn = false;
let alphaOn = false;
let alphaLock = false;
//mode options
//radian or degree
let isRadian = true;
let allPrevCalc = [];
let allPrevAns = [];
let allVars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ"];
let varStorage = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "θ"];
let selectedDivChild = [-1, -1];

let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];
let list6 = [];

let selectedListCell = [1, 1];

let selectedStatEditOption = -1;
let selectedTestTestOption = -1;
let selectedTestLogicOption = -1;
let selectedlistMathOption = -1;
let selectedlistNamesOption = -1;
let selectedMatrixNamesOption = -1;
let selectedMatrixMathOption = -1;
let selectedMatrixEditOption = -1;
let selectedAngleOption = -1;
let selectedMathMathOption = -1;
let selectedMathNumOption = -1;
let selectedMathPrbOption = -1;

let matrixA = [];
let matrixB = [];
let matrixC = [];
let matrixD = [];
let matrixE = [];
let matrixF = [];
let matrixG = [];
let matrixH = [];
let matrixI = [];
let matrixJ = [];

var input = document.getElementById("userInput");
input.select();

scrollToBottom();


//parse sin, cos, tan, asin, acos, atan, sqrt,log, ln,  10^, e^

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

function displayInput(val, id){
        document.getElementById(id).value += val;
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
                document.getElementById("radianbtn").style.border = "none";
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


//≠, ≥, ≤
//sin, cos, tan, asin, acos, atan, sqrt, 10^, e^, for list math
function parseEq(eq){
        //replace all x with *
        //replace all / with /
        let ret = eq.replace(/×/g, '*');
        ret = ret.replace(/÷/g, '/');
        ret = ret.replace(/𝝿/g, 'PI');
        ret = ret.replace(/√/g, 'sqrt');
        ret = ret.replaceAll("L1", "[" + list1 + "]");
        ret = ret.replaceAll("L2", "[" + list2 + "]");
        ret = ret.replaceAll("L3", "[" + list3 + "]");
        ret = ret.replaceAll("L4", "[" + list4 + "]");
        ret = ret.replaceAll("L5", "[" + list5 + "]");
        ret = ret.replaceAll("L6", "[" + list6 + "]");
        ret = ret.replaceAll("stdDev", "std");
        ret = ret.replace(/=/g, '==');
        ret = ret.replace(/≠/g, '!=');
        ret = ret.replace(/≥/g, '>=');
        ret = ret.replace(/≤/g, '<=');
        ret = ret.replace(/°/g, ' deg');

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

function replaceAllSortA(eq){
        while(eq.includes("sortA")){
                eq = replaceOneSortA(eq);
        }
        return eq;
}

function replaceOneSortA(eq){
        let origList = JSON.parse(eq.substring(eq.indexOf("(") + 1, eq.indexOf(")")));
        let sortedList;
        sortedList = sortA(origList);
        eq = eq.substring(0, eq.indexOf("sortA")) + "[" + sortedList.toString() + "]" + eq.substring(eq.indexOf(")") + 1, eq.length);
        return eq;
}

function replaceAllSortD(eq){
        while(eq.includes("sortD")){
                eq = replaceOneSortD(eq);
        }
        return eq;
}

function replaceOneSortD(eq){
        let origList = JSON.parse(eq.substring(eq.indexOf("(") + 1, eq.indexOf(")")));
        let sortedList;
        sortedList = sortD(origList);
        eq = eq.substring(0, eq.indexOf("sortD")) + "[" + sortedList.toString() + "]" + eq.substring(eq.indexOf(")") + 1, eq.length);
        return eq;
}

function clearList(listNum){
        //redo inner html, make sure to reset current selected cell and highlight
        let currTable = document.getElementsByClassName("listTable instance" + listNum)[0];
        currTable.innerHTML="<tr><th class='listTableHeader'>L<sub>1</sub></th></tr><tr><th class='listTableEntry list" + listNum + " instance1 initialSelect'>----</th></tr>";
        selectedListCell = [1, 1];
        highlightSelectedCell();
}


function solve(eq){
        let ogEq = eq;
        if(eq.includes("clrList")){
                if(eq.trim().length != 11){
                        addPrevCalc(ogEq, "error");
                        clears("userInput");
                        return;
                }else{
                        let numList = eq.substring(eq.indexOf("clrList") + 9, eq.indexOf(")"));
                        //alert(numList);
                        //clear list
                        //return {}
                        eval("list" + numList + " = [];");
                        clearList(numList);
                        addPrevCalc(ogEq, "{}");
                        clears("userInput");
                        return;
                }
        }
        eq = parseEq(eq);
        if(eq.includes("→")){
                let variable = eq.trim().substring(0, 1);
                if(allVars.includes(variable)){
                        if(eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length).trim() == ""){
                                addPrevCalc(ogEq, "error");
                                clears("userInput");
                        }else{
                                varStorage[allVars.indexOf(variable)] = eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length);
                                addPrevCalc(ogEq, eq.trim().substring(eq.trim().indexOf("→") + 1, eq.trim().length));
                                clears("userInput");
                        }
                }else{
                        addPrevCalc(ogEq, "error");
                        clears("userInput");
                }
        }else if(eq.includes("sortA") || eq.includes("sortD")){
                let ans = "error";
                eq = replaceAllSortA(eq);
                eq = replaceAllSortD(eq);
                try{
                        ans = math.evaluate(eq);
                        if(parseFloat(ans) < math.pow(10, -15) && parseFloat(ans) > -1*math.pow(10, -15)){
                                ans = "0";
                        }
                }catch(error){
                }
                addPrevCalc(ogEq, ans);
                clears("userInput");
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
                clears("userInput");
        }
        refocusInput("userInput");
        refocusInput("currValInput");
}

function isVisible(e) {
        return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

function callFunc(funcName, funcParam){
        let fn = window[funcName];
        if(typeof fn == "function"){
                fn.apply(null, funcParam);
        }
}

function sortA(lst){
        lst.sort();
        return lst;
}

function sortD(lst){
        lst.sort();
        lst.reverse();
        return lst;
}

function enterBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput");
                return;
        }else if(alphaOn){
                //solve function
                return;
        }

        if(isVisible(document.getElementById("normDiv"))){
                if(selectedDivChild[0] != -1){
                        let divChilds = document.getElementsByClassName("calcResDiv instance" + selectedDivChild[0])[0].children;
                        displayInput(divChilds[selectedDivChild[1]].innerHTML, "userInput");
                        unfocusPrev();
                        selectedDivChild = [-1, -1];
                        refocusInput("userInput");
                }else{
                        solve(document.getElementById('userInput').value);
                }
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(selectedStatEditOption != -1){
                                statEditChoose(selectedStatEditOption);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        //get input
                        let currNum = document.getElementById("currValInput").value;
                        currNum = parseEq(currNum);
                        let ans = "error";
                        try{
                                ans = math.evaluate(currNum);
                                if(parseFloat(ans) < math.pow(10, -15) && parseFloat(ans) > -1*math.pow(10, -15)){
                                        ans = "0";
                                }
                        }catch(error){
                        }
                        currNum = ans;
                        if(currNum == "error"){
                                clears("currValInput");
                                displayInput(currNum, "currValInput");
                        }else{
                                currNum = math.round(currNum, 2);
                                if(currNum.toString().trim() != ""){
                                        let currCell = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
                                        if(currCell.innerHTML == "----"){
                                                currCell.innerHTML = currNum;
                                                currCell.style.backgroundColor = "transparent";
                                                if(parseInt(selectedListCell[0]) == 1){
                                                        list1.push(currNum);
                                                }else if(parseInt(selectedListCell[0]) == 2){
                                                        list2.push(currNum);
                                                }else if(parseInt(selectedListCell[0]) == 3){
                                                        list3.push(currNum);
                                                }else if(parseInt(selectedListCell[0]) == 4){
                                                        list4.push(currNum);
                                                }else if(parseInt(selectedListCell[0]) == 5){
                                                        list5.push(currNum);
                                                }else if(parseInt(selectedListCell[0]) == 6){
                                                        list6.push(currNum);
                                                }
                                                //enter into table
                                                selectedListCell[1] += 1;
                                                let row = document.createElement('tr');
                                                let newCell = document.createElement('th');
                                                newCell.setAttribute("class", "listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1]);
                                                newCell.innerHTML = "----";
                                                newCell.setAttribute("onclick", "selectCell(this.className)")
                                                row.appendChild(newCell);
                                                document.getElementsByClassName("listTable instance" + selectedListCell[0])[0].appendChild(row);
                                        }else{
                                                currCell.innerHTML = currNum;
                                                currCell.style.backgroundColor = "transparent";
                                                if(parseInt(selectedListCell[0]) == 1){
                                                        list1[selectedListCell[1]-1] = currNum;
                                                }else if(parseInt(selectedListCell[0]) == 2){
                                                        list2[selectedListCell[1]-1] = currNum;
                                                }else if(parseInt(selectedListCell[0]) == 3){
                                                        list3[selectedListCell[1]-1] = currNum;
                                                }else if(parseInt(selectedListCell[0]) == 4){
                                                        list4[selectedListCell[1]-1] = currNum;
                                                }else if(parseInt(selectedListCell[0]) == 5){
                                                        list5[selectedListCell[1]-1] = currNum;
                                                }else if(parseInt(selectedListCell[0]) == 6){
                                                        list6[selectedListCell[1]-1] = currNum;
                                                }
                                                selectedListCell[1] += 1;
                                        }
                                        highlightSelectedCell();
                                        scrollToSelectedCell();
                                        clears("currValInput");
                                        refocusInput("currValInput");
                                }
                        }
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(selectedlistNamesOption != -1){
                                listNamesChoose(selectedlistNamesOption);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(selectedlistMathOption != -1){
                                listMathChoose(selectedlistMathOption);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(selectedTestTestOption != -1){
                                testTestChoose(selectedTestTestOption);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(selectedTestLogicOption != -1){
                                testLogicChoose(selectedTestLogicOption);
                        }
                }
        }else if(isVisible(document.getElementById("matrixDiv"))){
                if(isVisible(document.getElementById("matrixNames"))){
                        if(selectedMatrixNamesOption != -1){
                                matrixNamesChoose(selectedMatrixNamesOption);
                        }
                }else if(isVisible(document.getElementById("matrixMath"))){
                        if(selectedMatrixMathOption != -1){
                                matrixMathChoose(selectedMatrixMathOption);
                        }
                }else if(isVisible(document.getElementById("matrixEdit"))){
                        if(selectedMatrixEditOption != -1){
                                matrixMathChoose(selectedMatrixEditOption);
                        }
                }
        }else if(isVisible(document.getElementById("angleDiv"))){
                if(selectedAngleOption != -1){
                        angleChoose(selectedAngleOption);
                }
        }
}

function scrollToSelectedCell(){
        let cell =  document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
        let off = cell.offsetTop;
        document.getElementById("listRow").scrollTop = off;
}

function clearBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput"); 
        }else if(alphaOn){
                toggleAlpha();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        clears("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                clears("currValInput");
                        }
                }
        }
}

function clears(id){
        document.getElementById(id).value = "";
        refocusInput(id);
}

function deletes(id){
        document.getElementById(id).value = document.getElementById(id).value.substring(0, document.getElementById(id).value.length - 1);
        refocusInput(id);
}

function delBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else if(alphaOn){
                toggleAlpha();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        deletes("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                deletes("currValInput");
                        }
                }
        }
}

function modeBtn(){
        if(secondOn){
                showScreen("normDiv");
                toggle2nd();
                refocusInput("userInput");
        }else if(alphaOn){
                toggleAlpha();
                refocusInput("userInput");
                refocusInput("currValInput");
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
        if(showId != "statDiv"){
                document.getElementById("statDiv").style.display = "none";
        }
        if(showId != "statList"){
                document.getElementById("statList").style.display = "none";
        }if(showId != "testDiv"){
                document.getElementById("testDiv").style.display = "none";
        }if(showId != "matrixDiv"){
                document.getElementById("matrixDiv").style.display = "none";
        }
        if(showId != "angleDiv"){
                document.getElementById("angleDiv").style.display = "none";
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
        if(alphaLock == false){
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
}

function alphaBtn(){
        if(alphaLock){
                alphaLock = false;
                alphaOn = false;
                document.getElementById("alphaBtn").style.backgroundColor = "#B1E010";
                document.getElementById("alphaBtn").style.color = "black";
        }else{
                if(secondOn && alphaOn == false){
                        //alpha lock
                        alphaLock = true;
                        alphaOn = true;
                        document.getElementById("alphaBtn").style.backgroundColor = "#7e191b";
                        document.getElementById("alphaBtn").style.color = "white";
                        toggle2nd();
                }else{
                        toggleAlpha();
                }
        }
}

function refocusInput(id){
        document.getElementById(id).focus();
}




function sinBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        //do inverse sin
                        displayInput('asin(', "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('E', "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('sin(', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                //do inverse sin
                                displayInput('asin(', "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput('E', "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('sin(', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}


function cosBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        //do inverse sin
                        displayInput('acos(', "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('F', "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('cos(', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                //do inverse sin
                                displayInput('acos(', "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput('F', "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('cos(', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function tanBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        //do inverse sin
                        displayInput('atan(', "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('G', "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('tan(', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                //do inverse sin
                                displayInput('atan(', "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput('G', "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('tan(', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function superBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("𝝿", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('H', "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput("^(", "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("𝝿", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput('H', "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput("^(", "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}


function squaredBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("√(", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("I", "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('^(2)', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("√(", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("I", "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('^(2)', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function divisionBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("e", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("M", "userInput");
                        toggleAlpha();
                }
                else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' ÷ ', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("e", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("M", "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput(' ÷ ', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function logBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("10^(", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("N", "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('log(', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("10^(", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("N", "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('log(', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

/*
if(isVisible(document.getElementById("normDiv"))){
        
        refocusInput("userInput");
}else if(isVisible(document.getElementById("statDiv"))){
        if(isVisible(document.getElementById("statEditEditDiv"))){
                
                refocusInput("currValInput");
        }
}
*/

function lnBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("e^(", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("S", "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('ln(', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("e^(", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("S", "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('ln(', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function onBtn(){
        if(secondOn){
                showScreen("offDiv");
                toggle2nd();
        }else if(alphaOn){
                toggleAlpha();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                showScreen("normDiv");
        }
        refocusInput("userInput");
}

function periodBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("i", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput(":", "userInput");
                        toggleAlpha();
                }
                else{
                        displayInput('.', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("i", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput(":", "currValInput");
                                toggleAlpha();
                        }
                        else{
                                displayInput('.', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function negBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        if(allPrevAns.length > 0){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                                toggle2nd();
                        }
                }else if(alphaOn){
                        displayInput("?", "userInput");
                        toggleAlpha();        
                }
                else{
                        displayInput('-', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                if(allPrevAns.length > 0){
                                        displayInput(allPrevAns[allPrevAns.length-1], "currValInput");
                                        toggle2nd();
                                }
                        }else if(alphaOn){
                                displayInput("?", "currValInput");
                                toggleAlpha();        
                        }
                        else{
                                displayInput('-', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}


function addBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput('"', "userInput");
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' + ', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput('"', "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput(' + ', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function subBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("]", "userInput");
                        toggle2nd();
                }
                else if(alphaOn){
                        displayInput("W", "userInput");
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' - ', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("]", "currValInput");
                                toggle2nd();
                        }
                        else if(alphaOn){
                                displayInput("W", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput(' - ', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function multBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("[", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("R", "userInput");
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' × ', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("[", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("R", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput(' × ', "currValInput");
                        }

                        refocusInput("currValInput");
                }
        }
}



function stoBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        if(alphaOn){
                                displayInput("X", "userInput");
                                toggleAlpha();
                        }else{
                                displayInput(' → ', "userInput");
                        }
                        refocusInput("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                if(alphaOn){
                                        displayInput("X", "currValInput");
                                        toggleAlpha();
                                }
                                refocusInput("currValInput");
                        }else{
                                if(alphaOn){
                                        toggleAlpha();
                                        refocusInput("userInput");
                                        refocusInput("currValInput");
                                }
                        }
                }else{
                        if(alphaOn){
                                toggleAlpha();
                                refocusInput("userInput");
                                refocusInput("currValInput");
                        }
                }
        }
}

function mathBtn(){
        if(secondOn){
                testTestBtn();
                showScreen("testDiv");
                toggle2nd();
        }else{
                if(alphaOn == false){
                        mathMathBtn();
                        showScreen("mathDiv");
                        return;
                }

                if(isVisible(document.getElementById("normDiv"))){
                        if(alphaOn){
                                displayInput("A", "userInput");
                                toggleAlpha();
                        }
                        refocusInput("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                if(alphaOn){
                                        displayInput("A", "currValInput");
                                        toggleAlpha();
                                }
                                refocusInput("currValInput");
                        }
                }
        }
}

function appsBtn(){
        if(secondOn){
                showScreen("angleDiv");
                toggle2nd();
        }
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput("B", "userInput");
                        toggleAlpha();
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput("B", "currValInput");
                                toggleAlpha();
                        }
                        refocusInput("currValInput");
                }
        }
}

function prgmBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput("C", "userInput");
                        toggleAlpha();
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput("C", "currValInput");
                                toggleAlpha();
                        }
                        refocusInput("currValInput");
                }
        }
}


function inverseBtn(){
        if(secondOn){
                matrixNamesBtn();
                showScreen("matrixDiv");
                toggle2nd();
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        if(alphaOn){
                                displayInput("D", "userInput");
                                toggleAlpha();
                        }else{
                                displayInput("^(-1)", "userInput");
                        }
                        refocusInput("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                if(alphaOn){
                                        displayInput("D", "currValInput");
                                        toggleAlpha();
                                }else{
                                        displayInput("^(-1)", "currValInput");
                                }
                                refocusInput("currValInput");
                        }
                }
        }
}

function commaBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        if(alphaOn){
                                displayInput("J", "userInput");
                                toggleAlpha();
                        }else{
                                displayInput(',', "userInput");
                        }
                        refocusInput("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                if(alphaOn){
                                        displayInput("J", "currValInput");
                                        toggleAlpha();
                                }else{
                                        displayInput(',', "currValInput");
                                }
                                refocusInput("currValInput");
                        }else{
                                if(alphaOn){
                                        toggleAlpha();
                                        refocusInput("userInput");
                                        refocusInput("currValInput");
                                }
                        }
                }else{
                        if(alphaOn){
                                toggleAlpha();
                                refocusInput("userInput");
                                refocusInput("currValInput");
                        }
                }
        }
}

function frontParenBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("{", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("K", "userInput");
                        toggleAlpha();
                }else{
                        displayInput("(", "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("{", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("K", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput("(", "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function backParenBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("}", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("L", "userInput");
                        toggleAlpha();
                }else{
                        displayInput(")", "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                displayInput("}", "currValInput");
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("L", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput(")", "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

function sevenBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput("O", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('7', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput("O", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('7', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(8);
                        }
                }
        }
}


function eightBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput("P", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('8', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput("P", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('8', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(8);
                        }
                }
        }
}


function nineBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput("Q", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('9', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(alphaOn){
                                displayInput("Q", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('9', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }
}

//do 5, 6, 1, 2, 3
function fourBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L4", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("T", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('4', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                statEditChoose(4);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("T", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('4', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(4);
                        }
                }
                else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(4);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(4);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testLogicChoose(4);
                        }
                }
        }
}


function fiveBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L5", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("U", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('5', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("U", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('5', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(5);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(5);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(5);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testLogicChoose(5);
                        }
                }
        }
}

function sixBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L6", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("V", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('6', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("V", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('6', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(6);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(6);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(6);
                        }
                }
        }
}



function oneBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L1", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Y", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('1', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                statEditChoose(1);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("Y", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('1', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(1);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(1);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(1);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testLogicChoose(1);
                        }
                }
        }
}


function twoBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L2", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Z", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('2', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                statEditChoose(2);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("Z", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('2', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(2);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(2);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(2);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testLogicChoose(2);
                        }
                }
        }
}


function threeBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L3", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("θ", "userInput");
                        toggleAlpha();
                }else{
                        displayInput('3', "userInput");
                }
                refocusInput("userInput");
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                statEditChoose(3);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput("θ", "currValInput");
                                toggleAlpha();
                        }else{
                                displayInput('3', "currValInput");
                        }
                        refocusInput("currValInput");
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listNamesChoose(3);
                        }
                }else if(isVisible(document.getElementById("listMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                listMathChoose(3);
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testTestChoose(3);
                        }
                }else if(isVisible(document.getElementById("testLogic"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                testLogicChoose(3);
                        }
                }
        }
}

function zeroBtn(){
        if(secondOn){
                toggle2nd();
                refocusInput("userInput");
                refocusInput("currValInput")
        }else{
                if(isVisible(document.getElementById("normDiv"))){
                        if(alphaOn){
                                displayInput(" ", "userInput");
                                toggleAlpha();
                        }else{
                                displayInput('0', "userInput");
                        }
                        refocusInput("userInput");
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                if(alphaOn){
                                        displayInput(" ", "currValInput");
                                        toggleAlpha();
                                }else{
                                        displayInput('0', "currValInput");
                                }
                                refocusInput("currValInput");
                        }else{
                                if(alphaOn){
                                        toggleAlpha();
                                        refocusInput("userInput");
                                        refocusInput("currValInput");
                                }
                        }
                }else{
                        if(alphaOn){
                                toggleAlpha();
                                refocusInput("userInput");
                                refocusInput("currValInput");
                        }
                }
        }
}

/*
if(isVisible(document.getElementById("normDiv"))){
        
        refocusInput("userInput");
}else if(isVisible(document.getElementById("statDiv"))){
        if(isVisible(document.getElementById("statEditEditDiv"))){
                
                refocusInput("currValInput");
        }
}
*/

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
                        refocusInput("userInput");
                }else{
                        if(selectedDivChild[1] == 0){
                                focusPrev(selectedDivChild[0], 1);
                        }else if(selectedDivChild[1] == 1){
                                focusPrev(selectedDivChild[0]+1, 0);
                        }
                }
        }
}

function downBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                scrollPrev(false);
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(selectedStatEditOption == -1){
                                selectedStatEditOption = 1;
                        }else if(selectedStatEditOption == 4){
                                selectedStatEditOption = -1;
                        }else{
                                selectedStatEditOption += 1;
                        }
                        selectOption("statEdit", selectedStatEditOption);
                }else if(isVisible(document.getElementById("statEditEditDiv"))){
                        let currTable = document.getElementsByClassName("listTable instance" + selectedListCell[0])[0].children;
                        if(selectedListCell[1] < currTable.length){
                                let prevSelect = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
                                prevSelect.style.backgroundColor = "transparent";
                                selectedListCell[1] += 1;
                                highlightSelectedCell();
                                scrollToSelectedCell();
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(selectedTestTestOption == -1){
                                selectedTestTestOption = 1;
                        }else if(selectedTestTestOption == 6){
                                selectedTestTestOption = -1;
                        }else{
                                selectedTestTestOption += 1;
                        }
                        selectOption("testTest", selectedTestTestOption);
                }
                else if(isVisible(document.getElementById("testLogic"))){
                        if(selectedTestLogicOption == -1){
                                selectedTestLogicOption = 1;
                        }else if(selectedTestLogicOption == 5){
                                selectedTestLogicOption = -1;
                        }else{
                                selectedTestLogicOption += 1;
                        }
                        selectOption("testLogic", selectedTestLogicOption);
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(selectedlistNamesOption == -1){
                                selectedlistNamesOption = 1;
                        }else if(selectedlistNamesOption == 6){
                                selectedlistNamesOption = -1;
                        }else{
                                selectedlistNamesOption += 1;
                        }
                        selectOption("listNames", selectedlistNamesOption);
                }
                else if(isVisible(document.getElementById("listMath"))){
                        if(selectedlistMathOption == -1){
                                selectedlistMathOption = 1;
                        }else if(selectedlistMathOption == 8){
                                selectedlistMathOption = -1;
                        }else{
                                selectedlistMathOption += 1;
                        }
                        selectOption("listMath", selectedlistMathOption);
                }
        }else if(isVisible(document.getElementById("matrixDiv"))){
                if(isVisible(document.getElementById("matrixNames"))){
                        if(selectedMatrixNamesOption == -1){
                                selectedMatrixNamesOption = 1;
                        }else if(selectedMatrixNamesOption == 10){
                                selectedMatrixNamesOption = -1;
                        }else{
                                selectedMatrixNamesOption += 1;
                        }
                        selectOption("matrixNames", selectedMatrixNamesOption);
                }
                else if(isVisible(document.getElementById("matrixMath"))){
                        if(selectedMatrixMathOption == -1){
                                selectedMatrixMathOption = 1;
                        }else if(selectedMatrixMathOption == 7){
                                selectedMatrixMathOption = -1;
                        }else{
                                selectedMatrixMathOption += 1;
                        }
                        selectOption("matrixMath", selectedMatrixMathOption);
                }else if(isVisible(document.getElementById("matrixEdit"))){
                        if(selectedMatrixEditOption == -1){
                                selectedMatrixEditOption = 1;
                        }else if(selectedMatrixEditOption == 10){
                                selectedMatrixEditOption = -1;
                        }else{
                                selectedMatrixEditOption += 1;
                        }
                        selectOption("matrixEdit", selectedMatrixEditOption);
                }
        }else if(isVisible(document.getElementById("angleDiv"))){
                if(selectedAngleOption == -1){
                        selectedAngleOption = 1;
                }else if(selectedAngleOption == 1){
                        selectedAngleOption = -1;
                }else{
                        selectedAngleOption += 1;
                }
                selectOption("angleContent", selectedAngleOption);
        }
}

function selectOption(divId, selectedNum){
        let options = document.getElementById(divId).children;
        let currOption = options[selectedNum - 1];
        currOption.focus();

        currOption.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function upBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                scrollPrev(true);
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(selectedStatEditOption == -1){
                                selectedStatEditOption = 4;
                        }else if(selectedStatEditOption == 1){
                                selectedStatEditOption = -1;
                        }else{
                                selectedStatEditOption -= 1;
                        }
                        selectOption("statEdit", selectedStatEditOption);
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(selectedListCell[1] != 1){
                                let prevSelect = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
                                prevSelect.style.backgroundColor = "transparent";
                                selectedListCell[1] -= 1;
                                highlightSelectedCell();
                                scrollToSelectedCell();
                        }
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        if(selectedTestTestOption == -1){
                                selectedTestTestOption = 6;
                        }else if(selectedTestTestOption == 1){
                                selectedTestTestOption = -1;
                        }else{
                                selectedTestTestOption -= 1;
                        }
                        selectOption("testTest", selectedTestTestOption);
                }
                else if(isVisible(document.getElementById("testLogic"))){
                        if(selectedTestLogicOption == -1){
                                selectedTestLogicOption = 5;
                        }else if(selectedTestLogicOption == 1){
                                selectedTestLogicOption = -1;
                        }else{
                                selectedTestLogicOption -= 1;
                        }
                        selectOption("testLogic", selectedTestLogicOption);
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        if(selectedlistNamesOption == -1){
                                selectedlistNamesOption = 6;
                        }else if(selectedlistNamesOption == 1){
                                selectedlistNamesOption = -1;
                        }else{
                                selectedlistNamesOption -= 1;
                        }
                        selectOption("listNames", selectedlistNamesOption);
                }
                else if(isVisible(document.getElementById("listMath"))){
                        if(selectedlistMathOption == -1){
                                selectedlistMathOption = 8;
                        }else if(selectedlistMathOption == 1){
                                selectedlistMathOption = -1;
                        }else{
                                selectedlistMathOption -= 1;
                        }
                        selectOption("listMath", selectedlistMathOption);
                }
        }else if(isVisible(document.getElementById("matrixDiv"))){
                if(isVisible(document.getElementById("matrixNames"))){
                        if(selectedMatrixNamesOption == -1){
                                selectedMatrixNamesOption = 10;
                        }else if(selectedMatrixNamesOption == 1){
                                selectedMatrixNamesOption = -1;
                        }else{
                                selectedMatrixNamesOption -= 1;
                        }
                        selectOption("matrixNames", selectedMatrixNamesOption);
                }
                else if(isVisible(document.getElementById("matrixMath"))){
                        if(selectedMatrixMathOption == -1){
                                selectedMatrixMathOption = 7;
                        }else if(selectedMatrixMathOption == 1){
                                selectedMatrixMathOption = -1;
                        }else{
                                selectedMatrixMathOption -= 1;
                        }
                        selectOption("matrixMath", selectedMatrixMathOption);
                }else if(isVisible(document.getElementById("matrixEdit"))){
                        if(selectedMatrixEditOption == -1){
                                selectedMatrixEditOption = 10;
                        }else if(selectedMatrixEditOption == 1){
                                selectedMatrixEditOption = -1;
                        }else{
                                selectedMatrixEditOption -= 1;
                        }
                        selectOption("matrixEdit", selectedMatrixEditOption);
                }
        }else if(isVisible(document.getElementById("angleDiv"))){
                if(selectedAngleOption == -1){
                        selectedAngleOption = 1;
                }else if(selectedAngleOption == 1){
                        selectedAngleOption = -1;
                }else{
                        selectedAngleOption -= 1;
                }
                selectOption("angleContent", selectedAngleOption);
        }
}

function leftBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(document.getElementById("userInput").selectionStart > 0){
                        document.getElementById("userInput").selectionStart -= 1;
                        document.getElementById("userInput").selectionEnd = document.getElementById("userInput").selectionStart;
                        refocusInput("userInput");
                }else{
                        document.getElementById("userInput").selectionStart = 0;
                        document.getElementById("userInput").selectionEnd = document.getElementById("userInput").selectionStart;
                        refocusInput("userInput");
                }
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        return;
                }else if(isVisible(document.getElementById("statCalc"))){
                        statEditBtn();
                }else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(selectedListCell[0] > 1){
                                let nextList = document.getElementsByClassName("listTable instance" + (selectedListCell[0] - 1))[0].children;
                                let prevSelect = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
                                prevSelect.style.backgroundColor = "transparent";
                                if(nextList.length < selectedListCell[1]){
                                        selectedListCell[0] -= 1;
                                        selectedListCell[1] = nextList.length;
                                }else{
                                        selectedListCell[0] -= 1;
                                }
                                highlightSelectedCell();
                                scrollToSelectedCell();
                        }
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        return;
                }else if(isVisible(document.getElementById("listMath"))){
                        listNamesBtn();
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        return;
                }else if(isVisible(document.getElementById("testLogic"))){
                        testTestBtn();
                }
        }else if(isVisible(document.getElementById("matrixDiv"))){
                if(isVisible(document.getElementById("matrixNames"))){
                        return;
                }else if(isVisible(document.getElementById("matrixMath"))){
                        matrixNamesBtn();
                }else if(isVisible(document.getElementById("matrixEdit"))){
                        matrixMathBtn();
                }
        }
}

function rightBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(document.getElementById("userInput").selectionStart < document.getElementById("userInput").value.length){
                        document.getElementById("userInput").selectionStart += 1;
                        document.getElementById("userInput").selectionEnd = document.getElementById("userInput").selectionStart;
                        refocusInput("userInput");
                }else{
                        document.getElementById("userInput").selectionStart = document.getElementById("userInput").value.length;
                        document.getElementById("userInput").selectionEnd = document.getElementById("userInput").selectionStart;
                        refocusInput("userInput");
                }
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        statCalcBtn();
                }else if(isVisible(document.getElementById("statCalc"))){
                        return;
                }else if(isVisible(document.getElementById("statEditEditDiv"))){
                        if(selectedListCell[0] < 6){
                                let nextList = document.getElementsByClassName("listTable instance" + (selectedListCell[0] + 1))[0].children;
                                let prevSelect = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
                                prevSelect.style.backgroundColor = "transparent";
                                if(nextList.length < selectedListCell[1]){
                                        selectedListCell[0] += 1;
                                        selectedListCell[1] = nextList.length;
                                }else{
                                        selectedListCell[0] += 1;
                                }
                                highlightSelectedCell();
                                scrollToSelectedCell();
                        }
                }
        }else if(isVisible(document.getElementById("statList"))){
                if(isVisible(document.getElementById("listNames"))){
                        listMathBtn();
                }else if(isVisible(document.getElementById("listMath"))){
                        return;
                }
        }else if(isVisible(document.getElementById("testDiv"))){
                if(isVisible(document.getElementById("testTest"))){
                        testLogicBtn();
                }else if(isVisible(document.getElementById("testLogic"))){
                        return;
                }
        }else if(isVisible(document.getElementById("matrixDiv"))){
                if(isVisible(document.getElementById("matrixNames"))){
                        matrixMathBtn();
                }else if(isVisible(document.getElementById("matrixMath"))){
                        matrixEditBtn();
                }else if(isVisible(document.getElementById("matrixEdit"))){
                        return;
                }
        }
}

function statEditBtn(){
        document.getElementById("statEditEditDiv").style.display = "none";
        document.getElementById("statEdit").style.display = "block";
        selectedStatEditOption = -1;
        document.getElementById("statCalc").style.display = "none";

        document.getElementById("calcOption").style.backgroundColor = "transparent";
        document.getElementById("calcOption").style.color = "black";
        document.getElementById("editOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("editOption").style.color = "white";
}

function statCalcBtn(){
        document.getElementById("statEdit").style.display = "none";
        document.getElementById("statEditEditDiv").style.display = "none";
        document.getElementById("statCalc").style.display = "block";

        document.getElementById("calcOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("calcOption").style.color = "white";
        document.getElementById("editOption").style.backgroundColor = "transparent";
        document.getElementById("editOption").style.color = "black";
}

function listNamesBtn(){
        document.getElementById("listNames").style.display = "block";
        selectedlistNamesOption = -1;
        document.getElementById("listMath").style.display = "none";

        document.getElementById("mathOption").style.backgroundColor = "transparent";
        document.getElementById("mathOption").style.color = "black";
        document.getElementById("namesOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("namesOption").style.color = "white";
}

function listMathBtn(){
        document.getElementById("listNames").style.display = "none";
        document.getElementById("listMath").style.display = "block";
        selectedlistMathOption = -1;
        
        document.getElementById("mathOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("mathOption").style.color = "white";
        document.getElementById("namesOption").style.backgroundColor = "transparent";
        document.getElementById("namesOption").style.color = "black";
}

function testTestBtn(){
        document.getElementById("testLogic").style.display = "none";
        document.getElementById("testTest").style.display = "block";
        selectedTestTestOption = -1;

        document.getElementById("testOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("testOption").style.color = "white";
        document.getElementById("logicOption").style.backgroundColor = "transparent";
        document.getElementById("logicOption").style.color = "black";
}

function testLogicBtn(){
        document.getElementById("testTest").style.display = "none";
        document.getElementById("testLogic").style.display = "block";
        selectedTestLogicOption = -1;

        document.getElementById("logicOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("logicOption").style.color = "white";
        document.getElementById("testOption").style.backgroundColor = "transparent";
        document.getElementById("testOption").style.color = "black";
}

function matrixNamesBtn(){
        document.getElementById("matrixMath").style.display = "none";
        document.getElementById("matrixEdit").style.display = "none";
        document.getElementById("matrixNames").style.display = "block";
        selectedMatrixNamesOption = -1;

        document.getElementById("matrixNamesOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("matrixNamesOption").style.color = "white";
        document.getElementById("matrixMathOption").style.backgroundColor = "transparent";
        document.getElementById("matrixMathOption").style.color = "black";
        document.getElementById("matrixEditOption").style.backgroundColor = "transparent";
        document.getElementById("matrixEditOption").style.color = "black";
}

function matrixMathBtn(){
        document.getElementById("matrixEdit").style.display = "none";
        document.getElementById("matrixNames").style.display = "none";
        document.getElementById("matrixMath").style.display = "block";
        selectedMatrixMathOption = -1;

        document.getElementById("matrixMathOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("matrixMathOption").style.color = "white";
        document.getElementById("matrixNamesOption").style.backgroundColor = "transparent";
        document.getElementById("matrixNamesOption").style.color = "black";
        document.getElementById("matrixEditOption").style.backgroundColor = "transparent";
        document.getElementById("matrixEditOption").style.color = "black";
}

function matrixEditBtn(){
        document.getElementById("matrixMath").style.display = "none";
        document.getElementById("matrixNames").style.display = "none";
        document.getElementById("matrixEdit").style.display = "block";
        selectedMatrixEditOption = -1;

        document.getElementById("matrixEditOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("matrixEditOption").style.color = "white";
        document.getElementById("matrixNamesOption").style.backgroundColor = "transparent";
        document.getElementById("matrixNamesOption").style.color = "black";
        document.getElementById("matrixMathOption").style.backgroundColor = "transparent";
        document.getElementById("matrixMathOption").style.color = "black";
}

function mathMathBtn(){
        document.getElementById("mathPrb").style.display = "none";
        document.getElementById("mathNum").style.display = "none";
        document.getElementById("mathMath").style.display = "block";
        selectedMathMathOption = -1;

        document.getElementById("mathMathOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("mathMathOption").style.color = "white";
        document.getElementById("mathNumOption").style.backgroundColor = "transparent";
        document.getElementById("mathNumOption").style.color = "black";
        document.getElementById("mathPrbOption").style.backgroundColor = "transparent";
        document.getElementById("mathPrbOption").style.color = "black";
}

function mathNumBtn(){
        document.getElementById("mathPrb").style.display = "none";
        document.getElementById("mathMath").style.display = "none";
        document.getElementById("mathNum").style.display = "block";
        selectedMathNumOption = -1;
        document.getElementById("mathNumOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("mathNumOption").style.color = "white";
        document.getElementById("mathMathOption").style.backgroundColor = "transparent";
        document.getElementById("mathMathOption").style.color = "black";
        document.getElementById("mathPrbOption").style.backgroundColor = "transparent";
        document.getElementById("mathPrbOption").style.color = "black";
}

function mathPrbBtn(){
        document.getElementById("mathNum").style.display = "none";
        document.getElementById("mathMath").style.display = "none";
        document.getElementById("mathPrb").style.display = "block";
        selectedMathPrbOption = -1;

        document.getElementById("mathPrbOption").style.backgroundColor = "#DFAFB1";
        document.getElementById("mathPrbOption").style.color = "white";
        document.getElementById("mathMathOption").style.backgroundColor = "transparent";
        document.getElementById("mathMathOption").style.color = "black";
        document.getElementById("mathNumOption").style.backgroundColor = "transparent";
        document.getElementById("mathNumOption").style.color = "black";
}

function testTestChoose(val){
        if(val == 1){
                showScreen("normDiv");
                displayInput(" = ", "userInput");
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput(" ≠ ", "userInput");
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput(" > ", "userInput");
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput(" ≥ ", "userInput");
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput(" < ", "userInput");
                refocusInput("userInput");
        }else if(val == 6){
                showScreen("normDiv");
                displayInput(" ≤ ", "userInput");
                refocusInput("userInput");
        }
}

function testLogicChoose(val){
        if(val == 1){
                showScreen("normDiv");
                displayInput(" % ", "userInput");
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput(" and ", "userInput");
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput(" or ", "userInput");
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput(" xor ", "userInput");
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput(" not(", "userInput");
                refocusInput("userInput");
        }
}

function statEditChoose(v){
        v = parseInt(v);
        if(v == 1){
                document.getElementById("statEditEditDiv").style.display = "block";
                document.getElementById("statEdit").style.display = "none";
                onloadStatEditEdit();
        }else if(v == 2){
                showScreen("normDiv");
                displayInput("sortA(", "userInput");
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("sortD(", "userInput");
                refocusInput("userInput");
        }else if(v == 4){
                showScreen("normDiv");
                displayInput("clrList(", "userInput");
                refocusInput("userInput");
        }
}

function angleChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("°", "userInput");
                refocusInput("userInput"); 
        }
}

function listNamesChoose(val){
        showScreen("normDiv");
        displayInput("L" + val, "userInput");
        refocusInput("userInput");
}

function matrixNamesChoose(val){
        let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
        showScreen("normDiv");
        displayInput("[" + matrices[val - 1] + "]", "userInput");
        refocusInput("userInput");
}

function matrixMathChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("det(", "userInput");
                refocusInput("userInput");
        }else if(v == 2){
                showScreen("normDiv");
                displayInput("ᵀ", "userInput");
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("dim(", "userInput");
                refocusInput("userInput");
        }else if(v == 4){
                showScreen("normDiv");
                displayInput("fill(", "userInput");
                refocusInput("userInput");
        }else if(v == 5){
                showScreen("normDiv");
                displayInput("identity(", "userInput");
                refocusInput("userInput");
        }else if(v == 6){
                showScreen("normDiv");
                displayInput("randM(", "userInput");
                refocusInput("userInput");
        }else if(v == 7){
                showScreen("normDiv");
                displayInput("identity(", "userInput");
                refocusInput("userInput");
        }
}

function statBtn(){
        if(secondOn){
                listNamesBtn();
                showScreen("statList");
                toggle2nd();
        }else if(alphaOn){
                toggleAlpha();
                refocusInput("userInput");
                refocusInput("currValInput");
        }else{
                statEditBtn();
                showScreen("statDiv");
        }
}

function highlightSelectedCell(){
        let selected = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
        selected.style.backgroundColor = "#DFAFB1";
        document.getElementById("currValP").innerHTML = "L<sub>" + selectedListCell[0] + "</sub>&#40;" + selectedListCell[1] + "&#41; = <input id='currValInput' type='text' autofocus>";
}

function onloadStatEditEdit(){
        selectedListCell = [1, list1.length + 1];
        highlightSelectedCell();
        refocusInput("currValInput");
}
//stdDev->std(), 
function listMathChoose(val){
        if(val == 1){
                showScreen("normDiv");
                displayInput("min(", "userInput");
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput("max(", "userInput");
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput("mean(", "userInput");
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput("median(", "userInput");
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput("sum(", "userInput");
                refocusInput("userInput");
        }else if(val == 6){
                showScreen("normDiv");
                displayInput("prod(", "userInput");
                refocusInput("userInput");
        }else if(val == 7){
                showScreen("normDiv");
                displayInput("stdDev(", "userInput");
                refocusInput("userInput");
        }else if(val == 8){
                showScreen("normDiv");
                displayInput("variance(", "userInput");
                refocusInput("userInput");
        }
}

//matrix: det, T, dim, fill, identity, randM,augment, rref, 
//listTableEntry list1 instance1

function selectCell(cn){
        let prevSelect = document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
        prevSelect.style.backgroundColor = "transparent";
        cn = cn.substring(15, cn.length);
        let listNum = parseInt(cn.substring(4, cn.indexOf(" ")));
        let instanceNum = parseInt(cn.substring(cn.indexOf("instance") + 8, cn.length));

        selectedListCell = [listNum, instanceNum];
        
        highlightSelectedCell();
        refocusInput("currValInput");
}