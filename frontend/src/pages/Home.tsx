import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { validateToken } from '../api/requests';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
      return;
    }
    const tokenIsValid = validateToken(token);
    if (!tokenIsValid) navigate('/login');
  }, []);

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h2">Bem Vindo!</Typography>
    </Box>
  );
};

export default Home;
