import './formulario.css'
import CampoTexto from '../CampoTexto'; //Al llamarce index es el primero que busca

const Formulario = () =>{
    return <section className="formulario">
       <form action="">
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
        </form>
    </section>
}

export default Formulario;