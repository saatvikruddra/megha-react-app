import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Person from './Person';
import Post from './Post';
import Login from './Login';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
    <div>   
        <Route exact path="/" component={App} />
        <Route path="/person" component={Person} />
        <Route path="/post" component={Post} />
        <Route path="/login" component={Login} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
