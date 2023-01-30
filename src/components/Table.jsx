import { getServerSideProps } from "../pages"


function Table({movies}) {
  return (
   <table >
   <tr>
      <th>Título</th>
      <th>Año</th>
      <th>Duración</th>
      <th>Lenguaje</th>
      <th>Lanzamiento</th>
      <th>Ciudad</th>
      <th>Editar</th>
      <th>Eliminar</th>
   </tr>
   {movies.map(({ _id, title, year, duration, languaje, date, country }) => (
   <tr key={_id}>
            <td>{title}</td>
            <td>{year}</td>
            <td>{duration}</td>
            <td>{languaje}</td>
            <td>{date}</td>
            <td>{country}</td>
            <td><button>Editar</button></td>
            <td><button>Eliminar</button></td>
         </tr>
      ))}
</table>



  )
}


export default Table