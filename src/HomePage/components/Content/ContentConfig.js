
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

const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
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

class ContentConfig extends Component {

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

        this.props.submit(proposal)

    };

    render() {
        return (
            <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
                <Row className="mt-1" key={cuid()}>
                    <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="primary" size="md" style={alertStyle}>!! ONLY FOR DEVELOPERS !!</Alert>
                    </Col>
                    <Col md={4} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}>!! DON'T USE !!</Alert>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="md" variant="secondary" block>Submit</Button>
                        </div>
                    </Col>
                </Row>
                <Form.Group key={1} as={Row}>
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
                        <Textarea
                            key={cuid()}
                            className="transitionForm"
                            onChange={(e) => this.props.dispatch(pushFormValue(j[2], e, sectionAPI))}
                            defaultValue={"Proposal Style"}
                            style={textStyle}
                            inputRef={tag => (this.textarea = tag)}
                            name="FormConfig"
                            id={"ID"} />
                    </Col>
                </Form.Group>

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


export default connect(mapsStateToProps, actionCreators)(ContentConfig)