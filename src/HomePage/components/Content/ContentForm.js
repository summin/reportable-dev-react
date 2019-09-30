
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
import FormConfig from '../contentHelpers/submitFormConfig.json'

const localFormSrc = [

]

let alert1, alert2;

const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
}

const labelStyle = {
    minHeight: '2.5em'
}

const labelSpanStyle = {
    position: "absolute",
    bottom: "50px",
    fontSize: "1.6ex"
}


class FormSubmit extends Component {

    state = {
        validated: false,
    }

    handleSubmit = event => {

        let proposal = {};
        event.preventDefault();
        Object.values(event.target).map((i) => {
            Object.assign(proposal, { [i.name]: i.value })
        })
        const form = event.target;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.props.submit(proposal)

    };

    render() {

        const getGroups = (formConfig) => {
            let formGroups = []
            for (let key in formConfig) {
                console.log(formConfig[key].gr)
                if (formConfig[key].gr != formGroups[formGroups.length - 1])
                    formGroups.push(formConfig[key].gr)
            }
            return formGroups
        }

        console.log(FormConfig)

        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>

                <Row className="mt-1" key={cuid()}>
                    <Col md={10}> 
                        <h5>Please, fill and submit proposal for further review...</h5>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="md" variant="secondary" block>Submit</Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {alert1 && <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="primary" size="md" style={alertStyle}>Submitting...</Alert>
                    </Col>}
                    {alert2 && <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}></Alert>
                    </Col>}
                </Row>

                {getGroups(FormConfig).map((i) => (
                    <Form.Row key={i}>
                        {Object.keys(FormConfig).map((j) => (
                            (FormConfig[j].gr == i) &&
                            <Form.Group key={j} as={Col} md={FormConfig[j].w} controlId="validationCustom03">
                                <Form.Label
                                    style={labelStyle}>
                                    <span className="mr-4" style={labelSpanStyle}>{FormConfig[j].name}</span></Form.Label>
                                {FormConfig[j].type == "drop-down" &&
                                    <Form.Control
                                        as="select"
                                        name={j}
                                        placeholder="-"
                                        required />}
                                {FormConfig[j].type == "text" &&
                                    <Form.Control
                                        type="text"
                                        placeholder="-"
                                        name={j}
                                        aria-describedby="inputGroupPrepend"
                                        required />}
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid entry.
                                    </Form.Control.Feedback>
                            </Form.Group>
                            ))
                            }
                    </Form.Row>
                        ))}

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
    const {user} = state.authentication;
    return {user}
                }
                
const actionCreators = {
                    submit: proposalActions.submit,
            };
            
            
export default connect(mapsStateToProps, actionCreators)(FormSubmit)