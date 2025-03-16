import React from 'react';

const Header = ({ toggleMostrarCompletadas, mostrarCompletadas }) => {
    return (
        <header className="header">
            <h1>Lista de Tareas</h1>
            <button className="boton-toggle" onClick={toggleMostrarCompletadas}>
                {mostrarCompletadas ? 'No mostrar completadas' : 'Mostrar completadas'}
            </button>
        </header>
    );
};

export default Header;
