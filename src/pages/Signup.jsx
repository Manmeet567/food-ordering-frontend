import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../redux/slices/authSlice';
import AuthForm from '../components/AuthForm/AuthForm';

const Signup = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Local state for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ name, phone, email, password }));
  };

  const inputs = [
    { label: 'Name', name: 'name', type: 'text', value: name, onChange: (e) => setName(e.target.value) },
    { label: 'Phone', name: 'phone', type: 'tel', value: phone, onChange: (e) => setPhone(e.target.value) },
    { label: 'Email', name: 'email', type: 'email', value: email, onChange: (e) => setEmail(e.target.value) },
    { label: 'Password', name: 'password', type: 'password', value: password, onChange: (e) => setPassword(e.target.value) }
  ];

  return (
    <AuthForm
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText="Signup"
      loading={loading}
      error={error}
    />
  );
};

export default Signup;
