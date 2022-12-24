console.log('JS tá aqui');

// criando um objeto
let carro = {
    fabricante: 'Hyunday',
    modelo: 'veracruz',
    ano: 2012,
    cor: 'preto'
}
carro.modelo = 'i30' //troca o modelo do carro
console.log(carro.modelo)


// criando um array
let friends = ['marcos', 'elisa', 'silvia', 'joao', 'roberto']
friends[0] = 'alfredo' // substituindo um index
console.log(friends[0])


// criando function
function vendaStatus(status, total){ //parametro
    console.log('Venda ' + status + '!' + ' Valor de $' + total)
}

vendaStatus('aprovada', 320) //argumento


// operacoes matematicas
function desconto(preco){ // paramentro é o valor cujo pode ser alterado pelo user no argumento
    return preco - ( preco * 10 / 100)
}

let total = desconto(100) // argumento é o valor a ser alterado pelo user
alert
alert(total)