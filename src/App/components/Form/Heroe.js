import React from 'react';

//componente con la informacon
const Heroe = ({heroe}) => (
    <div className="media nt-3">
        <div className="media-body">
        <h3 className="mt-0">{heroe.name}</h3>
        <p className="card-text"><span>Description:</span>
        {heroe.description}</p>
        <p className="card-text"><span>Date of birth: </span>
        {heroe.birthDate}</p>
        </div>
    </div>
);
export default Heroe;