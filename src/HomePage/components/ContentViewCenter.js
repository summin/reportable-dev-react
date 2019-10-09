import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import ContentForm from './ContentForm'
import ContentProposals from './ContentProposals'
import ContentDashboard from './ContentDashboard'
import ContentLanding from './ContentLanding'
import ContentConfig from './ContentConfig'

export default ({ ...props }) => {
    const { user, users } = props

    return (
        
        <Fragment>
            <Col className = "overflowscroll" lg={(!props.focus || (props.focus === "dashboard") || (props.focus === "proposals")) ? 12 : 8}>
                {!props.focus &&
                    <ContentLanding/>}
                {props.focus == "submit" &&
                    <ContentForm/>}
                {props.focus == "messaging" &&
                    <ContentMessaging/>}
                {props.focus == "proposals" &&
                    <ContentProposals/>}
                {props.focus == "calendar" &&
                    <ContentCalendar/>}
                {props.focus == "todos" &&
                    <ContentTodos/>}
                {props.focus == "dashboard" &&
                    <ContentDashboard/>}
                {props.focus == "config" &&
                    <ContentConfig/>}
            </Col>
        </Fragment>
    )
}

