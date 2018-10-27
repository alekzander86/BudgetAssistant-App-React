import React from 'react';
import {connect} from 'react-redux'
import {logout} from '../../store/actions/auth';

const ConfirmedEmailMessage = ({logout}) =>{
    return(
            <div className="container jumbotron mt-5">
            <h1 className="display-4">Hello, Friend!</h1>
            <p className="lead">Please, verify your Email to unlock awesomeness.</p>
            <hr className="my-4"/>
            <p>press the logout button, if you want to leave the session without verifying your account</p>
            <button className="btn btn-primary btn-lg" onClick={logout}>Logout</button>
            </div>
    )
}

export default connect(null,{logout})(ConfirmedEmailMessage);