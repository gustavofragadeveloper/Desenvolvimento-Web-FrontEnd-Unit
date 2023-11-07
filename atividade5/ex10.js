function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1; // O fatorial de 0 e 1 é 1
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  // Exemplo de uso:
  const numero = 5;
  const fatorial = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${fatorial}`);
  