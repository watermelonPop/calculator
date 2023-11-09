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

let inputFocusInd = 1;
let matrixSelectInd = [-1, -1];
let matrixA = [[0]];
let matrixB = [[0]];
let matrixC = [[0]];
let matrixD = [[0]];
let matrixE = [[0]];
let matrixF = [[0]];
let matrixG = [[0]];
let matrixH = [[0]];
let matrixI = [[0]];
let matrixJ = [[0]];

let currInputOrig = "";
let currFormatted = "";
let tester = 0;

let currY1Orig = "";
let currY2Orig = "";
let currY3Orig = "";
let currY4Orig = "";
let currY5Orig = "";
let currY6Orig = "";
let currY7Orig = "";
let currY8Orig = "";
let currY9Orig = "";
let currY10Orig = "";

var input = document.getElementById("userInput");
input.select();

scrollToBottom();

let focusedEq;

document.addEventListener("DOMContentLoaded", function() {
        let focusedInput = null;
      
        // Add focus event listeners to each text input
        const y1 = document.getElementById("y1");
        const y2 = document.getElementById("y2");
        const y3 = document.getElementById("y3");
        const y4 = document.getElementById("y4");
        const y5 = document.getElementById("y5");
        const y6 = document.getElementById("y6");
        const y7 = document.getElementById("y7");
        const y8 = document.getElementById("y8");
        const y9 = document.getElementById("y9");
        const y10 = document.getElementById("y10");

        focusedEq = y1;
      
        y1.addEventListener("focus", function() {
          focusedEq = y1;
        });
      
        y2.addEventListener("focus", function() {
          focusedEq = y2;
        });
      
        y3.addEventListener("focus", function() {
          focusedEq = y3;
        });

        y4.addEventListener("focus", function() {
                focusedEq = y4;
        });

        y5.addEventListener("focus", function() {
                focusedEq = y5;
        });

        y6.addEventListener("focus", function() {
        focusedEq = y6;
        });
        y7.addEventListener("focus", function() {
        focusedEq = y7;
        });
        y8.addEventListener("focus", function() {
        focusedEq = y8;
        });
        y9.addEventListener("focus", function() {
        focusedEq = y9;
        });
        y10.addEventListener("focus", function() {
        focusedEq = y10;
        });
});



//parse sin, cos, tan, asin, acos, atan, sqrt,log, ln,  10^, e^
function addPrevCalc(calc, result){
        numPrev++;
        result = filterAns(result);
        document.getElementsByClassName("prevCalcDiv")[0].innerHTML += "<div class='calcResDiv instance" + numPrev + "'><p class='calc'>" + calc + "</p> <p class='prevResult'>" + result + "</p></div>";
        //katex.render(result, document.getElementById("prevCalcDiv"), {throwOnError: false});
        scrollToBottom();
        allPrevCalc.push(calc);
        allPrevAns.push(result);
}

function displayInput(val, id){
        document.getElementById(id).value += val;
        //currInputOrig += val;
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

function scrollToBottom(){
        var scrollObj = document.getElementsByClassName("prevCalcDiv")[0]
        scrollObj.scrollTop = scrollObj.scrollHeight-40;        
}

function isVisible(e) {
        return !!( e.offsetWidth || e.offsetHeight || e.getClientRects().length );
}

document.getElementById("userInput").addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === "Backspace" || key === "Delete") {
                if(currInputOrig.trim() == ""){
                        currFormatted = "";
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                }else{
                        currInputOrig = currInputOrig.slice(0, currInputOrig.length-1);
                        currFormatted = currFormatted.slice(0, currFormatted.length-1);
                }
        }
});

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
        }if(showId != "mathDiv"){
                document.getElementById("mathDiv").style.display = "none";
        }
        if(showId != "yEqDiv"){
                document.getElementById("yEqDiv").style.display = "none";
        }
        if(showId != "matrixEditorDiv"){
                let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];
                let matrixArr = matricesVals[matrices.indexOf(matrixLetter)];

                document.getElementById("matrixEditorDiv").style.display = "none";
                inputFocusInd = 1;
                document.getElementById("matrixRowsInput").style.backgroundColor = "#DFAFB1";
                document.getElementById("matrixColsInput").style.backgroundColor = "transparent";
                
                document.getElementById("matrixEditInput").value = "";
                displayInput(matrixArr.length, "matrixEditInput");
                matrixSelectInd = [-1, -1];
                highlightMatrixCell();
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

function refocusInput(id){
        document.getElementById(id).focus();
}

//katex.render("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById("tester"), {throwOnError: false});

function subtractStr(str1, str2){ // str1 - str2
        if(str1.substring(0, str2.length) != str2){
                return false;
        }
        return str1.substring(str2.length, str1.length);
}

decToFrac = dec =>
  [...Array(1000).keys()].flatMap(
    i => [...Array(1000).keys()].map(
      j => [
        i + 1, j + 1, (i + 1) / (j + 1),
        Math.abs(((i + 1) / (j + 1)) - dec)
      ]
    )
  ).sort((a, b) => a[3] - b[3])[0].slice(0, 2)

//alert(math.evaluate("size([[0], [0]])"));
function solve(eq){

        let ans = "error";
        if(eq.includes("→")){
                if(allVars.includes(eq.substr(0, eq.indexOf("→")).trim())){
                        let varDest = eq.substr(0, eq.indexOf("→")).trim();
                        varStorage[varStorage.indexOf(varDest)] = eq.substr(eq.indexOf("→") + 1, eq.length).trim();
                        ans = eq.substr(eq.indexOf("→") + 1, eq.length).trim();
                }
                return ans;
        }
        if(eq.includes("clrList(")){
                if(!parenIsClosed(eq, eq.indexOf("clrList(") + 7)){
                        return "error";
                }
                let beginInd = eq.indexOf("clrList(") + 7;
                let endInd = findClosedParen(eq, beginInd);
                let innerContent = eq.substring(beginInd + 1, endInd);
                if(innerContent.trim().length != 2 || innerContent.trim()[0] != "L"){
                        return "error";
                }
                let listNum = parseInt(innerContent[1]);
                clearList(listNum)
                return "[]";
        }

        if(eq.includes("fill(") && parenIsClosed(eq, eq.indexOf("fill(") + 4)){
                
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matrixVals = [matrixA, matrixB, matrixC, matrixD, matrixE, matrixF, matrixG, matrixH, matrixI, matrixJ];

                
                let beginInd = eq.indexOf("fill(") + 4;
                let endInd = findClosedParen(eq, beginInd);
                let innerContent = eq.substring(beginInd + 1, endInd).split(",");
                if(innerContent[1].length == 3 && innerContent[1][0] == "[" && innerContent[1][2] == "]" && matrices.includes(innerContent[1][1])){
                        let ind = matrices.indexOf(innerContent[1][1]);
                        for(let i = 0; i < matrixVals[ind].length; i++){
                                for(let j = 0; j < matrixVals[ind][i].length; j++){
                                        matrixVals[ind][i][j] = innerContent[0];
                                }
                        }
                }
                //if(innerContent)
                eq = eq.substr(0, eq.indexOf("fill(")) + innerContent[1] + eq.substr(endInd + 1, eq.length);
        }

        eq = replaceAllSortA(eq);
        eq = replaceAllSortD(eq);
        eq = parseEq(eq);

        if(eq.includes(">Frac")){
                ans = "error";
                try{
                        ans = math.evaluate(eq.substr(0, eq.indexOf(">Frac")));
                }catch(error){
                }
                if(ans != "error"){
                        fracVer = decToFrac(parseFloat(ans));
                        fracStr = fracVer[0] + "/" + fracVer[1];
                        return fracStr;
                }
                return ans;
        }

        if(eq.includes(">Dec")){
                ans = "error";
                try{
                        ans = math.evaluate(eq.substr(0, eq.indexOf(">Dec")));
                }catch(error){
                }
                return ans;
        }
        /*if(eq.includes("fill(") && parenIsClosed(eq, eq.indexOf("fill(") + 5)){
                alert(eq);
        }*/
        if(eq.includes("randM(") && parenIsClosed(eq, eq.indexOf("randM(") + 5)){
                let beginInd = eq.indexOf("randM(") + 5;
                let endInd = findClosedParen(eq, beginInd);
                let innerContent = eq.substring(beginInd + 1, endInd).split(",");
                let rows = parseInt(innerContent[0].trim());
                let cols = parseInt(innerContent[1].trim());

                let retArr = [];

                for(let i = 0; i < rows; i++){
                        let rowArr = [];
                        for(let j = 0; j < cols; j++){
                                let randNum = Math.floor(Math.random() * 10);
                                let isNeg = Math.floor(Math.random() * 2);
                                if(isNeg == 1){
                                        randNum = randNum * -1;
                                }
                                rowArr.push(randNum);
                        }
                        retArr.push(rowArr);
                }
                return retArr;
                //eq = eq.substr(0, eq.indexOf("randM(")) + retArr + eq.substr(endInd + 1, eq.length);
                //alert(eq);
        }
        if(eq.includes("augment(") && parenIsClosed(eq, eq.indexOf("augment(") + 7)){
                let beginInd = eq.indexOf("augment(") + 7;
                let endInd = findClosedParen(eq, beginInd);
                let innerContent = eq.substring(beginInd + 1, endInd);

                if(bracketIsClosed(innerContent, 0)){
                        let endBrack = findClosedBracket(innerContent, 0);
                        let first = innerContent.substr(0, endBrack + 1);
                        let second = innerContent.substr(endBrack + 2, innerContent.length);
                        first = JSON.parse(first);
                        
                        second = JSON.parse(second);
                        //alert(first);
                        //alert(second);

                        if(first.length != second.length){
                                return "error";
                        }
                        let retArr = [];
                        for(let i = 0; i < first.length; i++){
                                let rowArr = [];
                                let firstRow = first[i];
                                let secondRow = second[i];
                                for(let j = 0; j < firstRow.length; j++){
                                        rowArr.push(firstRow[j]);
                                }
                                for(let j = 0; j < secondRow.length; j++){
                                        rowArr.push(secondRow[j]);
                                }
                                retArr.push(rowArr);
                        }
                        return retArr;
                }
                
                //eq = eq.substr(0, eq.indexOf("randM(")) + retArr + eq.substr(endInd + 1, eq.length);
                //alert(eq);
        }

        try{
                ans = math.evaluate(eq);
                //alert(ans);
                if(parseFloat(ans) < math.pow(10, -15) && parseFloat(ans) > -1*math.pow(10, -15)){
                        ans = "0";
                }
        }catch(error){
        }
        
        return ans;
}

