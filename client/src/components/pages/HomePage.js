import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import SignedOutLinks from '../links/SignedOutLinks';
//import SignedInLinks from '../links/SignedInLinks';

const HomePage = ({isAuthenticated}) =>{

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">MyAppStore</span>
                
            </nav>
            { !isAuthenticated && <SignedOutLinks/> }
        </div>
    );
}

HomePage.propTypes={
    isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return {
        isAuthenticated : !!state.user.token
    }
}
export default connect(mapStateToProps)(HomePage);