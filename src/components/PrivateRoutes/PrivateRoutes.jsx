import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; 

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login', { replace: true });
      return;
    }

    try {
      const data = JSON.parse(storedUser);

      const decodedToken = jwtDecode(data?.token);

      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('user');
        navigate('/login', { replace: true });
      }
    } catch (error) {
      localStorage.removeItem('user');
      navigate('/login', { replace: true });
    }
  }, [navigate, token]);
  useEffect(() => {
    if (!token) {
      navigate('/login', { replace: true });
    }
  }, [navigate, token]);

  if (!token) {
    return null; // or a loading spinner if needed
  }

  return children; 
};

export const UnprotectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const data = JSON.parse(storedUser);

      try {
        const decodedToken = jwtDecode(data?.token);

        if (decodedToken.exp * 1000 > Date.now()) {
          // Token is valid, redirect to home
          navigate('/', { replace: true });
        }
      } catch (error) {
        // Invalid token, clear localStorage
        localStorage.removeItem('user');
      }
    }
  }, [navigate, token]);

  return children; 
};
