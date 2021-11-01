import React, { Component } from 'react';
import './Hello.css'

class Hello extends Component {
    render() {
        return (
            <div className='fc tc'>
                <h1>Hello world</h1>
                <p>welcome to react {this.props.greeting}</p>
            </div>
        )
    }
}

export default Hello;