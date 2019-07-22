import React, { Component } from 'react'
import heroeService from '../../services/heroeService'

export class Heroes extends Component {

    state = {   //contiene informacion sobre el componente
        heroes: []
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
            heroes: heroeService.getHeroes()
            /*a heroes , le asigna lo que retorne getHeroes() (metodo de heroeService)*/
        });
    }


    /*Render sirve para mostrar el formato html */
    /*React fragment es un componente que permite devolver multiples elementos */
    render() {
        const heroes = this.state.heroes;
        return (
            <React.Fragment> 
                <h1>Héroes <small>Marvel y DC</small></h1>
                <hr></hr>
                <div className="card-columns">
                    {/*Tarjeta de los héroes*/
                    /* .map es un metodo que nos permite recorrer un arreglo y retornarlo*/
                    }
                    
                    {/*Recorre la lista de heroes y para cada uno hace una targeta con sus datos*/}
                    {heroes.map(heroe => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={heroe.img} alt={heroe.nombre} className="card-img-top" />
                            <div className="card-body">
                            <h4 className="card-title">{heroe.nombre}</h4>
                            <p className="card-text">{heroe.bio}</p>
                            <p className="card-text">
                                <small className="text-muted">{heroe.aparicion}</small>
                            </p>
                            <button type="button" className="btn btn-outline-primary btn-block">
                                Ver más...
                            </button>
                        </div>
                    </div>
                        )
                    })}
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Heroes
