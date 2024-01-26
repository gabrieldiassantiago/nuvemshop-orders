export interface Product {
    id: number;
    name: string;
  }
  
export interface Order {
    contact_identification: string;
    contact_name: string;
    products: Product[];
    shipping_status: string;
    payment_status: string;
  }

  export interface NewProduct {
    variants: { price: number | number; stock: number; }[];
    id: number;
    name: string;
    description: string;
    price: string; 
    stock: number;
    stock_management: boolean;
  }
