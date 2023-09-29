
var paragrafo = document.getElementById('paragrafo');
var botao = document.getElementById('botao');


botao.addEventListener('click', function () {
    if (paragrafo.style.display === 'none' || paragrafo.style.display === '') {
        paragrafo.style.display = 'block'; 
    } else {
        paragrafo.style.display = 'none';
    }
});
