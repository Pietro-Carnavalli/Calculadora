
function inserir(valor) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = valor;
    } else {
        display.innerText += valor;
    }
}

function calcular() {
    const display = document.getElementById('display');
    try {
        const resultado = math.evaluate(display.innerText);
        display.innerText = resultado;
    } catch {
        display.innerText = 'Error';
    }
}


function limpar() {
    document.getElementById("display").innerText = "0";
}

function apagar() {
    const display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}