import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { ProductCardProps } from '../interfaces';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="220"
        image={product[0]?.image_url}
        alt={product[0]?.name}
      />
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product[0]?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product[0]?.description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.primary">
            <strong>Price:</strong> ${product[0]?.price}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Quantity:</strong> {product[0]?.quantity}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Model:</strong> {product[0]?.model}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Reference:</strong> {product[0]?.referencia}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <strong>Brand:</strong> {product[0]?.brand}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
