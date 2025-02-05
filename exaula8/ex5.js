function contar(num, numero) {
    alert("contar!")

    for (i = num; i <= numero; i++) {
        document.write(i + "<br>")
    }
}

let num = prompt("escolha um numero")
let numero = prompt("escolha o numero maximo")
contar(num, numero)


/*function contar() {
    alert ("contar!")
    let num =prompt("escolha um numero")
    let nume =prompt("escolha o numero maximo")
    for (i = num; i <= nume; i++){
document.write(i + "<br>")
    }
}

contar()*/