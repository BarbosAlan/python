let valor1 = 3
let valor2 = 4
let valor3 = 2
// verificar qual é o maior valor ou se todos são iguais
if (valor1==valor2){
    if (valor2==valor3){
        console.log("Todos os valores são iguais: ")
    }
} else if (valor1 > valor2) {
    if (valor1 > valor3) {
        console.log("Maior valor é: "+valor1)    
    }  
}
if (valor2 > valor1) {
    if (valor2 > valor3) {
        console.log("Maior valor é: "+valor2)    
    }  
}
if (valor3 > valor1) {
    if (valor3 > valor2) {
        console.log("Maior valor é: "+valor3)    
    }  
}

