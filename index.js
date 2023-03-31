// input function
const displayInput = document.getElementById("display-input");
let equal = document.getElementById("result");
// number buttons
function numButton(id){
    let numbers = document.getElementById(id).innerHTML;
    document.getElementById("display-input").value = displayInput.value + numbers;
}
// operate buttons
function operateButton(id){
    let operateValue = document.getElementById(id).innerHTML;
    document.getElementById("display-input").value = displayInput.value + operateValue;
}
// equal button
function equalButton(){
    let equal = displayInput.value;
    let result = eval(equal);
    displayInput.value = result;
    // if(displayInput == ' '){
    //     displayInput = '';
    // }
}
// clear button
function cleanButton(){
    displayInput.value = "";
}
// last clean
function lastClean(){
    let lastNumClean = displayInput.value;
    let cleanLast = lastNumClean.slice(0, lastNumClean.length-1);
    displayInput.value = cleanLast;
}