let valor = Number(prompt('Digite um numero: '))

if ( valor >= 20 ) {
    document.getElementById('resultado').innerHTML = 'aprovado'
} else {
    document.getElementById('resultado').innerHTML = 'recusado'
}