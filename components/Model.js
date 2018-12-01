import React, { Component } from 'react';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import ReactModal from 'react-modal';
import Context from '../Context';
import {Autocomplete} from 'evergreen-ui'




class Model extends Component {
 
    constructor(){
        super()
        this.state={
            prescriptions: [{}],
            pName: "",
            pAge: "",
            pDate: "",
            pMedicines:"" 
        }
    }
    
render() {
    
  return (
    <Context.Consumer>
     {
         (ctx)=>{
             return(
              <nav className="navbar navbar-light bg-light">
              <ReactModal isOpen={ctx.state.modalState}>
              <h3>Add Prescriptions</h3>
              <form className="form-group">
                    <label for="formGroupExampleInput">Patient Name</label> 
                    <input name="p-Name"className="form-control" type="text" value={this.state.pName} onChange={(e)=>{
                    this.setState({
                        pName:e.target.value
                    })
                }}  placeholder="add name"
                />
                <label for="formGroupExampleInput">Patient Age</label> 
                    <input className="form-control" type="text" value={this.state.pAge} onChange={(e)=>{
                    this.setState({
                        pAge:e.target.value
                    })
                }}  placeholder="add patient age"
                />
                <label for="formGroupExampleInput">Prescription Date</label> 
                    <input className="form-control" type="text" value={this.state.pDate}  onChange={(e)=>{
                    this.setState({
                        pDate:e.target.valueAsDate
                    })
                }}  placeholder="Date"
                />
                <label for="formGroupExampleInput">Patient Medication</label>
                
                <hr></hr>
                <button onClick={()=>{
                     ctx.actions.addItem(this.state.prescriptions)
                     this.setState({prescription})
                }}>Save</button>
                </form>
               </ReactModal>
               <h1>First Clinic</h1>
               <button className="btn btn-info"onClick={() => {
                  ctx.actions.toggle()
                }}>Add Prescription</button>
               </nav>
             )
         }
     }
    </Context.Consumer>
  )
};
  }

  export default Model