console.log("Hola Alvaro");

function sumar(num1, num2){
    return(num1+num2);
}

function restar(num1, num2){
    return(num1-num2);
}

module.exports = {sumar:sumar, restar:restar, pi:3.1416};   //Exporta la función sumar con el nombre sumar. Lo mismo con restar. Y una variable.
                                                            //Se podrá usar en otros archivos con ese nombre