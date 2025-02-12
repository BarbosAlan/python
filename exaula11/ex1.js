class Moto{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    mostrar(){
        document.write("A marca da moto é "+this.marca+" o modelo da moto é " +this.modelo+ " o ano dela é "+this.ano)
    }
}

let minhaMoto = new Moto ("HondaKawasaki","Kawasaki Ninja", "2022");
minhaMoto.mostrar();