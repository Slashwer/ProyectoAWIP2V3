import React from 'react'

function Acerca(){
    return(
    <>
    <div class="container-acerca">
        <h1>Aprendamos juntos</h1>
        <p> Tenemos variedad de usuarios las cuales agradecen
            nuestro servicio y organizaciones que apoyan este proyecto.
        </p>
        <span>
            <b>10,324 Usuarios </b>
            <b>31 paises </b>
            <b>29 Organizaciones </b>
        </span>
        <div class="redes">
        <ul>
            <p>Siguenos en nuestras redes sociales</p>
            <li><a id="mienlace1"><i class="fa-brands fa-facebook"></i>Facebook</a></li>
            <li><a id="mienlace2"><i class="fa-brands fa-twitter"></i>Twitter</a></li>
            <li><a id="mienlace3"><i class="fa-brands fa-instagram"></i>Instagram</a></li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Acerca