import React from 'react';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col'
import ContentForm from './ContentForm'
import ContentProposals from './ContentProposals'
import Contracts from './ContentContracts'
import ContentDashboard from './ContentDashboard'
import ContentLanding from './ContentLanding'
import ContentConfig from './ContentConfig'
import ContentDevelopment from './ContentDevelopment'

export default ({ ...props }) => {
    const { user, users } = props

    return (
        <Fragment>
                {props.focus == "landing" &&
                    <ContentLanding />}
                {props.focus == "submit" &&
                    <ContentForm />}
                {props.focus == "messaging" &&
                    <ContentMessaging />}
                {props.focus == "contracts" &&
                    <Contracts />}
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
                {props.focus == "development" &&
                    <ContentDevelopment />}
        </Fragment>
    )
}

