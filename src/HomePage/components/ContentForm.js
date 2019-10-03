
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
import { proposalActions } from '../../_actions'
import FormConfig from './contentHelpers/submitFormConfig.json'
import Spinner from 'react-bootstrap/Spinner'


let alert1, alert2;

const buttonStyle = {
    padding: '0.4em 0em'
}

const labelStyle = {
    minHeight: '2.5em'
}

const labelSpanStyle = {
    position: "absolute",
    bottom: "50px",
}

class FormSubmit extends Component {

    state = {
        validated: false,
        formError: false
    }

    handleSubmit = event => {

        let proposal = {}
        Object.values(event.target).map((i) => {
            Object.assign(proposal, { [i.name]: i.value })
        })
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({ formError: true })
            event.preventDefault()
            event.stopPropagation();
            
        }
        else {
            event.preventDefault()
            this.props.submit(proposal)
        }
    };

    render() {

        console.log("FormRendered")

        const localFormSrc = (entry) => {
            const entries = {
                "dbRequestorFullName": this.props.user.firstName + " " + this.props.user.lastName,
                "dbRequestorEmployeeID": this.props.user.username,
                "dbDateofRequest": (new Date).toLocaleDateString('en-GB')
            }
            if (entries[entry])
                return entries[entry]
            else return false
        }

        const getGroups = (formConfig) => {
            let formGroups = []
            for (let key in formConfig) {
                if (formConfig[key].gr != formGroups[formGroups.length - 1])
                    formGroups.push(formConfig[key].gr)
            }
            return formGroups
        }

        const getOptions = (string) => {
            let options = []
            options = string.split(", ")
            return options
        }

        let { proposals, alert } = this.props;

        return (
            <Form className="mb-4 pb-4" validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Row className="mt-1" key={cuid()}>
                    <Col md={10} key={cuid()}>
                        <Alert className="d-flex justify-content-between" variant={alert.type ? alert.type : "primary"} size="md">
                            {   this.state.formError ? "Please, fill all the fields in the form!" :
                                alert.message ? alert.message : <span>"Please, fill and submit proposal for further review..."</span>}
                            {proposals.loading && <Spinner className="mt-1" animation="border" size="sm" />}
                        </Alert>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="md" variant="secondary" block>Submit</Button>
                        </div>
                    </Col>
                </Row>

                <Row key={cuid()}>
                    {alert1 && <Col md={6} key={cuid()}>

                    </Col>}
                    {alert2 && <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}></Alert>
                    </Col>}
                </Row>

                {getGroups(FormConfig).map((i) => (
                    <Form.Row key={cuid()}>
                        {Object.keys(FormConfig).map((j) => (
                            (FormConfig[j].gr == i) &&
                            <Form.Group key={j} as={Col} sm={FormConfig[j].w} controlId="validationCustom03">
                                <Form.Label
                                    style={labelStyle}>
                                    <span className="mr-4" style={labelSpanStyle}><small><strong>{FormConfig[j].name}</strong></small></span></Form.Label>
                                <InputGroup>
                                    {FormConfig[j].prepend &&
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">{FormConfig[j].prepend}</InputGroup.Text>
                                        </InputGroup.Prepend>}
                                    {FormConfig[j].type == "text" &&
                                        <Form.Control
                                            type="text"
                                            disabled={localFormSrc(j) ? true : false}
                                            name={j}
                                            defaultValue={(localFormSrc(j) ? localFormSrc(j)
                                                : (FormConfig[j].prepend == "$") ? (Math.floor(Math.random() * 100000))
                                                    : (FormConfig[j].prepend == "%") ? (Math.floor(Math.random() * 100))
                                                        : (FormConfig[j].prepend == "months") ? (Math.floor(Math.random() * 60))
                                                            : (FormConfig[j].prepend == "@") ? (Math.floor(Math.random() * 10) + "@constreturn.com")
                                                                : (j == "dbContractReferenceNumber") ? (Math.floor(Math.random() * 10000))
                                                                    : j)}
                                            aria-describedby="inputGroupPrepend"
                                            required />}
                                    {FormConfig[j].type == "drop-down" &&
                                        <Form.Control
                                            as="select"
                                            name={j}
                                            required>
                                            {getOptions(FormConfig[j].options).map((k) => (
                                                <option key={k}>{k}</option>
                                            ))}
                                        </Form.Control>}
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid entry.
                                    </Form.Control.Feedback>
                                </InputGroup>

                            </Form.Group>
                        ))
                        }
                    </Form.Row>
                ))}
            </Form>
        );
    }
}

const mapsStateToProps = (state) => {
    const { alert, proposals } = state;
    const { user } = state.authentication;
    return { user, alert, proposals }
}

const actionCreators = {

    submit: proposalActions.submit,
};

export default connect(mapsStateToProps, actionCreators)(FormSubmit)