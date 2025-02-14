class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    descontoCriado() {
        this.preco -= this.preco * 0.1
    }
    exibirProduto() {
        document.write(`Nome: ${this.nome}<br>Preço: <strong>R$ ${this.preco}</strong><p>`)
    }
}
elden = new Produto("Elden Ring", 300)
elden.exibirProduto()
elden.descontoCriado()
elden.exibirProduto()