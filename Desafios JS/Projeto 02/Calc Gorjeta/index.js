function formatNumber(decimal) {
    decimal = Math.ceil(decimal * 100) / 100
    decimal = decimal.toFixed(2)
    return 'R$ ' + decimal
}

function nPessoas(quantidade) {
    if (quantidade == 1) return quantidade + ' pessoa'
    return quantidade + ' pessoas'

}

function update() {
    let valor = Number(document.getElementById('yourBill').value)
    let porcentagem = Number(document.getElementById('tipInput').value)
    let split = document.getElementById('splitInput').value

    let gVal = valor * (porcentagem / 100)
    let total = valor + gVal
    let qtPes = total / split

    document.getElementById('tipPercent').innerHTML = porcentagem + '%'
    document.getElementById('tipValue').innerHTML = formatNumber(gVal)
    document.getElementById('totalWithTip').innerHTML = formatNumber(total)

    document.getElementById('splitValue').innerHTML = nPessoas(split)
    document.getElementById('billEach').innerHTML = formatNumber(qtPes)

}