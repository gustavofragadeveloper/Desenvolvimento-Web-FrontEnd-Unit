function inverterString(str) {
    const strArray = str.split('');
    const reversedArray = strArray.reverse();
    const reversedString = reversedArray.join('');
    return reversedString;
  }
  
  // Exemplo de uso:
  const stringOriginal = "Olá, mundo!";
  const stringInvertida = inverterString(stringOriginal);
  console.log(stringInvertida); // Saída: "!odnum ,álO"
  