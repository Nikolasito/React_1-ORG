import "./campotexto.css";

const CampoTexto = (props) =>{ //props son datos que enviamos a los componentes y con estos cambiamos su comportamiento 
    console.log("Datos:",   props);
    const placeholderModificador = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>   {/* Se pueden llamar artributos html */}
        <input placeholder={placeholderModificador} required={props.required}/>
    </div>
}

export default CampoTexto;