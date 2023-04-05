var numero1 = 3
var numero2 = 2

var salarioatual = 1000
var reajusteSalarial = 10
var valorReajuste = salarioatual * reajusteSalarial / 100
var salarioFinal = salarioatual + valorReajuste

console.log("---Adição---")
console.log(numero1 , " + " , numero2 , " = " , numero1 + numero2)

console.log("---Subtração---")
console.log(numero1 , " - " , numero2 , " = " , numero1 - numero2)

console.log("---Multiplicação---")
console.log(numero1 , " * " , numero2 , " = " , numero1 * numero2)

console.log("---Divisão---")
console.log(numero1 , " / " , numero2 , " = " , numero1 / numero2)

console.log("---Potência---")
console.log(numero1 ,"elevado ao " , 2 , " = " , numero1 ** 2)

console.log("Módulo - Resto da Divisão")
console.log(numero1 , " % " , numero2 , " = " , numero1 % numero2)

console.log("---Reajuste Salarial---")
console.log("O salario atual é R$", salarioatual ,  ", o valor do reajuste é" , reajusteSalarial , "%. Então o valor com reajuste é R$" , salarioFinal)
