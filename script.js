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



// Operadores lógicos

// && um e outro

// || um ou outro

// ! não

function catraca(ingresso) {
    return ingresso == true ? 'Liberado':'Dirija-se a bilheteria'
}

let liberacao =  catraca(false)
console.log(liberacao);

// Operadores logicos com strings
let corCliente = undefined
let corEstoque = 'Preta'
let corVendida = corCliente || corEstoque

console.log('Carro disponivel na cor ' + corVendida);


// Declarações condicionais
function msg(velocidade){
    if (velocidade < 40){
        console.log('Você está dirigindo muito devagar')
    } else if (velocidade >= 41 && velocidade <= 110 ){
        console.log('Sua velocidade está ótima')
    } else {
        console.log('Você está dirigindo muito rápido')
    }
}
console.log(msg(50));


// switch / case -> encontra e troca um valor
let estado = ''

switch (estado) {
    case 'sp':
        console.log('São Paulo')
        break
    case 'mg':
        console.log('Minas Gerais')
        break
    case 'ba':
        console.log('Bahia')
        break
    default:
        console.log('ainda nao cadastrado')
}

*/

for (i = 1; i <= 1000000; ++i) {
    console.log('Numero ' + i)
}

