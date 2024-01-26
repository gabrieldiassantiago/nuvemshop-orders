
# Documentação do Código

Este código é um bot de WhatsApp que interage com a API da Nuvemshop para obter informações de pedidos de um cliente específico, com base no CPF fornecido.

## Dependências

O código usa as seguintes bibliotecas:

- `axios`: Usado para fazer solicitações HTTP para a API da Nuvemshop.
- `venom-bot`: Usado para interagir com o WhatsApp.
- `dotenv`: Usado para carregar variáveis de ambiente do arquivo `.env`.

# Módulo `cpfModule.ts`

Este módulo contém funções para normalizar e validar números de CPF.

## Funções

* `normalizeCPF(cpf: string): string`
    * Normaliza um número de CPF, removendo qualquer caractere que não seja um dígito.
* `isValidCPF(cpf: string): boolean`
    * Valida um número de CPF para verificar se ele possui o formato correto.
# Módulo `productsModule.ts`

Este módulo contém funções para criar produtos na Tiendanube.

## Funções

* `createProduct(newProduct: NewProduct): Promise<void>`
    * Cria um novo produto na loja Tiendanube.
# Módulo `ordersModule.ts`

Este módulo contém funções para obter pedidos de uma API externa.

## Funções

* `getOrders(cpf: string): Promise<Order[]>`
    * Obtém os pedidos associados a um CPF específico de uma API externa.

# Módulo `main.ts`

Este módulo inicializa um bot Venom para interações no WhatsApp.

## Funções

* `start()`
    * Inicia a escuta por mensagens do usuário e conduz o processo de criação de produtos.

# Módulo `interactionCreateProduct.ts`

Este módulo gerencia a interação com o usuário para criação de novos produtos através do WhatsApp.

## Funções

* `start(client: Whatsapp)`
    * Inicia a escuta por mensagens do usuário e conduz o processo de criação de produtos.

O fluxo de criação de produtos é o seguinte:

1. O usuário envia a mensagem `/criarproduto`.
2. O bot solicita o nome do produto.
3. O usuário envia o nome do produto.
4. O bot solicita o preço do produto.
5. O usuário envia o preço do produto.
6. O bot solicita se o estoque do produto é gerenciado.
7. O usuário envia a resposta `sim` ou `não`.
8. Se o estoque for gerenciado, o bot solicita a quantidade em estoque.
9. O usuário envia a quantidade em estoque.
10. O bot cria o produto na Tiendanube.
11. O bot envia uma mensagem de confirmação ao usuário.

