import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import ReactModal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css'
import List from './components/List'
import Context from './Context';
import Model from './components/Model'
/*import Counter from './components/counter'*/




class App extends Component {
  constructor() {
    super()
    this.state = {
      presciptions: [{}],
      modalState: false,
      pName: "",
      pAge: "",
      pDate: "",
      pMedicines:"" 
    }

    
  }
    
    render() {
        return (
            <Context.Provider value={{state:this.state,actions:{
                addItem:(item)=>{
                   let list = this.state.presciptions
                   presciptions.push(item)
                   this.setState({presciptions})
                },
                toggle: ()=>{
                    this.setState({
                      modalState: !this.state.modalState
                    })},
             }}}>
                <Model/>
                <List/>
            </Context.Provider>
        );
            }
}

ReactDOM.render(<App />, document.getElementById("root"))