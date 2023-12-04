import React from 'react'
import logo from '/images/logo.png';
import {NavLink} from 'react-router-dom';

function Cabecera(){
  return (
    <div class="container">
            <div class="logo">
            <img src={logo}/>
            <h1>
                Sistema universitario de informacion
                <br/>
                en linea para revistas cientificas
                <br />
                de la universidad ULEAM
            </h1>
            <h2 class="textlogo">
                Soporte 123-245-545(ec)
            </h2>
            </div>
            <div class="nav-usuario">
        <ul>
            <li><NavLink className='nav-botonA' to="/iniciar-sesion">Iniciar sesion</NavLink></li>
            <li><NavLink className='nav-botonB' to="/registro">Registro</NavLink></li>
        </ul>
    </div>

    
    <div class="nav-menu">
        <ul class="menu">
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/revistas">Revistas</NavLink></li>
            <li><NavLink to="/acerca-de">Acerca de</NavLink></li>
            <li><NavLink to="/contacto">Envianos tus opiniones</NavLink></li>
        </ul>
    </div>
     
    <div class="estadisticas">
        <span>
            <b>
            1,004 Revistas en linea |
            31 Paises |
            Soporte 24 horas
            </b>
        </span>
    </div>
    </div>
  )
}

export default Cabecera