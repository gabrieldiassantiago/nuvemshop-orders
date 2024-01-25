
# Documentação do Código

Este código é um bot de WhatsApp que interage com a API da Nuvemshop para obter informações de pedidos de um cliente específico, com base no CPF fornecido.

## Dependências

O código usa as seguintes bibliotecas:

- `axios`: Usado para fazer solicitações HTTP para a API da Nuvemshop.
- `venom-bot`: Usado para interagir com o WhatsApp.
- `dotenv`: Usado para carregar variáveis de ambiente do arquivo `.env`.

## src/interfaces - Interfaces

O código define as seguintes interfaces TypeScript:

- `Product`: Representa um produto em um pedido.
- `Order`: Representa um pedido feito por um cliente.
- `Message`: Representa uma mensagem recebida do WhatsApp.

## Variáveis de Ambiente

O código usa as seguintes variáveis de ambiente:

- `API_URL`: A URL da API da Nuvemshop.
- `AUTH_TOKEN`: O token de autenticação para a API da Nuvemshop.
- `SESSION_NAME`: O nome da sessão para o bot do WhatsApp.

## Funções

O código define as seguintes funções:

- `getOrders(cpf: string)`: Faz uma solicitação GET para a API da Nuvemshop para obter todos os pedidos. Filtra os pedidos pelo CPF fornecido e retorna os pedidos correspondentes.
- `start(client: Whatsapp)`: Inicia o bot do WhatsApp. O bot responde a mensagens que contêm a palavra "oi" pedindo o CPF do usuário. Em seguida, obtém os pedidos para o CPF fornecido e envia as informações dos pedidos de volta para o usuário.
- `normalizeCPF(cpf: string)`: Normaliza o CPF removendo todos os caracteres não numéricos.
- `isValidCPF(cpf: string)`: Verifica se o CPF é válido verificando se contém exatamente 11 dígitos.
- `run()`: Cria uma nova sessão para o bot do WhatsApp e inicia o bot.

## Execução

Para executar o código, você precisa definir as variáveis de ambiente necessárias e, em seguida, chamar a função `run()`. A função `run()` cria uma nova sessão para o bot do WhatsApp e inicia o bot.

Espero que isso ajude! Se você tiver mais perguntas, fique à vontade para perguntar. 😊
