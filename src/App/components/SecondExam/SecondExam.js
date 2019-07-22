import React, { Component } from 'react'
import memeService from '../../services/memeService'
import clasificacionService from '../../services/clasificacionService'

export class Memes extends Component {

    state = {
        clases: [],
        memes: []
    }
    

    //Componente tipo clase
    componentDidMount() {
        /*componentDidMount sirve para recuperar 
        los datos de una API externa o realizar algunas operaciones únicas que necesitan
         los elementos JSX 
         
         en este podemos llamar al método setState () para cambiar el estado de nuestra aplicación
          y generar() los datos actualizados cargados JSX.
         .*/
        this.setState({
            memes: memeService.getMemes()
            /*a memes , le asigna lo que retorne getmemes() (metodo de memeService)*/
        });
        this.setState({
            clases: clasificacionService.getClas()
        });
    }

    

    /*Render sirve para mostrar el formato html */
    /*React fragment es un componente que permite devolver multiples elementos */
    render() {
        const memes = this.state.memes;
        const clases = this.state.clases;
        return (
            <React.Fragment> 
                <h1 class="titulo">Los Memes en diversos contextos</h1>
                <hr></hr>
                <div class="Contextos card-columns d-flex flex-column ">
                    {memes.map(meme => {
                            return (
                                <div className="card animated fadeIn fast">
                                <img src={meme.img} alt={meme.nombre} className="card-img-top img-fluid" />
                                <div className="card-body">
                                <h4 className="card-title">{meme.nombre}</h4>
                                <p className="card-text">{meme.bio}</p>
                            </div>
                        </div>
                            )
                    })}
                </div>
                <div class="titulo inline">
                       <h2>Clasificacion de los memes</h2>
                       <p>Normalmente se clasifican los memes en dos grupos: Humor común Y Humor negro</p>
                </div>

                <div class="heehee d-flex justify-content-between" >
                {clases.map(clase => {
                            return (
                                <div className="card animated fadeIn fast">
                                <h4 className="titulo card-title">{clase.nombre}</h4>
                                <br></br>
                                <img src={clase.img} alt={clase.nombre} className="imagen card-img-top img-fluid" />
                                <div className="card-body">
                                <p className="card-text">{clase.bio}</p>
                            </div>
                        </div>
                            )
                        })}
                </div>
            </React.Fragment>
        )
    }
}

export default Memes;
