import { Schema, model, models } from "mongoose";
//se importan las dependencias de mongoose, es necesario hacer un esquema ya que mongoose comienza a base de uno, asignandole la forma de los documentos dentro de la colección a utilizar

//se deben colocar cada uno de los datos definidos en la base de datos, por documento, tipo, titulo, año, de cada uno de los documentos creados, se coloca requerido para que cuando se haga la función de actualizar no deje continuar faltando un campo, se puede responder el requerido con un array ejemplo[true, "por favor ingrese un titulo"]
const movieSchema = Schema(
  {
    title: {
      type: String,
      require: true,
    },
    year: {
      type: Number,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    languaje: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      require: true,
    },
  },

  {
    versionKey: false,
  }
);
//se esporta el esquema, con la palabra models se cuestiona si esta hecho el modelo, "si en mongoose existe el modelo.movie" si no existe "||" este modelo sera v¿creado, en este caso se utiliza la palabra propia de mongose en singular model
//Index pages
 export default models.Movie || model("Movie", movieSchema);
