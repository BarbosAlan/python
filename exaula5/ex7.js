const prova1 = prompt("Diga quanto tirou na prova: ")
const prova2 = prompt("Diga quanto tirou na segunda prova: ")
const prova3 = prompt("Diga quanto tirou na terceira prova: ")

if (prova1.trim() == "" || prova2.trim() == "" || prova3.trim() == "") {
    alert("Informe valores válidos.")
} else {
    const media = (parseFloat(prova1) + parseFloat(prova2) + parseFloat(prova3) ) / 3
    document.write(`A média é: ${media.toFixed(1)}`)
}