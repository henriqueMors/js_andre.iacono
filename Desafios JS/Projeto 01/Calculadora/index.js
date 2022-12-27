function calcule() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let total = 0

    if (document.getElementById('positivo').checked)
    total = num1 + num2;
    else if (document.getElementById('negativo').checked)
    total = num1 - num2;
    else if (document.getElementById('multiplicar').checked)
    total = num1 * num2;
    else
    total = num1 / num2;

    document.getElementById('resultado').innerHTML = 'Resultado: ' + String(total)
}