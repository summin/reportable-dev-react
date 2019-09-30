import React from 'react';
import Buttons from './Buttons'
import cuid from 'cuid'
import Spinner from 'react-bootstrap/Spinner'

export default ({ ...props }) => {
    return (
        <div key={cuid()} className="d-flex ml-auto mr-auto mt-lg-0 flex-column">
            <Buttons />
        </div>)
}