import React from 'react'
import appFirebase from "../firebase-config";
import { getAuth} from "firebase/auth";
import { useState } from 'react'
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Contacto = () => {

  const datosIniciales = {
    nombre:'',
    email:'',
    numero:'',
    carrera:'',
    facultad:'',
    comentario:''
  }

  const [user, setUser] = useState(datosIniciales);

  const capturarInputs = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const guardarDatos = async(e) =>{

    let nombrevalido =  /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let numerovalido = /^\d{7,14}$/;
    let emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let carreravalida =  /^[a-zA-ZÀ-ÿ\s]{10,60}$/;
    let facultadvalida = /^[a-zA-ZÀ-ÿ\s]{10,60}$/;
    //let comentariovalido = /^(?=(?:.*\d))*(?=(?:.*[A-Z]))*(?=(?:.*[a-z]))*(?=(?:.*[@$?¡\-_]){1})\S{10,300}$/;

    e.preventDefault();
    if(!nombrevalido.test(user.nombre)){
      alert("Ingrese un nombre valido");
    }else if(!emailvalido.test(user.email)){
      alert("Ingrese un correo electronico valido");
    }else if(!numerovalido.test(user.numero)){
      alert("Ingrese un numero telefonico valido");
    }else if(!carreravalida.test(user.carrera)){
      alert("Ingrese una carrera valida");
    }else if(!facultadvalida.test(user.facultad)){
      alert("Ingrese una facultad valida");
    }else if(user.comentario===""){
      alert("Ingrese un comentario valido");
    }else
    try {
      alert("Su comentario se envio con exito");
      await addDoc(collection(db,'Comentarios'),{
        ...user
      })
    } catch (error) {
      alert("Error");
    }
    //Reiniciar datos del formulario una vez se envie
    //setUser({...valorInicial})
  } 

  return (
    <>
    <div class="contacto" onSubmit={guardarDatos}>
    <form id="formulario" class="formulario-contacto">
            <h2>Envie sus sugerencias o contactenos</h2>
            <label for="nombre">Nombres:</label>
            <input type="text" id="nombre" name="nombre"  placeholder="Nombres y apellidos" onChange={capturarInputs} value={user.nombre} />
            <br/>

            <label for="correo"> Correo electronico: </label>
            <input type="email" id="correo" name="email" placeholder="usuario@hotmail.com" onChange={capturarInputs} value={user.email} />
            <br/>
         
            <label for="numero"> Numero telefonico: </label>
            <input type="number" id="numero" name="numero" onChange={capturarInputs} value={user.numero} />
            <br/>
         
            <label for="pro"> Carrera: </label>
            <input type="text" id="pro" name="carrera" onChange={capturarInputs} value={user.carrera} />
            <br/>
   
            <label for="facultad"> Facultad: </label>
            <input type="text" id="facultad" name="facultad" onChange={capturarInputs} value={user.facultad}/>
            <br/>
  
            <label for="comentario"> Comentarios: </label><br/>
            <textarea id="comentario" placeholder="Ingrese mensaje" name="comentario" onChange={capturarInputs} value={user.comentario} ></textarea>
            <br/>
 
            <button>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default Contacto