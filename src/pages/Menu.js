import React, { Component } from 'react';
import axios from "axios";

import imgTermometro from '../assets/termometro.png';
import temperatura from '../assets/calor.svg';
 import './menu.css'

const api = axios.create({
baseURL: 'https://api.thingspeak.com/channels/1222661/feeds.json?api_key=W8PTP7RD0QZHLNWC&results=10'

});


export default class Menu extends Component {

        constructor(props){
            super(props);
            this.state  = {
                feeds: [],            
        }
    }
    
    async componentDidMount(){
        const response =  await api.get('')
        .then((res) =>{
        console.log(res.data.feeds);
        //adicionando para o feed
        this.setState({feeds:res.data.feeds});
        console.log("dados do feed = " + this.state.feeds)
        })
         
    }



    render() {
        const {feeds} = this.state;
        return (
            <div>
                <h1 className="display-4 titulo" >Painel de Temperaturas</h1>
                {
             feeds.length ? 
                feeds.map(post =>
                   
                    <div className="row teste">
                       
                            <div className="col-md-6">
                                 <img id="quente" width="200px" height="200px" src={temperatura} alt=""/> <br/>
                                 
                            </div>                             
                            
                       
                         <div className="col-md-4 valores">
                                 <h2>Temperatura </h2>
                                 <h4> {parseInt( post.field1)} °C</h4>
                                 <h5> Status : {
                                   post.field1 > 50 &&
                                    <h3>Silo está muito quente</h3>                              
                                     
                                     }
                                     {
                                    post.field1 < 30  &&
                                    <h3>Normal</h3>    
                                                            
                                     
                                     }

                                     </h5>

                                     <h5>Criado em:{ post.created_at}</h5>
                                    <button  className="btn btn-danger">Visualizar</button>
 
                         </div>
                    </div>
               
                ): null

                }
               
               
               
            </div>
        )
    }
}
