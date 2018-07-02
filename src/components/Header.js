import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <nav className="teal">
        <div className="nav-wrapper">
            <div className="container">
                <Link className="brand-logo" to="/dashboard">
                    Benjamin Lists
                </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a className="button button--link" onClick={startLogout}>Logout</a></li>
            </ul>
            </div>
        </div>
    </nav>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);