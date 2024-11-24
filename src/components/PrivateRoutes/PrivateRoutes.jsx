import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode to verify token

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login', { replace: true });
      return;
    }

    try {
      const { token } = JSON.parse(storedUser);

      // Decode the token and check expiration
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        // Token expired, redirect to login
        localStorage.removeItem('user');
        navigate('/login', { replace: true });
      }
    } catch (error) {
      // In case of invalid token or other issues, redirect to login
      localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  }, [navigate, user]);

  if (!user) {
    return null; // or a loading spinner if needed
  }

  return children; 
};

export const UnprotectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { token } = JSON.parse(storedUser);

      try {
        const decodedToken = jwtDecode(token);

        if (decodedToken.exp * 1000 > Date.now()) {
          // Token is valid, redirect to home
          navigate('/', { replace: true });
        }
      } catch (error) {
        // Invalid token, clear localStorage
        localStorage.removeItem('user');
      }
    }
  }, [navigate, user]);

  return children; 
};
