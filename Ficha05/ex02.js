/* 2. Definição de classes 
a. Defina uma classe Car para representar um carro.
b. Um carro é composto por uma marca, matrícula, cor, depósito atual (em litros) e tipo
de combustível. Crie um construtor que recebe todos estes parâmetros e que
inicialize as respetivas propriedade públicas
c. Adicione dois carros:
i. “Ford”, ”91-GH-15”, “verde”, 40, “Gasóleo”
ii. “Opel”, ”23-AB-23”, “branco”, 50, “Gasolina”
iii. “Nissan”, ”12-CX-45”, “preto”, 22, “Gasóleo”
d. Crie os seguintes métodos:
i. Método para atualizar a cor de um carro
ii. Método para abastecer o depósito. Deve receber como parâmetro o nº de
litros abastecidos
iii. Método que recebe o nº de quilómetros percorridos e que altere o nº de litros
tendo em conta a seguinte consumo base: 5l/100km
e. Adicione os objetos a um array cars
f. Crie as seguintes funções:
i. uma função que devolva o nº de carros de uma determinada marca passada
como parâmetro
ii. uma função que dado um tipo de combustível devolva a soma dos litros dos
carros que têm esse tipo de combustível
 */

 class Car {
     constructor (brand, plate, color, deposit, fuelType){
         this.brand = brand
         this.plate = plate
         this.color = color
         this.deposit = deposit
         this.fuelType = fuelType
     }

 }

 const car1 = new Car ('Ford', '91-GH-15', 'verde', 40, 'Gasóleo')
 const car2 = new Car ('Opel', '23-AB-23', 'branco', 50, 'Gasolina')
 const car3 = new Car ('Nissan', '12-CX-45', 'preto', 22, 'Gasóleo')
