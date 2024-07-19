import React, { useState } from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { requestLogin, setToken, validateToken } from '../api/requests';

const FormsContainer = styled(Box)({
  height: '45%',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#42B7BC',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
});

const LoginForms: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await requestLogin('/login', { email, password });
      setToken(response?.data?.token);
      if (response && response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        const tokenIsValid = await validateToken(response.data.token);
        if (tokenIsValid) navigate('/home');
      } else {
        throw new Error('Token not received');
      }
    } catch (error) {
      console.error('Login failed', error);
      alert('Invalid email or password');
    }
  };

  return (
    <FormsContainer>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontFamily: 'sans-serif', color: '#303030' }}
      >
        Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        sx={{
          backgroundColor: '#FFF',
          borderRadius: '8px',
          fontSize: '16px',
          height: '56px',
          '& .MuiInputBase-input': {
            fontSize: '18px',
          },
        }}
        fullWidth
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
        sx={{
          backgroundColor: '#FFF',
          borderRadius: '8px',
          fontSize: '16px',
          height: '56px',
          '& .MuiInputBase-input': {
            fontSize: '18px',
          },
        }}
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleLogin}
        sx={{
          marginTop: '1rem',
          backgroundColor: '#03242f',
          padding: '20px',
          fontWeight: 'bold',
          fontSize: '20px',
          '&:hover': {
            backgroundColor: '#08415D',
          },
        }}
      >
        Entrar
      </Button>
    </FormsContainer>
  );
};

export default LoginForms;
