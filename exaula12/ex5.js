class Retangulo {
    constructor(largura, altura) {
        this.largura = largura
        this.altura = altura
    }
    exibir() {
        let resultado = this.largura * this.altura
        document.write("Largura: " + this.largura + "<br>" + "Altura: " + this.altura + "<br>" + "Resultado: " + resultado)
    }
}
let largura = prompt("Informe a largura: ")
let altura = prompt("Informe a altura: ")
let resultado = new Retangulo(largura, altura)
resultado.exibir()