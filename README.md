💇‍♀️ Sistema de Agendamento — Clínica de Estética

# Studio Mayra Batistela

Site institucional e sistema de agendamento online para o Studio Mayra Batistela, estúdio de estética e design de sobrancelhas. O projeto permite que clientes conheçam os serviços oferecidos e realizem solicitações de agendamento diretamente pelo site, com verificação de disponibilidade de horários em tempo real.

## Sobre o projeto

O site foi desenvolvido como uma aplicação React de página única (SPA), com os dados de serviços e agendamentos armazenados em um banco de dados PostgreSQL gerenciado pelo Supabase. A aplicação foi projetada para funcionar sem necessidade de um painel administrativo tradicional: os serviços são cadastrados diretamente no banco de dados, e os agendamentos ficam registrados para acompanhamento posterior.

## Funcionalidades

### Página inicial
Apresentação do estúdio, destaques dos diferenciais de atendimento e prévia dos serviços mais procurados, com chamadas diretas para a página de agendamento.

### Página sobre
Apresentação profissional da esteticista responsável pelo estúdio, incluindo trajetória, valores e proposta de atendimento.

### Catálogo de serviços
Listagem completa dos serviços oferecidos, organizados por categoria (Sobrancelhas e Estética Facial), com descrição, duração estimada e informações de preço. Os dados são buscados dinamicamente do banco de dados através de um hook customizado, permitindo atualização dos serviços sem necessidade de alterar o código da aplicação.

### Agendamento em três etapas
Fluxo guiado de agendamento composto por:

1. Seleção do serviço desejado, organizado por categoria.
2. Escolha de data e horário, com verificação automática de horários já ocupados no dia selecionado. Horários indisponíveis são exibidos de forma visualmente distinta e não podem ser selecionados.
3. Preenchimento dos dados de contato do cliente (nome e WhatsApp) e confirmação da solicitação.

Ao confirmar, o agendamento é gravado diretamente no banco de dados. Caso dois clientes tentem reservar o mesmo horário simultaneamente, uma regra de integridade no banco de dados impede o registro duplicado e o sistema orienta o cliente a escolher outro horário.

### Página de confirmação
Resumo dos dados do agendamento realizado, exibido após o envio bem-sucedido da solicitação.

## Tecnologias utilizadas

- **React** — biblioteca para construção da interface
- **Vite** — ferramenta de build e ambiente de desenvolvimento
- **React Router** — roteamento entre páginas da aplicação
- **Tailwind CSS** — estilização da interface
- **Supabase** — banco de dados PostgreSQL, autenticação de acesso aos dados via Row Level Security (RLS) e função remota (RPC) para consulta de disponibilidade
- **Vercel** — hospedagem e deploy contínuo integrado ao GitHub

## Estrutura do banco de dados

O projeto utiliza duas tabelas principais no Supabase:

**services** — armazena os serviços oferecidos pelo estúdio (categoria, nome, descrição, duração e preço).

**appointments** — armazena as solicitações de agendamento, relacionadas a um serviço através de chave estrangeira, contendo nome do cliente, telefone, data, horário e status da solicitação.

O acesso aos dados é controlado por políticas de Row Level Security: leitura pública da tabela de serviços, criação pública de agendamentos (sem leitura direta, preservando a privacidade dos dados dos clientes) e uma função remota dedicada para consulta de horários ocupados em uma data específica, sem expor informações pessoais de outros clientes.

## Estrutura de pastas

```
src/
├── assets/          Imagens utilizadas no site
├── components/      Componentes reutilizáveis (cards, rodapé)
├── data/            Mapeamento entre nomes de serviços e imagens locais
├── hooks/           Hooks customizados (busca de serviços no Supabase)
├── pages/           Páginas da aplicação (Início, Sobre, Serviços, Agendamento, Confirmação)
├── services/         Configuração do cliente Supabase
├── App.jsx           Estrutura de rotas e layout principal
└── main.jsx          Ponto de entrada da aplicação
```

## Configuração do ambiente

A aplicação depende de duas variáveis de ambiente para se conectar ao Supabase. Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
VITE_SUPABASE_URL=sua_url_do_projeto_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_publica_do_supabase
```

Esses valores são encontrados no painel do Supabase, em **Project Settings > API**. A chave utilizada é a chave pública (anon/publishable), própria para uso em aplicações client-side.

O arquivo `.env` não deve ser versionado no repositório; ele já está listado no `.gitignore` do projeto.

## Como rodar o projeto localmente

Pré-requisitos: Node.js instalado (versão 18 ou superior é recomendada).

1. Clone o repositório:
```
git clone https://github.com/Mathmendes77/site-estetica.git
cd site-estetica
```

2. Instale as dependências:
```
npm install
```

3. Crie o arquivo `.env` conforme descrito na seção anterior.

4. Inicie o servidor de desenvolvimento:
```
npm run dev
```

5. Acesse o endereço exibido no terminal, geralmente `http://localhost:5173`.

## Build de produção

Para gerar a versão otimizada da aplicação:

```
npm run build
```

Os arquivos finais são gerados na pasta `dist`. Para visualizar o resultado do build localmente antes de publicar:

```
npm run preview
```

## Deploy

O projeto está hospedado na Vercel, com deploy contínuo integrado ao repositório GitHub. Toda alteração enviada para o branch `main` gera automaticamente uma nova versão em produção.

Para reproduzir o deploy em outra conta Vercel, é necessário configurar as mesmas variáveis de ambiente descritas na seção de configuração, diretamente no painel do projeto em **Settings > Environment Variables**.

## Licença

Projeto de uso privado, desenvolvido para o Studio Mayra Batistela.
