import React , { useState } from 'react'; 
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componentes/Header';
import FormularioTareas from './componentes/FormularioTareas';
import ListaTareas from './componentes/ListaTareas';
import './index.css';

const App = () => {
    const [mostrarCompletadas, setMostrarCompletadas] = useState(false);

    return (
        <Router>
            <div className="contenedor">
                <Header toggleMostrarCompletadas={() => setMostrarCompletadas(!mostrarCompletadas)} mostrarCompletadas={mostrarCompletadas} />
                <FormularioTareas />
                <ListaTareas mostrarCompletadas={mostrarCompletadas} />
            </div>
        </Router>
    );
};

export default App;
