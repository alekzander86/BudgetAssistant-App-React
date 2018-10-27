import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {confirm} from '../../store/actions/auth';
import {connect} from 'react-redux';

class ConfirmationPage extends Component{
    state={
        loading: true,
        success: false
    }

    componentDidMount() {
        this.props
          .confirm(this.props.match.params.token)
          .then(() => this.setState({ loading: false, success: true }))
          .catch(() => this.setState({ loading: false, success: false }));
    }

    render(){
        const {loading, success} = this.state;
        return(
            <div>
                {loading &&

                    <div className='container card bg-primary mt-5'>
                        <div className="card-body">
                            <h3 className='text-white'>Validating your email</h3>
                        </div>
                    </div>
                }

                {!loading && success && (

                    <div className='container card bg-dark mt-5'>
                        <div className="card-body">
                            <h3 className='text-white'>Thank you. Your account has been verified.</h3>
                            <hr class="my-4 bg-light"/>
                            <Link to="/dashboard" className='nav-link'>Go to your dashboard</Link> 
                        </div>
                    </div>    
                )}

                {!loading && !success && (
                    <div className='container card bg-danger mt-5'>
                        <div className="card-body">
                            <h4 className='text-white'>Ooops, invalid token seems</h4>
                        </div>
                    </div>
                )}    


            </div>
        );
    }
}

ConfirmationPage.propTypes = {
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        token: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  };

export default connect(null,{confirm})(ConfirmationPage);