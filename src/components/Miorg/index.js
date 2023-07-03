import { useState } from "react"
import "./miorg.css"

const Miorg = () =>{
    //Estado - hooks
    //useState 
    //useState()
    //Const [NombreVariable, funcionActualizadora] = useState(ValorInicial)
    //const [nombre, actualizarNombre] = useState("Nikolas");
    const [mostrar,actualizarMostrar] = useState(true)
    console.log(useState)
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);    //Funciona como swicht para invertir el estado
    }

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src ="/img/add.png" alt="Agregar" onClick={manejarClick} />

    </section>
}

export default Miorg;