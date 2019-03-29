/* 4. Tipos de dados:
a. Qual o output da seguinte script:
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // ? hello Ilya*/

/* Conversões de tipos */
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5 //  "$45"
"4" - 2 // 2
"4px" - 2 // NaN (not a number)
7 / 0 // infinity
"-9" + 5 // "-95" //o "+" esta a concatenar as duas cenas
"-9" - 5 // -14 // o "-" ja funciona normal
null + 1 // 1
undefined + 1 // NaN

/* 6.Operadores */

let a = 1 //2
let b = 1 // 2

let c = ++a; //2
let d = b++; //1

/* quais sao os valores de a e x no codigo abaixo */
let a = 2;
let x = 1 + (a*= 2);
//a vai ser igual ao seu valor * 2 = 4
//x vai ser igual a 1 + a = 1 + 4 = 5
