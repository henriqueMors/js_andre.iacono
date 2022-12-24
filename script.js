/*

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


// function com tarefas
function vendaStatus(status, total){ //parametro
    console.log('Venda ' + status + '!' + ' Valor de $' + total)
}

vendaStatus('aprovada', 320) //argumento


// function com operacoes matematicas
function desconto(preco){ // paramentro é o valor cujo pode ser alterado pelo user no argumento / a função é feita em cima do parametro
    return preco - ( preco * 10 / 100)
}

let total = desconto(100) // argumento é o valor a ser alterado pelo user
console.log(total)

// OPERADORES
let num1 = 5
let num2 = 10
let Total = num1 + num2
console.log(Total++)
// % resto de uma divisao
// ** exponencial
// ++ incremento
// -- decremento
// ++Total = mostra o resultado atualizado do total + 1
// --Total = mostra o resultado atualizado do total - 1
// Total++ = armazena o resultado total atualizado, mostrando somente a operação atual
console.log(Total++)
console.log(Total++)
console.log(Total++)
console.log(Total++)
console.log(Total)


// Comparação
let num001 = 'a'
let num002 = 'a'

console.log(num001 > 4 || num002 < 1)
console.log(num001 === num002) 

// Operador ternário
let velocidade = 240
let medicao = velocidade > 110 ? 'multado':'nada consta';
console.log(medicao)


function radar(analise) {
    return analise > 110 ? 'Multa-se':'Deixe ir';
};

let velocidade = radar(111);
console.log(velocidade);

*/

function verificaIdade(idade) {
    return idade > 16
}

let verificado = idade(17)
console.log(verificado)