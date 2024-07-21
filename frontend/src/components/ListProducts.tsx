import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { getProductsByUserId, validateToken } from '../api/requests';
import { Product } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const { id } = await validateToken();
        const products = await getProductsByUserId(id);
        setProducts(products);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    getData();
  }, []);

  return (
    <>
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
        onClick={() => navigate('../create-product')}
      >
        Criar Novo Produto
      </Button>
    </>
  );
};

export default ListProducts;
