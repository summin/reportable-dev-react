import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ImageLeft from './ImageLeft'
import Buttons from './Buttons'
import PropTypes from 'prop-types'

export default ({ ...props }) => {

    return (
        (props.focus !== "dashboard") && (props.focus !== "proposals") && (
        <Col lg={2}>
            <div className="ml-2 mr-2 mt-0 shadow p-3 pt-0 pb-0 mb-0 bg-white">
                <Row>
                    <Col sm={6} lg={12}>
                        <Buttons
                            contentLoaded={props.contentLoaded}
                            content={props.content} />
                    </Col>
                    <Col sm={6} lg={12}>
                        <ImageLeft
                            contentLoadedinParent={props.contentLoaded}
                            focus={props.focus} />
                    </Col>
                </Row>
            </div>
        </Col>)
    )
}