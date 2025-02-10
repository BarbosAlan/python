let matriz = []
let linhas = 3
let colunas = 3
let medias = []

for(let i = 0;i<linhas;i++){
    matriz[i] = []
    let soma = 0
   
    for(let j = 0;j<colunas;j++){
        matriz[i][j] = parseFloat(prompt("Digite uma nota para a posição ["+i+"]["+j+"]"))
        document.write("Nota:"+ matriz[i][j]+"<br>")//percorre a lista
        soma += matriz[i][j]
    }

    let media = soma / linhas;
    medias.push(media);
    document.write("Soma da linha " + i + ": " + soma + "<br>");
    document.write("Média da linha " + i + ": " + media.toFixed(1) + "<br><br>");
}