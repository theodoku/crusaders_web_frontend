import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from '../components/LoginForm';

const LoginPage = ({ onLogin }) => <LoginForm onLogin={onLogin} />;

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
