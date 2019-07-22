import React from 'react';  /*Importa react*/
import ReactDOM from 'react-dom'; 
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; /*importa el Paquete de enrutamiento de pagina web y lo renombra*/
import App from './App/App'; 
import * as serviceWorker from './serviceWorker'; // el * es para importar todo el contenido de ese modulo

ReactDOM.render(
    <Router><App /></Router>  /*Metodo que enruta a App*/
    , document.getElementById('root'));


// Si quieres que tu aplicación funcione sin conexión y se cargue más rápido, puedes cambiar
// unregister() para register() a continuación. Tenga en cuenta que esto viene con algunas trampas.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
