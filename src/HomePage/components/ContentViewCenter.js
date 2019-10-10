import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import ContentForm from './ContentForm'
import ContentProposals from './ContentProposals'
import ContentContracts from './ContentContracts'
import ContentDashboard from './ContentDashboard'
import ContentLanding from './ContentLanding'
import ContentConfig from './ContentConfig'

export default ({ ...props }) => {
    const { user, users } = props

    return (

        <Fragment>
            <Col className="overflowscroll" lg={12}>
                {!props.focus &&
                    <ContentLanding />}
                {props.focus == "submit" &&
                    <ContentForm />}
                {props.focus == "messaging" &&
                    <ContentMessaging />}
                {props.focus == "contracts" &&
                    <ContentContracts />}
                {props.focus == "proposals" &&
                    <ContentProposals />}
                {props.focus == "calendar" &&
                    <ContentCalendar />}
                {props.focus == "todos" &&
                    <ContentTodos />}
                {props.focus == "dashboard" &&
                    <ContentDashboard />}
                {props.focus == "config" &&
                    <ContentConfig />}
            </Col>
        </Fragment>
    )
}

