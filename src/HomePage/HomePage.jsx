import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { userActions, proposalActions, contractActions } from '../_actions'
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
        const { user, users, loggedIn } = this.props;
        return (
            <Container className=' border  overflow-auto contentHeight'  fluid>
                {loggedIn &&
                    <Fragment>
                        <ContentViewCenter focus={this.props.focus}/>
                    </Fragment>
                }
            </Container>
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
    deleteUser: userActions.delete,
    getProposals: proposalActions.get,
    getContracts: contractActions.get
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };