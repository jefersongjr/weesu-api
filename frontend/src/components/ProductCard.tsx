import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ProductCardProps } from '../interfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, height: '480px' }}>
      <CardMedia
        component="img"
        height="220"
        image={product?.image_url}
        alt={product?.name}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.primary">
            <strong>Preço de venda:</strong> ${product?.price}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Quantidade em estoque:</strong> {product?.quantity}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Modelo:</strong> {product?.model}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Referência:</strong> {product?.referencia}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Marca:</strong> {product?.brand}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
