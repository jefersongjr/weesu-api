import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { createProduct } from '../api/requests'; // Função para enviar dados do produto

const CreateProductForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
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
        user_id: 1,
      };
      await createProduct('products', newProduct);
    } catch (error) {
      alert('Não foi possível criar o produto');
    }
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        textAlign: 'center',
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="div" sx={{ mb: 4 }}>
        Criar Novo Produto
      </Typography>
      <TextField
        name="name"
        label="Nome"
        variant="outlined"
        autoComplete="given-name"
        id="name"
        autoFocus
        required
      />
      <TextField
        name="description"
        label="Descrição"
        variant="outlined"
        autoComplete="given-description"
        id="description"
        autoFocus
        required
      />
      <TextField
        name="price"
        label="Preço"
        type="number"
        variant="outlined"
        autoComplete="given-price"
        id="price"
        autoFocus
        required
      />
      <TextField
        name="quantity"
        label="Quantidade"
        type="number"
        variant="outlined"
        autoComplete="given-quantity"
        id="quantity"
        autoFocus
        required
      />
      <TextField
        name="model"
        label="Modelo"
        variant="outlined"
        autoComplete="given-model"
        id="model"
        autoFocus
        required
      />
      <TextField
        name="referencia"
        label="Referência"
        variant="outlined"
        autoComplete="given-referencia"
        id="referencia"
        autoFocus
        required
      />
      <TextField
        name="brand"
        label="Marca"
        variant="outlined"
        autoComplete="given-brand"
        id="brand"
        autoFocus
        required
      />
      <TextField
        name="image_url"
        label="URL da Imagem"
        variant="outlined"
        autoComplete="given-image_url"
        id="image_url"
        autoFocus
        required
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ backgroundColor: '#42B7BC', mt: 2 }}
      >
        Criar Produto
      </Button>
    </Box>
  );
};

export default CreateProductForm;
