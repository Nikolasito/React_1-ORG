import "./listaopciones.css"

const Listaopciones = () =>{
    
    //Metodo Map = arreglo.map( (equipo, index) =>{
    //  return <option> </option>
    //})
    const equipos = [
        "Programacion",
        "Front-End",
        "Data Scienc",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Inovacion y gestión"
    ]

    return <div className="listaopciones">
        <label>Equipos</label>
        <select>
            { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>
            )}
        </select>
    </div>
}

export default Listaopciones;