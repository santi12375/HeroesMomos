import heroes from '../../assets/data/heroes'

export const heroeService ={     
    getHeroes       /*Exporta la funcion para que otras la puedan usar con el nombre de heroeService*/
}

function getHeroes(){
    /*Obtiene los heroes de heroes.js*/
    return heroes;
}

export default heroeService;