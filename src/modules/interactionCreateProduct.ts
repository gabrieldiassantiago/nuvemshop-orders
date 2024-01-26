// interactionModule.ts
import { Whatsapp } from 'venom-bot';
import { NewProduct } from './interfaces';
import { createProduct } from './productModule';

export async function start(client: Whatsapp) {
  const userStates: { [key: string]: { askedForCPF: boolean, creatingProduct: boolean, newProduct: Partial<NewProduct> } } = {};

  client.onMessage(async (message) => {
    console.log('Received message:', message);

    if (message.body.toLowerCase() === '/criarproduto' && message.isGroupMsg === false) {
      console.log('Triggered "/criarproduto" condition');
      await client.sendText(message.from, 'Vamos criar um novo produto! Digite o nome do produto:');
      userStates[message.from] = { askedForCPF: false, creatingProduct: true, newProduct: {} };
    } else if (message.isGroupMsg === false) {
      const userState = userStates[message.from];

      if (userState && userState.creatingProduct) {
        if (!userState.newProduct.name) {
          userState.newProduct.name = message.body.trim();
          await client.sendText(message.from, ' Qual o preço do produto?');
        } else if (!userState.newProduct.price) {
          const userPrice = message.body.trim().replace(',', '.');
          userState.newProduct.price = userPrice;
          await client.sendText(message.from, '📦 O produto possui estoque gerenciado? (Responda sim ou não)');
        } else if (!userState.newProduct.stock_management) {
          userState.newProduct.stock_management = message.body.trim().toLowerCase() === 'sim';
          if (!userState.newProduct.stock_management) {
            // Se o estoque não é gerenciado, pode permanecer como null
            await createProduct(userState.newProduct as NewProduct);
            await client.sendText(message.from, '✅ Produto criado com sucesso!');
            delete userStates[message.from];
          } else {
            await client.sendText(message.from, '📦 Qual a quantidade em estoque?');
          }
        } else if (!userState.newProduct.stock) {
          userState.newProduct.stock = parseInt(message.body.trim());

          // Finalizando criação do produto
          await createProduct(userState.newProduct as NewProduct);
          await client.sendText(message.from, '✅ Produto criado com sucesso!');
          delete userStates[message.from];
        }
      }
    }
  });
}
