## Projeto WEB Rest - Unifacisa

- [About](#ancora1)
- [Technologies](#ancora2)
- [Requirements](#ancora3)
- [Telas](#ancora4)

## 💭 About

<a id="#ancora1"></a>
This is a repository for publish our project, this repository contains a FrontEnd Rest Project.

**OBS1:
Bug: Por algum motivo que não consegui resolver, a rota de criar usuário e a rota home só carregam após apertar o F5 ou digitar direto no navegador (A HOME NÃO PQ TEM PROTEÇÃO DE LOGIN)**

**OBS2:
Funcionário só cria um, cliente são inúmeros**

## 🧪 Technologies

<a id="#ancora2"></a>
This project was developed using the following technologies:

- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Node](https://react.dev)

## ⚙️ Requirements

<a id="#ancora3"></a>

[EN-US] To run this project, you should start the backend, which is available at the link below, install all the necessary dependencies on both sides, and you're good to go! Remember, this is just a university project, far from a final product, and could undergo numerous changes not implemented due to time constraints.

Link: https://github.com/FCabral07/Project_WEB_Rest/

[PT-BR] Para rodar esse projeto você deve iniciar o backend, presente no link abaixo, instalar todas as dependências necessárias em ambos e correr pro abraço! Lembrando, isso é apenas um projeto de universidade, longe de um produto final e que poderia sofrer inúmeras alterações não feitas por conta do tempo.

Link: https://github.com/FCabral07/Project_WEB_Rest/

## 📊 Telas

<a id="#ancora4"></a>

## Autenticação

### Create

- **Descrição:** Acessada através do botão Create Account, ou via URL. Nela, passamos algumas informações como nome, email, idade, CPF/MATRICULA e senha.
- **Observação:** Cria-se dois tipos de usuário, o comum, com CPF e Funcionário, com matrícula, essa deve ter 14 digítos e ser única, assim como o CPF. Apenas o funcionário consegue criar produtos e editá-los, além de criar promoção também.
- **Rota:** localhost:port/register
- **Endpoint:** `POST localhost:port/create`

### Login

- **Descrição:** Autentica com base no usuário (com base nos dados de registro, se for CPF, usuário, se for Matrícula é funcionário), passando email e password nos campos a serem preenchidos.
- **Rota:** localhost:port/
- **Endpoint:** `POST localhost:port/login`

## Home

- **Descrição:** A rota /home é a tela inicial do projeto, onde exibe-se os produtos, o seu nome, o botão de logout, entre outros. Podemos pesquisar por nome do produto e pelo tipo, na lateral.
- **Rota:** localhost:port/home
- **Endpoint:** `GET localhost:port/products`

## New

### Protegida por função
- **Descrição:** A rota /new é a tela de criação do produto, onde inserimos seu nome, código (atributo único), data de validade, preço, quantidade e um link com a imagem do produto, além da categoria.
- **Rota:** localhost:port/new
- **Endpoint:** `POST localhost:port/product`

## Products Detail

- **Descrição:** Realiza a consulta de informações do produto, como nome, data de validade e valor. Aqui também tem 3 funções, todas protegidas por função na hora de finalizar, que é a edição do produto, a criação/exclusão de uma promoção e a exclusão de um produto.
- **Rota:** localhost:port/products/:id
- **Endpoint:** `GET localhost:port/products/:id`

### Edit Product

- **Descrição:** Edita dados do produto, como nome, data de validade, valor, quantidade e source da imagem, mais uma vez, protegida por função.
- **Rota:** localhost:port/products/:id/edit
- **Endpoint:** `PUT localhost:port/product`

### Manage promotion
- **Descrição:** Cria uma promoção passando a porcentagem, entre 1 e 90 caso o produto não esteja em promoção. Caso esteja em promoção, será possível deletar a promoção atual, um dos dois botões estará desativado a depender do status atual da promoção. PROTEGIDO POR FUNÇÃO!
- **Rota:** localhost:port/products/:id/promotion`
- **Endpoint:** `POST/DELETE /products/:id/promotion`

### Delete Product

- **Descrição:** Deleta o produto de acordo com o número dele no backend, também protegida por função.
- **Rota:** localhost:port/products/:id
- **Endpoint:** `DELETE localhost:port/product/delete/:id`

## LOGOUT

- **Descrição:** Desconecta o usuário e retira o token presente no localStorage do navegador.