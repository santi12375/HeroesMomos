import React from 'react';
import Heroe from './Heroe';

const HeroeList = ({heroeList}) => (
    //mt se refiere a margin top      py se refiere a padding top bottom
    <div className="card mt-2 py-5">
        <div className="card-body">
            <h2 className="card-title text-center mb-5">to administer the heroes here</h2>

            <div className="list-heroes">
                {heroeList.map(heroe => (
                    //para llamar al componente
                    <Heroe
                        key={heroe.id}//para que me salga id de heroe y nombre de heroe
                        heroe={heroe}
                />
            ))}
        </div>
    </div>
</div>
);
export default HeroeList;