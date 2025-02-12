class Pessoa {
    constructor(nome,idade,profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
    descricao(){
        document.write("A "+this.nome+" tem "+this.idade+" e exercer a profissão de  "+this.profissao )
    }

}
let nome = prompt("Informe o nome");
let idade = prompt("Informe o idade");
let profissao = prompt("Informe o profissao");
let person = new Pessoa("Júlia",30,"Advogada")
person.descricao()