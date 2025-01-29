let altura = parseFloat(prompt('Digite sua altura'));
let peso = parseFloat(prompt('Digite seu peso'));
let imc = peso / (altura ** 2) // ** expoente
/*if (isNaN(peso) || isNaN(altura)) {  //isNaN testa se o valor convertido é nulo
    document.write('Digite um valor válido')
} else {
    if (imc < 18.5) {
        document.write("Baixo Peso")
    } else if (imc >= 18.5 && imc <= 24.99) {
        document.write("Seu imc é Normal " + imc.toFixed(2)) //toFixed(2) arredonda para 2 casas decimais
    } else if (imc >= 25 && imc <= 29.99) {
        document.write("Seu imc é Sobrepeso " + imc.toFixed(2))
    } else if (imc >= 30 && imc <= 34.99) {
        document.write("Seu imc é Obesidade I " + imc.toFixed(2))
    } else if (imc >= 30 && imc <= 34.99) {
        document.write("Seu imc é Obesidade I " + imc.toFixed(2))

    } else if (imc >= 35 && imc <= 39.99) {
        document.write("Seu imc é Obesidade II " + imc.toFixed(2))
    }
    else {
        document.write("Seu imc é Obesidade III " + imc.toFixed(2))
    }
}*/

switch (true) {
    case (imc <= 18.5):
        document.write("Baixo peso")
        break
    case (imc >= 25 && imc <= 29.99):
        document.write("Peso normal")
        break
    case (imc >= 30 && imc <= 34.99):
        document.write("Sobrepeso")
        break
    case (imc >= 35 && imc <= 39.99):
        break
    default:
        document.write("Obesidade II")
    break
}