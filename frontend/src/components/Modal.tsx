import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { deleteProduct } from '../api/requests';

interface ConfirmationModalProps {
  open: boolean;
  handleClose: () => void;
  id: number | undefined;
  onSuccess: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  open,
  handleClose,
  id,
  onSuccess,
}) => {
  const handleDelete = async () => {
    try {
      await deleteProduct('/products', id as number);
      onSuccess();
      handleClose();
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirmação de Exclusão</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Tem certeza que deseja apagar o produto?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="error">
          Apagar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
