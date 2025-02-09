let numero = []
for(let i=0; i<3; i++ ) {
    let valor = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numero.push(valor);
}

let maiorNumero = Math.max(...numero);


document.write("O maior número digitado é: "+maiorNumero);