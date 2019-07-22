import React from 'react'

const Home = () => {

    return (
        // para que el jumbotron (sombra) quede del ancho completo y sin esquinas redondeadas se usa jumbotron-fluid con un container dentro
        <div className="jumbotron jumbotron-fluid animated fadeIn fast">
            <div className="container">
                <h1 className="display-3">App Héroes React</h1>
                <p className="lead">Una aplicación para fans de héroes de comics y memes</p>
            </div>
        </div>
        //display-# es un elemento bootstrap que nos permite generar tamaños de encabezado
        //lead es una clase bootstrap para darle enfasis a los parrafos
    )
}

export default Home
