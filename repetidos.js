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

    // Función que toma un array y devuelve otro con el número de veces que aparece el primer elemento
    function repetidos (entrada) {

        // Creamos un objeto para almacenar el número de ocurrencias
        let conteo = {};

        // Recorremos el array con un for let-in para encontrar los elementos iguales al primero
        for(let elemento of entrada){

            // Si el elemento ya existe, aumentamos el número de ocurrencias
            if(conteo[elemento]){
                conteo[elemento]++;

                // Si no existe, lo inicializamos en 1
            } else {
                conteo[elemento] = 1;
            }
        }

        // Extraemos los valores del objeto conteo (el número de ocurrencias)
        let salida = Object.values(conteo);

        // Devolvemos la salida
        return salida;
    }

    // Ejemplo de uso
    document.write(repetidos([1,3,1,1,4,8])); // 3, 1, 1, 1 (3 veces se repite el primer elemento y hay 3 números distintos)