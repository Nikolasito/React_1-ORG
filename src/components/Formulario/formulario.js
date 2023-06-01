import './formulario.css'
import CampoTexto from '../CampoTexto'; //Al llamarce index es el primero que busca
import Listaopciones from '../ListaOpciones';
import Boton from '../Boton';

const Formulario = () =>{

    const ManejarEnvio = (event) =>{
        event.preventDefault(); //Previene la recarga del formulario
        console.log("Marcar el envio", event);
    }

    return <section className="formulario">
       <form onSubmit={ManejarEnvio}>   {/* //Evento del formulario  */}
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <Listaopciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;