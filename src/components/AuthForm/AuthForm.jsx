import React from 'react';
import authbg from "../../assets/auth-bg.png";
import Footer from '../Footer/Footer';
import './AuthForm.css';

const AuthForm = ({ inputs, handleSubmit, buttonText, loading, error }) => {
  return (
    <div className="auth-form">
      <div className="af-container">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.name} className="input-group">
            <label htmlFor={input.name}>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              required
            />
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : buttonText}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default AuthForm;


{/* <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.name} className="input-group">
            <label htmlFor={input.name}>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              value={input.value}
              onChange={input.onChange}
              required
            />
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : buttonText}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form> */}