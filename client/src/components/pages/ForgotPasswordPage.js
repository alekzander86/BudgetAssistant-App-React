import React,{Component} from 'react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {resetPasswordRequest} from '../../store/actions/auth';

class ForgotPasswordPage extends Component{

    state={
        success: false
    }

    submitHandler = data => 
    this.props.resetPasswordRequest(data)
    .then(()=>this.setState({success: true}));
    
    render(){

        const {success} = this.state;

        const Message = 
        
        (<div className="container alert alert-success my-5" role="alert">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h4>Email has been sent!</h4>
                    
                </div>
            </div>
        </div>)

        return(
            <div>
                {success ? Message : <ForgotPasswordForm submit={this.submitHandler}/>}
            </div>
        )
    }
}

ForgotPasswordPage.propTypes={
    resetPasswordRequest: PropTypes.func.isRequired
}


export default connect(null,{resetPasswordRequest})(ForgotPasswordPage);