import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Person extends Component {
    constructor(){
        super();
        this.state  = {
            persons : [
                {
                    name: 'Varun'
                }, {
                    name: 'Kushal'
                }, {
                    name: 'Era'
                }, {
                    name: 'Gurjit'
                }, {
                    name: 'Megha'
                }, {
                    name: 'Saatvik'
                }, {
                    name: 'Jorav'
                }, {
                    name: 'Tahir Bhai'
                }, {
                    name: 'Param Seith'
                }
            ],
            name: ''
        };
    }

    changeValue = (event)=>{
        this.setState({
           name: event.target.value
        });
    }

    addUser = () => {
        let person = {
            name: this.state.name
        };
        let p = this.state.persons.slice();
        p.push(person);
        this.setState({
            persons: p
        });
    }

    deleteUser = (ind) =>{
        let p = this.state.persons.slice();
        p.splice(ind,1);
        this.setState({
            persons: p
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(event)=>{this.changeValue(event)}}/> <br/>
                <button onClick={this.addUser}> Add User</button>
                <ul>
                    { this.state.persons.map((p,i)=>{
                        return (
                            <li key={i}>
                                {p.name} 
                                <span onClick={()=> this.deleteUser(i)}>Delete</span>
                            </li>
                            )
                        })
                    }
                </ul>
              <Link to="/">Go to mainpage.</Link>
            </div>
        );
    }
}

export default Person;