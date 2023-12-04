import {Route, Routes} from 'react-router-dom';
import Inicio from './pages/inicio'
import Acerca from './pages/acerca-de'
import Contacto from './pages/contacto'
import Login from './pages/login'
import Registro from './pages/registro'
import Revistas from './pages/revistas'

function App() {

  return (
    <>
      <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/revistas' element={<Revistas/>}/>
      <Route exact path='/acerca-de' element={<Acerca/>}/>
      <Route exact path='/contacto' element={<Contacto/>}/>
      <Route exact path='/iniciar-sesion' element={<Login/>}/>
      <Route exact path='/registro' element={<Registro/>}/>
      </Routes>
    </>
  )
}

export default App
