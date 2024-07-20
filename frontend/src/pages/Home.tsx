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
        console.log(products)
        setProducts(products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    getData();
  }, []);

  const product = {
    id: 1,
    name: 'Produto Fictício',
    description: 'Descrição do Produto Fictício',
    imageUrl: '/images/fictitious-product.jpg',
  };

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
          <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {products.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
          </Card>
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
