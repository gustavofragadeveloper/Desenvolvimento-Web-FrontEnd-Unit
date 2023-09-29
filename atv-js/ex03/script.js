function reajustesalarial() {
    let salarioatual = parseFloat(document.getElementById("salarioatual").value);
    let salarioantes = document.getElementById("salarioantes");
    let percentual = document.getElementById("percentual");
    let valoraumento = document.getElementById("valoraumento");
    let novosalario = document.getElementById("novosalario");

    salarioantes.textContent = salarioatual;

    if (salarioatual <= 280) {
        percentual.textContent = "20%";
        valoraumento.textContent = (salarioatual * 0.20).toFixed(2);
    }
    else if (salarioatual > 280 && salarioatual <= 700) {
        percentual.textContent = "15%";
        valoraumento.textContent = (salarioatual * 0.15).toFixed(2);
    }
    else if (salarioatual > 700 && salarioatual <= 1500) {
        percentual.textContent = "10%";
        valoraumento.textContent = (salarioatual * 0.10).toFixed(2);
    }
    else if (salarioatual > 1500) {
        percentual.textContent = "5%";
        valoraumento.textContent = (salarioatual * 0.05).toFixed(2);
    }

    novosalario.textContent = (salarioatual + parseFloat(valoraumento.textContent)).toFixed(2);
};