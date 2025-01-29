
let valor1 = prompt("Digite o primeiro numero");
let valor2 = prompt("Digite o segundo numero");

if (valor1.trim === "" || valor2 === "") {
    alert("Informe valores validos");
} else {

    let num1 = parseFloat(valor1);
    let num2 = parseFloat(valor2);
    let soma = (num1 + num2);

    document.write("Digete os valores: " + soma);

    if (soma > 20) {
        document.write("soma maior que 20");
    }
    else if (soma < 20) {
        document.write("soma menor que 20");
    }
    else {
        console.log("soma igual a 20");
    }
}