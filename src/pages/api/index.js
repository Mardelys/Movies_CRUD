import conn from "@/src/db/connection"
import {getMovie, saveMovie} from "../../controller/movieController"
import Movie from "@/src/models/Movie"


export default async function handler(req, res) {
  conn()
 
  switch (req.method) {
    case "GET":
      try {
        const listMovie = await getMovie()
        return res.status(200).json(listMovie)
        
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          msg: `Error: ${error.message}`
        })
      }
      
    case "POST":
      try {
         const movie = new Movie(req.body)
         await movie.save()

         return res.status(200).json({success:true, msg :"Movie saved successfully"})
        
        /*await saveMovie(req.body)
        return res.status(201).json({
          msg: "Movie saved",
          task: req.body
        })*/
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          success: false,msg:"Falla de Servidor"
        })
      }
  }
}