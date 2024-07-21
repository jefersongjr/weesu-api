import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { createProduct } from '../api/requests';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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

const CreateProductForm: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      const id = localStorage.getItem('id');
      const formData = new FormData(event.currentTarget);
      const newProduct = {
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: parseFloat((formData.get('price') as string) ?? '0'),
        quantity: parseInt((formData.get('quantity') as string) ?? '0'),
        model: formData.get('model') as string,
        referencia: formData.get('referencia') as string,
        brand: formData.get('brand') as string,
        image_url: formData.get('image_url') as string,
        user_id: parseInt(id as string),
      };
      await createProduct('products', newProduct);
      navigate('../product-list');
    } catch (error) {
      alert('Não foi possível criar o produto');
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
        Criar Novo Produto
      </Typography>
      <StyledTextField
        name="name"
        label="Nome"
        variant="outlined"
        autoComplete="given-name"
        id="name"
        autoFocus
        required
      />
      <StyledTextField
        name="description"
        label="Descrição"
        variant="outlined"
        autoComplete="given-description"
        id="description"
        autoFocus
        required
      />
      <StyledTextField
        name="price"
        label="Preço"
        type="number"
        variant="outlined"
        autoComplete="given-price"
        id="price"
        autoFocus
        required
      />
      <StyledTextField
        name="quantity"
        label="Quantidade"
        type="number"
        variant="outlined"
        autoComplete="given-quantity"
        id="quantity"
        autoFocus
        required
      />
      <StyledTextField
        name="model"
        label="Modelo"
        variant="outlined"
        autoComplete="given-model"
        id="model"
        autoFocus
        required
      />
      <StyledTextField
        name="referencia"
        label="Referência"
        variant="outlined"
        autoComplete="given-referencia"
        id="referencia"
        autoFocus
        required
      />
      <StyledTextField
        name="brand"
        label="Marca"
        variant="outlined"
        autoComplete="given-brand"
        id="brand"
        autoFocus
        required
      />
      <StyledTextField
        name="image_url"
        label="URL da Imagem"
        variant="outlined"
        autoComplete="given-image_url"
        id="image_url"
        autoFocus
        required
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#42B7BC',
            fontWeight: 'bold',
            fontSize: '17px',
            mt: 2,
          }}
        >
          Criar Produto
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate('../product-list')}
          sx={{
            backgroundColor: '#42B7BC',
            fontWeight: 'bold',
            fontSize: '17px',
            mt: 2,
            ml: 2,
          }}
        >
          Voltar
        </Button>
      </Box>
    </FormsContainer>
  );
};

export default CreateProductForm;
