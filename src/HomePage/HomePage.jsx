import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './containers/Content'

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users, loggedIn } = this.props;
        return (

            <Fragment>
                {loggedIn && <Content {...this.props}/>}
            </Fragment>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user, loggedIn } = authentication;
    return { user, users, loggedIn };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };