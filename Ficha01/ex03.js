/* 3. Constantes:
a. Examine o seguinte código que inclui uma data de aniversário constante e a idade é
calculada a partir do aniversário com a ajuda de algum código (não é fornecido por
questões de foco):
const birthday = '18 .04.1982 ';
const age = someCode (birthday);
b. Seria correto usar letras maiúsculas para a variável birthday? E para age? Ou até para
as duas?
const BIRTHDAY = '18 .04.1982 '; // maiúsculas?
const AGE = someCode (BIRTHDAY); // maiúsculas? */

let yearBorn = prompt("Em que ano nasceste")
let monthBorn = prompt("Em que mes? (1-12)")
let dayBorn = prompt("em que dia?")

const currentDay = new Date().getDate()
const currentMonth = new Date().getMonth() + 1
const currentYear = new Date().getFullYear()

const birthday = {
    day: dayBorn,
    month: monthBorn,
    year: yearBorn
}

const nowDate = {
    day: currentDay,
    month: currentMonth,
    year: currentYear
}


function age(){
 let age = 0;
 if(monthBorn === currentMonth ){
     if(dayBorn <= currentDay){
        age = currentYear - birthday.year;
     }
     else{
        age = currentYear - birthday.year - 1;
     }

 }
 else if(monthBorn < currentMonth){
    age = currentYear - birthday.year;
 }
 else{
    age = currentYear - birthday.year - 1;
 }
 alert(`tens ${age} anos` )
}
age();
