import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import ContentForm from './ContentForm'
import ContentApprovals from './ContentApprovals'
import ContentMessaging from './ContentMessaging'
import ContentCalendar from './ContentCalendar'
import ContentTodos from './ContentTodos'
import ContentDashboard from './ContentDashboard'
import ContentLanding from './ContentLanding'

export default ({ ...props }) => {
    const { user, users } = props
    return (
        <Fragment>
            <Col lg={7}>
                {props.focus == "" &&
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
                {props.focus == "approvals" &&
                    <ContentApprovals
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
                <Toast style={{
                    position: 'fixed',
                    bottom: 30,
                    right: 10,
                }}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                        <strong className="mr-auto">New Request... </strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Notifications about the most recent events</Toast.Body>
                </Toast>
            </Col>
        </Fragment>
    )
}