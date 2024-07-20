let botaoDescobrir = document.getElementById('descobrir');
let botaoReiniciar = document.getElementById('reiniciarBotao');
let input = document.querySelector('input');
input.focus();
let titulo = document.querySelector('h1');
let paragrafo = document.querySelector('p');

function mudarTexto() {
    let valorInput = input.value;
    if(valorInput === '' || valorInput === null) {
        alert('Digite algo na caixa de entrada.');
    } else {

        function textoTrasFrente() {
            return valorInput.split('').reverse().join('');
        }

        if(valorInput === textoTrasFrente()) {
            titulo.innerHTML = `${valorInput} é um palíndromo!`;
            titulo.classList.add('class__blue');
            paragrafo.classList.add('class__blue');
        } else {
            titulo.innerHTML = `${valorInput} não é um palíndromo!`
            titulo.classList.add('class__red');
            paragrafo.classList.add('class__red')
        }

        botaoReiniciar.removeAttribute('disabled');
        botaoDescobrir.setAttribute('disabled', true);
        input.setAttribute('disabled', true);

    }
}

function reiniciar() {
    titulo.textContent = 'O que é um palíndromo?'
    titulo.className = '';
    paragrafo.className = '';
    input.value = '';
    input.focus();
    botaoReiniciar.setAttribute('disabled', true);
    input.removeAttribute('disabled');
    botaoDescobrir.removeAttribute('disabled');
}
