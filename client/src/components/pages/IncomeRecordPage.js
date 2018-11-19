import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {fetchIncomeTypes, registerIncome} from '../../store/actions/income';
import IncomeRecordForm from '../forms/IncomeRecordForm';

class IncomeRecordPage extends Component{
    
    componentDidMount = () => this.onInit(this.props);

    onInit = props => {
        props.fetchIncomeTypes(); 
         
    }

    handleSubmit = (data) =>
    //console.log(data);
     this.props.registerIncome(data).then(()=>{
         this.props.history.push("/income")
     });

    render(){

        return(
            <IncomeRecordForm submit={this.handleSubmit}/>
        );
    }
}

  IncomeRecordPage.propTypes={
        fetchIncomeTypes: PropTypes.func.isRequired,
        registerIncome: PropTypes.func.isRequired
    
  }

export default connect(null,{fetchIncomeTypes, registerIncome})(IncomeRecordPage);