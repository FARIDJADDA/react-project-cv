import React from 'react';
import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
    <div className="notFound">
        <div className="notFoundContent">
            <h1>Pas de panique je suis là click sur le boutton !</h1>
            <NavLink exact to="/">
                <i className="fas fa-home" />
                <span> Accueil </span>
            </NavLink>
        </div>
    </div>
    );
};

export default NotFound;
