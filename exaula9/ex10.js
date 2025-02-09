let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

let numero = prompt("Digite um número de 1 a 7:");

numero = parseInt(numero);

if (numero >= 1 && numero <= 7) {
    let dia = diasDaSemana[numero - 1];
    alert("O dia correspondente é: " + dia);
} else {
    alert("Número inválido! Por favor, digite um número de 1 a 7.");
}