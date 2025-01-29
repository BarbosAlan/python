let idade = prompt("Informe a idade")

if(idade.trim() ===""){
    alert("Informe valores válidos")
}
else{
    idade = parseFloat(idade)

    if(idade >=18){
        alert("Pode dirigir")
    }
    else{
        alert("Não pode dirigir")
    }
}