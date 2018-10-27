import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types';
import {logout} from '../../store/actions/auth';
import {connect} from 'react-redux';

const SignedInLinks = ({username, logout}) =>{
    return(
        <Fragment>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                   
                    <li className="nav-item active">
                        <Link to ='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                            Income
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to='/income' className='dropdown-item'>Income record</Link>
                        <div className="dropdown-divider"></div>
                        <Link to='/' className='dropdown-item'>Show income list</Link>
                        </div>

                    </li>

                    <li className="nav-item">
                        <Link to ='/' className="nav-link">Expense</Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">
                        {username}
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link to='/' className='dropdown-item' onClick={logout}>Logout</Link>
                        </div>
                    </li>
                    </ul>
                </div>
        </Fragment>
    )
}


SignedInLinks.propTypes={
    username: Proptypes.string.isRequired,
    logout: Proptypes.func.isRequired,
}

export default connect(null, {logout})(SignedInLinks);