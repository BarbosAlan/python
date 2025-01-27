
let valor1 = 10
let valor2 = 20

let operador = "+"

switch (operador) {
    case "+":
        console.log(valor1 + valor2);
        break
    case "-":
        console.log(valor1 - valor2);
        break
    case "*":
        console.log(valor1 * valor2);
        break
    case "/":
        console.log(valor1 / valor2)
        break
    default:
        console.log("Operador inválido!")
}