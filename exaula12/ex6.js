class Carro{
    constructor(marca, modelo,velocidade){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = velocidade
    }
    acelera(){
        this.velocidade+=10
       }
       exibirInfo(){
        document.write(`velocidade do carro atual e ${this.velocidade}km/h. `)
       }
}
let carro = new Carro("uno", "fiat.",80)

carro.acelera()
carro.acelera()
carro.exibirInfo()
