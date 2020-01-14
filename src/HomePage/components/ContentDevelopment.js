import React, { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import TableEditable from "./Primitives/TableEditable";
import {contractActions} from "../../_actions";
import {connect} from "react-redux";

const Development = ({...props}) => {

    return (
        <Container>
        </Container>
    )
}

const mapsStateToProps = (state) => {
    const { alert, proposals, contracts } = state;
    const { user } = state.authentication;
    return { user, alert, proposals, contracts }
}

const actionCreators = {
    get: contractActions.get,
};

export default connect(mapsStateToProps, actionCreators)(Development)