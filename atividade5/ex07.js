function menorNumero(a, b, c){
    if ((a < b) && (a < c)){
        return a 
    }
    else if ((b < a) && (b < c)){
        return b
    }
    else {
        return c
    }
};

console.log(menorNumero(3, 8, 5))