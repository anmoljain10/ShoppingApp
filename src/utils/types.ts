export type Product = {
  id: number | string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  stock: number;
  category: string;
  thumbnail: string;
  images: Array<string>;
  rating: number;
};
