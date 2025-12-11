export interface MenuItem {
  id: string;
  name: string;
  price: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}