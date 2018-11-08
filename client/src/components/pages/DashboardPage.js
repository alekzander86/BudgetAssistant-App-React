import React,{Component} from 'react';
import ConfirmedEmailMessage from '../messages/ConfirmedEmailMessage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class DashboardPage extends Component{

    render(){
        return(
            <div>
                
                {!this.props.isConfirmed && <ConfirmedEmailMessage/> }
    
            </div>
        )
    }
   
}

function mapStateToProps(state){
    return{
        isConfirmed : !!state.user.confirmed,
        
    }
}

DashboardPage.propTypes={
    isConfirmed: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(DashboardPage);