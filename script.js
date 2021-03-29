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