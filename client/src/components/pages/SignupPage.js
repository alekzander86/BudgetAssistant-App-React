import React,{Component} from 'react'
import PropTypes from 'prop-types'
import SignupForm from '../forms/SignupForm';
import {signup} from '../../store/actions/users';
import {connect} from 'react-redux';

class SignupPage extends Component{
    
    submit = data =>this.props.signup(data)
    .then(()=>this.props.history.push("/dashboard"));
    render(){
        return(
            <div>
                <SignupForm submit={this.submit}/>
            </div>
        )
    }
}


SignupPage.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null,{signup})(SignupPage);