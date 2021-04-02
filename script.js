//Task1
function replaceSymbol(str){
    let res = [];
    str.split('').map(item =>{
        if(item == '5')  res.push('S');
        else if(item === '0') res.push('O');
        else if (item === '1') res.push('I');
        else res.push(item);
    });
    return res.join('');
}
console.group('Task1');
console.log(replaceSymbol('L0ND0N'));
console.log(replaceSymbol('DUBL1N'));
console.log(replaceSymbol('51NGAP0RE'));
console.log(replaceSymbol('BUDAPE5T'));
console.log(replaceSymbol('PAR15'));
console.groupEnd();

// task2

function calcRating (ratingExam, amountProject) {
    
    if(ratingExam > 90 || amountProject > 12) return 100;
    else if(ratingExam > 75 && amountProject >= 5) return 90;
    else if(ratingExam > 50 && amountProject >= 2) return 75;
    else return 0;
}
console.group('Task2');
console.log(calcRating(20, 2));
console.groupEnd();


//Task3 

/* function replaceStr(str){
    let res = [];
    str.split('').map(item =>{
        if(item  === item.toLowerCase()) res.push(item.toUpperCase());
        else if(item === item.toUpperCase()) res.push(item.toLowerCase());
    });
    return res.join('');
}

console.log(replaceStr('hello world'));
console.log(replaceStr('HELLO WORLD'));
console.log(replaceStr('hello WORLD'));
console.log(replaceStr('HeLLo WoRLD'));
console.log(replaceStr('12345'));
console.log(replaceStr('1a2b3c4d5e'));
console.log(replaceStr('String.prototype.toAlternatingCase'));
 */

String.prototype.replaceStr = function(){
    let res = [];
    this.split('').map(item =>{
        if(item  === item.toLowerCase()) res.push(item.toUpperCase());
        else if(item === item.toUpperCase()) res.push(item.toLowerCase());
    });
    console.log(res.join(''));
};
console.group('Task3');
let str1 = 'HELLO WORLD';
str1.replaceStr();
console.groupEnd();

//Task4

function updateLight(str){
    if(str =='Зелёный') return 'Жёлтый';
    if(str =='Жёлтый') return 'Красный';
    if(str =='Красный') return 'Зелёный';
}
console.group('Task4');
console.log(updateLight('Зелёный'));
console.log(updateLight('Жёлтый'));
console.log(updateLight('Красный'));
console.groupEnd();
//Task5

function cookie(n){
    if(typeof n  == 'string') return 'Кто съел варенье? Это была Юля!';
    if(typeof n  == 'number') return 'Кто съел варенье? Это был Дима!';
    if(typeof n == 'boolean') return 'Варенье съел наш пёс!';
}
console.group('Task5')
console.log(cookie('aaaa'));
console.log(cookie(26));
console.log(cookie(1.26));
console.log(cookie(false));
console.groupEnd();

//Task6 

function typeOfSum(a, b){
    return typeof (a + b);
}
console.group('Task6');
console.log(typeOfSum(12, 1));
console.groupEnd();

//Task7

/* function multiNum(arr){
    return arr.reduce((accum, item) =>{
        return accum *= item;
    });
}
console.log(multiNum([1, 2, 3, 4])); */

let a = [1, 2, 3, 4];
Array.prototype.multiNum = function() {
    return this.reduce((accum, item) =>{
        return accum *= item;
    });
}
console.log(a.multiNum());

//task8 
/* function multArrNum (arr) {
    return arr.map(item =>{
        return item * 2;
    });
}
console.log(multArrNum([1, 2, 3]));
 */
let arr1 = [4, 1, 1, 1, 4];
Array.prototype.multArrNum = function(){
    return this.map(item =>{
        return item * 2;
    });
}
console.log(arr1.multArrNum());

//Task 9

function centry(num) {
    return Math.ceil(num / 100);
}
console.log(centry(81));


function killName(name){
    const unwantedNames = ['Дима', 'Саша', 'Ольга', 'Никита'];
    return name.filter(item =>{
        if(unwantedNames.includes(item) == false) return true;
    });
}

console.log(killName(['Алексей', 'Семён', 'Василиса', 'Дима', 'Максим', 'Ольга']));

//Task 10

function modifNum(str){
    let res = [];
    str.split('').forEach(item =>{
        if(item < 5) res.push(0);
        else if(item >= 5) res.push(1);
    });
    return res.join('');
}
console.log(modifNum('45385593107843568'));

//Task11

function quart(month) {
    if(month >= 1 && month < 4) return 1;
    else if(month >= 4 && month < 6) return 2;
    else if(month >= 6 && month < 9) return 3;
    else return 4;
}
console.log(quart(8));

//Task12
function returnInitials (str){
    let res = [];
    str.split('').forEach(item =>{
        if(item !== item.toLowerCase()) res.push(item);
    });
    return res.join('.');
}
console.log(returnInitials('Анастасия Черданцева'));

//Task13

function findValueInArr(arr, item) {
    if(arr.includes(item)) return `Да, значение ${item} есть в массиве`;
    else return `Нет, такого значения нет`;
}
console.log(findValueInArr([80, 117, 115, 104, 45, 85, 112, 115], 45));

//Task 14
String.prototype.isUpCase = function(){
    let arr = this.split('');
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i].toLowerCase()) return true;
        else return false;
    }
}
console.log('HELLO I AM DONALD'.isUpCase());

//Task15
function findCountSumbol (str, sumbol){
    let count = 0;
    str.split('').forEach(item =>{
        if(item  == sumbol) count++;
    });
    return count;
}
console.log(findCountSumbol('Hello', 'l'));

