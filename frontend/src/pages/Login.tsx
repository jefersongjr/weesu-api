import React from 'react';
import { Box, styled } from '@mui/material';
import weesubg from '../assets/weesubg.png';
import LoginForms from '../components/LoginForm';

const Container = styled(Box)({
  height: '100vh',
  display: 'flex',
});

const LeftBox = styled(Box)({
  width: '60%',
  backgroundColor: '#F5F5F5',
  backgroundImage: `url(${weesubg})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

const RightBox = styled(Box)({
  width: '40%',
  backgroundColor: '#42B7BC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

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
