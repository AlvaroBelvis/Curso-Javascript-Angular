/* Ejercicio para usar la librería 'os' para detectar el usuario del PC*/

const os = require('os');                   //Creamos un objeto que carga la libreria os, os viende dentro de Node JS
const usuario = os.userInfo();              //Creamos otro objeto que contiene toda la información del user

console.log("Hola,", usuario.username);