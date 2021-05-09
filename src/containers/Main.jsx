import React, { Component } from 'react';
import Buttons from './Buttons'
import Forms from './Forms'

class Main extends Component {
    render() {
        return (
            <div>
               <h1>Its Five O'Clock Somewhere</h1> 
               <Buttons />
               <Forms />
            </div>
        );
    }
}

export default Main;