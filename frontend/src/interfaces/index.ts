export interface LoginRequest {
  email: string;
  password: string;
}

export interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  model: string;
  referencia: string;
  brand: string;
  image_url: string;
  user_id: number;
}

export interface ProductCardProps {
  product: Product;
}
