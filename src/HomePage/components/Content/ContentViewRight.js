import React from 'react';
import Col from 'react-bootstrap/Col'

import myApp from 'myApp'; /** We are importing our index.php my app Vairaible */

export default ({ ...props }) => {

    const {logged, name, email} = myApp

return (
    props.focus !== "dashboard" && (
    <Col lg={2}>
        <div className="ml-2 mr-2 mt-4 mt-lg-0 shadow p-3 pt-0 pb-0 mb-0 bg-white">
            <h6>Events:</h6>
            <p>- Please, fill in the form</p>

        </div>
    </Col>)
    )
}