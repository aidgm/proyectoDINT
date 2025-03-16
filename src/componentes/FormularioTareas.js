import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TareasContexto } from '../contexto/TareasContexto'; 

const FormularioTareas = () => {
    const [texto, setTexto] = useState('');
    const { agregarTarea } = useContext(TareasContexto); 

    const manejarEnvio = (e) => {
        e.preventDefault();
        agregarTarea(texto);
        setTexto('');
    };

    return (
        <form onSubmit={manejarEnvio} className="formulario">
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe una tarea" />
            <button type="submit">
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </form>
    );
};

export default FormularioTareas;
