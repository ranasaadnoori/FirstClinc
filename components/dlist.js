import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Dlist extends Component{

    constructor(){
        super()
        this.state={
            drugs:[]
        }
        this.getdrugs()
    }

    getdrugs(){
            fetch(`https://api.fda.gov/drug/event.json?limit=1`)
            .then((response)=>{
              return response.json()
            })
            .then((data)=>{
              this.setState({
                drugs: data.results
              })
            })
          
    }
}

export default Dlist