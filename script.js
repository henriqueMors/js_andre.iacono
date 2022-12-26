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

for (i = 10; i <= 20; ++i) {
    console.log('Numero ' + i)
}

let i = 1

while (i <= 10) {
    console.log('Numero ' + i)
    i++
}

let i = 1
do {
    console.log('Numero ' + i)
    i++
} while (i <=10)


// for in
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}

for (let i in myCar) // in busca diretamente o index de um objeto, ou dado do objeto
    console.log(i, myCar[i])



// for of
const myFriends = [ 'alex', 'silvia', 'maria', 'jose']
    
for (let i of myFriends) // of busca diretamente o valor do index em uma array
    console.log(i)


// Criando OBJETOS
let livro = {
    tituloLivro: 'homem-aranha',
    autorLivro: 'stan lee',
    paginasLivro: 100,
    precoLivro: 20.00,
    capitulosLivro: {
        cap1: 'cidade cinza',
        cap2: 'um novo vilao',
        cap3: 'tentaculos me mordao'
    }
}

console.log(livro)


// colocando uma função dentro de um objeto
let livro = {
    tituloLivro: 'homem-aranha',
    autorLivro: 'stan lee',
    paginasLivro: 100,
    precoLivro: 20.00,
    capitulosLivro: {
        cap1: 'cidade cinza',
        cap2: 'um novo vilao',
        cap3: 'tentaculos me mordao'
    },
    imprimindo: function() {
        console.log('imprimindo...')
    }
}

livro.imprimindo()

// Factory
function criaLivro(titulo, autor, paginas) {
    let livro = {
        tituloLivro: titulo,
        autorLivro: autor,
        paginasLivro: paginas, 
    }
    return livro
}

let livro1 = criaLivro('Homem-Aranha', 'Stan Lee', 400)
let livro2 = criaLivro('Batman', 'Sei Lá', 100)
livro1.corcapa = 'Roxa' // Adicionando elementos ao obejto

console.log(livro1)

*/

//constructor
function Livro(titulo, autor, paginas) { // no caso do constructor, por convenção, a primeira letra da função é maiuscula
    this.tituloLivro = titulo;
    this.autorLivro = autor;
    this.paginasLivro = paginas 
    }


let livro1 = new Livro('Homem-Aranha', 'Stan Lee', 400)
let livro2 = new Livro('Batman', 'Sei Lá', 100)


console.log(livro2)