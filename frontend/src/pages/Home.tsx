import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { validateToken } from '../api/requests';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
      return;
    }
    const tokenIsValid = validateToken();
    if (!tokenIsValid) navigate('/login');
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Header />
    </Box>
  );
};

export default Home;
