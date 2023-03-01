export interface ProductInterface {
  id: number;
  title: string;
  price: number;
  description: string;
  rating: string;
  stock: string;
  brand: string;
  images: string[];
  quantity: number;
  totalPrice: number;
  creationAt: string;
  category: string;
  thumbnail: string;
}
export interface ProductResponse {
  products: ProductInterface[];
  total: number;
  skip: number;
  limit: number;
}
