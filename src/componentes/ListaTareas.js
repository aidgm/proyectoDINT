import React, { useContext } from 'react';
import { TareasContexto } from '../contexto/TareasContexto';
import Tarea from './Tarea';

const ListaTareas = ({ mostrarCompletadas }) => {
    const { tareas } = useContext(TareasContexto);

    const tareasFiltradas = tareas.filter(tarea => (mostrarCompletadas ? tarea.completada : !tarea.completada));

    return (
        <div className="lista-tareas">
            {tareasFiltradas.length === 0 ? (
                <p className="mensaje-vacio">{mostrarCompletadas ? 'No hay tareas completadas' : 'No hay tareas pendientes'}</p>
            ) : (
                tareasFiltradas.map(tarea => (
                    <Tarea key={tarea.id} tarea={tarea} />
                ))
            )}
        </div>
    );
};

export default ListaTareas;
