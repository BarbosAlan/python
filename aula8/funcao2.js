function cumprimentar(nome) {
    alert("Olá, " + nome + "! Seja bem-vindo.");
}

// Chamando a função com diferentes valores
/*cumprimentar("Ana");
cumprimentar("Carlos");
cumprimentar("Mariana");*/

let nomes = ["Davi", "Felipe", "Adriel"]
for (let i = 0; i < nomes.length;i++){
    cumprimentar(nomes[i]);
}