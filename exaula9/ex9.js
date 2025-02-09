let listaNomes = [];

let nome1 = prompt("Digite o primeiro nome:");
listaNomes.push(nome1); // Adiciona ao final do array

let nome2 = prompt("Digite o segundo nome:");
listaNomes.push(nome2);

let nome3 = prompt("Digite o terceiro nome:");
listaNomes.push(nome3);

listaNomes.sort();

alert("Lista ordenada:\n" + listaNomes.join("\n"));