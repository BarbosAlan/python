let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Digite o número :`));
    if ((numero)) {
        soma += numero;
    } else {
        alert("Por favor, insira um número válido.");
        i--;
    }
}

alert(`A soma total dos números é: ${soma}`);