import conn from "@/src/db/connection"
import { deleteMovie, updateMovie } from "../../../controller/taskController"


// Only the object containing the id property obtained from the URL can be updated or deleted. 

export default async function  handler(req, res) {
    const { id } = req.query
  conn()
  switch(req.method){
    case "PUT":
      try {
        const update = await updateMovie(id, req.body)
        return res.status(200).json({
          msg:'card Actualizada',
          update
        })
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          msg: `Error: ${error.message}`,
        })
      }
    case "DELETE":
      try {
          const deleted = await deleteMovie(id)
          return res.status(200).json({
            msg:"Borrada",
            deleted 
         })
      } catch (error) {
         console.log(error)
         return res.status(400).json({
            msg: `Error: ${error.message}`
         })
         
      }
  }
}
