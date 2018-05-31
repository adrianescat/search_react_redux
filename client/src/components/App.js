import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import '../styles/App.css';

export default class App extends Component {
    render(){
        return(
            <div className="app-content">
                {this.props.children}
            </div>
        );
    }
}