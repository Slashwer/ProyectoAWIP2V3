import { useState } from 'react'
import React from "react";
import appFirebase from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

const Registro = () => {
    const [registrando] = useState(false)

    const datosIniciales = {
        nombre:'',
        numero:'',
        email:'',
        password:''
      }
    
    const [user, setUser] = useState(datosIniciales);

    const capturarInputs = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const functAutenticacion = async(e) =>{
        e.preventDefault();

        let nombrevalido =  /^[a-zA-ZÀ-ÿ\s]{1,60}$/;
        let numerovalido = /^\d{7,14}$/;
        let emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let contraseñavalida =  /^.{6,100}$/;

        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        

        if(!nombrevalido.test(user.nombre)){
            alert("Ingrese sus nombres")
        }else if(!numerovalido.test(user.numero)){
            alert("Ingrese un numero telefonico valido")
        }else if(!emailvalido.test(user.email)){
            alert("Ingrese un correo electronico valido");
        }else if(!contraseñavalida.test(user.password)){
            alert("Ingrese una contraseña valida");
        }else
        if(registrando){
            try{
                await signInWithEmailAndPassword(auth, correo, contraseña)
            }catch(error){
                //alert("El correo o la contraseña son incorrectos")
            } 
            
        }
        else{
            try{
                await  createUserWithEmailAndPassword(auth, correo, contraseña)
                alert("Se registro con exito")
            }catch(error){
                alert("Por favor ingrese los datos correctos")
            } 
        }
    }

    return(
            <div className="registro">
                <form onSubmit={functAutenticacion}>
                <h1>Registro</h1>
                    <label for="nombre">Nombre:</label>
                    <input name='nombre' placeholder="Nombres y apellidos" id='nombre' onChange={capturarInputs} value={user.nombre} />
                    <br />

                    <label for="numero">Numero telefonico:</label>
                    <input name='numero' type="number" id='numero' onChange={capturarInputs} value={user.numero} />
                    <br />  

                    <label for="email">Correo electronico:</label>
                    <input name='email' placeholder="usuario@gmail.com" id='email' onChange={capturarInputs} value={user.email} />
                    <br />     

                    <label for="password">Contraseña:</label>
                    <input type='password' name='password' placeholder="6 caracteres como mínimo" id='password' onChange={capturarInputs} value={user.password} />
                    <br />
                    
                    <button>{registrando}Registrate</button>
                </form>
            </div>
    )
}

export default Registro