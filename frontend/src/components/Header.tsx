import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import logo from '../assets/weesuLogo.png';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#03242F',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  boxSizing: 'border-box',
});

const Logo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '1rem',
  '@media (max-width: 600px)': {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});

const WelcomeText = styled(Typography)({
  '@media (max-width: 600px)': {
    display: 'none',
  },
});

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
    setUserName(name as string);
  }, []);

  return (
    <HeaderContainer>
      <Logo>
        <Typography variant="h4" sx={{ color: '#FFF' }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: '150px', height: '60px' }}
          />
        </Typography>
      </Logo>
      <UserInfo>
        <Avatar
          alt="Avatar"
          src="/path/to/avatar.jpg"
          sx={{ width: 56, height: 56, marginRight: '1rem' }}
        />
        <WelcomeText
          variant="h6"
          sx={{ fontFamily: 'sans-serif', color: '#FFF', marginRight: '1rem' }}
        >
          {`Bem-vindo, ${userName}!`}
        </WelcomeText>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            backgroundColor: '#03242f',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#08415D',
            },
          }}
        >
          Sair
        </Button>
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
