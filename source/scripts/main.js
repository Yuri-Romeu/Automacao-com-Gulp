function parOuImpar(numero) {
     if (numero % 2 == 0) {
          return `${numero} é par.`;
     } else {
          return `${numero} é impar.`;
     }
}

console.log(parOuImpar(8));
