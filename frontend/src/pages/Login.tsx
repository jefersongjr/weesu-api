import React from 'react';
import { Box, styled } from '@mui/material';
import weesubg from '../assets/weesubg.png';
import LoginForms from '../components/LoginForm';

const Container = styled(Box)({
  height: '100vh',
  display: 'flex',
});

const LeftBox = styled(Box)(({ theme }) => ({
  width: '60%',
  backgroundColor: '#F5F5F5',
  backgroundImage: `url(${weesubg})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: '40%',
  backgroundColor: '#42B7BC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const Login: React.FC = () => {
  return (
    <Container>
      <LeftBox />
      <RightBox>
        <LoginForms />
      </RightBox>
    </Container>
  );
};

export default Login;
