function calcularIMC() {
    const altura = document.getElementById('altura').value / 100;
    const peso = document.getElementById('peso').value;
    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado-imc').innerText = `Seu IMC é ${imc} (${classificacao})`;
}

function calcularIMCidosos() {
    const alturaIdosos = document.getElementById('altura-idosos').value / 100;
    const pesoIdosos = document.getElementById('peso-idosos').value;
    const imcIdosos = (pesoIdosos / (alturaIdosos * alturaIdosos)).toFixed(2);

    let classificacaoIdosos = '';

    if (imcIdosos < 22) {
        classificacaoIdosos = 'Abaixo do peso';
    } else if (imcIdosos < 27) {
        classificacaoIdosos = 'Adequado ou eutrófico';
    } else {
        classificacaoIdosos = 'Sobrepeso';
    }

    document.getElementById('resultado-imc-idosos').innerText = `Seu IMC é ${imcIdosos} (${classificacaoIdosos})`;
}
