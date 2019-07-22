import React, { Component } from 'react';
import uuid from 'uuid';//para generar un identificar unico en el formulario
//para que se reinicie el formulario
import HeroeList from "./HeroeList"; //para utilización de la lista
const stateInicial = {
    //metodo que vacia los campos
    heroe: { 
        name: '',
        description: '',
        birthDate: ''

    },
    error:false 
}
class NewHeroe extends Component {
   state={
       heroeArray: [],// almacena el registros Array y comienza vacios gracias a el initialstate
       ...stateInicial
   }

    handleChange=(e) =>{
        //funcion que estara pendiente a lo que el usuario escribe
        console.log(e.target.name+':'+e.target.value);//muestra por consola el campo
        // y el usuario que se escribe
        this.setState({
            heroe:{
                ...this.state.heroe,//crear copia de state
                [e.target.name] : e.target.value
            }
        })
    }
    //cuando el usuario envia el formulario
    handleSubmit = (e) =>{
        e.preventDefault();
        //extraer valores de state
        const {name, description, birthDate} = this.state.heroe;
        //validar que todos los campos esten llenos
        if(name===''|| description===''||birthDate===''){
            this.setState({
                error:true// si algo esta vacio
            });
        
        return;
    }

    //genera objeto con los datos y adiciona un id
    const newHeroe ={...this.state.heroe};// a la constante new heroe le lleva lo que 
    //tienen en los inputs
    newHeroe.id= uuid();//genera un id
    console.log(newHeroe);// imprime por consola el registro

    //copiar el state actual en un Array
    const heroe =[...this.state.heroeArray,newHeroe];
    this.setState({
        heroeArray : heroe
    })

    //colocar el state el stateInicial
    this.setState({
        ...stateInicial
    })
}

    render() {
        //extraer valor del state
        const{error} = this.state;

        return (
            <div className="card mt-5 py-5" >
                <div className="card-body">
                    <h2 className="card-tittle text-center mb-5">
                        to fill out the template in order to create a new heroe
            </h2>
            {//si error es true, genera el mensaje 
            error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col form-label">Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                    type="text" className="form-control" placeholder="Name heroe"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.heroe.name} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col col-form-label">Description</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea className="form-control" placeholder="Description heroe" name="description"
                                    onChange={this.handleChange}
                                    value={this.state.heroe.description}></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date of birth</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control" name="birthDate" onChange={this.handleChange}
                                    value={this.state.heroe.birthDate} />
                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block"
                            value="Add new heroe" />
                    </form>
                </div>
                <div className="mt-5 col-md-10 mx-auto">  
                    <HeroeList                             //para traer un componente 
                        heroeList={this.state.heroeArray} //esta parte me trae la lista
                    />
                </div>
            </div>
        );
    }
    
}

export default NewHeroe