import React, { Component } from 'react';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import Context from '../Context';

var config = {
    apiKey: "AIzaSyATPE90f5UiGJEVT4jHpi1fbHVjBvfEKB4",
    authDomain: "prescription-rana.firebaseapp.com",
    databaseURL: "https://prescription-rana.firebaseio.com",
    projectId: "prescription-rana",
    storageBucket: "prescription-rana.appspot.com",
    messagingSenderId: "24159456008"
};

firebase.initializeApp(config);


class List extends Component{

    constructor() {
        super()
        this.state = {
            prescriptions: [{}],
            pName: "",
            pAge: "",
            pDate: "",
            pMedicines:""    
        }
        firebase.firestore().collection('prescription')
            .orderBy('pDate', 'asc')
            .onSnapshot((snapshot) => {
                let prsp = []
                snapshot.forEach((doc) => {
                    prsp.push(doc.data())

        this.setState({
            prescriptions: prsp,
          })
          console.log(this.state.prescriptions);
                })
            
            })
        }

        render() {
            return (
                <div className="input-group-text">
                   { this.state.prescriptions.map((item,i)=>{
                        return(
                                <div key={i} align="left">
                                 Name: {item.pName}<br/>
                                 Age : {item.pAge}<br/>
                                 Prescription : {item.pMedicines}<br/>
                                 Date: {item.pDate}
                            <div><button className="btn btn-outline-info m-10">Print</button></div>
                        </div>
                   )}
                   )}
                    </div>
            );
        }

        }

        export default List
