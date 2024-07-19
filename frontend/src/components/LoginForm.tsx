import React from 'react';
import { Box, TextField, Button, Typography, styled } from '@mui/material';

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