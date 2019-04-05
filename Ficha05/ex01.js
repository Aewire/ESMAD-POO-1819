/* 1. Definição de classes (ficheiros ex1.html/ex1.js)
a. Defina uma classe Rectangle para representar um retângulo. Um retângulo tem uma
altura, largura e uma cor de preenchimento (sempre branca).
b. Defina dois construtores:
i. Um que cria um retângulo com a largura e altura especificadas.
ii. Um sem argumentos que cria um retângulo padrão (largura = 2 e altura =1) .
c. Defina métodos get e set para as três propriedades da classe. A exceção é para a
propriedade color que não deverá ser possível reescrever o seu valor
d. Defina dois novos métodos:
i. Um método chamado getArea que retorna a área do retângulo.
ii. Um método chamado getPerimeter que retorna o perímetro do retângulo.
e. Crie duas instâncias da classe Rectangle
i. Uma com os valores padrão
ii. Outra com a largura de 10 e altura de 5
f. Imprima na consola para ambas as instâncias: as larguras, alturas, cores, áreas e
perímetros. */
/**
 * this is a class to model a rectangle
 */
class Rectangle { //so pode rer u, construtor, se quiser mais que um tenho de criar static.
    /*vai ser sempre chamado*/
    constructor(width = 2, height = 1) { //vai assumir estes valores se nao dissermos que valores as propriedades vao ter, como no myRectangle2
        this.width = width //nao precisa de ter os mesmos nomes, é so pra ser mais facil.
        this.height = height
        this._color = "#FFFFFF" //propriedade privada, nao quero alterar a cor fora. usar apenas o underscore dentro da class, nunca fora.
    }

    //property width
    get width() {  //metodo get
        return this._width //devolve o valor da propriedade privada de width
    }

    set width(value) { //metodo set
        this._width = value;
    }
    //property height
    get height() {  //
        return this._height
    }

    set height(value) {
        this._height = value;
    }

    //property color

    get color() {
        return this._color
    }
/**
 * @returns devolve o valor da area do rectangulo
 */
    getArea() {
        return this._width * this._height
    }
    /**
     * @returns devolve o valor o perimetro do rectangulo usando as propriedades privadas estabelecidas
     */
    getPerimeter() {
        return this._width * 2 + this._height * 2;
    }

    getColor() {
        return this._color;
    }
}


const myRectangle = new Rectangle(10, 5) //se tiver um construtor
/* console.log(myRectangle.width) //vai chamar o metodo get.width
console.log(myRectangle.height) //vai cahamar o metodo get.height
myRectangle.width = 11 //esta a chamar o metodo set.width. */

console.log(myRectangle.getArea())
console.log(myRectangle.getPerimeter())
console.log(myRectangle.getColor())


const myRectangle2 = new Rectangle()
console.log(myRectangle2.getArea())
console.log(myRectangle2.getPerimeter())
console.log(myRectangle2.getColor())

const rectangles = []
rectangles.push(myRectangle)
rectangles.push(myRectangle2)

console.table(rectangles)