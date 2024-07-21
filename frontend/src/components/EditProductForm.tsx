import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate, useLocation } from 'react-router-dom';
import { editProduct } from '../api/requests';
import { Product } from '../interfaces/index';

const FormsContainer = styled('form')({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  backgroundColor: '#FFF',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  margin: '0 auto',
  '@media (max-width: 600px)': {
    width: '100%',
    padding: '1rem',
    boxSizing: 'border-box',
  },
});

const StyledTextField = styled(TextField)({
  marginTop: '1rem',
  padding: '0',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '20px',
  backgroundColor: 'white',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#08415D',
    },
    '&:hover fieldset': {
      borderColor: '#08415D',
    },
  },
  '& .MuiInputBase-input': {
    color: 'black',
  },
  '& label': {
    color: '#08415D',
  },
  '& .Mui-focused': {
    color: '#08415D',
  },
});

const EditProductForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state as { product: Product };

  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [quantity, setQuantity] = useState(product?.quantity || 0);
  const [model, setModel] = useState(product?.model || '');
  const [referencia, setReferencia] = useState(product?.referencia || '');
  const [brand, setBrand] = useState(product?.brand || '');
  const [imageUrl, setImageUrl] = useState(product?.image_url || '');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (!product?.id || !product?.user_id) {
        throw new Error('Product ID or User ID is missing');
      }

      const updatedProduct: Product = {
        id: product.id,
        name,
        description,
        price,
        quantity,
        model,
        referencia,
        brand,
        image_url: imageUrl,
        user_id: product.user_id,
      };

      await editProduct(product.id, updatedProduct);
      navigate('../product-list');
    } catch (error) {
      alert('Não foi possível editar o produto');
    }
  };

  return (
    <FormsContainer noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          mb: 4,
          fontFamily: 'ABeeZee',
          color: '#42B7BC',
          fontWeight: 'bold',
        }}
      >
        Editar Produto
      </Typography>
      <StyledTextField
        name="name"
        label="Nome"
        variant="outlined"
        autoComplete="given-name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoFocus
        required
      />
      <StyledTextField
        name="description"
        label="Descrição"
        variant="outlined"
        autoComplete="given-description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <StyledTextField
        name="price"
        label="Preço"
        type="number"
        variant="outlined"
        autoComplete="given-price"
        id="price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        required
      />
      <StyledTextField
        name="quantity"
        label="Quantidade"
        type="number"
        variant="outlined"
        autoComplete="given-quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        required
      />
      <StyledTextField
        name="model"
        label="Modelo"
        variant="outlined"
        autoComplete="given-model"
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
      />
      <StyledTextField
        name="referencia"
        label="Referência"
        variant="outlined"
        autoComplete="given-referencia"
        id="referencia"
        value={referencia}
        onChange={(e) => setReferencia(e.target.value)}
        required
      />
      <StyledTextField
        name="brand"
        label="Marca"
        variant="outlined"
        autoComplete="given-brand"
        id="brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <StyledTextField
        name="image_url"
        label="URL da Imagem"
        variant="outlined"
        autoComplete="given-image_url"
        id="image_url"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#42B7BC',
            fontWeight: 'bold',
            fontSize: '17px',
            mt: 2,
            mr: 2,
          }}
        >
          Editar Produto
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('../product-list')}
          sx={{
            backgroundColor: '#42B7BC',
            fontWeight: 'bold',
            fontSize: '17px',
            mt: 2,
          }}
        >
          Voltar
        </Button>
      </Box>
    </FormsContainer>
  );
};

export default EditProductForm;
