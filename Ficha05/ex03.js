/* 3. Definição de classes (ficheiros ex3.html/ex3,js)
Os dados são pequenos poliedros gravados com determinadas instruções. 

O dado mais clássico é o cubo (seis faces), gravado com números de um a seis.

a. Para este exercício deverá criar uma classe Dice para representar um dado e que nos
permitirá rolá-lo e tirar valores que variam de 1 a 6, ou seja, um dado de seis lados.

i. Defina um construtor sem argumentos que cria um objeto da classe Dice;
ii. Defina os métodos set e get para a propriedade faceValue que guardará o
valor atual da face do dado.
iii. Defina os métodos:

1. Um método chamado getQuantityFaces que retorna um número
representando a quantidade de faces do dado

2. Um método roll que vai "rolar" o dado e guardar o resultado na
propriedade faceValue. O valor sorteado deverá estar na gama de 1
até a quantidade de faces do dado;
iv. Arranje forma de lançar o dado 100 vezes e apresentar uma tabela de
frequência similar à apresentada de seguida: */

class Dice {
    constructor() {
        this.diceFaces = 6
    }

    //Propriedade faceValue

    get faceValue() {
        return this._faceValue
    }

    set faceValue(newValue) {
        this._faceValue = newValue
    }
    /* 1. Um método chamado getQuantityFaces que retorna um número
    representando a quantidade de faces do dado */
    getQuantityFaces() {
        return this.diceFaces
    }

    roll() {
        const x = Math.floor(Math.random() * 6) + 1
        this.faceValue = x
    }

    /* 2. Um método roll que vai "rolar" o dado e guardar o resultado na
    propriedade faceValue. O valor sorteado deverá estar na gama de 1
    até a quantidade de faces do dado;
    iv. Arranje forma de lançar o dado 100 vezes e apresentar uma tabela de
    frequência similar à apresentada de seguida: */

}

/* const myDice = new Dice()
console.log(myDice.diceFaces)
myDice.roll()
console.log(myDice.faceValue) */


const frequencyTable = [0, 0, 0, 0, 0, 0] //

for (let i = 0; i < 100; i++) {
    const myDice = new Dice()
    myDice.roll()
    frequencyTable[myDice.faceValue - 1] += 1 //o que tiver dentro dos [] ta a falar na posição do array. roda se o dado e calha 3 >> subtrai-se 1 para colocar na posiçao 2 do array >> vai igualar ao numero de vezes que a face sai
}
console.table(frequencyTable)
console.log(frequencyTable)

const table = document.querySelector("table")
table.innerHTML += ` <tr>
<td>Frequencia</td>
<td>${frequencyTable[0]}</td>
<td>${frequencyTable[1]}</td>
<td>${frequencyTable[2]}</td>
<td>${frequencyTable[3]}</td>
<td>${frequencyTable[4]}</td>
<td>${frequencyTable[5]}</td>
</tr>`