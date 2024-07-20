import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { Box, Button } from '@mui/material';
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
        mt: 4,
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
          backgroundColor: '#42B7BC',
          width: '80%',
        }}
      >
        <HomeContent />
        <Button
          variant="contained"
          sx={{ backgroundColor: '#42B7BC' }}
          onClick={() => navigate('create-product')}
        >
          Criar Novo Produto
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
