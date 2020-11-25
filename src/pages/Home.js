import React from 'react';
import logo from '../assets/img-iot.svg';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
        
        <div className="row">
           <div className="col-md-8">
             <h1>Internet of Things (IoT)</h1>
             <img className="img-responsive" width="500px" height="500px" src={logo} alt=""/>
           </div>

           <div className="col-md-4 box ">
             <div className="box">
           <h1>UNIVERSIDADE DE SOROCABA</h1>
           <h4>Projetos Mecatrônicos</h4>
          <Link to="/menu">
           <button className=" meu-botao btn btn-outline-success">Consultar Temperatura</button>
           </Link>
           </div>
           </div>

        </div>

        </div>
      </header>
    </div>
  );
}


export default Home;

