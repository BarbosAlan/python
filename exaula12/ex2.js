class Aluno{
    constructor(nome, idade, notas){
        this.nome = nome;
        this.idade = idade
        this.notas = notas
    }
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        let media = soma / this.notas.length;
        document.write(`A média do(a) aluno(a) ${this.nome}, que tem ${this.idade} anos, é ${media.toFixed(1)}<br>`);
    }
}

let aluno1 = new Aluno("Alan", 20, [7.5, 8.3, 9.7]);
let aluno2 = new Aluno("Israel", 20, [6.4, 7.8, 8.6]);
aluno1.calcularMedia();
aluno2.calcularMedia();