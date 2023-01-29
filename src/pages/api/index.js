import conn from "@/src/db/connection"
import {getMovie, saveMovie} from "../../controller/movieController"


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
        await saveMovie(req.body)
        return res.status(201).json({
          msg: "Movie saved",
          task: req.body
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({
          msg: `Error: ${error.message}`
        })
      }
  }
}