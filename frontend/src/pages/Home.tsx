import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box } from '@mui/material';
import HomeContent from '../components/HomeContent';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
      return;
    }
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        height: '100vh',
        mt: 4,
        backgroundColor: '#F5F5F5 ',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <Box
        sx={{
          mt: 4,
          mb: 2,
          width: '80%',
        }}
      >
        <HomeContent />
      </Box>
    </Box>
  );
};

export default Home;
