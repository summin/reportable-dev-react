
import React, { Fragment, Component, PureComponent, useState } from 'react';
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
import { contractActions } from '../../_actions'
import ContractsJSON from './contentHelpers/contracts.json'

const FormPanel = ({ ...props }) => {

    let { alert, validated, proposals, contracts } = props

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

const alertStyle = {
}

const textStyle = {
    width: "100%",
    padding: "0.35em",
    borderWidth: '1px',
    borderRadius: '5px',
    borderColor: '#c2d6d6',
    resize: 'none',
    overflow: 'hidden'
}

const labelStyle = {
    'overflowY': 'visible'
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


const labelSpanStyle = {
    position: "absolute",
    bottom: "50px",
}

const ContentConfig = ({ ...props }) => {

    const [count, setCount] = useState(0);

    let { proposals, alert } = props;

    const handleSubmit = event => {
        event.preventDefault()
        props.submit(ContractsJSON[count])
        setCount(count+1)
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

            

        <Form className="mb-4 pb-4" onSubmit={handleSubmit}>
            <FormPanel
                alert={alert}
                proposals={proposals} />
                <Form.Group key={1} as={Row}>
                    <Col lg={2}>
                        <Form.Label
                            key={1}
                            className="mr-auto word-wrap"
                            value={"Form Config"}
                            style={labelStyle}>
                            {"Request Submission Style"}
                        </Form.Label>
                    </Col>
                    <Col lg={4} key={cuid()}>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="formclassic" checked />
                            <label class="form-check-label" >
                                Classic
                                </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="formclassic" />
                            <label class="form-check-label">
                                Full-Screen Fixed
                            </label>
                        </div>
                    </Col>
                </Form.Group>

                <Form.Group key={2} as={Row}>
                    <Col lg={2}>
                        <Form.Label
                            key={1}
                            className="mr-auto word-wrap"
                            value={"Form Config"}
                            style={labelStyle}>
                            {"Form Config JSON"}
                        </Form.Label>
                    </Col>
                    <Col lg={10} key={cuid()}>
                    <h3>{count}</h3>
                    <p>{JSON.stringify(ContractsJSON[count])}</p>
                    </Col>
                </Form.Group>

            </Form>
            );
            
            }
            
            
            
const mapsStateToProps = (state) => {
    const {alert, proposals, contracts } = state;
    const {user} = state.authentication;
    return {user, alert, proposals, contracts }
        }
        
const actionCreators = {

                submit: contractActions.submit,
        };
        
        export default connect(mapsStateToProps, actionCreators)(ContentConfig)
        
        
