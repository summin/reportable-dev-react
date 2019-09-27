import React, { Component, Fragment } from 'react';
import Nav from 'react-bootstrap/Nav'

const navStyle = {
    backgroundColor: '#e3f2fd',
    color: 'black',
}

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <Nav style={navStyle} className="header fixed-bottom">
                <p className="mb-0 pb-0 mt-2 ml-2">© reportable</p>
                <a className="ml-auto mr-4 p-2" href="#"> Contact Support </a>
            </Nav>
        )
    }
}
