const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do normal.';
        }else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Continue assim!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }else if (valorIMC < 35){
            classificacao = 'com obesidade leve.';
        }else if (valorIMC < 40){
            classificacao = 'com obesidade média';
        }else {
            classificacao = 'com obesidade grave. Cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
       
    }else {
        resultado.textContent = 'Preencha todos os dados!!!';
    }

}

calcular.addEventListener('click', imc);