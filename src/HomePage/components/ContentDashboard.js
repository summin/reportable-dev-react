import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'

export default () => {
    return (
        <Fragment>
            <Col lg={6}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>#</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>Mark</td>
                            <td></td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>

                            <td>Jacob</td>
                            <td></td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td colSpan="2">Larry the Bird</td>
                            <td>3</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Fragment>
    )
}

