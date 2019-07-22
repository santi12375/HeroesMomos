import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home';
import Heroes from './components/Heroes/Heroes'
import About from './components/About/About'
import Navbar from './components/shared/Navbar/Navbar';
import SecondExam from './components/SecondExam/SecondExam';
import NewHeroe from './components/Form/NewHeroe';


/* <> es una abreviatura para <react.Fragment>*/
function App() {
  return (
    <>
      <Navbar />
      <div className="container main-container">
        <Switch>
          <Route exact path="/home" component={Home}></Route> 
          <Route exact path="/heroes" component={Heroes}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/secondexam" component={SecondExam}></Route>
          <Route exact path="/form" component={NewHeroe}></Route>
          <Redirect from="/" to="/home" />
          
        </Switch>
      </div>
    </>
  );
}
/*Route nos permite elegir que renderizar, en path ponemos la ubicacion del obeto a renderizar
 y con component recibe/crea el elemento a renderizar*/
export default App;
