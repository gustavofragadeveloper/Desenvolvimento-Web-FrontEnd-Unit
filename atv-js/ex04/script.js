function realizaroperacoes(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = document.getElementById("soma");
    let multiplicacao = document.getElementById("multiplicacao");
    let divisao = document.getElementById("divisao");
    let resto = document.getElementById("resto");
    let resultsoma = document.getElementById("resultsoma");
    let resultmultiplicacao = document.getElementById("resultmultiplicacao");
    let resultdivisao = document.getElementById("resultdivisao");
    let resultresto = document.getElementById("resultresto");
   
    soma.textContent = num1 + " + " + num2;
    resultsoma.textContent = parseFloat(num1) + parseFloat(num2);
  
    multiplicacao.textContent = num1 + " * " + num2;
    resultmultiplicacao.textContent = parseFloat(num1) * parseFloat(num2);

    divisao.textContent = num1 + " / " + num2;
    resultdivisao.textContent = parseFloat(num1) / parseFloat(num2);

    resto.textContent = num1 + " % " + num2;
    resultresto.textContent = parseFloat(num1) % parseFloat(num2);

   
}