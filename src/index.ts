import axios from 'axios';
import { create, Whatsapp } from 'venom-bot';
import { Order } from './interfaces';

require('dotenv').config();



const apiUrl = process.env.API_URL || ''; 
const authToken = process.env.AUTH_TOKEN || '';
const sessionName = process.env.SESSION_NAME || '';

async function getOrders(cpf: string): Promise<Order[]> {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authentication': authToken,
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


async function start(client: Whatsapp) {
  const userStates: { [key: string]: { askedForCPF: boolean } } = {};

  client.onMessage(async (message) => {
    console.log('Received message:', message);

    if (message.body.toLowerCase() === 'oi' && message.isGroupMsg === false) {
      console.log('Triggered "oi" condition');
      await client.sendText(message.from, '👋 Olá! Por favor, digite o CPF para consultar os pedidos.');
      userStates[message.from] = { askedForCPF: true }; 
    } else if (message.isGroupMsg === false) {
      const userState = userStates[message.from];

      if (userState && userState.askedForCPF) {
        const userCPF = normalizeCPF(message.body.trim());

        if (isValidCPF(userCPF)) {
          const orders = await getOrders(userCPF);

          if (orders.length > 0) {
            let reply = '📦 **Pedidos Encontrados**\n\n';
            orders.forEach((order) => {
              reply += `👤 Nome do Cliente: ${order.contact_name}\n`;

              if (order.payment_status === 'paid') {
                reply += '💰 Status do pagamento: PAGO\n';
              }

              if (order.shipping_status === 'unshipped') {
                reply += '🚚 Seu pedido ainda não foi enviado\n';
              } else {
                reply += '✅ Seu pedido foi enviado\n';
              }

              order.products.forEach((product) => {
                reply += `📄 Nome do Pedido: ${product.name}\n`;
              });

              reply += '---------------------\n';
            });

            await client.sendText(message.from, reply);
          } else {
            await client.sendText(message.from, '❌ Nenhum pedido encontrado para o CPF informado.');
          }
        } else {
          await client.sendText(message.from, '❌ Por favor, digite um CPF válido.');
        }

        delete userStates[message.from];
      }
    }
  });
}

function normalizeCPF(cpf: string): string {
  return cpf.replace(/[^\d]/g, '');
}

function isValidCPF(cpf: string): boolean {
  const cpfRegex = /^[0-9]{11}$/;
  return cpfRegex.test(cpf);
}



async function run() {
  try {
    const client = await create({
      session: sessionName,
    });

    await start(client);
  } catch (error) {
    console.log(error);
  }
}

run();
