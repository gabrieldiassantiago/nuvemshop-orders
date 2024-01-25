import { create, Whatsapp } from 'venom-bot';
import { start } from './interactionCreateProduct';

const sessionName = "testando";

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