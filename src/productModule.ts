// productsModule.ts
import axios from 'axios';
import { NewProduct } from './interfaces';

const apiUrl = 'https://api.tiendanube.com/v1/4201694';
const authToken = '48794bb4f203819f6abe459fe06455bf147cb429';

export async function createProduct(newProduct: NewProduct): Promise<void> {
  try {
    const variant = {
      price: Number(newProduct.price),
      stock: newProduct.stock,
    };
    newProduct.variants = [variant];

    const formattedPrice = newProduct.price.replace(',', '.');
    variant.price = parseFloat(formattedPrice);

    const response = await axios.post(apiUrl + '/products', newProduct, {
      headers: {
        'Authentication': authToken,
        'User-Agent': 'MyApp (name@email.com)',
        'Content-Type': 'application/json',
      },
    });

    console.log('Produto criado com sucesso!');
  } catch (error) {
    console.error('Erro ao criar produto:', error);
  }
}
