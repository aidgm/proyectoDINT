import React, { createContext, useReducer, useEffect } from 'react';

export const TareasContexto = createContext();

const tareasReducer = (state, action) => {
    switch (action.type) {
        case 'AGREGAR_TAREA': {
            const texto = action.texto?.trim();
            if (!texto) return state;

            if (state.some(tarea => tarea.texto.toLowerCase() === texto.toLowerCase())) {
                alert('Esta tarea ya existe.');
                return state;
            }
            return [...state, { id: Date.now(), texto, completada: false }];
        }

        case 'ELIMINAR_TAREA':
            return state.filter(tarea => tarea.id !== action.id);

        case 'TOGGLE_COMPLETADA':
            return state.map(tarea => 
                tarea.id === action.id ? { ...tarea, completada: !tarea.completada } : tarea
            );

        case 'ACTUALIZAR_TAREA': {
            const nuevoTexto = action.nuevoTexto?.trim();
            if (!nuevoTexto) return state;

            if (state.some(tarea => tarea.texto.toLowerCase() === nuevoTexto.toLowerCase() && tarea.id !== action.id)) {
                alert('Ya existe una tarea con este nombre.');
                return state;
            }
            return state.map(tarea => 
                tarea.id === action.id ? { ...tarea, texto: nuevoTexto } : tarea
            );
        }

        default:
            return state;
    }
};

export const TareasProvider = ({ children }) => {
    const [tareas, dispatch] = useReducer(tareasReducer, [], () => {
        const tareasGuardadas = localStorage.getItem('tareas');
        return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
    });

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const agregarTarea = texto => dispatch({ type: 'AGREGAR_TAREA', texto });
    const eliminarTarea = id => dispatch({ type: 'ELIMINAR_TAREA', id });
    const toggleCompletada = id => dispatch({ type: 'TOGGLE_COMPLETADA', id });
    const actualizarTarea = (id, nuevoTexto) => dispatch({ type: 'ACTUALIZAR_TAREA', id, nuevoTexto });

    return (
        <TareasContexto.Provider value={{ tareas, agregarTarea, eliminarTarea, toggleCompletada, actualizarTarea }}>
            {children}
        </TareasContexto.Provider>
    );
};
