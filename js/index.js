function somar(){
    const number1= Number(document.getElementById("number1").value);
    const number2= Number(document.getElementById("number2").value);

    if(isNaN(number1) || isNaN(number2))
        alert('Por favor, insira números !');
     
    else {
        const resultado = number1 + number2;
        document.getElementById("response").value = resultado;
    }
}