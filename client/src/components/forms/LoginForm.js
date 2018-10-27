import React,{Component} from 'react';
import Validator from 'validator';
import InlineErrors from '../messages/InlineErrors';
import SWW from '../messages/SWW';
import PropTypes from 'prop-types';

class LoginForm extends Component{
    state={
        data:{
            email:'',
            password:''
        },
        errors:{}
    } 

    handleChange = e => this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    });

    handleSubmit = (e) =>{
        e.preventDefault();
        //primero se valida que los campos del formulario sean llenados correctamente
        const errors = this.validate(this.state.data);
        //se establece el estado de errors
        this.setState({ errors });
        //si el objeto errors no tiene elementos se procede a enviar los datos del usuario
        if (Object.keys(errors).length === 0) {
            this.props
            .submit(this.state.data)
             .catch(err =>
                 this.setState({errors: err.response.data.errors})
             );
        }
    }

    validate=data=>{
        const errors ={};
        if(!Validator.isEmail(data.email)) errors.email = 'Invalid format email'
        if(!data.password) errors.password = "Can't be blank" ;
        if(data.password.length<6) errors.password = 'the password must have a minimum of 6 characters'
        return errors;
    };

    render(){

        const {email, password, errors} = this.state;
        
        return(
            
            
                <div className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <h3>Sign in</h3>
                            
                        </div>
                        {errors.global &&<SWW text={errors.global}/>}
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-envelope"></i></div>
                                    </div>
                                    <input name="email" value={email} autoComplete="off" onChange={this.handleChange} className="form-control" type="text" placeholder="email@example.com"/>
                                </div>
                            </div>
                            {errors.email &&<InlineErrors text={errors.email}/>}
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input name="password" value={password} autoComplete="off" onChange={this.handleChange} className="form-control" type="password" placeholder="insert your password"/>
                                </div>
                            </div>
                            {errors.password &&<InlineErrors text={errors.password}/>}
                            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign In</button>
                            
                        </form>
                    </div>
                </div>
              
        );
    }
}

LoginForm.propTypes={
    submit: PropTypes.func.isRequired
}

export default LoginForm;
