import memes from '../../assets/data/memes'

export const memeService ={     
    getMemes       /*Exporta la funcion para que otras la puedan usar con el nombre de memeService*/
}

function getMemes(){
    /*Obtiene los heroes de memes.js*/
    return memes;
}

export default memeService;