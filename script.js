const addEvents = () => { // dodaje eventy do przycisków 
    const numZero = document.getElementById("0");
    const numOne = document.getElementById("1");
    const numTwo = document.getElementById("2");
    const numThree = document.getElementById("3");
    const numFour = document.getElementById("4");
    const numFive = document.getElementById("5");
    const numSix = document.getElementById("6");
    const numSeven = document.getElementById("7");
    const numEight = document.getElementById("8");
    const numNine = document.getElementById("9");

    numZero.addEventListener('click', varZero)
    numOne.addEventListener('click', varOne)
    numTwo.addEventListener('click', varTwo)
    numThree.addEventListener('click', varThree)
    numFour.addEventListener('click', varFour)
    numFive.addEventListener('click', varFive)
    numSix.addEventListener('click', varSix)
    numSeven.addEventListener('click', varSeven)
    numEight.addEventListener('click', varEight)
    numNine.addEventListener('click', varNine)

    const changeButton = document.getElementById('change');
    changeButton.addEventListener('click', signChange);

    const floatingPointButton = document.getElementById('.');
    floatingPointButton.addEventListener('click', floatingPointAdd);
    
    const plus = document.getElementById('+');
    plus.addEventListener('click', additon);
    
    const minus = document.getElementById('-');
    minus.addEventListener('click', subtraction);

    const times = document.getElementById('*');
    times.addEventListener('click', multiply);

    const divide = document.getElementById('/');
    divide.addEventListener('click', division);

    const mod = document.getElementById('mod');
    mod.addEventListener('click', modulo);

    const equal = document.getElementById('equal');
    equal.addEventListener('click', equation);

    const clearButton = document.getElementById('clearAll');
    clearButton.addEventListener('click', clearAll)
    
    const BSButton = document.getElementById('clear');
    BSButton.addEventListener('click', BS)
    
    // numZero.style.background = 'black';
    
}
const varZero = () =>{
    
    if(numTemp !== "0"){
        numTemp += '0';
        screenResult.textContent += '0';
    }
    
}
const varOne = () =>{
    // numbersForEquation.push(0);
    if(numTemp === "0"){
        screenResult.textContent = '1';
        numTemp = '1';
    }else{
        screenResult.textContent += '1';
        numTemp += '1';
    }
    
}
const varTwo = () =>{
    // numbersForEquation.push(0);
    if(numTemp === "0"){
        // alert("działa");
        screenResult.textContent = '2';
        numTemp = '2';
    }else{
        screenResult.textContent += '2';
        numTemp += '2';
    }
    // alert(numTemp)
}
const varThree = () =>{
    // numbersForEquation.push(0);
    if(numTemp === "0"){
        screenResult.textContent = '3';
        numTemp = '3';
    }else{
        screenResult.textContent += '3';
        numTemp += '3';
    }
}
const varFour = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '4';
        numTemp = '4';
    }else{
        screenResult.textContent += '4';
        numTemp += '4';
    }
}
const varFive = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '5';
        numTemp = '5';
    }else{
        screenResult.textContent += '5';
        numTemp += '5';
    }
}
const varSix = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '6';
        numTemp = '6';
    }else{
        screenResult.textContent += '6';
        numTemp += '6';
    }
}
const varSeven = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '7';
        numTemp = '7';
    }else{
        screenResult.textContent += '7';
        numTemp += '7';
    }
}
const varEight = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '8';
        numTemp = '8';
    }else{
        screenResult.textContent += '8';
        numTemp += '8';
    }
}
const varNine = () =>{
    if(numTemp === "0"){
        screenResult.textContent = '9';
        numTemp = '9';
    }else{
        screenResult.textContent += '9';
        numTemp += '9';
    }
}

const floatingPointAdd = () => {
    if(floatSwitch == 0) {
        
        numTemp += '.';
        floatSwitch = 1;
        if(numbersForEquation.length !== 0){
            screenResult.textContent += ".";
            
        }else{
            screenResult.textContent = numTemp;
        }
    }
}

