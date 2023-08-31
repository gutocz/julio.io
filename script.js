var palavra_certa = 'julio';
const letra1 = document.getElementById('letra1');
const letra2 = document.getElementById('letra2');
const letra3 = document.getElementById('letra3');
const letra4 = document.getElementById('letra4');
const letra5 = document.getElementById('letra5');
const letra6 = document.getElementById('letra6');
const letra7 = document.getElementById('letra7');
const letra8 = document.getElementById('letra8');
const letra9 = document.getElementById('letra9');
const letra10 = document.getElementById('letra10');
const letra11 = document.getElementById('letra11');
const letra12 = document.getElementById('letra12');
const letra13 = document.getElementById('letra13');
const letra14 = document.getElementById('letra14');
const letra15 = document.getElementById('letra15');
const letra16 = document.getElementById('letra16');
const letra17 = document.getElementById('letra17');
const letra18 = document.getElementById('letra18');
const letra19 = document.getElementById('letra19');
const letra20 = document.getElementById('letra20');
const letra21 = document.getElementById('letra21');
const letra22 = document.getElementById('letra22');
const letra23 = document.getElementById('letra23');
const letra24 = document.getElementById('letra24');
const letra25 = document.getElementById('letra25');

const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const botao3 = document.getElementById('botao3');
const botao4 = document.getElementById('botao4');
const botao5 = document.getElementById('botao5');

botao1.addEventListener('click', verificadorPalavra1);
function verificadorPalavra1() {
    var palavra1 = letra1.value + letra2.value + letra3.value + letra4.value + letra5.value;
    letra1.readOnly = true;
    letra2.readOnly = true;
    letra3.readOnly = true;
    letra4.readOnly = true;
    letra5.readOnly = true;
    if (palavra1 === palavra_certa) { // caso acerte a palavra
        colorize(letra1, letra2, letra3, letra4, letra5);
        alert('Acertou!');
    } else {
        colorize(letra1, letra2, letra3, letra4, letra5);
        letra6.readOnly = false;
        letra7.readOnly = false;
        letra8.readOnly = false;
        letra9.readOnly = false;
        letra10.readOnly = false;
    }
}

botao2.addEventListener('click', verificadorPalavra2);
function verificadorPalavra2() {
    var palavra2 = letra6.value + letra7.value + letra8.value + letra9.value + letra10.value;
    letra6.readOnly = true;
    letra7.readOnly = true;
    letra8.readOnly = true;
    letra9.readOnly = true;
    letra10.readOnly = true;
    if (palavra2 === palavra_certa) { // caso acerte a palavra
        colorize(letra6, letra7, letra8, letra9, letra10);
        alert('Acertou!');
    } else {
        colorize(letra6, letra7, letra8, letra9, letra10);
        letra11.readOnly = false;
        letra12.readOnly = false;
        letra13.readOnly = false;
        letra14.readOnly = false;
        letra15.readOnly = false;
    }
}

botao3.addEventListener('click', verificadorPalavra3);
function verificadorPalavra3() {
    var palavra3 = letra11.value + letra12.value + letra13.value + letra14.value + letra15.value;
    letra11.readOnly = true;
    letra12.readOnly = true;
    letra13.readOnly = true;
    letra14.readOnly = true;
    letra15.readOnly = true;
    if (palavra3 === palavra_certa) { // caso acerte a palavra
        colorize(letra11, letra12, letra13, letra14, letra15);
        alert('Acertou!');
    } else {
        colorize(letra11, letra12, letra13, letra14, letra15);
        letra16.readOnly = false;
        letra17.readOnly = false;
        letra18.readOnly = false;
        letra19.readOnly = false;
        letra20.readOnly = false;
    }
}

function colorize(l1, l2, l3, l4, l5) {
    if (l1.value === palavra_certa[0]) {
        l1.style.backgroundColor = 'green';
    } else if (l1.value === palavra_certa[1] || l1.value === palavra_certa[2] || l1.value === palavra_certa[3] || l1.value === palavra_certa[4]) {
        l1.style.backgroundColor = 'yellow';
    } else {
        l1.style.backgroundColor = 'red';
    }
    if (l2.value === palavra_certa[1]) {
        l2.style.backgroundColor = 'green';
    } else if (l2.value === palavra_certa[0] || l2.value === palavra_certa[2] || l2.value === palavra_certa[3] || l2.value === palavra_certa[4]) {
        l2.style.backgroundColor = 'yellow';
    } else {
        l2.style.backgroundColor = 'red';
    }
    if (l3.value === palavra_certa[2]) {
        l3.style.backgroundColor = 'green';
    } else if (l3.value === palavra_certa[0] || l3.value === palavra_certa[1] || l3.value === palavra_certa[3] || l3.value === palavra_certa[4]) {
        l3.style.backgroundColor = 'yellow';
    } else {
        l3.style.backgroundColor = 'red';
    }
    if (l4.value === palavra_certa[3]) {
        l4.style.backgroundColor = 'green';
    } else if (l4.value === palavra_certa[0] || l4.value === palavra_certa[1] || l4.value === palavra_certa[2] || l4.value === palavra_certa[4]) {
        l4.style.backgroundColor = 'yellow';
    } else {
        l4.style.backgroundColor = 'red';
    }
    if (l5.value === palavra_certa[4]) {
        l5.style.backgroundColor = 'green';
    } else if (l5.value === palavra_certa[0] || l5.value === palavra_certa[1] || l5.value === palavra_certa[2] || l5.value === palavra_certa[3]) {
        l5.style.backgroundColor = 'yellow';
    } else {
        l5.style.backgroundColor = 'red';
    }
}

// Enter enviando o formulário
// botão 1
letra5.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao1.click();
    }
});
letra5.addEventListener('input', function() {
    botao1.disabled = campoDeEntrada.value === '';
});
// botão 2
letra10.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao2.click();
    }
});
letra10.addEventListener('input', function() {
    botao2.disabled = campoDeEntrada.value === '';
});
// botão 3
letra15.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao3.click();
    }
});
letra15.addEventListener('input', function() {
    botao3.disabled = campoDeEntrada.value === '';
});
// botão 4
letra20.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao4.click();
    }
});
letra20.addEventListener('input', function() {
    botao4.disabled = campoDeEntrada.value === '';
});
// botão 5
letra25.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        botao5.click();
    }
});
letra25.addEventListener('input', function() {
    botao5.disabled = campoDeEntrada.value === '';
});