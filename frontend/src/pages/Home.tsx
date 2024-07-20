import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { getProductsByUserId } from '../api/requests';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { Product } from '../interfaces';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/login');
      return;
    }
    const getData = async () => {
      try {
        const userId = 1;
        const products = await getProductsByUserId(userId);
        console.log(products);
        setProducts(products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    getData();
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
        <Typography variant="h4" component="div" sx={{ mb: 4 }}>
          Lista de Produtos
        </Typography>
        <Grid container justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#42B7BC' }}
          onClick={() => navigate('/create')}
        >
          Criar Novo Produto
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