const additon = () => { 
    addNumber();
    if(numbersForEquation.length === 2)
    {
        let tempResult = signCheck();
        numbersForEquation = [];
        numbersForEquation.push(tempResult)
    }
    sign = '+';
    screenResult.textContent += ' + ';
    // alert(numbersForEquation+" "+numTemp)
}

const subtraction = () => {
    addNumber();
    if(numbersForEquation.length === 2)
    {
        let tempResult = signCheck();
        numbersForEquation = [];
        numbersForEquation.push(tempResult)
    }
    sign = '-';
    screenResult.textContent += ' - ';
}

const multiply = () => {
    addNumber();
    if(numbersForEquation.length === 2)
    {
        let tempResult = signCheck();
        numbersForEquation = [];
        numbersForEquation.push(tempResult)
    }
    sign = '*';
    screenResult.textContent += ' * ';
}
const division = () => {
    addNumber();
    if(numbersForEquation.length === 2)
    {
        let tempResult = signCheck();
        numbersForEquation = [];
        numbersForEquation.push(tempResult)
    }
    sign = '/';
    screenResult.textContent += ' / ';
}
const modulo = () => {
    addNumber();
    if(numbersForEquation.length === 2)
    {
        let tempResult = signCheck();
        numbersForEquation = [];
        numbersForEquation.push(tempResult)
    }
    sign = '%';
    screenResult.textContent += ' % ';
}


const equation = () => { 
    addNumber();
    if(numbersForEquation.length > 1) {
        result = signCheck();
    }
    else {
        result = numbersForEquation[0];
    }
    numTemp = result
    numbersForEquation = [];
    // numbersForEquation = [result];
    result = +result.toFixed(4); // zaokrąglanie
    screenResult.textContent = result;
    console.log(result)
}



const clearAll = () =>{
    sign = '';
    result = 0;
    numbersForEquation = [];
    numTemp = '0';
    floatSwitch = 0;
    screenResult.textContent = numTemp;
}

const BS = () =>{//
    if(sign !== ''){
        sign = ""
        // screenResult.textContent = ;// dodać usuwanie pojedyncze
    }
    
}

const signChange = () => {
    if(numTemp !== "" && numTemp !== "0"){
        if(numbersForEquation.length === 1){
            screenResult.textContent = `${numbersForEquation[0]} ${sign} -(${numTemp})`;
            if(numTemp[0] === '-'){
                numTemp = numTemp.slice(1);
                }else {
                    numTemp = "-" + numTemp
                }
        }else {
            if(numTemp[0] === '-'){
            numTemp = numTemp.slice(1);
            }else {
                numTemp = "-" + numTemp
            }
            screenResult.textContent = numTemp;
        }
        
    }
    else if(numbersForEquation.length == 1) {
        numbersForEquation[0] = numbersForEquation[0] *(-1)
        screenResult.textContent = numbersForEquation[0];
    }
    
    // console.log(numTemp);
    // console.log(numbersForEquation)
}



const addNumber = () => { // dodaje tymczasową liczbę do tablicy liczb
    if(numTemp !== "") {
        numTemp = Number(numTemp);
        console.log(numTemp);
        numbersForEquation.push(numTemp);
        numTemp = "";
        floatSwitch = 0;
        
    }
}
const signCheck = () => { // sprawdza znak i zwraca działanie danego znaku
    if(sign === '+') {
        return numbersForEquation[0] + numbersForEquation[1];
    }
    if(sign === '-') {
        return numbersForEquation[0] - numbersForEquation[1];
    }
    if(sign === '*') {
        return numbersForEquation[0] * numbersForEquation[1];
    }
    if(sign === '/') {
        return numbersForEquation[0] / numbersForEquation[1];
    }
    if(sign === '%') {
        return numbersForEquation[0] % numbersForEquation[1];
    }
}


const screenResult = document.getElementById('result')

let numbersForEquation = [];
let numTemp = "0"; 
let sign = '';
let result = 0;
let floatSwitch = 0;
// let limiter = 0;
screenResult.textContent = numTemp;
addEvents();
 


