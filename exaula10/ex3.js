// a) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos.
let notas = [
    [7.5, 8.0, 6.5],
    [5.0, 9.5, 7.0],
    [6.0, 4.5, 8.5]
];

// b) Exibir a matriz no console de forma organizada.
console.log("Matriz de Notas:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join("\t"));
}

// c) Calcular e exibir a média das notas de cada aluno.
console.log("\nMédias dos Alunos:");
for (let i = 0; i < notas.length; i++) {
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
    }
    let media = soma / notas[i].length;
    console.log(`Aluno ${i + 1}: ${media.toFixed(2)}`);
}

// d) Identificar e exibir a maior nota da matriz.
let maiorNota = notas[0][0];
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] > maiorNota) {
            maiorNota = notas[i][j];
        }
    }
}
console.log(`\nMaior nota da matriz: ${maiorNota}`);

// e) Substituir todas as notas menores que 6 por 6.
for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] < 6) {
            notas[i][j] = 6;
        }
    }
}

// Exibir a matriz após a substituição
console.log("\nMatriz de Notas após substituição:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join("\t"));
}