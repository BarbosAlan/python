class Filmes {
    constructor(titulo, diretor, ano){
        this.filme = titulo
        this.diretor = diretor
        this.ano = ano
    }
    informacoes() {
        document.write("BATMAN: Qualquer um pode ser herói." +this.titulo+ "Até uma pessoa que põe um casaco nos ombros de um menino para mostrar que o mundo não acabou")
        document.write("GORDON: Bruce Wayne?" +this.diretor)
        document.write("O ano do filme " +this.ano+ "é 2022")
    }
}
let filme = new Filmes("The Batmas", "Matt Reeves", "ano 2022")


/*class Movie {
    constructor(title, director, year) {
        this.name = title
        this.president = director
        this.age = year
    }
    showInfo() {
        document.write(`Mike: Hey Hannah! Let's go watch ${this.name} at the movie theather?<br>`)
        document.write(`Hannah: I don't know Honey. <br> Isn't the one with the director ${this.president}? I think his movies scary >.<<br>`)
        document.write(`Mike: Hahaha. Don't be scary baby! I heard that this one is from ${this.age}. It's really a classic one. <br>`)
    }
}

let movie1 = new Movie("Friday the 13th", "Sean S. Cunningham", "1980")
movie1.showInfo()*/