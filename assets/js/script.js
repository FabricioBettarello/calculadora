function calcsoma(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var soma = numero1 + numero2
    resultado.innerText = soma
}

function calcsub(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var sub = numero1 - numero2
    resultado.innerText = sub
}

function calcmult(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var mult = numero1 * numero2
    resultado.innerText = mult
}

function calcdiv(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    if (numero2 === 0) {
        resultado.innerText = "ERROR: Divisão por zero"
    } else {
        resultado.innerText = numero1 / numero2
    }
}