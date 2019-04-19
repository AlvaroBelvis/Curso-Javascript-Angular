const utilidades = require('./6utilidades_os.js');                                  //Cargamos los recursos
let nombre = "Pepe";                                                                //Creamos un string
const comprobar = utilidades.esUsuario(nombre);                                     //Comprobamos string con función cargada                       

if(comprobar == true){                                                              //Sacamos mensaje en función del resultado
    console.log(nombre + " es el usuario que ha iniciado sesión");
}else{
    console.log(nombre + " no es el usuario que ha iniciado sesión");
    console.log("El usuario que ha iniciado sesión es " + utilidades.usernam);
}