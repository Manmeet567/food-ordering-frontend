import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login, fetchUserData } from '../redux/slices/authSlice'; 
import AuthForm from '../components/AuthForm/AuthForm';
import {jwtDecode} from 'jwt-decode';

const Login = () => {
  const { user, token, error, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // This is the path the user was trying to access before being redirected to login
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(login({ email, password }));

    if (login.fulfilled.match(result)) {
      const decodedToken = jwtDecode(result.payload.token); 
      const userId = decodedToken._id; 
      dispatch(fetchUserData(userId));
    }
  };

  // Navigate once the user data is populated after login
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  // Form inputs array
  const inputs = [
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Example@email.com',
      type: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value)
    },
    {
      label: 'Password',
      name: 'password',
      placeholder: 'At least 8 characters',
      type: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value)
    }
  ];

  return (
    <AuthForm
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText="Sign in"
      loading={loading}
      error={error}
    />
  );
};

export default Login;
