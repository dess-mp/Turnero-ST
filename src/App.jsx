import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import IngresoReparacion from './components/pages/ingresoReparacion/ingresoReparacion.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>} />
        <Route path="/ingreso-reparacion" element={<IngresoReparacion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
