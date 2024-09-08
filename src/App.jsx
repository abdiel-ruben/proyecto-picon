import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando los módulos de firebase
import appFirebase from '../src/credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(appFirebase);

// Importar los componentes
import Login from '../src/componentes/login';
import Home from '../src/componentes/home';
import DecoracionPinkoween from '../src/componentes/DecoracionPinkoween';
import Contactopues from '../src/componentes/contactopues'; // Nombre del componente capitalizado

import './App.css';

function App() {
  const [usuario, setUsuario] = useState(null);

  // Detectar el estado de autenticación del usuario
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      <Router>
        <Routes>
          {/* Ruta para la página principal */}
          <Route 
            path="/" 
            element={usuario ? <Home correoUsuario={usuario.email} /> : <Login />} 
          />
          
          {/* Ruta para la página de Decoración Pinkoween */}
          <Route 
            path="/decoracion-pinkoween" 
            element={<DecoracionPinkoween />} 
          />
          
          {/* Ruta para la página de contacto */}
          <Route 
            path="/contacto-contacto" 
            element={<Contactopues />} // Uso del nombre correcto
          />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
