let lado1 = prompt("Digite o primeiro numero")
let lado2 = prompt("Digite o segundo numero")
let lado3 = prompt("Digite o terceiro numero")

if (lado1 + lado2 > lado1 + lado3 > lado2 && lado2 + lado3 > lado1)
    if (lado1 === lado2 && lado2 === lado3){
    document.write("Triangulo Equilatero")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    document.write("Triangulo Isóceles")
} else {
    document.write("Triangulo Escaleno")
}


