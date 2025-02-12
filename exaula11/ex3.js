class Produto{
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    // método de consulta
    consultarProduto(){
        document.write("Nome do produto: "+ this.nome +" Preço R$: "+ this.preco + " Quantidade: " + this.quantidade + "<br");
    }

}
// criando objeto

let cadastroProduto = new Produto("Caneta",2.50,30);
cadastroProduto.consultarProduto();