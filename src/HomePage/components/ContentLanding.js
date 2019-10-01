import React, { Fragment } from 'react';
import navlogo from '../../_media/images/logo.png'
import landingFXForm from '../../_media/images/landingFXForm.png'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/Table'

export default () => {
    return (
        <Fragment>
            <div className="overflowHidden">
                <Row className = "mt-5">
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <figure className="figure" block>
                            <img src={navlogo} className="figure-img img-fluid  rounded" alt="..." />
                        </figure>

                    </Col>
                    <Col sm={4}></Col>
                </Row>
                <h1 className="text-center display-3 font-weight-lighter">proposals management and analytics console</h1>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6} className="persp100px">
                        <figure className="figure landingFXForm">
                            <img src={landingFXForm} className="figure-img img-fluid w-100 rounded" alt="..." />
                        </figure>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </div>
        </Fragment>

    )
}

