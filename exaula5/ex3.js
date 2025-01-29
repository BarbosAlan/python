let idade = prompt("Digite a idade:");

if (idade.trim() == '') {
    alert("A idade deve ser preenchida!");
} else {
    if (idade >= 18) {
        document.write("Você é maior de idade");
    } else {
        document.write("Você é menor de idade");
    }
}