//minha resolução

let lado1 = prompt("Digite o primeiro numero")
let lado2 = prompt("Digite o segundo numero")
let lado3 = prompt("Digite o terceiro numero")

if (lado1 + lado2 > lado3 || lado1 + lado3 > lado2 || lado2 + lado3 > lado1)
    if (lado1 === lado2 && lado2 === lado3){
    document.write("Triangulo Equilatero")
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3){
    document.write("Triangulo Isóceles")
} else {
    document.write("Triangulo Escaleno")
}

//resolução do professor

/*if (lado1.trim() === "" || lado2.trim() === "" || lado3.trim() === "") {
    alert("Informe os valores validos")
} else if (
    (parseInt(lado1) + parseInt(lado2) < parseInt(lado3)) ||
    (parseInt(lado1) + parseInt(lado3) < parseInt(lado2)) ||
    (parseInt(lado2) + parseInt(lado3) < parseInt(lado1))
) {
    alert("Os valores não podem formar um triângulo")

} else {
    if (parseInt(lado1) == parseInt(lado2) && parseInt(lado2) == parseInt(lado3)) {
        document.write("Triangulo Equilatero")
    }
    else if (parseInt(lado1) == parseInt(lado2) || parseInt(lado2) == parseInt(lado3) || parseInt(lado1) == parseInt(lado3)) {
        document.write("Triangulo Isóceles")
    }
    else {
        document.write("Triangulo Escaleno")
    }
}*/