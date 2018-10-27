import React,{Component} from 'react';
import ConfirmedEmailMessage from '../messages/ConfirmedEmailMessage';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchIncomeTypes} from '../../store/actions/income'

class DashboardPage extends Component{

    componentDidMount = () => this.onInit(this.props);
    onInit = props => props.fetchIncomeTypes();

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
    fetchIncomeTypes: PropTypes.func.isRequired
}

export default connect(mapStateToProps,{fetchIncomeTypes})(DashboardPage);