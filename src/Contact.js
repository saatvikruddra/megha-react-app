import React, { Component } from 'react';

class Contact extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <p>Contact NUGEN on {this.props.myNumber} and email is {this.props.myEmail}</p>
        );
    }
}

export default Contact;