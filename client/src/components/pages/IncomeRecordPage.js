import React,{Component} from 'react';
import {connect} from 'react-redux';
// import {allTypeSelector} from '../../store/reducers/income';
import PropTypes from 'prop-types'
import {fetchIncomeTypes} from '../../store/actions/income';

class IncomeRecordPage extends Component{
    
    componentDidMount = () => this.onInit(this.props);

    onInit = props => {
        props.fetchIncomeTypes(); 
         
    }

    render(){

        const list = this.props.Types.map((Type,index)=>{
            return <option key={index} value={Type.item} >{Type.item}</option> 
        })

        return(
            <div className="container">
                <div className="col-md-4 offset-md-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title mb-5">
                                <h3 className="text-primary">Income record form</h3>
                                <hr/>
                            </div>
                            
                                <form action="">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                                            </div>
                                            <input name="amount"  autoComplete="off"  className="form-control" type="text" placeholder="insert the amount of income"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p>Select the type of income</p>
                                        <select className="form-control">{list}</select>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
     return{
         Types: state.incomeTypes
         // Types: allTypeSelector(state)
     }
 }


  IncomeRecordPage.propTypes={
        fetchIncomeTypes: PropTypes.func.isRequired
    
  }

export default connect(mapStateToProps,{fetchIncomeTypes})(IncomeRecordPage);