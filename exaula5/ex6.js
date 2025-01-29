let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");


if (num1.trim() == '' || num2.trim() == '') {
    alert("Os valores devem ser preenchidos!");
} else {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 > num2) {
        document.write(`O maior número é: ${num1}`);
    } else if (num1 < num2) {
        document.write(`O maior número é: ${num2}`);
    } else {
        document.write("Os números são iguais");
    }
}