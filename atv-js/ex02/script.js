
function mostrardata() {
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let resultado = document.getElementById("resultado");


    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
        alert("Por favor, digite apenas números!!");
    } else if (dia > 31 || mes > 12 ) {
        alert("Por favor, digite uma data válida!");
    } else if (dia < 0 || mes < 0 || ano < 0) {
        alert("Por favor, digite números válidos");
    } else {
        if (mes == 1 && dia <= 31) {
            resultado.textContent = dia + " de janeiro de " + ano
        }
        else if (mes == 2 && dia <= 29){
            resultado.textContent = dia + " de fevereiro de " + ano
            alert("Atenção quando o ano for bissexto")
        } 
        else if (mes == 3 && dia <= 31){
            resultado.textContent = dia + " de março de " + ano
        }
        else if (mes == 4 && dia <= 30){
            resultado.textContent = dia + " de abril de " + ano
        }
        else if (mes == 5 && dia <= 31){
            resultado.textContent = dia + " de maio de " + ano
        }
        else if (mes == 6 && dia <= 30){
            resultado.textContent = dia + " de junho de " + ano
        }
        else if (mes == 7 && dia <= 31){
            resultado.textContent = dia + " de julho de " + ano
        }
        else if (mes == 8 && dia <= 31){
            resultado.textContent = dia + " de agosto de " + ano
        }
        else if (mes == 9 && dia <= 30){
            resultado.textContent = dia + " de setembro de " + ano
        }
        else if (mes == 10 && dia <= 31){
            resultado.textContent = dia + " de outubro de " + ano
        }
        else if (mes == 11 && dia <= 30){
            resultado.textContent = dia + " de novembro de " + ano
        }
        else if (mes == 12 && dia <= 31){
            resultado.textContent = dia + " de dezembro de " + ano
        }
        
    }
}