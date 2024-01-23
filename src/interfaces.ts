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