import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import A_64 from '../../../../assets/img/A-64.png'
import { withRouter } from "react-router-dom";

const Navbar = () => {

                        /*Navbar con tema oscuro que se colapsa si es necesario, collapse,data-target son necesarios para que colapse y se despliegue la lista*/
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark bg-faded">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                        
            <Link className="navbar-brand" to="/home">
                {/*se usa navbar-brand para la empresa,producto o nombre del proyecto*/}
                <img src={A_64} width="30" height="30" alt="Logo"/>
            </Link>
            {/*se usa navbar-nav para una navegacion completa y ligera*/}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/*mr-auto asigna margenes automaticos mr-auto(derecha)  ml-auto (izquiera)*/}
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/home" > Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/heroes"> Heroes</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/about"> About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/secondexam"> Second exam</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/form">Form</NavLink>
                    </li>
                </ul>



            </div>


        </nav>

    )
}
//conecta el componente al router por si necesitamos algun accesorio del enrutador
export default withRouter(Navbar)