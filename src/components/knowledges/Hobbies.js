import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérets</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Sport(football, boxe, muscu)</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-chess"></i>
                    <span>Les jeux de strategie</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-plane-departure"></i>
                    <span>Les voyages</span>
                </li>
                <li className="hobby">
                <i className="fas fa-parachute-box"></i>                    <span>Sauts en parachute</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-gamepad"></i>
                    <span>Les jeux vidéo</span>
                </li>    
            </ul>
        </div>
    );
};

export default Hobbies;