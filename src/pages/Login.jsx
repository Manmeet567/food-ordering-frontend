import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../redux/slices/authSlice'; 
import AuthForm from '../components/AuthForm/AuthForm'; // Importing the reusable AuthForm component

const Login = () => {
  const { user, error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // This is the path the user was trying to access before being redirected to login
  const from = location.state?.from?.pathname || '/';

  // Local state for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handles login submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login({ email, password }));
  };

  // Effect to navigate the user to the desired route after login
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // Define the input fields for the login form
  const inputs = [
    { label: 'Email', name: 'email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value) },
    { label: 'Password', name: 'password', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
  ];

  return (
    <AuthForm
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText="Login"
      loading={loading}
      error={error}
    />
  );
};

export default Login;
