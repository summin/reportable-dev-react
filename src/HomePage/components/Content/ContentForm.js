import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import FormGroup from './FormGroup'
import FormSubmit from './FormSubmit'
import cuid from 'cuid'
import { setFormContent } from '../../actions'


const alertStyle = {
}

const buttonStyle = {
    padding: '0.4em 0em'
}

class ContentForm extends Component {

    constructor(props) {
        super(props)
        this.hasError = false
    }

    setContentFormData = (value, json, contentLoaded) => {
        let entries = Object.entries(json);
        entries.map((i) => {
            if (contentLoaded == 'days') {
                entries = this.filterbyFirst(i[1], value);
            }
            else if
                (i[0] === value) {
                entries = Object.entries(i[1]);
            }
        });

        // promo in days.ini fix //
        if (value === "calendar.newsletter") {
            entries = Object.entries(json);
            entries.map((i) => {
                if (i[0] === value) {
                    entries = Object.entries(i[1]);
                }
            })
        }

        this.props.dispatch(setFormContent(entries, value))
        
        return entries;
    }

    filterbyFirst = (pairs, n) => {
        let array = [[], []];
        Object.entries(pairs).map((i) => {
            let j = (i[0].split("."));
            if (j[0] == n) {
                i[0] = j.splice(1, 4).join(".");
                array.push(i);
            }
        })
        return array;
    }


    static getDerivedStateFromError(error) {
        return { hasError: error };
    }

    render() {
        const FormTop = () => {
            return (
                <Row className="mt-1" key={cuid()}>
                    <Col md={6} key={cuid()}>
                        <Alert key={cuid()} variant="primary" size="md" style={alertStyle}>Submitting as: Andres Flanders</Alert>
                    </Col>
                    <Col md={4} key={cuid()}>
                        <Alert key={cuid()} variant="secondary" style={alertStyle}>To: John Doe</Alert>
                    </Col>
                    <Col md={2} key={cuid()}>
                        <div className="d-flex">
                            <Button type="submit" key={cuid()} style={buttonStyle} size="md" variant="secondary" onClick={this.onClick} block>Submit</Button>
                        </div>
                    </Col>
                </Row>
            )
        }


        return (
         <Fragment>
            <FormTop/>
            <FormSubmit/>
         </Fragment>
        )
    }
}

export default connect()(ContentForm)