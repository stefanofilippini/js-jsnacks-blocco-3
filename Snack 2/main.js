console.log('JS OK');

/*
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
*/

const num_array = [1, 2, 3, 4, 5, 6]

const quad_num = num_array.map (numero => numero * numero);

console.log(num_array);
console.log(quad_num);