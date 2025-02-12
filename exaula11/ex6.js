class Produto {
    constructor(nome, preço, estoque){
        this.nome = nome;
        this.preço = preço;
        this.estoque = estoque;
    }
    vender(quantidade){
        if(this.estoque > quantidade){
        this.estoque -= quantidade;
        document.write("Após a venda do produto "+this.nome+", a quantidade em estoque é de "+this.estoque+"<br>")
        } else {
            document.write("O produto "+this.nome+" não tem estoque suficiente nesta quantidade"+"<br>")
        }
    }
    reporEstoque(quantidade){
        this.estoque += quantidade;
        document.write("A quantidade do produto "+this.nome+" depois da reposição é de "+this.estoque+"<br>")
    }
    exibirInfo(){
        document.write("O produto "+this.nome+" com o preço atual de R$: "+this.preço+" possui a quantidade de "+this.estoque+"<br>")
    }
 }
 let produto1 = new Produto("Pipa do flamengo",2,20)
 let produto2 = new Produto("Pano de chão do vasco",5,10)
 let produto3 = new Produto("Protetor de costas do botafogo",50,25)
 let produto4 = new Produto("babydoll do fluminense",25,40)

 produto1.vender(10)
 produto2.reporEstoque(50)
 produto1.exibirInfo()