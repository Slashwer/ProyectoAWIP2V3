import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cabecera from '../src/components/cabecera.jsx'
import Footer from '../src/components/footer.jsx'
import Buttonscroll from '../src/components/button-scroll.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Cabecera></Cabecera>
    <App />
    <Footer></Footer>
    </BrowserRouter>
    <Buttonscroll></Buttonscroll>
  </React.StrictMode>,
)
