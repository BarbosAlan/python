class Livro{
    constructor(titulo, autor, anoPublico){
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublico = anoPublico;
}
exibirDetalhes(){
    document.write("O nome do livro é "+this.titulo+" autor do livro "+this.autor+" ano de publicação do livro "+this.anoPublico+"<br>")
}
}

let livro = new Livro ("Pequeno Principe", "Antoine de Saint-Exupéry", "1943");
livro.exibirDetalhes();