
import React, { Component, PureComponent, useState } from 'react';
import { connect } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Textarea from 'react-textarea-autosize'
import cuid from 'cuid'
import { proposalActions } from '../../../_actions'
import * {}



const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
}

class FormSubmit extends Component {

    state = {
        validated: false,
    }

    handleSubmit = event => {
        
        let proposal = {};
        event.preventDefault();
        Object.values(event.target).map((i) => {
            Object.assign(proposal, {[i.name]: i.value})
        })
        const form = event.target;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.props.submit(proposal)

    };

    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Row className="mt-1" key={cuid()}>
                    <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="primary" size="md" style={alertStyle}>Submitting as: Andres Flanders</Alert>
                    </Col>
                    <Col md={4} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}>To: John Doe</Alert>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="md" variant="secondary" block>Submit</Button>
                        </div>
                    </Col>
                </Row>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            disabled
                            required
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            defaultValue={this.props.user.firstName} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            disabled
                            required
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                            defaultValue={this.props.user.lastName} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Member ID</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="memberID"
                                name="memberID"
                                aria-describedby="inputGroupPrepend"
                                required />
                            <Form.Control.Feedback type="invalid">
                                Please choose a username.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Supplier ID</Form.Label>
                        <Form.Control type="text" name="supplierID" placeholder="supplierID" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid city.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Proposal ID</Form.Label>
                        <Form.Control type="text" name="proposalID" placeholder="proposalID" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid state.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

const mapsStateToProps = (state) => {
    const { user } = state.authentication;
    return { user }
}

const actionCreators = {
    submit: proposalActions.submit,
};


export default connect(mapsStateToProps, actionCreators)(FormSubmit)