import React from 'react';
import SignedInLinks from '../links/SignedInLinks';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TopNavigation = ({username}) =>{
    return(
        <nav className="navbar navbar-expand-lg bg-ligth">
            <span className="navbar-brand mb-0 h1">MyAppStore</span>
            <SignedInLinks username={username}/>
        </nav>
    )
}

TopNavigation.propTypes={
    username: PropTypes.string.isRequired 
}

function mapStateToProps(state){
    return{
        username: state.user.username
    }
}

export default connect(mapStateToProps)(TopNavigation);