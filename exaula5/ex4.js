/*let valorproduto = prompt("digite o valor do produto")

let desconto = prompt("digite o valor do desconto")

let valorfinal = document.write("O valor do desconto é " + valorproduto * desconto /100)
*/

let valorInicial = prompt("Digite o valor inicial:");
let percentualDesconto = prompt("Digite o percentual de desconto:");

if (valorInicial.trim() == '' || percentualDesconto.trim() == '') {
    alert("Os valores devem ser preenchidos!");
} else {
    let valorFinal = parseFloat(valorInicial) * (1-(parseFloat(percentualDesconto) / 100));
    document.write("O valor final é: " + valorFinal.toFixed(2));
}