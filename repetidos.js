"use strict";
    // Álvaro Llamas Huerta

    /*
    Escribe una función repetidos() que tome un array y devuelva otro array especificando el número de veces que se repite cada
    elemento del primer array.

    Por ejemplo:

    - Si la entrada es [2, 3, 2, 2] la salida debe ser [3,1 ]
    - Si la entrada es [1, 1, 1] la salida debe ser [3]
    - Si la entrada es [2, 3, 3, 2] la salida debe ser [2, 2]
    */

    // Declaración de variables
    let salida = [0,0];

    // Función que toma un array y devuelve otro con el número de veces que aparece el primer elemento
    function repetidos (entrada) {
        
        let primer_elem = entrada[1]; // Guardamos el primer elemento en una variable

        // Recorremos el array con un for let-in para encontrar los elementos iguales al primero
        for(let elemento in entrada){

            if(elemento == primer_elem){
                salida[elemento]++;
            }
        }

        console.log(salida);
    }

    // Declaramos el array de entrada
    let entrada = [1,2,3,3,1,1,5];

    // Llamamos a la función
    repetidos(entrada);