var palavraInput = document.getElementById('palavra');
var texto = document.getElementById('texto');
var resultadoDiv = document.getElementById('resultado');
var resetButton = document.getElementById('reset');

document.getElementById('pesquisar').addEventListener('click', function (e) {
    e.preventDefault();

    var palavra = palavraInput.value.trim();
    var textoHTML = texto.innerHTML;
    var regex = new RegExp('\\b' + palavra + '\\b', 'gi');
    var ocorrências = textoHTML.match(regex);

    texto.innerHTML = textoHTML.replace(/<span class="destaque">|<\/span>/g, '');

    if (ocorrências && ocorrências.length > 0) {
        var textoDestacado = textoHTML.replace(regex, '<span class="destaque">$&</span>');
        texto.innerHTML = textoDestacado;
        resultadoDiv.textContent = 'Número de ocorrências encontradas: ' + ocorrências.length;
    } else {
        resultadoDiv.textContent = 'Nenhuma ocorrência encontrada.';
    }
});

resetButton.addEventListener('click', function (e) {
    e.preventDefault();

    palavraInput.value = '';
    texto.innerHTML = texto.innerHTML.replace(/<span class="destaque">|<\/span>/g, '');
    resultadoDiv.textContent = '';
});
