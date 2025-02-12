class ContaBancaria {
    #saldo;
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.#saldo += valor;
        document.write("Depósito de R$" +valor+ "realizado" + "<br>");
    }
    consultarSaldo() {
        document.write("Saldo do titular R$" +this.titular + "| R$" +this.#saldo + "<br>");
    }
    sacar(valor) {
        if (valor > this.#saldo) {
            document.write("Saldo insuficiente para o titular " +this.titular+ "<br>");
        } else {
            this.#saldo -= valor;
            document.write("Saldo após o saque: R$"+valor+ "| R$" +this.#saldo + "<br>");
        }
    }
    traferir(valor, destinatario) {
        if (valor > this.#saldo) {
            document.write("Saldo insuficiente para o titular" +this.titular + "<br>");
        } else {
            this.#saldo -= valor;
            destinatario.#saldo += valor;
            document.write("Você trasferiu R$" +valor+"para o titular:" +destinatario.titular + "<br>");
        }
    }
}
let cliente1 = new ContaBancaria("Davi", 1000);
let cliente2 = new ContaBancaria("Carlos", 500);
cliente1.consultarSaldo();
cliente2.consultarSaldo();
cliente1.traferir(200, cliente2);
cliente1.consultarSaldo();
cliente2.consultarSaldo();