//Task16
function killSecondElem(arr) {
    let finalyArr = [];
    arr.map((item, index) =>{
        if(index % 2 == 0) finalyArr.push(item);
    });
    return finalyArr;
}
console.log(killSecondElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Task17
/* function cooncatStr(...arg) {
    let res = '';
    arg.map(item =>{
        for(let i = 0; i < 4; i++){
            res += item[i];
            
        }
    });
    return res;
}
console.log(cooncatStr('this','test','lock')); */


//Task18

function findElement(str1, str2){
    let res = [];
    let arr = str1.split('').concat(str2.split('')).sort();
   
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            res.push(arr[i]);
        }
    }
    return res.join('');

}
console.log(findElement('LOOPINGISFUNBUTDANGEROUS','LESSDANGEROUSTHANCODING'));

//Task20

function sortArr (arr){
    let str = [];
    let num = [];

    arr.forEach(item =>{
        if(typeof item === 'number') num.push(item);
        else if(typeof item === 'string') str.push(item);
    });
    return num.sort((a, b) => a - b).concat(str.sort());
}

console.log(sortArr([1, 2, 3, 4, 5]));

//Task21

function exam (answerTrue, answerStudent){
    let count = 0;
    for(let i = 0; i < answerTrue.length; i++){
        if(answerTrue[i] == answerStudent[i]) count += 4;
        else if( answerTrue[i] !== answerStudent[i] && answerStudent[i] != "") count -= 1;
        else count += 0;
    }
    if(count < 0) return 0;
    return count;
}
console.log(exam(['A', 'A', 'B', 'C'],['A', 'A', 'B', 'C']));

//Task22

function sumNum(num){
    return num.toString().split('').reduce((accum, item) =>{
        return accum *= item;
    });
}
console.log(sumNum(12345));

//Task 23
function arrFromNumb(num) {
    let arr = [];
    for(let i = num; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}
console.log(arrFromNumb(6));

//Task24 Из цифры слово

switch(5){
    case 1:
        console.log('Один');
        break;
    case 2:
        console.log('два');
        break;
    case 3:
        console.log('три');
        break;
    case 4:
        console.log('четыре');
        break;
    case 5:
        console.log('пять');
        break;
    default: 
    console.log('Error');
}

//task 25 Сумма двух

function sumArr(arr1, arr2){
    return arr1.concat(arr2).reduce((accum, item) =>{
        return accum += item;
    });
}

console.log( sumArr([1, 2, 3], [4, 5, 6]));

//task26 Приветствие пользователя

function greetingUser(name){
    return `Привет, ${name}`;
}
console.log(greetingUser('Сергей'));

//task27 Приветствие пользователя

function greetingUser2(num, str){
    let res = '';
    if(num <= 0) return ' ';
    for(let i = 0; i < num; i++){
        res += str;
    }
    return res;
}
console.log( greetingUser2(0, 'a'));

//task28 Верните отрицательное число

function returnNumber(num){
    if(num <= 0) return num;
    else if(num > 0) return -num;
}
console.log(returnNumber(0.12));

//task 29 
function helpColeg(n, m) {
    if(n < 0 || m < 0) return 0;
    return n * m;
}
console.log(helpColeg(-5, 5));

//Task30 Терминальная игра

function terminalGame(start, move){
    return start + (move * 2);
}
console.log(terminalGame(3, 6));

//Task 31 Переверните строки

function reverseStr(str){
    return str.split('').reverse().join('');
}
console.log(reverseStr('h'));

//Task32 Спасение принцессы

function savePrinces(arrows, dragon){
    return (arrows / dragon >= 2)
}
console.log(savePrinces(4, 5));

//Task 34  Сумма всех чисел числа (0_0)
function sumAllInt(num){
    let arrNum = [];
    for(let i = 1; i <= num; i++){
        arrNum.push(i);
    }
    return arrNum.reduce((accum, item) =>{
        return accum += item;
    });
}
console.log(sumAllInt(8));

//Task 35 Сумма положительных
function sumPositiv(arr){
    let sum  = 0;
    arr.forEach(item =>{
        if(item > 0) sum += item;
    });
    return sum;
}
console.log(sumPositiv([-1,2,3,4,-5]));

//Task 36 Строковое значение

function stringValur (a){
    return a.toString();
}
console.log(stringValur (true));

//Task 37 Определите победителя

function spotWinner(arr1, arr2){
    if(arr2[0] > arr2[1]) return `В матче ${arr1[0]} - ${arr1[1]}, ${arr1[0]} победила!`;
    else if( arr2[0] < arr2[1]) return `В матче ${arr1[0]} - ${arr1[1]},  ${arr1[1]} победила!`;
}
console.log(spotWinner(['Virtus.pro', 'Team Spirit'],[0, 3]));

//Task 38 Поиск кол-ва символов
function findStr(str){
    return str.indexOf('город');
}
console.log(findStr('Мой город самый лучший город в России!'));

//Task 39 Обрезание строк

const str = 'я учу javascript!';
console.log(str.substr(2, 3));
console.log(str.substr(6, 10));

console.log(str.substring(2, 5));

console.log(str.slice(2, 5));

//Task 40 Разница двух массивов

function differenceTwoArr(firstArr, secondArr){
    let a = 1;
    let b = 1;
    
    firstArr.forEach(item => {a *= item});
    secondArr.forEach(item => {b *= item});
    return a -b;
}
console.log(differenceTwoArr([3, 2, 5], [1, 4, 4]));
