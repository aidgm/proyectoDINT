import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { TareasContexto } from '../contexto/TareasContexto'; 

const Tarea = ({ tarea }) => {
    const { eliminarTarea, actualizarTarea, toggleCompletada } = useContext(TareasContexto); 

    const [modoEdicion, setModoEdicion] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(tarea.texto);

    const manejarActualizacion = () => {
        if (nuevoTexto.trim() !== '') {
            actualizarTarea(tarea.id, nuevoTexto);
            setModoEdicion(false);
        }
    };

    return (
        <div className={`tarea ${tarea.completada ? 'completada' : ''}`}>
            <div className="contenido-tarea">
                <input type="checkbox" checked={tarea.completada} onChange={() => toggleCompletada(tarea.id)} />
                {modoEdicion ? (
                    <input 
                        type="text" 
                        value={nuevoTexto} 
                        onChange={(e) => setNuevoTexto(e.target.value)}
                        className="input-edicion"
                    />
                ) : (
                    <span>{tarea.texto}</span>
                )}
            </div>
            <div className="acciones-tarea">
                {modoEdicion ? (
                    <button onClick={manejarActualizacion} className="boton-actualizar">Actualizar</button>
                ) : (
                    <button onClick={() => setModoEdicion(true)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                )}
                <button onClick={() => eliminarTarea(tarea.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Tarea;
