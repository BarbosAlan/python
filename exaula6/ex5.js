let nome = prompt("Informe o seu nome.");
let vezes = parseInt(prompt("Informe o numero de vezes que o nome irá aparecer na tela."));
let i = 0;

while(i<vezes){
    document.write(nome+"<br>");
    vezes--;
}


/*let nome = prompt("Digite seu nome:");

let quantidade = parseInt(prompt("Quantas vezes você deseja exibir o nome?"));

if ((quantidade) && quantidade > 0) {
    let contador = 0;

    while (contador < quantidade) {
        document.write(nome +"<br>");
        contador++;
    }
} else {
    alert("Por favor, insira algo (número maior que 0).");
}*/