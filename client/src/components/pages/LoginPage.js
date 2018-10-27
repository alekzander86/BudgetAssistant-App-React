import React,{Component} from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/actions/auth';
import {Link} from 'react-router-dom';


class LoginPage  extends Component{
    
    submitHandler=(data)=>
    this.props.login(data).then(()=>this.props.history.push("/dashboard"));
    
    render(){
        return(
            <div className='container my-5'>
                <div className="row">
                    <div className="col-md-5 offset-md-3">
                        <LoginForm submit={this.submitHandler}/>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col-md-5 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <Link to="forgot_password" className='nav-link'>Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    
}

LoginPage.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null,{login})(LoginPage);