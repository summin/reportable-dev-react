import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as b from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import navlogo from '../_media/images/logo.png'
import cuid from 'cuid'
import { userActions, getContentFocus, expandNav } from '../_actions';
import { } from '../_actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUserCircle,
    faFileAlt,
    faEnvelope,
    faChartArea,
    faCheck,
    faShareSquare,
    faCalendarAlt,
    faCalendarCheck

} from '@fortawesome/free-solid-svg-icons'

const navStyle = {
    backgroundColor: '#e3f2fd',
}

const navlogoStyle = {
    height: '22px',
}



class Header extends Component {

    constructor(props) {
        super(props);
    }

    onClickLogout = (e) => {
        return this.props.logout
    }
    
    render() {
        return (

            <Navbar
                bg="secondary"
                expand="md"
                className="header fixed-top m-0 p-0"
                style={navStyle}>
                <button
                    onClick={this.props.expand}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Navbar.Brand>
                    <b.Image href="#home"
                        className="ml-1 pt-0"
                        src={navlogo}
                        style={navlogoStyle} />
                </Navbar.Brand>
                {this.props.authenticated &&
                    <Navbar.Collapse className={this.props.collapse && "show"} id="basic-navbar-nav">
                        <div className="navbtngroup">
                            <Button
                                key={cuid()}
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="submit"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faShareSquare} size="lg" /> Submit </div>
                            </Button>
                            <Button
                                key={cuid()}
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="proposals"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faCheck} size="lg" /> Proposals </div>
                            </Button>
                            <Button
                                key={cuid()}
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="contracts"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faFileAlt} size="lg" /> Contracts </div>
                            </Button>
                            <Button
                                key={cuid()}
                                className="ml-1 mr-1 navbtn"
                                variant="nav-btn"
                                size="sm"
                                value="dashboard"
                                onClick={this.props.getFocus}>
                                <div className="d-inline"><FontAwesomeIcon icon={faChartArea} size="lg" />  Dashboard </div>
                            </Button>
                        </div>
                    </Navbar.Collapse>

                }
                {this.props.authenticated &&
                    <NavDropdown
                        title={
                            <div className="d-inline-flex align-items-center">
                                <div className="mr-2">{this.props.user.firstName + " " + this.props.user.lastName.charAt(0) + "."}</div>
                                <FontAwesomeIcon icon={faUserCircle} size="1x" />
                            </div>
                        }
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">User Stats</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item value="config" onClick={this.props.getFocus}>App Config</NavDropdown.Item>
                        <NavDropdown.Item onClick={this.onClickLogout()}>Logout</NavDropdown.Item>
                    </NavDropdown>}
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    const authenticated = state.authentication.loggedIn
    const user = state.authentication.user
    const collapse = state.content.collapse
    return { authenticated, user, focus, collapse }
}

const actionCreators = {
    expand: expandNav,
    getFocus: getContentFocus,
    login: userActions.login,
    logout: userActions.logout
};


export default connect(mapStateToProps, actionCreators)(Header)