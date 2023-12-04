import { useState } from 'react'
import React from "react";
import appFirebase from "../firebase-config";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando] = useState(false)
    const auth = getAuth(appFirebase);

    const datosIniciales = {
        email:'',
        password:''
      }
    
    const [user, setUser] = useState(datosIniciales);

    const capturarInputs = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const functAutenticacion = async(e) =>{

        let emailvalido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let contraseñavalida =  /^.{6,50}$/;

        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if(!emailvalido.test(user.email)){
            alert("Ingrese un correo electronico valido")
        }else if(!contraseñavalida.test(user.password)){
            alert("Ingrese una contraseña valida")
        }else
        if(registrando){
            try{
                await createUserWithEmailAndPassword(auth, correo, contraseña)
            }catch(error){
                //alert("El correo o la contraseña son incorrectos")
            } 
            
        }
        else{
            try{
                await  signInWithEmailAndPassword(auth, correo, contraseña)
                alert("Inicio de sesion exitoso")
            }catch(error){
                alert("El correo o la contraseña son incorrectos")
            } 
        }
    }

    return(
            <div className="login">
                <form onSubmit={functAutenticacion}>
                <h1>Iniciar Sesión</h1>
                    <label for="email">Correo electronico:</label>
                    <input name='email' type="email" placeholder="usuario@gmail.com" id='email' onChange={capturarInputs} value={user.email}/>
                    <br />

                    <label for="password">Contraseña:</label>
                    <input name='password' type="password" id='password' onChange={capturarInputs} value={user.password}/>
                    <br />

                    <button>{registrando}Iniciar sesion</button>
                </form>
            </div>
    )
}

export default Login