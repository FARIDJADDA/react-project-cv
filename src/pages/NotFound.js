import React from 'react';
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
    <div className="notFound">
        <div className="notFoundContent">
            <h1>tu as de la chance que je soit là click sur le lien ^^ dsl j'ai eu du mal à faire le css pour cette page probleme avec le @include</h1>
            <NavLink exact to="/">
                <i className="fas fa-home" />
                <span> Accueil </span>
            </NavLink>
        </div>
    </div>
    );
};

export default NotFound;
