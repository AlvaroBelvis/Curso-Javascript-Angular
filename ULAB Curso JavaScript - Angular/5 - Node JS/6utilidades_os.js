const os = require('os');                                   //Cargamos la libreria os

const usernam = os.userInfo().username;                     //Creamos un objeto con el nombre del usuario del PC

function esUsuario(cadena){                                 //Función que compara un nombre con el nombre de usuario del PC
    if(cadena == usernam){
        return true;
    }else{
        return false;
    }
}

module.exports = {esUsuario:esUsuario, usernam:usernam};    //Exporta la función y el nombre de usuario