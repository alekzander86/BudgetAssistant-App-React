import React,{Component} from 'react'
import PropTypes from 'prop-types';
import Validator from 'validator';
import InlineError from '../messages/InlineErrors';
import SWW from '../messages/SWW';

class ForgotPasswordForm extends Component{

    state={
        data: {
            email: ''
        },
        loading: false,
        errors: {}
    };

    validate=data=>{
        const errors ={};
        if(!Validator.isEmail(data.email)) errors.email = 'Invalid user email'
        return errors;
    };

    changeHandler = e =>
        this.setState({
            data: {...this.state.data, [e.target.name] : e.target.value}
        });
    

    submitHandler = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props
            .submit(this.state.data)
            .catch(err =>
                this.setState({ errors: err.response.data.errors, loading: false })
            );
        }
    };

    render(){

        const {data, errors} = this.state;

        return(
            
            <div className='my-5'>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"><h3>Form Reset Password</h3></div>
                                {errors.global &&<SWW text={errors.global}/>}
                                <form onSubmit={this.submitHandler}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fas fa-envelope"></i></div>
                                            </div>
                                            <input name="email" value={data.email} autoComplete="off" onChange={this.changeHandler} className="form-control" type="text" placeholder="email@example.com"/>
                                        </div>
                                    </div>
                                    {errors.email &&<InlineError text={errors.email}/>}
                                    
                                    <button type="submit" className="btn btn-dark btn-lg btn-block">ResetPassword</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ForgotPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired
  };

export default ForgotPasswordForm;