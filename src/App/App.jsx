import React, { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import Header from '../Header/Header.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <Router history={history}>
                <div>
                    <Header />
                    <PrivateRoute exact path="/" component={HomePage} />
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                </div>
            </Router>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    const { loggingOut } = state.authentication;
    return { alert, loggingOut };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };