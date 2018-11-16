import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {fetchIncomeTypes} from '../../store/actions/income';
import IncomeRecordForm from '../forms/IncomeRecordForm';

class IncomeRecordPage extends Component{
    
    componentDidMount = () => this.onInit(this.props);

    onInit = props => {
        props.fetchIncomeTypes(); 
         
    }

    handleSubmitIncome = (data) =>
        console.log(data);

    render(){

        return(
            <IncomeRecordForm submit={this.handleSubmitIncome}/>
        );
    }
}

  IncomeRecordPage.propTypes={
        fetchIncomeTypes: PropTypes.func.isRequired
    
  }

export default connect(null,{fetchIncomeTypes})(IncomeRecordPage);