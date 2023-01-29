import { connect } from "mongoose";
//se importa mongoose, despues se declara una constante la cual desencadenará la accion de conección a la base de datos, connect encierra como argumento a nuesta variable de entorno que tiene la base de datos, mediante un promeda definimos los términos, cuando se conecte se refleja en consola para saber que todo se ha hecho correctamente y si no capturamos el error para poder resolverlo posteriormente
export default  function conn(){
    connect(process.env.URL_DB)
    .then(_ => {console.log("connect")} )
    .catch(err =>{console.log("error:" + err)} )
}
