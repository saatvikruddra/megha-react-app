import React, { Component } from 'react';
import './Contact.css';
import Button from './common/Button';
import Header from './Header';

class Contact extends Component{
    constructor(props){
        super(props);
        console.log("Constructor of contact component ");
        this.state = {
            myNumber: this.props.myNumber,
            myEmail: this.props.myEmail
        };
    }
  
    componentWillMount() {
        console.log("Component willmount of contact component ");
    }
    componentDidMount() {
        console.log("Component did mount of contact component fired");
    }
    changeValue = () => {
        // this.props.myNumber = "8699643192";
        this.setState({
            myNumber: "8699643192",
            myEmail: 'varunrocks27.sharma@gmail.com'
        });
    }
    render(){
        console.log("render function fired");
        return(
            <div>
            <p>Contact NUGEN on {this.state.myNumber} and email is {this.state.myEmail}</p>
            <Button clickHandler={this.changeValue}>
                <Header/>
            </Button>
            </div>
        );
    }
    
}

export default Contact;