import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, Pagination } from '@mui/material';
import ProductCard from './ProductCard';
import { getProductsByUserId } from '../api/requests';
import { Product } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const ListProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const productsPerPage = 3; // Número de produtos por página
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const id = localStorage.getItem('id');

        if (!id) {
          console.error('ID inválido encontrado no localStorage');
          navigate('/login');
          return;
        }

        const userId = parseFloat((id as string) ?? '0') as number;

        const products = await getProductsByUserId(userId);
        setProducts(products);
        setTotalPages(Math.ceil(products.length / productsPerPage)); // Atualiza o número total de páginas
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    getData();
  }, [navigate]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <>
      <Typography variant="h4" component="div" sx={{ mb: 4 }}>
        Lista de Produtos
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {currentProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Grid>
      <Button
        variant="contained"
        sx={{ backgroundColor: '#42B7BC', mt: 4 }}
        onClick={() => navigate('../create-product')}
      >
        Criar Novo Produto
      </Button>
    </>
  );
};

export default ListProducts;
