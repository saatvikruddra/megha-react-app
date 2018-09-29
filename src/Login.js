import React, { Component } from 'react';
import cookie from 'react-cookies';
import {
    ToastContainer,
    toast
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
    notify = (msg) => toast(msg);

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        if(cookie.load('access_token') !== undefined){
            this.props.history.push('/post');
        }
    }

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    login = () => {
        let data = {
            email: this.state.email,
            password: this.state.password
        };
        fetch("http://vidyapeethclasses.in/api/v1/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res)=>{
            return res.json();
        })    
        .then((res)=>{
            console.log(res);
            if(res.access_token !== undefined){
                cookie.save('access_token', res.access_token);
                cookie.save('role', res.role);
                this.props.history.push("/post");
                this.notify(res.message);
            }else{
                this.notify(res.error.user_authentication[0]);
            }
        })    
        .catch((err)=>{
            console.log("Error while login "+ err);
        })    
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleEmail}/>
                </div>
                <div>
                    <input type="password" onChange={this.handlePassword}/>
                </div>
                <div>
                    <button onClick={this.login}>Login</button>
                </div>
                <ToastContainer />
                
            </div>
        );
    }
}

export default Login;