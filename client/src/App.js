import React from 'react';
import Homepage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import DashboardPage from './components/pages/DashboardPage';
import ConfirmationPage from './components/pages/ConfirmationPage';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';
import IncomeRecordPage from './components/pages/IncomeRecordPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TopNavigation from './components/navigation/TopNavigation';

const App = ({location, confirm}) =>{
  
    return (
      <div>
        {confirm && <TopNavigation/>}
        <GuestRoute location={location} path='/' exact component={Homepage}/>
        <GuestRoute location={location} path='/login' exact component={LoginPage}/>
        <GuestRoute location={location} path='/signup' exact component={SignupPage}/>
        <GuestRoute location={location} path='/forgot_password' exact component={ForgotPasswordPage}/>
        <GuestRoute location={location} path='/reset_password/:token' exact component={ResetPasswordPage}/>
        <UserRoute location={location} path='/Dashboard' exact component={DashboardPage}/>
        <UserRoute location={location} path='/confirmation/:token' exact component={ConfirmationPage}/>
        <UserRoute location={location} path='/income' exact component={IncomeRecordPage}/>
      </div>
    );
  
}


App.propTypes={
  location:PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
}

function mapStateToProps(state){
  return{
    confirm: state.user.confirmed
  }
}

export default connect(mapStateToProps)(App);
