import React from 'react';
import {Link} from 'react-router-dom';
const SignedOutLinks = () =>{
    return(
        <div className="container alert alert-primary text-center mt-5" role="alert">
                Thanks for using our application!<br/>
                If you are already registered, access your account in the login link or create an account in the registration link<br/>
                <Link to='/login'>Login</Link> or  <Link to='/signup'>SignUp</Link>
        </div>
    )
} 

export default SignedOutLinks;