import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import ContentForm from './ContentForm'
import ContentProposals from './ContentProposals'
import ContentMessaging from './ContentMessaging'
import ContentCalendar from './ContentCalendar'
import ContentDashboard from './ContentDashboard'
import ContentLanding from './ContentLanding'
import ContentConfig from './ContentConfig'

export default ({ ...props }) => {
    const { user, users } = props
    return (
        <Fragment>
            <Col className = "overflowscroll" lg={props.focus ? 7 : 12}>
                {!props.focus &&
                    <ContentLanding
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "submit" &&
                    <ContentForm
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "messaging" &&
                    <ContentMessaging
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "proposals" &&
                    <ContentProposals
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "calendar" &&
                    <ContentCalendar
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "todos" &&
                    <ContentTodos
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "dashboard" &&
                    <ContentDashboard
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}
                {props.focus == "config" &&
                    <ContentConfig
                        content={props.content}
                        contentLoaded={props.contentLoaded} />}

            </Col>
        </Fragment>
    )
}