function separateArrs(str){
        if(str[0] != "["){
                for(let i = 1; i < str.length; i++){

                }
        }else{
                return false;
        }
}

function clears(id){
        document.getElementById(id).value = "";
        document.getElementById(id).innerHTML = "";
        //currInputOrig = "";
        refocusInput(id);
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
                        //alert(currInputOrig);
                        //let ans = JSON.stringify(solve(currInputOrig));
                        let ans = solve(currInputOrig);
                        addPrevCalc(currFormatted, ans);
                        katex.render(currFormatted, document.getElementsByClassName("calcResDiv instance" + numPrev)[0].children[0], {throwOnError: false});
                        //document.getElementsByClassName("calcResDiv instance" + numPrev)[0].children[1].innerHTML = "hello";
                        katex.render(filterAns(ans), document.getElementsByClassName("calcResDiv instance" + numPrev)[0].children[1], {throwOnError: false});
                        currInputOrig = "";
                        currFormatted = "";
                        clears("userInput");
                        clears("formattedEq");
                }    
        }else if(isVisible(document.getElementById("statDiv"))){
                if(isVisible(document.getElementById("statEdit"))){
                        if(selectedStatEditOption != -1){
                                statEditChoose(selectedStatEditOption);
                        }
                }
                else if(isVisible(document.getElementById("statEditEditDiv"))){
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
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];

                //let inputFocusInd = 1;let matrixSelectInd = [-1, -1];
                let newMatrix = [];
                if(inputFocusInd == 1){
                        document.getElementById("matrixRowsInput").innerHTML = document.getElementById("matrixEditInput").value;
                        let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                        let arrN = matrices.indexOf(matrixLetter);
                        let targetMatrix = matricesVals[arrN];
                        newMatrix = updateMatrixRows(matrixLetter, targetMatrix, document.getElementById("matrixEditInput").value, targetMatrix[0].length);
                        document.getElementsByClassName("matrixDisplay")[0].innerHTML = matrixToTable(newMatrix);
                        refocusInput("matrixEditInput");
                }else if(inputFocusInd == 2){
                        document.getElementById("matrixColsInput").innerHTML = document.getElementById("matrixEditInput").value;
                        let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                        let arrN = matrices.indexOf(matrixLetter);
                        let targetMatrix = matricesVals[arrN];
                        newMatrix = updateMatrixCols(matrixLetter, targetMatrix, document.getElementById("matrixEditInput").value, targetMatrix[0].length);
                        document.getElementsByClassName("matrixDisplay")[0].innerHTML = matrixToTable(newMatrix);
                        refocusInput("matrixEditInput");
                }else if(inputFocusInd == -1){
                        let letter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                        if(letter == "A"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixA;
                        }else if(letter == "B"){
                                matrixB[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixB;
                        }else if(letter == "C"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixC;
                        }else if(letter == "D"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixD;
                        }else if(letter == "E"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixE;
                        }else if(letter == "F"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixF;
                        }else if(letter == "G"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixG;
                        }else if(letter == "H"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixH;
                        }else if(letter == "I"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixI;
                        }else if(letter == "J"){
                                matrixA[matrixSelectInd[0]-1][matrixSelectInd[1]-1] = document.getElementById("matrixEditInput").value;
                                newMatrix = matrixI;
                        }
                        document.getElementsByClassName("matrixDisplay")[0].innerHTML = matrixToTable(newMatrix);
                        highlightMatrixCell();
                        refocusInput("matrixEditInput");
                }
        }
}

function filterAns(eq){
        //alert(eq.toString());
        //alert(str(eq));
        if(typeof eq == 'object'){
                return formatMatrix(eq);
        }
        return eq.toString();
        /*eqtemp = eq;
        let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
        let matrixVals = [matrixA, matrixB, matrixC, matrixD, ,atrixE, matrixF, matrixG, matrixH, matrixI, matrixJ];
        for(let i = 0; i < matrices.length; i++){
                if(eqtemp.includes("[" + matrices[i] + "]")){
                        eqtemp.replaceAll("[" + matrices[i] + "]", formatMatrix(matrixVals[i]));
                }
        }
        return eqtemp;*/
        //if(eqtemp.includes("[A]"))
}

function formatMatrix(arr){
        if(arr._data != undefined){
                arr = arr._data;
                
        }
        let formatStr = "\\begin{bmatrix}";
        /*for(let i = 0; i < arr.length; i++){
                alert(arr[i]);
        }*/
        if(arr[0].length != undefined){
                for(let i = 0; i < arr.length; i++){
                        let rowStr = "";
                        for(let j = 0; j < arr[i].length; j++){
                                rowStr += arr[i][j]
                                if(j != arr[i].length - 1){
                                        rowStr += " & ";
                                }
                        }
                        if(i != arr.length - 1){
                                rowStr += "\\\\";
                        }
                        formatStr += rowStr;
                }
                formatStr += "\\end{bmatrix}"
                return formatStr;
        }
        return arr.toString();
}

function updateMatrixCols(letter, arr, newCols){
        let tempArr = [];
        for(let i = 0; i < arr.length; i++){
                let r = [];
                for(let j = 0; j < arr[0].length; j++){
                        r.push(arr[i][j]);
                }
                tempArr.push(r);
        }
        if(arr[0].length < newCols){
                for(let i = 0; i < newCols - arr[0].length; i++){
                        for(let j = 0; j < arr.length; j++){
                                tempArr[j].push(0);
                        }
                }
        }else if(arr[0].length == newCols){
                return arr;
        }else if(arr[0].length > newCols){
                let numToCut = arr[0].length - newCols;
                for(let i = 0; i < arr.length; i++){
                        tempArr[i].pop();
                }
        }
        if(letter == "A"){
                matrixA = tempArr;
        }else if(letter == "B"){
                matrixB = tempArr;
        }else if(letter == "C"){
                matrixC = tempArr;
        }else if(letter == "D"){
                matrixD = tempArr;
        }else if(letter == "E"){
                matrixE = tempArr;
        }else if(letter == "F"){
                matrixF = tempArr;
        }else if(letter == "G"){
                matrixG = tempArr;
        }else if(letter == "H"){
                matrixH = tempArr;
        }else if(letter == "I"){
                matrixI = tempArr;
        }else if(letter == "J"){
                matrixJ = tempArr;
        }
        return tempArr;
}

