import React,{Component} from 'react';
import {connect} from 'react-redux';
import {incomeTypesSelector} from '../../store/reducers/income';
import PropTypes from 'prop-types'

class IncomeRecordPage extends Component{
    
    render(){
    
        
    
        return(
            <div>
                hello world
            </div>
        );
    }
}

// function mapStateToProps(state){
//     return{
//         incomeTypes: incomeTypesSelector(state)
//     }
// }


// IncomeRecordPage.propTypes={
//     incomeTypesSelector: PropTypes.func.isRequired,
// }

export default connect()(IncomeRecordPage);