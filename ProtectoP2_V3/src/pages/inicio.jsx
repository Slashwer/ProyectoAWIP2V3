import React from 'react'
import arquitectura from '/images/arquitectura.jpg';
import arte from '/images/arte.jpg';
import biologia from '/images/biologia.jpg';
import historia from '/images/historia.jpg';
import informatica from '/images/informatica.jpg';
import lengua from '/images/lengua.png';
import medicina from '/images/medicina.jpg';
import psicologia from '/images/psicologia.jpg';
import sociales from '/images/sociales.jpg';

const Inicio = () => {
    return(
    <>
    <div className='intro'>
        <p>Bienvenidos al sistema, <br /> 
        encontraran revistas de las siguientes disciplinas <br />
        sientase libre de explorar nuestro catalogo.</p>
    </div>

    <div class="revistas">
        <p class="tx-1"><b>Ciencias naturales y exactas</b> <br/>
            Agrociencias <br/>
            Biologia <br/>
            Ciencias de la tierra <br/>
            Computacion <br/>
            Fisica <br/>
            Ingenieria <br/>
            Medicina <br/>
            Quimica <br/>
            Veterinaria <br/> 
        </p>

        <p class="tx-2"><b>Ciencias sociales</b> <br/>
            Administracion y contabilidad <br/> 
            Antropologia <br/>
            Ciencias de la informacion <br/>
            Derecho <br/>
            Economia y finanzas <br/>
            Politica <br/>
            Psicologia <br/> 
        </p>

        <p class="tx-3"><b>Arte y humanidades</b> <br/>
            Arquitectura <br/>
            Arte <br/>
            Filosofia <br/>
            Lengua y literatura <br/>
            Historia
        </p>

            <p class="tx-4"><b>Por institucion</b> <br/>
                Universidad de Chile <br/>
                Universidad de los Andes <br/>
                Universidad de Costa Rica <br/>
                Universidad de Buenos Aires <br/>
                Universidad del Rosario <br/>
                Universidad del Norte
            </p>
    </div>

    <div class="titulo-card">
        <b>Temas principales</b>
    </div>

      <div class="container-card">
        <div class="card">
           <figure>
            <img src={lengua} alt="Lengua y literatura"/>
           </figure>
        <div class="descripcion">
            <h3>Lengua y literatura</h3>
            <p>La vida se compone de la comunicacion y para ello
                tenemos una variedad de contenido.
            </p>
            <a href="#">Leer mas</a>
        </div>
      </div>

      <div class="card">
            <figure>
                <img src={sociales} alt="Ciencias sociales"/>
            </figure>
            <div class="descripcion">
                <h3>Ciencias sociales</h3>
                <p> Conjunto de disciplinas que tendremos que tener en cuenta
                    para el desarrollo de fenomenos humanos.
                </p>
                <a href="#">Leer mas</a>
            </div>
        </div>

            <div class="card">
                <figure>
                    <img src={informatica} alt="Informatica"/>
                </figure>
                <div class="descripcion">
                    <h3>Informatica</h3>
                    <p>Tenemos un monton de revistas para informatica desde
                        computacion basica hacia la mas avanzada.
                    </p>
                    <a href="#">Leer mas</a>
                </div>
            </div>
    </div>

    <div class="container-card">
        <div class="card">
            <figure>
                <img src={psicologia} alt="Psicologia"/>
            </figure>
            <div class="descripcion">
                <h3>Psicologia</h3>
                <p>Gracias a esta seccion podremos leer varias revistas
                    y entender el comportamiento humano debido a diferentes
                    situaciones. 
                </p>
                <a href="#">Leer mas</a>
            </div>
        </div>

            <div class="card">
                <figure>
                    <img src={arquitectura} alt="Arquitectura"/>
                </figure>
                <div class="descripcion">
                    <h3>Arquitectura</h3>
                    <p>Las ultimas revistas verificadas de arquitectura estan
                        abarcadas en nuestra seccion.
                    </p>
                    <a href="#">Leer mas</a>
                </div>
              </div>

                <div class="card">
                    <figure>
                        <img src={arte} alt="Arte"/>
                    </figure>
                    <div class="descripcion">
                        <h3>Arte</h3>
                        <p>Comprendamos el arte que observamos a diario en
                            el entorno que nos rodea.
                        </p>
                        <a href="#">Leer mas</a>
                    </div>
                </div>    
    </div>

    <div class="container-card">
        <div class="card">
            <figure>
                <img src={historia} alt="Psicologia"/>
            </figure>
            <div class="descripcion">
                <h3>Historia</h3>
                <p>La historia nos ayuda a entender los hechos del pasado
                    y posiblemente del futuro.
                </p>
                <a href="#">Leer mas</a>
            </div>
        </div>

            <div class="card">
                <figure>
                    <img src={biologia} alt="Arquitectura"/>
                </figure>
                <div class="descripcion">
                    <h3>Biologia</h3>
                    <p>Nos permitira explorar la naturaleza
                        de los seres vivos.
                    </p>
                    <a href="#">Leer mas</a>
                </div>
              </div>

                <div class="card">
                    <figure>
                        <img src={medicina} alt="Arte"/>
                    </figure>
                    <div class="descripcion">
                        <h3>Medicina</h3>
                        <p>Tecnicas basicas y avanzadas de medicina
                            nos ayudara a mejorar nuestra supervivencia.
                        </p>
                        <a href="#">Leer mas</a>
                    </div>
                </div>
    </div>
    </>
  )
}

export default Inicio