function updateMatrixRows(letter, arr, newRows){
        let tempArr = [];
        for(let i = 0; i < arr.length; i++){
                let r = [];
                for(let j = 0; j < arr[0].length; j++){
                        r.push(arr[i][j]);
                }
                tempArr.push(r);
        }
        if(arr.length < newRows){
                for(let i = 0; i < newRows - arr.length; i++){
                        let row = [];
                        for(let j = 0; j < tempArr[0].length; j++){
                                row.push(0);
                        }
                        tempArr.push(row);
                }
        }else if(arr.length == newRows){
                return arr;
        }else if(arr.length > newRows){
                let numToCut = arr.length - newRows;
                for(let i = 0; i < numToCut; i++){
                        tempArr.pop();
                }
        }
        if(letter == "A"){
                matrixA = tempArr;
        }else if(letter == "B"){
                matrixB = tempArr;
        }else if(letter == "C"){
                matrixC = tempArr;
        }else if(letter == "D"){
                matrixD = tempArr;
        }else if(letter == "E"){
                matrixE = tempArr;
        }else if(letter == "F"){
                matrixF = tempArr;
        }else if(letter == "G"){
                matrixG = tempArr;
        }else if(letter == "H"){
                matrixH = tempArr;
        }else if(letter == "I"){
                matrixI = tempArr;
        }else if(letter == "J"){
                matrixJ = tempArr;
        }
        return tempArr;;
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

function replaceAllSortA(eq){
        while(eq.includes("sortA")){
                eq = replaceOneSortA(eq);
        }
        return eq;
}

function replaceOneSortA(eq){
        eq = parseEq(eq);
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
        eq = parseEq(eq);
        let origList = JSON.parse(eq.substring(eq.indexOf("(") + 1, eq.indexOf(")")));
        let sortedList;
        sortedList = sortD(origList);
        eq = eq.substring(0, eq.indexOf("sortD")) + "[" + sortedList.toString() + "]" + eq.substring(eq.indexOf(")") + 1, eq.length);
        return eq;
}

function scrollToSelectedCell(){
        let cell =  document.getElementsByClassName("listTableEntry list" + selectedListCell[0] + " instance" + selectedListCell[1])[0];
        let off = cell.offsetTop;
        document.getElementById("listRow").scrollTop = off;
}

function clearList(listNum){
        //redo inner html, make sure to reset current selected cell and highlight
        let currTable = document.getElementsByClassName("listTable instance" + listNum)[0];
        currTable.innerHTML="<tr><th class='listTableHeader'>L<sub>1</sub></th></tr><tr><th class='listTableEntry list" + listNum + " instance1 initialSelect'>----</th></tr>";
        selectedListCell = [1, 1];
        highlightSelectedCell();
}

function parseEq(eq){
        let ret = eq;
        //replace all x with *
        //replace all / with /
        ret = ret.replaceAll("stdDev", "std");
        ret = ret.replaceAll("int", "floor");
        ret = ret.replaceAll("log(", "log10(");
        ret = ret.replaceAll("≥", ">=");
        ret = ret.replaceAll("°", " deg");
        //log, ln, logBASE
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

        //log -> log10 -- immediately
        //logBASE -> log, x -- after paren
        //ln -> log, e
        if(ret.includes("logBASE(") && parenIsClosed(ret, ret.indexOf("logBASE(") + 7)){
                let beginInd = ret.indexOf("logBASE(") + 7;
                let endInd = findClosedParen(ret, beginInd);
                let innerContent = ret.substring(beginInd + 1, endInd);
                let data = innerContent.split(',');
                ret = ret.substring(0, ret.indexOf("logBASE(")) + "log(" + data[0] + ", " + data[1] + ")" + ret.substring(endInd + 1, ret.length);
        }
        if(ret.includes("ln(") && parenIsClosed(ret, ret.indexOf("ln(") + 2)){
                let beginInd = ret.indexOf("ln(") + 2;
                let endInd = findClosedParen(ret, beginInd);
                let innerContent = ret.substring(beginInd + 1, endInd);
                ret = ret.substring(0, ret.indexOf("logBASE(")) + "log(" + innerContent + ", e)" + ret.substring(endInd + 1, ret.length);
        }

        ret = ret.replaceAll("L1", "[" + list1 + "]");
        ret = ret.replaceAll("L2", "[" + list2 + "]");
        ret = ret.replaceAll("L3", "[" + list3 + "]");
        ret = ret.replaceAll("L4", "[" + list4 + "]");
        ret = ret.replaceAll("L5", "[" + list5 + "]");
        ret = ret.replaceAll("L6", "[" + list6 + "]");

        if(ret.includes("[A]")){
                let matStr = "[";
                for(let i = 0; i < matrixA.length; i++){
                        matStr += "[" + matrixA[i] + "]";
                        if(i != matrixA.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[A]", matStr);
        }
        if(ret.includes("[B]")){
                let matStr = "[";
                for(let i = 0; i < matrixB.length; i++){
                        matStr += "[" + matrixB[i] + "]";
                        if(i != matrixB.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[B]", matStr);
        }if(ret.includes("[C]")){
                let matStr = "[";
                for(let i = 0; i < matrixC.length; i++){
                        matStr += "[" + matrixC[i] + "]";
                        if(i != matrixC.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[C]", matStr);
        }if(ret.includes("[D]")){
                let matStr = "[";
                for(let i = 0; i < matrixD.length; i++){
                        matStr += "[" + matrixD[i] + "]";
                        if(i != matrixD.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[D]", matStr);
        }if(ret.includes("[E]")){
                let matStr = "[";
                for(let i = 0; i < matrixE.length; i++){
                        matStr += "[" + matrixE[i] + "]";
                        if(i != matrixE.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[E]", matStr);
        }if(ret.includes("[F]")){
                let matStr = "[";
                for(let i = 0; i < matrixF.length; i++){
                        matStr += "[" + matrixF[i] + "]";
                        if(i != matrixF.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[F]", matStr);
        }if(ret.includes("[G]")){
                let matStr = "[";
                for(let i = 0; i < matrixG.length; i++){
                        matStr += "[" + matrixG[i] + "]";
                        if(i != matrixG.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[G]", matStr);
        }if(ret.includes("[H]")){
                let matStr = "[";
                for(let i = 0; i < matrixH.length; i++){
                        matStr += "[" + matrixH[i] + "]";
                        if(i != matrixH.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[H]", matStr);
        }if(ret.includes("[I]")){
                let matStr = "[";
                for(let i = 0; i < matrixI.length; i++){
                        matStr += "[" + matrixI[i] + "]";
                        if(i != matrixI.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[I]", matStr);
        }if(ret.includes("[J]")){
                let matStr = "[";
                for(let i = 0; i < matrixJ.length; i++){
                        matStr += "[" + matrixJ[i] + "]";
                        if(i != matrixJ.length - 1){
                                matStr += ",";
                        }
                }
                matStr += "]";
                ret = ret.replaceAll("[J]", matStr);
        }


        for(let i = 0; i < allVars.length; i++){
                if(ret.includes(allVars[i])){
                        ret = ret.replaceAll(allVars[i], varStorage[i]);
                }
        }
        if(ret.includes("=")){
                for(let i = 1; i <= ret.length; i++){
                        if(ret[i] == "=" && ret[i-1] != "=" && ret[i+1] != "=" && ret[i-1] != "!" && ret[i-1] != ">" && ret[i-1] != "<"){
                                ret = ret.substr(0, i) + "==" + ret.substr(i+1, ret.length);
                        }
                }
        }
        if(ret.includes("nDeriv(") && parenIsClosed(ret, ret.indexOf("nDeriv(") + 6)){
                let beginInd = ret.indexOf("nDeriv(") + 6;
                let endInd = findClosedParen(ret, beginInd);
                let innerContent = ret.substring(beginInd + 1, endInd);
                //exp, var, int
                let vals = innerContent.split(",");
                if(vals.length == 2){
                        ret = ret.substring(0, ret.indexOf("nDeriv(")) + "derivative(" + vals[0] + ")" + ret.substring(endInd + 1, ret.length);
                }else if(vals.length == 3){
                        //alert("hello");
                        //alert(vals);
                        let expr = math.derivative(vals[0], vals[1]);
                        expr = math.string(expr);
                        expr = expr.replaceAll(vals[1], vals[2]);
                        //alert(expr);
                        ret = ret.substring(0, ret.indexOf("nDeriv(")) + expr + ret.substring(endInd + 1, ret.length);
                }
        }

        if(ret.includes(")^T")){
                let beforeStr = ret.substr(0, ret.indexOf(")^T"));
                let beginInd = -1;
                for(let i = 0; i < beforeStr.length; i++){
                        if(beforeStr[i] == "("){
                                beginInd = i;
                        }
                }
                if(beginInd != -1){
                        let endInd = ret.indexOf(")^T");
                        let innerContent = ret.substring(beginInd + 1, endInd);
                        ret = ret.substr(0, beginInd) + "transpose(" + innerContent + ")" + ret.substr(endInd + 3, ret.length);
                }
        }
        ret = ret.replaceAll("dim(", "size(");
        
        return ret;
}

/*let expr = math.derivative("x^2", "x");
expr = math.string(expr);
expr = expr.replaceAll("x", "2");
alert(expr);*/
//alert(math.evaluate("size([[0, 0], [0, 0]])"));

const updateStrs = function(e){//ln, log, logBASE
        let currInput = e.target.value;

        if(currInput == currInputOrig){
                //do nothing
        }else if(currInput.includes(currInputOrig)){
                let otherStr = subtractStr(currInput, currInputOrig);
                if(otherStr == false){
                        currInputOrig = currInput;
                        currFormatted = parseFormatted(currInput);
                }else{
                        currInputOrig += otherStr;
                        currFormatted += otherStr;
                        currFormatted = parseFormatted(currFormatted);
                }
        }else{
                currInputOrig = currInput;
                currFormatted = parseFormatted(currInput);
        }
        document.getElementById("formattedEq").innerHTML = currFormatted;
        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});

        //currInput.replaceAll("-", " - ");
        
        currInputOrig = currInputOrig.replaceAll("°", " deg");

        //for enter btn
        /*
        currInputOrig = currInputOrig.replaceAll("*", " * ");
        currInputOrig = currInputOrig.replaceAll("=", "==");
        currInputOrig = currInputOrig.replaceAll("+", " + ");
        currInput.replaceAll("-", " - ");

        */
        document.getElementById("userInput").value = currInputOrig;
}

function parseFormatted(eq){
        let eqtemp = eq;

        //eqtemp = eqtemp.replace(/'*'/g, '×');
        eqtemp = eqtemp.replaceAll("asin", "\\sin^{-1}");
        eqtemp = eqtemp.replaceAll("acos", "\\cos^{-1}");
        eqtemp = eqtemp.replaceAll("atan", "\\tan^{-1}");
        //do degrees, sin, cos, tan, asin, acos, atan

        eqtemp = eqtemp.replaceAll(">=", " \\geq ");
        eqtemp = eqtemp.replaceAll("<=", " \\leq ");
        eqtemp = eqtemp.replaceAll("!=", "=\\not\\,");

        eqtemp = eqtemp.replaceAll("PI", "\\pi");
        //eqtemp = eqtemp.replaceAll("nthRoot", "\sqrt["); get n first
        //\sqrt[n]{x
        if(eqtemp.includes("sqrt(") && parenIsClosed(eqtemp, eqtemp.indexOf("sqrt(") + 4)){
                let beginInd = eqtemp.indexOf("sqrt(") + 4;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eq.substring(beginInd + 1, endInd);
                eqtemp = eqtemp.substring(0, eq.indexOf("sqrt(")) + "\\sqrt{" + innerContent + "\}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("cbrt(") && parenIsClosed(eqtemp, eqtemp.indexOf("cbrt(") + 4)){
                let beginInd = eqtemp.indexOf("cbrt(") + 4;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);

                eqtemp = eqtemp.substring(0, eq.indexOf("cbrt(")) + "\\sqrt[3]{" + innerContent + "\}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("nthRoot(") && parenIsClosed(eqtemp, eqtemp.indexOf("nthRoot(") + 7)){
                let beginInd = eqtemp.indexOf("nthRoot(") + 7;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                let vals = innerContent.split(",");

                eqtemp = eqtemp.substring(0, eq.indexOf("nthRoot(")) + "\\sqrt[" + vals[0] + "]{" + vals[1] + "\}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("fnInt(") && parenIsClosed(eqtemp, eqtemp.indexOf("fnInt(") + 5)){
                let beginInd = eqtemp.indexOf("fnInt(") + 5;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                let vals = innerContent.split(",");

                eqtemp = eqtemp.substring(0, eq.indexOf("fnInt(")) + "\\int_" + vals[2] + "^" + vals[3] + " " + vals[0] + "\\ d" + vals[1] + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("nDeriv(") && parenIsClosed(eqtemp, eqtemp.indexOf("nDeriv(") + 6)){
                let beginInd = eqtemp.indexOf("nDeriv(") + 6;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, int
                let vals = innerContent.split(",");

                eqtemp = eqtemp.substring(0, eq.indexOf("nDeriv(")) + "\\frac{d}{d" + vals[1] + "}\\ " + vals[0] + "\\ _{" + vals[1] + " = " + vals[2] + "}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("^(") && parenIsClosed(eqtemp, eqtemp.indexOf("^(") + 1)){
                let beginInd = eqtemp.indexOf("^(") + 1;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                //let vals = innerContent.split(",");

                eqtemp = eqtemp.substring(0, eq.indexOf("^(") + 1) + "{" + innerContent + "}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("∛(") && parenIsClosed(eqtemp, eqtemp.indexOf("∛(") + 1)){
                let beginInd = eqtemp.indexOf("∛(") + 1;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 2, endInd);

                eqtemp = eqtemp.substring(0, eq.indexOf("∛(")) + "\\sqrt[3]{" + innerContent + "}" + eq.substring(endInd + 1, eq.length);
        }
        if(eqtemp.includes("ⁿ√(") && parenIsClosed(eqtemp, eqtemp.indexOf("ⁿ√(") + 2)){
                let beginInd = eqtemp.indexOf("ⁿ√(") + 2;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                let vals = innerContent.split(",");
                if(vals.length == 2){
                        eqtemp = eqtemp.substring(0, eq.indexOf("ⁿ√(")) + "\\sqrt[" + vals[1] + "]{" + vals[0] + "}" + eq.substring(endInd + 1, eq.length);
                }
        }//alert(math.derivative("x^(2)", "x"));
        if(eqtemp.includes("logBASE(") && parenIsClosed(eqtemp, eqtemp.indexOf("logBASE(") + 7)){
                let beginInd = eqtemp.indexOf("logBASE(") + 7;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                let vals = innerContent.split(",");
                if(vals.length == 2){
                        eqtemp = eqtemp.substring(0, eq.indexOf("logBASE(")) + "log_{" + vals[1] + "}(" + vals[0] + ")" + eq.substring(endInd + 1, eq.length);
                }
        }
        if(eqtemp.includes("nCr(") && parenIsClosed(eqtemp, eqtemp.indexOf("nCr(") + 3)){
                let beginInd = eqtemp.indexOf("nCr(") + 3;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                let vals = innerContent.split(",");
                if(vals.length == 2){
                        eqtemp = eqtemp.substring(0, eq.indexOf("nCr(")) + "_{" + vals[0] + "}C_{" + vals[1] + "}" + eq.substring(endInd + 1, eq.length);
                }
        }

        if(eqtemp.includes("nPr(") && parenIsClosed(eqtemp, eqtemp.indexOf("nPr(") + 3)){
                let beginInd = eqtemp.indexOf("nPr(") + 3;
                let endInd = findClosedParen(eqtemp, beginInd);
                let innerContent = eqtemp.substring(beginInd + 1, endInd);
                //exp, var, lower, upper
                let vals = innerContent.split(",");
                if(vals.length == 2){
                        eqtemp = eqtemp.substring(0, eq.indexOf("nPr(")) + "_{" + vals[0] + "}P_{" + vals[1] + "}" + eq.substring(endInd + 1, eq.length);
                }
        }
        
        return eqtemp;
}

document.getElementById("userInput").addEventListener("input", updateStrs);
document.getElementById("userInput").addEventListener("propertychange", updateStrs);

function parenIsClosed(str, pos){
        if(findClosedParen(str, pos) == -1){
                return false;
        }else return true;
}

function bracketIsClosed(str, pos){
        if(findClosedBracket(str, pos) == -1){
                return false;
        }else return true;
}

function findClosedParen(str, pos) {
        if (str[pos] != '(') {
          throw new Error("No '(' at index " + pos);
        }
        let depth = 1;
        for (let i = pos + 1; i < str.length; i++) {
          switch (str[i]) {
          case '(':
            depth++;
            break;
          case ')':
            if (--depth == 0) {
              return i;
            }
            break;
          }
        }
        return -1;    // No matching closing parenthesis
}

function findClosedBracket(str, pos) {
        if (str[pos] != '[') {
          throw new Error("No '[' at index " + pos);
        }
        let depth = 1;
        for (let i = pos + 1; i < str.length; i++) {
          switch (str[i]) {
          case '[':
            depth++;
            break;
          case ']':
            if (--depth == 0) {
              return i;
            }
            break;
          }
        }
        return -1;    // No matching closing parenthesis
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
                        currFormatted = "";
                        currInputOrig = "";
                        clears("userInput");
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                clears("currValInput");
                        }
                }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                        clears("matrixEditInput");
                }
        }
}

function deletes(id){
        //currInputOrig = currInputOrig.substring(0, currInputOrig.length-1);
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
                        if(currInputOrig.trim() == ""){
                                currFormatted = "";
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                        }else{
                                currInputOrig = currInputOrig.slice(0, currInputOrig.length-1);
                                currFormatted = currFormatted.slice(0, currFormatted.length-1);
                                document.getElementById("userInput").value = currInputOrig;
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                        }
                }else if(isVisible(document.getElementById("statDiv"))){
                        if(isVisible(document.getElementById("statEditEditDiv"))){
                                deletes("currValInput");
                        }
                }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                        deletes("matrixEditInput");
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




function sinBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        //do inverse sin
                        displayInput('asin(', "userInput");
                        currFormatted += 'asin(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'asin(';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('E', "userInput");
                        currFormatted += 'E';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'E';
                        toggleAlpha();
                }
                else{
                        displayInput('sin(', "userInput");
                        currFormatted += 'sin(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'sin(';
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
                        currFormatted += 'acos(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'acos(';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('F', "userInput");
                        currFormatted += 'F';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'F';
                        toggleAlpha();
                }
                else{
                        displayInput('cos(', "userInput");
                        currFormatted += 'cos(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'cos(';
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
                        currFormatted += 'atan(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'atan(';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('G', "userInput");
                        currFormatted += 'G';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'G';
                        toggleAlpha();
                }
                else{
                        displayInput('tan(', "userInput");
                        currFormatted += 'tan(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'tan(';
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
                        currFormatted += 'PI';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'PI';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('H', "userInput");
                        currFormatted += 'H';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'H';
                        toggleAlpha();
                }
                else{
                        displayInput("^(", "userInput");
                        currFormatted += '^(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '^(';
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
                        currFormatted += 'sqrt(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'sqrt(';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("I", "userInput");
                        currFormatted += 'I';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'I';
                        toggleAlpha();
                }
                else{
                        displayInput('^(2)', "userInput");
                        currFormatted += '^{2}';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '^(2)';
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
                        currFormatted += 'e';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'e';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("M", "userInput");
                        currFormatted += 'M';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'M';
                        toggleAlpha();
                }
                else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' / ', "userInput");
                        currFormatted += ' / ';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '/';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("e", displayTo);
                        origArr[num - 1] += 'e';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("M", displayTo);
                        origArr[num - 1] += 'M';
                        toggleAlpha();
                }else{
                        displayInput(' / ', displayTo);
                        origArr[num - 1] += ' / ';
                }
                refocusInput(displayTo);
        }
}

function logBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("10^(", "userInput");
                        currFormatted += '10^(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '10^(';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("N", "userInput");
                        currFormatted += 'N';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'N';
                        toggleAlpha();
                }
                else{
                        displayInput('log(', "userInput");
                        currFormatted += 'log(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'log10(';
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

function lnBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("e^(", "userInput");
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("S", "userInput");
                        currFormatted += 'S';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'S';
                        toggleAlpha();
                }
                else{
                        displayInput('ln(', "userInput");
                        currFormatted += 'ln(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'ln(';
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
                        currFormatted += ':';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += ':';
                        toggleAlpha();
                }
                else{
                        displayInput('.', "userInput");
                        currFormatted += '.';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '.';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("i", displayTo);
                        origArr[num - 1] += 'i';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput(":", displayTo);
                        origArr[num - 1] += ':';
                        toggleAlpha();
                }else{
                        displayInput('.', displayTo);
                        origArr[num - 1] += '.';
                }
                refocusInput(displayTo);
        }
}

function yEqBtn(){
        if(secondOn){
                toggle2nd();
        }else{
                if(alphaOn){
                        toggleAlpha();
                }else{
                        showScreen("yEqDiv");
                        return;
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
                        currFormatted += '?';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '?';
                        toggleAlpha();        
                }
                else{
                        displayInput('-', "userInput");
                        currFormatted += '-';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '-';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("ans", displayTo);
                        origArr[num - 1] += 'ans';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("?", displayTo);
                        origArr[num - 1] += '?';
                        toggleAlpha();
                }else{
                        displayInput('-', displayTo);
                        origArr[num - 1] += '-';
                }
                refocusInput(displayTo);
        }
}


function addBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(alphaOn){
                        displayInput('"', "userInput");
                        currFormatted += '"';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '"';
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' + ', "userInput");
                        currFormatted += ' + ';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '+';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        toggle2nd();
                }else if(alphaOn){
                        displayInput('"', displayTo);
                        origArr[num - 1] += '"';
                        toggleAlpha();
                }else{
                        displayInput(' + ', displayTo);
                        origArr[num - 1] += ' + ';
                }
                refocusInput(displayTo);
        }
}

function subBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("]", "userInput");
                        currFormatted += ']';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += ']';
                        toggle2nd();
                }
                else if(alphaOn){
                        displayInput("W", "userInput");
                        currFormatted += 'W';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'W';
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' - ', "userInput");
                        currFormatted += ' - ';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '-';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("]", displayTo);
                        origArr[num - 1] += ']';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("W", displayTo);
                        origArr[num - 1] += 'W';
                        toggleAlpha();
                }else{
                        displayInput(' - ', displayTo);
                        origArr[num - 1] += ' - ';
                }
                refocusInput(displayTo);
        }
}


function multBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("[", "userInput");
                        currFormatted += '[';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '[';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("R", "userInput");
                        currFormatted += 'R';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'R';
                        toggleAlpha();
                }else{
                        if(document.getElementById("userInput").value == ""){
                                displayInput(allPrevAns[allPrevAns.length-1], "userInput");
                        }
                        displayInput(' × ', "userInput");
                        currFormatted += ' * ';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '*';
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
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("[", displayTo);
                        origArr[num - 1] += '[';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("R", displayTo);
                        origArr[num - 1] += 'R';
                        toggleAlpha();
                }else{
                        displayInput(' × ', displayTo);
                        origArr[num - 1] += ' * ';
                }
                refocusInput(displayTo);
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
                                currFormatted += 'X';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += 'X';
                                toggleAlpha();
                        }else{
                                displayInput(' → ', "userInput");
                                currFormatted += ' → ';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += '→';
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
                                currFormatted += 'A';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += 'A';
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
                        currFormatted += 'B';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'B';
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
                        currFormatted += 'C';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'C';
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
                                currFormatted += 'D';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += 'D';
                                toggleAlpha();
                        }else{
                                displayInput("^(-1)", "userInput");
                                currFormatted += '^{-1}';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += '^(-1)';
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
                                currFormatted += 'J';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += 'J';
                                toggleAlpha();
                        }else{
                                displayInput(',', "userInput");
                                currFormatted += ',';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += ',';
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
                        currFormatted += '\\{';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '{';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("K", "userInput");
                        currFormatted += 'K';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'K';
                        toggleAlpha();
                }else{
                        displayInput("(", "userInput");
                        currFormatted += '(';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '(';
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
                        currFormatted += '\\}';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '}';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("L", "userInput");
                        currFormatted += 'L';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L';
                        toggleAlpha();
                }else{
                        displayInput(")", "userInput");
                        currFormatted += ')';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += ')';
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
                if(secondOn){
                        displayInput("u", "userInput");
                        currFormatted += 'u';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'u';
                        toggle2nd();
                }
                else if(alphaOn){
                        displayInput("O", "userInput");
                        currFormatted += 'O';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'O';
                        toggleAlpha();
                }else{
                        displayInput('7', "userInput");
                        currFormatted += '7';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '7';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(7);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('7', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("u", displayTo);
                        origArr[num - 1] += 'u';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("O", displayTo);
                        origArr[num - 1] += 'O';
                        toggleAlpha();
                }else{
                        displayInput('7', displayTo);
                        origArr[num - 1] += '7';
                }
                refocusInput(displayTo);
        }
}


function eightBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("v", "userInput");
                        currFormatted += 'v';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'v';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("P", "userInput");
                        currFormatted += 'P';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'P';
                        toggleAlpha();
                }else{
                        displayInput('8', "userInput");
                        currFormatted += '8';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '8';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(8);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('8', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("v", displayTo);
                        origArr[num - 1] += 'v';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("P", displayTo);
                        origArr[num - 1] += 'P';
                        toggleAlpha();
                }else{
                        displayInput('8', displayTo);
                        origArr[num - 1] += '8';
                }
                refocusInput(displayTo);
        }
}


function nineBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("w", "userInput");
                        currFormatted += 'w';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'w';
                        toggle2nd();
                }
                else if(alphaOn){
                        displayInput("Q", "userInput");
                        currFormatted += 'Q';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'Q';
                        toggleAlpha();
                }else{
                        displayInput('9', "userInput");
                        currFormatted += '9';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '9';
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
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('9', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("w", displayTo);
                        origArr[num - 1] += 'w';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Q", displayTo);
                        origArr[num - 1] += 'Q';
                        toggleAlpha();
                }else{
                        displayInput('9', displayTo);
                        origArr[num - 1] += '9';
                }
                refocusInput(displayTo);
        }
}

//do 5, 6, 1, 2, 3
function fourBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L4", "userInput");
                        currFormatted += 'L4';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L4';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("T", "userInput");
                        currFormatted += 'T';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'T';
                        toggleAlpha();
                }else{
                        displayInput('4', "userInput");
                        currFormatted += '4';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '4';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(4);
                        }
                }else if(isVisible(document.getElementById("mathNum"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathNumChoose(4);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('4', "matrixEditInput");
                refocusInput("matrixEditInput");
        }
        else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L4", displayTo);
                        origArr[num - 1] += 'L4';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("T", displayTo);
                        origArr[num - 1] += 'T';
                        toggleAlpha();
                }else{
                        displayInput('4', displayTo);
                        origArr[num - 1] += '4';
                }
                refocusInput(displayTo);
        }
}


function fiveBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L5", "userInput");
                        currFormatted += 'L5';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L5';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("U", "userInput");
                        currFormatted += 'U';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'U';
                        toggleAlpha();
                }else{
                        displayInput('5', "userInput");
                        currFormatted += '5';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '5';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(5);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('5', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L5", displayTo);
                        origArr[num - 1] += 'L5';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("U", displayTo);
                        origArr[num - 1] += 'U';
                        toggleAlpha();
                }else{
                        displayInput('5', displayTo);
                        origArr[num - 1] += '5';
                }
                refocusInput(displayTo);
        }
}

function sixBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L6", "userInput");
                        currFormatted += 'L6';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L6';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("V", "userInput");
                        currFormatted += 'V';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'V';
                        toggleAlpha();
                }else{
                        displayInput('6', "userInput");
                        currFormatted += '6';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '6';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(6);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('6', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L6", displayTo);
                        origArr[num - 1] += 'L6';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("V", displayTo);
                        origArr[num - 1] += 'V';
                        toggleAlpha();
                }else{
                        displayInput('6', displayTo);
                        origArr[num - 1] += '6';
                }
                refocusInput(displayTo);
        }
}



function oneBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L1", "userInput");
                        currFormatted += 'L1';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L1';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Y", "userInput");
                        currFormatted += 'Y';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'Y';
                        toggleAlpha();
                }else{
                        displayInput('1', "userInput");
                        currFormatted += '1';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '1';
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
        }else if(isVisible(document.getElementById("angleDiv"))){
                if(secondOn){
                        toggle2nd();
                }else if(alphaOn){
                        toggleAlpha();
                }else{
                        angleChoose(1);
                }
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(1);
                        }
                }else if(isVisible(document.getElementById("mathNum"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathNumChoose(1);
                        }
                }else if(isVisible(document.getElementById("mathPrb"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathPrbChoose(1);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('1', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L1", displayTo);
                        origArr[num - 1] += 'L1';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Y", displayTo);
                        origArr[num - 1] += 'Y';
                        toggleAlpha();
                }else{
                        displayInput('1', displayTo);
                        origArr[num - 1] += '1';
                }
                refocusInput(displayTo);
        }
}


function twoBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L2", "userInput");
                        currFormatted += 'L2';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L2';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Z", "userInput");
                        currFormatted += 'Z';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'Z';
                        toggleAlpha();
                }else{
                        displayInput('2', "userInput");
                        currFormatted += '2';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '2';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(2);
                        }
                }else if(isVisible(document.getElementById("mathNum"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathNumChoose(2);
                        }
                }else if(isVisible(document.getElementById("mathPrb"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathPrbChoose(2);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('2', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L2", displayTo);
                        origArr[num - 1] += 'L2';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("Z", displayTo);
                        origArr[num - 1] += 'Z';
                        toggleAlpha();
                }else{
                        displayInput('2', displayTo);
                        origArr[num - 1] += '2';
                }
                refocusInput(displayTo);
        }
}


function threeBtn(){
        if(isVisible(document.getElementById("normDiv"))){
                if(secondOn){
                        displayInput("L3", "userInput");
                        currFormatted += 'L3';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'L3';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("θ", "userInput");
                        currFormatted += 'θ';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += 'θ';
                        toggleAlpha();
                }else{
                        displayInput('3', "userInput");
                        currFormatted += '3';
                        currFormatted = parseFormatted(currFormatted);
                        document.getElementById("formattedEq").innerHTML = currFormatted;
                        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                        currInputOrig += '3';
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathMathChoose(3);
                        }
                }else if(isVisible(document.getElementById("mathNum"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathNumChoose(3);
                        }
                }else if(isVisible(document.getElementById("mathPrb"))){
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                toggleAlpha();
                        }else{
                                mathPrbChoose(3);
                        }
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                displayInput('3', "matrixEditInput");
                refocusInput("matrixEditInput");
        }else if(isVisible(document.getElementById("yEqDiv"))){
                let displayTo = focusedEq.id;
                let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                let num = parseInt(displayTo[1]);

                if(secondOn){
                        displayInput("L3", displayTo);
                        origArr[num - 1] += 'L3';
                        toggle2nd();
                }else if(alphaOn){
                        displayInput("θ", displayTo);
                        origArr[num - 1] += 'θ';
                        toggleAlpha();
                }else{
                        displayInput('3', displayTo);
                        origArr[num - 1] += '3';
                }
                refocusInput(displayTo);
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
                                currFormatted += ' ';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += ' ';
                                toggleAlpha();
                        }else{
                                displayInput('0', "userInput");
                                currFormatted += '0';
                                currFormatted = parseFormatted(currFormatted);
                                document.getElementById("formattedEq").innerHTML = currFormatted;
                                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                                currInputOrig += '0';
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
                }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                        displayInput('0', "matrixEditInput");
                        refocusInput("matrixEditInput");
                }else if(isVisible(document.getElementById("yEqDiv"))){
                        let displayTo = focusedEq.id;
                        let origArr = [currY1Orig, currY2Orig, currY3Orig, currY4Orig, currY5Orig, currY6Orig, currY7Orig, currY8Orig, currY9Orig, currY10Orig];
                        let num = parseInt(displayTo[1]);
        
                        if(secondOn){
                                toggle2nd();
                        }else if(alphaOn){
                                displayInput(" ", displayTo);
                                origArr[num - 1] += ' ';
                                toggleAlpha();
                        }else{
                                displayInput('0', displayTo);
                                origArr[num - 1] += '0';
                        }
                        refocusInput(displayTo);
                }
                else{
                        if(alphaOn){
                                toggleAlpha();
                                refocusInput("userInput");
                                refocusInput("currValInput");
                        }
                }
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(selectedMathMathOption == -1){
                                selectedMathMathOption = 1;
                        }else if(selectedMathMathOption == 8){
                                selectedMathMathOption = -1;
                        }else{
                                selectedMathMathOption += 1;
                        }
                        selectOption("mathMath", selectedMathMathOption);
                }
                else if(isVisible(document.getElementById("mathNum"))){
                        if(selectedMathNumOption == -1){
                                selectedMathNumOption = 1;
                        }else if(selectedMathNumOption == 4){
                                selectedMathNumOption = -1;
                        }else{
                                selectedMathNumOption += 1;
                        }
                        selectOption("mathNum", selectedMathNumOption);
                }else if(isVisible(document.getElementById("mathPrb"))){
                        if(selectedMathPrbOption == -1){
                                selectedMathPrbOption = 1;
                        }else if(selectedMathPrbOption == 3){
                                selectedMathPrbOption = -1;
                        }else{
                                selectedMathPrbOption += 1;
                        }
                        selectOption("mathPrb", selectedMathPrbOption);
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];
                let matrixArr = matricesVals[matrices.indexOf(matrixLetter)];
                if(inputFocusInd == 1 || inputFocusInd == 2){
                        inputFocusInd = -1;
                        matrixSelectInd = [1, 1];
                        document.getElementById("matrixRowsInput").style.backgroundColor = "transparent";
                        document.getElementById("matrixColsInput").style.backgroundColor = "transparent";
                        highlightMatrixCell();
                        document.getElementById("matrixEditInput").value = "";
                        displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                        document.getElementById("beforeMatrixInput").innerHTML = "[" + matrixSelectInd[0] + ", " + matrixSelectInd[1] + "]: ";
                        refocusInput("matrixEditInput");
                }else if(inputFocusInd == -1){
                        if(matrixSelectInd[0] == matrixArr.length){
                                //do nothing
                                refocusInput("matrixEditInput");
                        }else{
                                matrixSelectInd[0] += 1;
                                highlightMatrixCell();
                                document.getElementById("matrixEditInput").value = "";
                                displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                                document.getElementById("beforeMatrixInput").innerHTML = "[" + matrixSelectInd[0] + ", " + matrixSelectInd[1] + "]: ";
                                refocusInput("matrixEditInput");
                        }
                }
                //matrixSelectInd
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        if(selectedMathMathOption == -1){
                                selectedMathMathOption = 8;
                        }else if(selectedMathMathOption == 1){
                                selectedMathMathOption = -1;
                        }else{
                                selectedMathMathOption -= 1;
                        }
                        selectOption("mathMath", selectedMathMathOption);
                }
                else if(isVisible(document.getElementById("mathNum"))){
                        if(selectedMathNumOption == -1){
                                selectedMathNumOption = 4;
                        }else if(selectedMathNumOption == 1){
                                selectedMathNumOption = -1;
                        }else{
                                selectedMathNumOption -= 1;
                        }
                        selectOption("mathNum", selectedMathNumOption);
                }else if(isVisible(document.getElementById("mathPrb"))){
                        if(selectedMathPrbOption == -1){
                                selectedMathPrbOption = 3;
                        }else if(selectedMathPrbOption == 1){
                                selectedMathPrbOption = -1;
                        }else{
                                selectedMathPrbOption -= 1;
                        }
                        selectOption("mathPrb", selectedMathPrbOption);
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];
                let matrixArr = matricesVals[matrices.indexOf(matrixLetter)];
                if(inputFocusInd == -1){
                        if(matrixSelectInd[0] == 1){
                                document.getElementById("matrixRowsInput").style.backgroundColor = "transparent";
                                document.getElementById("matrixColsInput").style.backgroundColor = "#DFAFB1";
                                inputFocusInd = 2;
                                matrixSelectInd = [-1, -1];
                                highlightMatrixCell();
                                document.getElementById("matrixEditInput").value = "";
                                displayInput(matrixArr[0].length, "matrixEditInput");
                                document.getElementById("beforeMatrixInput").innerHTML = "num cols: ";
                                refocusInput("matrixEditInput");
                        }else{
                                matrixSelectInd[0] -= 1;
                                highlightMatrixCell();
                                document.getElementById("matrixEditInput").value = "";
                                displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                                document.getElementById("beforeMatrixInput").innerHTML = "[" + matrixSelectInd[0] + ", " + matrixSelectInd[1] + "]: ";
                                refocusInput("matrixEditInput");
                        }
                }
                //matrixSelectInd
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
                if(isVisible(document.getElementById("statEditEditDiv"))){
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        return;
                }else if(isVisible(document.getElementById("mathNum"))){
                        mathMathBtn();
                }else if(isVisible(document.getElementById("mathPrb"))){
                        mathNumBtn();
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];
                let matrixArr = matricesVals[matrices.indexOf(matrixLetter)];
                if(inputFocusInd == 1){
                        //do nothing
                        refocusInput("matrixEditInput");
                }
                else if(inputFocusInd == 2){
                        inputFocusInd = 1;
                        document.getElementById("matrixRowsInput").style.backgroundColor = "#DFAFB1";
                        document.getElementById("matrixColsInput").style.backgroundColor = "transparent";
                        document.getElementById("matrixEditInput").value = "";
                        displayInput(matrixArr.length, "matrixEditInput");
                        document.getElementById("beforeMatrixInput").innerHTML = "num rows: ";
                        refocusInput("matrixEditInput");
                }else if(inputFocusInd == -1){
                        if(matrixSelectInd[0] == 1 && matrixSelectInd[1] == 1){
                                document.getElementById("matrixRowsInput").style.backgroundColor = "transparent";
                                document.getElementById("matrixColsInput").style.backgroundColor = "#DFAFB1";
                                inputFocusInd = 2;
                                matrixSelectInd = [-1, -1];
                                highlightMatrixCell();
                                document.getElementById("matrixEditInput").value = "";
                                displayInput(matrixArr[0].length, "matrixEditInput");
                                document.getElementById("beforeMatrixInput").innerHTML = "num cols: ";
                                refocusInput("matrixEditInput");
                        }else{
                                if(matrixSelectInd[1] == 1){
                                        //do nothing
                                        refocusInput("matrixEditInput");
                                }else{
                                        matrixSelectInd[1] -= 1;
                                        highlightMatrixCell();
                                        document.getElementById("matrixEditInput").value = "";
                                        displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                                        document.getElementById("beforeMatrixInput").innerHTML = "[" + matrixSelectInd[0] + ", " + matrixSelectInd[1] + "]: ";
                                        refocusInput("matrixEditInput");
                                }
                        }
                }
                //matrixSelectInd
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
                if(isVisible(document.getElementById("statEditEditDiv"))){
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
        }else if(isVisible(document.getElementById("mathDiv"))){
                if(isVisible(document.getElementById("mathMath"))){
                        mathNumBtn();
                }else if(isVisible(document.getElementById("mathNum"))){
                        mathPrbBtn();
                }else if(isVisible(document.getElementById("mathPrb"))){
                        return;
                }
        }else if(isVisible(document.getElementById("matrixEditorDiv"))){
                let matrixLetter = document.getElementById("matrixName").innerHTML.substring(document.getElementById("matrixName").innerHTML.indexOf("[") + 1, document.getElementById("matrixName").innerHTML.indexOf("]"));
                let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
                let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];
                let matrixArr = matricesVals[matrices.indexOf(matrixLetter)];
                if(inputFocusInd == 1){
                        document.getElementById("matrixRowsInput").style.backgroundColor = "transparent";
                        document.getElementById("matrixColsInput").style.backgroundColor = "#DFAFB1";
                        inputFocusInd = 2;
                        document.getElementById("matrixEditInput").value = "";
                        displayInput(matrixArr[0].length, "matrixEditInput");
                        document.getElementById("beforeMatrixInput").innerHTML = "num cols: ";
                        refocusInput("matrixEditInput");
                }else if(inputFocusInd == 2){
                        inputFocusInd = -1;
                        matrixSelectInd = [1, 1];
                        document.getElementById("matrixRowsInput").style.backgroundColor = "transparent";
                        document.getElementById("matrixColsInput").style.backgroundColor = "transparent";
                        highlightMatrixCell();
                        document.getElementById("matrixEditInput").value = "";
                        displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                        document.getElementById("beforeMatrixInput").innerHTML = "[1, 1]: ";
                        refocusInput("matrixEditInput");
                        //document.getElementsByClassName("matrixRows instance" + matrixSelectInd[0])[0].backgroundColor = "blue";
                        //document.getElementsByClassName("matrixRows instance" + matrixSelectInd[0])[0].children[matrixSelectInd[1]-1].backgroundColor =  "#DFAFB1";
                }else if(inputFocusInd == -1){
                        if(matrixSelectInd[1] == matrixArr[0].length){
                                //do nothing
                                refocusInput("matrixEditInput");
                        }else{
                                matrixSelectInd[1] += 1;
                                highlightMatrixCell();
                                document.getElementById("matrixEditInput").value = "";
                                displayInput(matrixArr[matrixSelectInd[0]-1][matrixSelectInd[1]-1], "matrixEditInput");
                                document.getElementById("beforeMatrixInput").innerHTML = "[" + matrixSelectInd[0] + ", " + matrixSelectInd[1] + "]: ";
                                refocusInput("matrixEditInput");
                        }
                }
                //matrixSelectInd
        }
}

