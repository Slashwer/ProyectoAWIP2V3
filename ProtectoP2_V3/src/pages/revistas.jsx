import React, { useEffect } from 'react'
import appFirebase from "../firebase-config";
import { getAuth,signOut} from "firebase/auth";
import { useState } from 'react'
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
import Revista from '/images/revista.jpg';

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Revistas = () => {

  const datosIniciales = {
    Cedula:'',
    Nombre:'',
    Disciplina:'',
    Titulo:'',
    Editor:'',
    ISSN:''
  }

  const [user, setUser] = useState(datosIniciales);
  const [lista, setLista] = useState([]);

  const capturarInputs = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }

  const guardarDatos = async(e) =>{

    let cedulavalida =  /^\d{10}$/;
    let nombrevalido = /^[a-zA-ZÀ-ÿ\s]{1,50}$/;
    let disciplinavalida = /^[a-zA-ZÀ-ÿ\s]{4,60}$/;
    let titulovalido =  /^[a-zA-ZÀ-ÿ\s]{10,60}$/;
    let editorvalido = /^[a-zA-ZÀ-ÿ\s]{10,60}$/;
    let ISSNvalido = /^\d{4}-\d{4}$/

    e.preventDefault();
    if(!cedulavalida.test(user.Cedula)){
      alert("Ingrese una cedula valida");
    }else if(!nombrevalido.test(user.Nombre)){
      alert("Ingrese un nombre valido");
    }else if(!disciplinavalida.test(user.Disciplina)){
      alert("Ingrese una disciplina valida");
    }else if(!titulovalido.test(user.Titulo)){
      alert("Ingrese un titulo valido");
    }else if(!editorvalido.test(user.Editor)){
      alert("Ingrese un editor valido");
    }else if(!ISSNvalido.test(user.ISSN)){
      alert("Ingrese un ISSN valido");
    }else
    try {
      alert("Su revista se registro en la base de datos con exito");
      await addDoc(collection(db,'Revistas'),{
        ...user
      })
    } catch (error) {
      alert("Error");
    }
    //Reiniciar datos del formulario una vez se envie
    //setUser({...valorInicial})
  }

  useEffect(()=>{
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'Revistas'))
            const docs = []
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id})
            })
            setLista(docs)

        } catch (error) {
            console.log("error");
        }
    }
    getLista()
  },[lista])

  return (
    <>
    <div className="revistas" onSubmit={guardarDatos}>
    <form>
            <h2>Ingresar Revistas</h2>
            <p>Puede ingresar revistas que usted considere, <br/>
            de acuerdo a nuestras politicas.
            </p>
            <p>Ingrese sus nombres y cedula, <br/>
                posterior los datos de la revista.
            </p>
            <label for="cedula">Cedula</label>
            <input name="Cedula" onChange={capturarInputs} value={user.Cedula} />
            <br/>

            <label for="nombre">Nombres:</label>
            <input name="Nombre" placeholder="Nombres y apellidos" onChange={capturarInputs} value={user.Nombre} />
            <br/>

            <label for="disciplina"> Disciplina: </label>
            <input name="Disciplina" onChange={capturarInputs} value={user.Disciplina}/>
            <br/>
         
            <label for="titulo"> Titulo de la revista: </label>
            <input  name="Titulo" onChange={capturarInputs} value={user.Titulo} />
            <br/>
         
            <label for="editor"> Editor: </label>
            <input name="Editor" onChange={capturarInputs} value={user.Editor} />
            <br/>
   
            <label for="ISSN"> ISSN: </label>
            <input name="ISSN" placeholder='0000-0000' onChange={capturarInputs} value={user.ISSN}/>
            <br/>

            <button>Enviar</button>
        </form>
        <div className='container-revistas'>
            <h2>Revistas en linea</h2>
            <p>A continuacion toda la biblioteca de revistas <br />
               que tenemos actualmente:
            </p>
            <div className='container-revista'>
                {
                    lista.map(List => (
                        <div key={List.id}>
                             <img src={Revista}/>
                            <p>Titulo: {List.Titulo}</p>
                            <p>Disciplina: {List.Disciplina}</p>
                            <p>Editor: {List.Editor}</p>
                            <p>ISSN: {List.ISSN}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Revistas