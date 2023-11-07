function contarElementos (){
    let contador = 0
    let Array = []
    while (contador <= 10) {
        Array.push(contador)
        contador++
    }
    return Array.length
};

console.log(contarElementos());
