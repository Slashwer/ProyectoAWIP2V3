import React from 'react'
import { useState } from 'react'

function Footer(){

    const datosIniciales = {
        email:'',
      }
    
    const [user, setUser] = useState(datosIniciales);

    const capturarInputs = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const suscripcion = async(e) =>{
        e.preventDefault();
        let emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if(!emailvalido.test(user.email)){
            alert("Ingrese un correo electronico valido");
        }else{
            alert("Suscripcion exitosa");
        }
    }

  return (
        <footer class="footer">
        <div class="container-footer">
            <div class="footer-row">
                <div class="footer-links">
                    <h4>Informacion</h4>
                    <ul>
                        <li><a href="#">Terminos y condiciones</a></li>
                        <li><a href="#">Nuestros servicios</a></li>
                        <li><a href="#">Politica de privacidad</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Ayuda</h4>
                    <ul>
                        <li><a href="#">Preguntas</a></li>
                        <li><a href="#">Boletin</a></li>
                        <li><a href="#">Mi cuenta</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Informacion de contacto</h4>
                    <p>
                        Teléfono: 123-245-545 <br />
                        Fax: 23435677 <br />
                        Email: revistas@support.com
                    </p>
                </div>
                <div class="footer-links">
                    <h4>Boletín informativo</h4>
                    <p>
                        Suscríbete a nuestros boletines ahora y mantente al
                        día con informes academicos y actualizaciones de nuestra
                        pagina web.
                    </p>
                    <form onSubmit={suscripcion}>
                    <div class="footer-correo">
                        <input type="email" id="correo-footer" name="email" placeholder="usuario@hotmail.com" onChange={capturarInputs} value={user.email} />
                        <button>Enviar</button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
    </footer>
  )
}

export default Footer