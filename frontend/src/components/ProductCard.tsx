import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ProductCardProps } from '../interfaces';
import ConfirmationModal from './Modal';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleSuccess = () => {
    window.location.reload();
  };

  return (
    <>
      <Card
        sx={{
          margin: 2,
          minHeight: 'min-content',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          height="220"
          image={product?.image_url}
          alt={product?.name}
          sx={{ objectFit: 'contain', width: '100%' }}
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
              <strong>Preço de venda:</strong> R$ {product?.price}
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
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
          <IconButton aria-label="edit" sx={{ color: '#4caf50' }}>
            <EditIcon
              onClick={() =>
                navigate('../edit-product', { state: { product } })
              }
            />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={handleClickOpen}
            sx={{ color: '#f44336', ml: 2 }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Card>
      <ConfirmationModal
        open={openDialog}
        handleClose={handleClose}
        id={product?.id}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default ProductCard;
