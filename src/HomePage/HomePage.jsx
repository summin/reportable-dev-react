import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../_actions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ContentViewCenter from './components/ContentViewCenter'
import InfoBoard from './components/ContentViewRight'
import ContentViewLeft from './components/ContentViewLeft'

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        console.log("HomePageRendered")
        const { user, users, loggedIn } = this.props;
        return (

            <Fragment>
                {loggedIn &&
                    <Fragment>
                        <Container fluid={true}>
                            <Row className="mt-1">
                                {this.props.focus &&
                                    <ContentViewLeft
                                        focus={this.props.focus} />}
                                <ContentViewCenter
                                    focus={this.props.focus} />
                                {this.props.focus &&
                                    <InfoBoard
                                        focus={this.props.focus} />}
                            </Row>
                        </Container>
                    </Fragment>
                }
            </Fragment>
        );
    }
}

function mapState(state) {
    const focus = state.content.focus
    const { users, authentication } = state;
    const { user, loggedIn } = authentication;
    return { user, users, loggedIn, focus };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };