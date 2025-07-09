
function inserir(valor) {
    const display = document.getElementById('display');
    if (display.innerText === '0' || displey.innerText === 'Error') {
        display.innerText = valor;
    } else {
        display.innerText+= valor;
    }
}

function calcular() {
    const displey = document.getElementById('display');
    try {
        const resultado = eval(displey.innerText);
        displey.innerText = resultado;
    } catch {
        displey.innerText = 'Error';
    }
}

function limpar() {
    document.getElementById("display").innerText = "0";
}

function apagar() {
    const displey = document.getElementById('display');
    if (displey.value.length > 1) {
        displey.innerText = displey.value.slice(0, -1);
    } else {
        displey.innerText= '0';
    }
}