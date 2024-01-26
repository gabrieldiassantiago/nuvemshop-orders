// ordersModule.ts
import axios from 'axios';
import { Order } from './interfaces';

const apiUrl = '';
const authToken = '';

export async function getOrders(cpf: string): Promise<Order[]> {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authentication':  `Bearer ${authToken}`,
        'User-Agent': 'MyApp (name@email.com)',
        'Content-Type': 'application/json',
      },
    });

    const orders: Order[] = response.data;

    if (orders && orders.length > 0) {
      const userOrders = orders.filter(order => order.contact_identification === cpf);
      return userOrders;
    } else {
      console.warn('Erro.');
      return [];
    }
  } catch (error) {
    console.error(`Erro ao obter informações da loja: ${error}`);
    return [];
  }
}
