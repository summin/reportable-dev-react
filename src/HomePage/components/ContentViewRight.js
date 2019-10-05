import React from 'react';
import Col from 'react-bootstrap/Col'
import { alertActions } from '../../_actions';
import { connect } from 'react-redux';

import myApp from 'myApp'; /** We are importing our index.php my app Vairaible */

const InfoBoard = ({ ...props }) => {

    const { logged, name, email } = myApp

    return (
        (props.focus !== "dashboard") && (props.focus !== "proposals") && (
            <Col lg={2}>
                <div className="ml-2 mr-2 mt-4 mt-lg-0 shadow p-3 pt-0 pb-0 mb-0 bg-white">
                    <h6>Events:</h6>
                    <p>- Please, fill in the form</p>

                </div>
                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
            </Col>)
    )
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
}

export default connect(mapState, actionCreators)(InfoBoard);
