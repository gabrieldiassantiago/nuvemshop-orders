Sistema de Consulta de Pedidos via WhatsApp
Este projeto consiste em um sistema de consulta de pedidos integrado ao WhatsApp. Os usuários podem interagir com o bot do WhatsApp para consultar informações sobre pedidos, utilizando o CPF como parâmetro de busca.

Pré-requisitos
Certifique-se de ter os seguintes requisitos instalados antes de executar o projeto:

Node.js
npm ou yarn
Venom-bot (para a integração com o WhatsApp)
Conta válida no WhatsApp (para configurar o bot)
Configuração
Clone o repositório para o seu ambiente local:

bash
Copy code
git clone https://github.com/seu-usuario/seu-repositorio.git
Navegue até o diretório do projeto:

bash
Copy code
cd nome-do-seu-projeto
Instale as dependências:

bash
Copy code
npm install
ou

bash
Copy code
yarn install
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias:

env
Copy code
API_URL=https://api.tiendanube.com/v1/4201694/orders
AUTH_TOKEN=sua-chave-de-autenticacao
SESSION_NAME=nome-da-sessao
Certifique-se de substituir sua-chave-de-autenticacao pela chave de autenticação válida e nome-da-sessao por um nome de sessão único.

Utilização
Execute o projeto:

bash
Copy code
npm start
ou

bash
Copy code
yarn start
Escaneie o código QR gerado usando o seu aplicativo do WhatsApp para autenticar o bot.

Envie "oi" para iniciar a interação com o bot.

Siga as instruções fornecidas pelo bot para consultar os pedidos utilizando o CPF.

Estrutura do Projeto
src/: Contém o código-fonte do projeto.

index.ts: Ponto de entrada do aplicativo.
api.ts: Módulo responsável por realizar chamadas à API da loja.
whatsapp.ts: Módulo responsável por iniciar o cliente WhatsApp e lidar com as mensagens recebidas.
.gitignore: Arquivo que lista os arquivos e pastas que devem ser ignorados pelo Git.

package.json e yarn.lock: Arquivos de configuração do Node.js que listam as dependências do projeto.