function highlightMatrixCell(){
        let allCells = document.getElementsByClassName("matrixCells");
        for(let i = 0; i < allCells.length; i++){
                allCells[i].style.backgroundColor = "transparent";
        }
        if(matrixSelectInd[0] != -1 && matrixSelectInd[1] != -1){
                let cell = document.getElementsByClassName("matrixCells row" + matrixSelectInd[0] + " instance" + matrixSelectInd[1])[0];
                cell.style.backgroundColor = "#DFAFB1";   
        }
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
                currFormatted += ' = ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '=';
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput(" ≠ ", "userInput");
                currFormatted += ' != ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '!=';
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput(" > ", "userInput");
                currFormatted += '>';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '>';
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput(" ≥ ", "userInput");
                currFormatted += ' \\geq ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '>=';
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput(" < ", "userInput");
                currFormatted += '<';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '<';
                refocusInput("userInput");
        }else if(val == 6){
                showScreen("normDiv");
                displayInput(" ≤ ", "userInput");
                currFormatted += ' \\leq ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '<=';
                refocusInput("userInput");
        }
}

function testLogicChoose(val){
        if(val == 1){
                showScreen("normDiv");
                displayInput(" % ", "userInput");
                currFormatted += ' \\% ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '%';
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput(" and ", "userInput");
                currFormatted += '\\ and\\ ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += ' and ';
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput(" or ", "userInput");
                currFormatted += '\\ or\\ ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += ' or ';
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput(" xor ", "userInput");
                currFormatted += '\\ xor\\ ';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += ' xor ';
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput("not(", "userInput");
                currFormatted += 'not(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'not(';
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
                currFormatted += 'sortA(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'sortA(';
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("sortD(", "userInput");
                currFormatted += 'sortD(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'sortD(';
                refocusInput("userInput");
        }else if(v == 4){
                showScreen("normDiv");
                displayInput("clrList(", "userInput");
                currFormatted += 'clrList(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'clrList(';
                refocusInput("userInput");
        }
}

function angleChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("°", "userInput");
                currFormatted += '^{\\circ}';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '°';
                refocusInput("userInput"); 
        }
}

function listNamesChoose(val){
        showScreen("normDiv");
        displayInput("L" + val, "userInput");
        currFormatted += 'L' + val;
        currFormatted = parseFormatted(currFormatted);
        document.getElementById("formattedEq").innerHTML = currFormatted;
        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
        currInputOrig += 'L' + val;
        refocusInput("userInput");
}

function matrixNamesChoose(val){
        let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
        showScreen("normDiv");
        displayInput("[" + matrices[val - 1] + "]", "userInput");
        currFormatted += "[" + matrices[val - 1] + "]";
        currFormatted = parseFormatted(currFormatted);
        document.getElementById("formattedEq").innerHTML = currFormatted;
        katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
        currInputOrig += "[" + matrices[val - 1] + "]";
        refocusInput("userInput");
}

function matrixEditChoose(val){
        let matrices = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J"];
        let matricesVals = [matrixA, matrixB,matrixC,matrixD,matrixE,matrixF,matrixG,matrixH,matrixI,matrixJ];

        showScreen("matrixEditorDiv");
        refocusInput("matrixEditInput");

        document.getElementById("matrixName").innerHTML = "Matrix[" + matrices[val-1] + "]";
        document.getElementsByClassName("matrixDisplay")[0].innerHTML = matrixToTable(matricesVals[val-1]);
        document.getElementById("matrixRowsInput").innerHTML = matricesVals[val-1].length;
        document.getElementById("matrixColsInput").innerHTML = matricesVals[val-1][0].length;
        document.getElementById("matrixEditInput").value = "";
        displayInput(matricesVals[val-1].length, "matrixEditInput");
}

function matrixToTable(arr){
        let numRows = arr.length;
        let numCols = arr[0].length;
        let tableStr = "<table class='matrixTable'>"
        for(let i = 0; i < numRows; i++){
                let rowStr = "<tr class='matrixRows " + "instance" + (i+1) + "'>";
                for(let j = 0; j < numCols; j++){
                        rowStr += "<th class='matrixCells row" + (i+1) + " instance" + (j+1) + "'>" + arr[i][j] + "</th>"
                }
                rowStr += "</tr>"
                tableStr += rowStr;
        }
        tableStr += "</table>";
        return tableStr;
}


function matrixMathChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("det(", "userInput");
                currFormatted += 'det(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'det(';
                refocusInput("userInput");
        }else if(v == 2){
                showScreen("normDiv");
                displayInput(")^T", "userInput");
                currFormatted += ')^T';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += ')^T';
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("dim(", "userInput");
                currFormatted += 'dim(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'dim(';
                refocusInput("userInput");
        }else if(v == 4){
                //makes every value in matrix first value
                showScreen("normDiv");
                displayInput("fill(", "userInput");
                currFormatted += 'fill(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'fill(';
                refocusInput("userInput");
        }else if(v == 5){ //identity(n) makes n x n identity matrix
                showScreen("normDiv");
                displayInput("identity(", "userInput");
                currFormatted += 'identity(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'identity(';
                refocusInput("userInput");
        }else if(v == 6){ //randM(rows, cols), makes matrix of rows and cols with rand vals
                showScreen("normDiv");
                displayInput("randM(", "userInput");
                currFormatted += 'randM(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'randM(';
                refocusInput("userInput");
        }else if(v == 7){ // auguments matrix
                showScreen("normDiv");
                displayInput("augment(", "userInput");
                currFormatted += 'augment(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'augment(';
                refocusInput("userInput");
        }
}

function mathMathChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput(">Frac", "userInput");
                currFormatted += '\\ >Frac';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '>Frac';
                refocusInput("userInput");
        }else if(v == 2){
                showScreen("normDiv");
                displayInput(">Dec", "userInput");
                currFormatted += '\\ >Dec';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '>Dec';
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("^(3)", "userInput");
                currFormatted += '^(3)';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '^(3)';
                refocusInput("userInput");
        }else if(v == 4){
                showScreen("normDiv");
                displayInput("∛(", "userInput");
                currFormatted += '∛(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'cbrt(';
                refocusInput("userInput");
        }else if(v == 5){
                showScreen("normDiv");
                displayInput("ⁿ√(", "userInput");
                currFormatted += 'ⁿ√(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'nthRoot(';
                refocusInput("userInput");
        }else if(v == 6){
                showScreen("normDiv");
                displayInput("nDeriv(", "userInput");
                currFormatted += 'nDeriv(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'nDeriv(';
                refocusInput("userInput");
        }else if(v == 7){
                showScreen("normDiv");
                displayInput("fnInt(", "userInput");
                currFormatted += 'fnInt(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'integrate(';
                refocusInput("userInput");
        }
        else if(v == 8){
                showScreen("normDiv");
                displayInput("logBASE(", "userInput");
                currFormatted += 'logBASE(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'logBASE(';
                refocusInput("userInput");
        }
}

function mathNumChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("abs(", "userInput");
                currFormatted += 'abs(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'abs(';
                refocusInput("userInput");
        }else if(v == 2){
                showScreen("normDiv");
                displayInput("round(", "userInput");
                currFormatted += 'round(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'round(';
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("int(", "userInput");
                currFormatted += 'int(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'int(';
                refocusInput("userInput");
        }else if(v == 4){
                showScreen("normDiv");
                displayInput("frac", "userInput");
                //get rid or do later
                refocusInput("userInput");
        }
}

function mathPrbChoose(v){
        v = parseInt(v);
        if(v == 1){
                showScreen("normDiv");
                displayInput("nPr(", "userInput");
                currFormatted += 'nPr(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'permutations(';
                refocusInput("userInput");
        }else if(v == 2){
                showScreen("normDiv");
                displayInput("nCr(", "userInput");
                currFormatted += 'nCr(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'combinations(';
                refocusInput("userInput");
        }else if(v == 3){
                showScreen("normDiv");
                displayInput("!", "userInput");
                currFormatted += '!';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += '!';
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
                currFormatted += 'min(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'min(';
                refocusInput("userInput");
        }else if(val == 2){
                showScreen("normDiv");
                displayInput("max(", "userInput");
                currFormatted += 'max(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'max(';
                refocusInput("userInput");
        }else if(val == 3){
                showScreen("normDiv");
                displayInput("mean(", "userInput");
                currFormatted += 'mean(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'mean(';
                refocusInput("userInput");
        }else if(val == 4){
                showScreen("normDiv");
                displayInput("median(", "userInput");
                currFormatted += 'median(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'median(';
                refocusInput("userInput");
        }else if(val == 5){
                showScreen("normDiv");
                displayInput("sum(", "userInput");
                currFormatted += 'sum(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'sum(';
                refocusInput("userInput");
        }else if(val == 6){
                showScreen("normDiv");
                displayInput("prod(", "userInput");
                currFormatted += 'prod(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'prod(';
                refocusInput("userInput");
        }else if(val == 7){
                showScreen("normDiv");
                displayInput("stdDev(", "userInput");
                currFormatted += 'stdDev(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'stdDev(';
                refocusInput("userInput");
        }else if(val == 8){
                showScreen("normDiv");
                displayInput("variance(", "userInput");
                currFormatted += 'variance(';
                currFormatted = parseFormatted(currFormatted);
                document.getElementById("formattedEq").innerHTML = currFormatted;
                katex.render(currFormatted, document.getElementById("formattedEq"), {throwOnError: false});
                currInputOrig += 'variance(';
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
