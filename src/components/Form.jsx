

const Form = () => {
  return (
    <div>
      <form action="add">
      <input type="text" className="form" placeholder="Título"/>
      <input type="text" className="form" placeholder="Año"/>
      <input type="text" className="form" placeholder="Duración"/>
      <input type="text" className="form" placeholder="Lenguaje"/>
      <input type="text" className="form" placeholder="Fecha de Lanzamiento"/>
      <input type="text" className="form" placeholder="Ciudad"/>
      <button>Agregar</button>
      </form>
    </div>
  )
}

export default Form;