
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


const botao = document.getElementById('toggle');

botao.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        botao.innerText = "☀️ Ativar modo claro";
    } else {
        botao.innerText = "🌙 Ativar modo escuro";
    }
})

function calculation(key) {
    switch (key) {
        case 'c':
            limpar()
            break;

        case 'Backspace':
            apagar()
            break;

        case '=':
        case 'Enter':
            calcular();
            break;

        case '*':
        case '7':
        case '8':
        case '9':
        case '-':
        case '4':
        case '5':
        case '6':
        case '+':
        case '1':
        case '2':
        case '3':
        case '0':
        case '=':
          inserir(key)
          break;
        default:
            break;
    }
}


document.addEventListener('keydown', function (event) {
    console.log('Tecla pressionada:', event.key);
    calculation(event.key)
});







