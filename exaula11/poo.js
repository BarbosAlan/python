class Carro{
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    acelerar(){
        document.write("O carro" + this.modelo + "está acelerando..."+"<br>");
    }
    frear() {
        document.write("O carro " + this.modelo + "Freou ararrrrrrr"+"<br>")
    }
}

let meuCarro = new Carro("Toyota", "Corolla", "Preto");
meuCarro.acelerar();
let meuOutroCarro = new Carro("Fiat", "Uno", 'Prata');
meuOutroCarro.acelerar();
meuOutroCarro.frear();