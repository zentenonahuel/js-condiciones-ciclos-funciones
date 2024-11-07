// 1) Crear una funcion que reciba como parametro e indique en consola si el numero es par o impar.

const parImpar = (numParImpar) => {
    if(numParImpar % 2 === 0){
    console.log('El numero es Par');
    }else{
        console.log('El numero es Impar');
    }
};
parImpar(10);
parImpar(11);

// 2) Crear una funcion que reciba 2 numeros por parametro e indique en consola que numero es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorMenorIgual = (a,b) => {
    if(a === b) console.log('Los numeros son iguales')
        else if(a > b){
            console.log(`El numero ${a} es mayor`);
        }else{
            console.log(`El numero ${b} es mayor`);
        }
};
mayorMenorIgual(23498234,92342);
mayorMenorIgual(10,9);
mayorMenorIgual(9,10);

// 3) Crear una funcion que reciba 1 numero por parametro e indique en consola si ese numero es multiplo de 5.

const multiploDe5 = (numMultiplo) => {
    if((numMultiplo % 5) === 0){
        console.log('Numero es multiplo de 5')
    }
}
multiploDe5(25);

// 4) Crear una funcion que reciba 1 numero por parametro e imprima por consola todos los numeros desde el 0 hasta llegar a ese numero.

const numDesdeCero = (n) => {
    if( n > 0){
        for(let i = 0; i <= n; i++){
            console.log(i);
        }
    }else{
        for(let i = 0; i >= n; i--){
            console.log(i);
    }
}
};

numDesdeCero(-4);

// 5) Crear una funcion que reciba una palabra y un numero por parametro e impreima por consola esa palabra la cantidad correspondiente al numero indicado.

const palabraYnumero = (numero,palabra) => {
   
        //  console.log(palabra);
    
    for(let i = 1; i <= numero; i++){
        console.log(`${i} - ${palabra}`);
    }
};

palabraYnumero (9,"nahu");

// 6) Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const array = ['nahuel', 20 , 'casa', 30, 'Benja', 40];

const mostrarArray = (array) => {
    for(i = 0; i < array.length; i++){
    console.log(array[i]);
    }
}
mostrarArray(array);

// for(let numero of array){
//     console.log(numero)
// }

// 7) Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const arrayNumeros = [1,2,3,4,5,6,454454,755656,9,10];

const mostrarArrayNumeros = () => {

for(u = 0; u < arrayNumeros.length ; u++){
    if(arrayNumeros[u]< 6 || arrayNumeros[u] > 6){
    console.log(arrayNumeros[u]);
    }
}
};

mostrarArrayNumeros();

// 8)Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const arrayTabla = (multiplicador) => {
    for( e = 0; e < arrayNumeros.length; e++){
        resultado = multiplicador * arrayNumeros[e];
        console.log(`${multiplicador} X ${arrayNumeros[e]} = ${resultado}`);
    };
};

arrayTabla(8);
