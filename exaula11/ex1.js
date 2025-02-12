class Moto{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    mostrar(){
        document.write("A marca da moto é "+this.marca+" o modelo da moto é " +this.modelo+ " e a cor dela é "+this.cor)
    }
}

let minhaMoto = new Moto ("HondaKawasaki","Kawasaki Ninja", "Verde");
minhaMoto.mostrar();