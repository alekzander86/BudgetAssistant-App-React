import React,{Component} from 'react'
import PropTypes from 'prop-types';
import SWW from '../messages/SWW';
import InlineErrors from '../messages/InlineErrors';

class ResetPasswordForm extends Component{

    state={
        data: {
            token: this.props.token,
            password: '',
            passwordConfirmation: ''
        },
        errors: {}
    };

    validate = data =>{
        const errors = {};
        if(!data.password) errors.password = "Can't be blank";
        if(data.password !== data.passwordConfirmation) errors.password = "Password must match";
        return errors; 
    }
    changeHandler = e =>
        this.setState({
            ...this.state,
            data: {...this.state.data, [e.target.name] : e.target.value}
        });
    

    submitHandler = (e) => {
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props
            .submit(this.state.data)
            .catch(err =>
                this.setState({ errors: err.response.data.errors})
            );
        }
    };

    render(){

        const {data, errors} = this.state;

        return( 

            <div className="my-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"><h3>Reset Password Form</h3></div>
                                    
                                    {errors.global &&<SWW text={errors.global}/>}

                                    <form onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-key"></i></div>
                                                </div>
                                                <input name="password" value={data.password} autoComplete="off" onChange={this.changeHandler} className="form-control" type="password" placeholder="Insert your new password"/>
                                            </div>
                                        </div>
                                        {errors.password &&<InlineErrors text={errors.password}/>}

                                        <div className="form-group">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-key"></i></div>
                                                </div>
                                                <input name="passwordConfirmation" value={data.passwordConfirmation} autoComplete="off" onChange={this.changeHandler} className="form-control" type="password" placeholder="type it again, please"/>
                                            </div>
                                        </div>
                                        {errors.passwordConfirmation && <InlineErrors text={errors.passwordConfirmation}/>}
                                        <button type="submit" className="btn btn-primary btn-block">Reset</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        
        );
    }
}


ResetPasswordForm.propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  };

export default ResetPasswordForm;