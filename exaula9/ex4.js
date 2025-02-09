let cateto1 = parseInt(prompt("Digite o valor de um cateto"))
let cateto2 = parseInt(prompt("Digite o valor do outro cateto"))

let hipotenusa = Math.sqrt(Math.pow(cateto1,2) + Math.pow(cateto2,2))
document.write("Hipotenusa = "+Math.round(hipotenusa))