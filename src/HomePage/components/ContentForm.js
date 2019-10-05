
import React, { Component, Fragment, PureComponent, useState } from 'react';
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

const FormPanel = ({ ...props }) => {

    let { alert, validated, proposals } = props

    return (
        <Fragment>
            <Row className="mt-1" key={"1a"}>
                <Col md={10} key={"2a"}>
                    <Alert className="d-flex justify-content-between" variant={validated ? "danger" : alert.type ? alert.type : "primary"} size="md">
                        {validated ? "Please, fill all the fields in the form!"
                            : alert.message ? alert.message
                                : "Please, fill and submit proposal for further review..."}
                        {proposals.loading && <Spinner className="mt-1" animation="border" size="sm" />}
                    </Alert>
                </Col>
                <Col md={2} key={"3a"}>
                    <div className="d-flex">
                        <Button type="submit" style={buttonStyle} size="md" variant="secondary" block>Submit</Button>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}


let alert1, alert2;

const buttonStyle = {
    padding: '0.4em 0em'
}

const validationFeedback = {
    position: 'absolute',
    fontWeight: "800",
    fontize: "2ex",
    top: "35px"
}

const labelStyle = {
    minHeight: '2.5em'
}

const labelSpanStyle = {
    position: "absolute",
    bottom: "50px",
}

const FormSubmit = ({ ...props }) => {

    const [validated, setValidated] = useState(false);

    let { proposals, alert } = props;

    const handleSubmit = event => {

        let proposal = {}
        Object.values(event.target).map((i) => {
            Object.assign(proposal, { [i.name]: i.value })
        })
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation();

        }
        setValidated(true);

        if (form.checkValidity() !== false) {
            setValidated(false)
            event.preventDefault()
            props.submit(proposal)
        }
    };

    const localFormSrc = (entry) => {
        const entries = {
            "dbRequestorFullName": props.user.firstName + " " + props.user.lastName,
            "dbRequestorEmployeeID": props.user.username,
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

    return (
        <Form className="mb-4 pb-4" noValidate validated={validated} onSubmit={handleSubmit}>

            <FormPanel
                alert={alert}
                validated={validated}
                proposals={proposals} />

            {getGroups(FormConfig).map((i) => (
                <Form.Row key={i}>
                    {Object.keys(FormConfig).map((j) => (
                        (FormConfig[j].gr == i) &&
                        <Form.Group key={j} as={Col} sm={FormConfig[j].w} controlId={j}>
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
                                <Form.Control.Feedback style={validationFeedback} type="invalid">
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

const mapsStateToProps = (state) => {
    const { alert, proposals } = state;
    const { user } = state.authentication;
    return { user, alert, proposals }
}

const actionCreators = {

    submit: proposalActions.submit,
};

export default connect(mapsStateToProps, actionCreators)(FormSubmit)