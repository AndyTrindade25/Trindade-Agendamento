
# Cabeleleila Leila Salão de Beleiza (Back-End)

Trata-se de um sistema web para cadastro dos clientes do salão de beleza, agendamento de horários para serviços fornecidos e também um controle interno da dona do salão.


##

Esse sistema foi desenvolvido para um desafio proposto pela empresa [DSIN - Tecnologia da Informação](https://www.dsin.com.br/) para a vaga de Estágio em Desenvolvimento. Ele está divido pensando na arquitetura mordena de desenvolvimento web, onde o servidor é desacoplado da página, o que me traz vantagens tanto para manunteção, quanto para deploy e versionamento. 
- [Front-End](https://github.com/anti-w/leila-saloon-web)
- [Back-End](https://github.com/anti-w/leila-saloon-server)



## Funcionalidades

- [x]  Conexão com a base de dados na nuvem (MongoDB Atlas)
- [x]  Criar usuário
- [x]  Agendar horário
- [x]  Listar horários agendados pelo usuário
- [x]  Utilizar midleware para criar token seguro
- [x]  Criptografar senha do usuário em virtude da senha ser pessoal
- [x]  Autenticar usuário
- [ ]  Criar usuário admin
- [ ]  Gerenciar agendamentos
- [ ]  Filtrar histórico de horários por um período de tempo
- [ ]  Elaborar indicadores administrativos 

## Stack utilizada


- [NodeJS](https://nodejs.org/)
- [CORS](https://www.npmjs.com/package/cors)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [JWT (Json Web Token)](https://jwt.io/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDB](https://www.mongodb.com/)

## Galeria

![Postman Routes](https://res.cloudinary.com/dscztnlqq/image/upload/v1659344817/leila-saloon/Postman%20routes.png)

![Server Structure](https://res.cloudinary.com/dscztnlqq/image/upload/v1659345661/leila-saloon/Captura_de_Tela_27_egq4yr.png)



## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/anti-w/leila-saloon-server
```

Entre no diretório do projeto

```bash
  cd leila-saloon-server
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm start
```

Entre seguir as boas práticas em esconder variáveis de ambientes e facilitar a correção, optei por seguir as boas práticas, por isso segue via e-mail as variáveis de ambientes necessárias para o projeto funcionar no ambiente local.
## Documentação da API

#### Retorna usuário e o token caso informações forem corretas

```http
  POST /user/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. E-mail do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |

#### Retorna mensagem informando erro ocorrido ou sucesso caso o cadatro seja realizado

```http
  POST /user/register
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. Nome do usuário|
| `email`      | `string` | **Obrigatório**. E-mail do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuário |
| `confirmpassword`      | `string` | **Obrigatório**. Senha do usuário novamente |

#### Retorna a lista de agendamentos já passados e no presente do usuário se o token for válido

```http
  GET 
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `string` | **Obrigatório**. Id do usuário|

#### Retorna mensagem de agendamento deletado com sucesso
```http
  DELETE /schedule/delete/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Id do agendamento|


#### Atualiza o agendamento, serviço ou ambos de acordo com a necessidade

```http
  PUT /schedule/update/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Id do agendamento|
| `date`      | `date` |  Nova data|
| `service`      | `string` |  Novo serviço|

#### Cria o agendamento caso o horário ainda não tenha sido selecionado

```http
  POST /schedule/create/:userId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `userId`      | `string` | **Obrigatório**. Id do usuário|
| `date`      | `date` |  **Obrigatório**. Data selecionada para agendamento|
| `service`      | `string` |  **Obrigatório**. Serviço selecionado para agendamento|
| `userName`      | `string` |  **Obrigatório**. Nome do usuário|
 


## Aprendizados

Criar um sistema de login e cadastro não é tarefa muito difícil, o que me desafiou foi fazer isso tentando manter a segurança e presando pelas boas práticas de programação.

![Logo](https://www.univem.edu.br/storage/paginas/September2019/Marca%20DSIN%20Principal%20em%20Alta.jpg)

