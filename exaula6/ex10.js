let pessoa = [];

let nome; cidade;

for(let i = 0; i <10; i++) {
    nome = prompt("informe o nome da pessoa"+ (i+1)+":");
    cidade = prompt("Informe a cidade da pessoa"+ (i+1));
    pessoa.push({"nomes":nome, "cidades":cidade});
}

let indice;
let continua;
while (true) {
    indice = prompt("Informe o índice");
    if (indice >= 0 && indice < 3){
    alert("Nome..: "+pessoa [indice]+ "Cidade:" +pessoa [indice].cidade);
    } else {
        alert("Indice invalido");
    }
    continua = prompt("deseja ler outro indice <s/n").toLocaleLowerCase()
    if (continua !="s") break;
}

document.write(pessoas);

/*let nome = [];
let cidade = [];

for(let i = 0; i <10; i++) {
    nome.push(prompt("informe o nome da pessoa"+(i+1)+":"));
    cidade.push(prompt("informe a cidade da pessoa"+(i+1)+":"))
}

let indice;
let continua;
while (true) {
    indice = prompt("Informe o índice");
    if (indice >= 0 && indice < 3){
    alert("Nome..: "+nome [indice]+ "<br>");
    } else {
        alert("Indice invalido");
    }
    continua = prompt("deseja ler outro indice <s/n").toLocaleLowerCase()
    if (continua !="s") break;
}*/