# ipaas-app

Sistema web para cadastro de Jobs, como teste técnico para a vaga de Desenvolvedor Full Stack na LinkAPI


## Tecnologias utilizadas

##### Front-end

- [Angular 13](https://angular.io/) para desenvolvimento da aplicação;
- [Bootstrap 5](https://getbootstrap.com/) para estilização e responsividade da página;
- [Angular Material](https://material.angular.io/) Utilizado para a paginação e tabela;

#### Back-end
- [Express](https://expressjs.com/) (Node.js 16.4.2) para criação do servidor API REST;
- [Mongoose](https://mongoosejs.com/) Responsável pelas operações realizadas no banco de dados;
- [MongoDB](https://www.mongodb.com/) Banco de dados da aplicação;


## Endpoints disponíveis

Esta seção tem como objetivo explicitar cada endpoint do projeto.

### 1. GET /api/jobs

`Filtros:` O usuário poderá filtrar um job através da sua data de criação ou usuário utilizando os parâmetros dateat=dd/mm/yyyy ou user=xxxxx.

  > GET /api/jobs?user=xx
  > GET /api/jobs?dateat=dd/mm/yyyy


`Paginação:` O usuário poderá filtrar a quantidade de itens obtido através do parâmetro limit=xx e navegar entre as páginas com os parâmetros /api/jobs?page=xx&limit=xx 

  > GET /api/jobs?limit=xx
  > GET /api/jobs?page=1&limit=10

Caso nenhum parâmetro seja utilizado os 10 primeiros jobs serão retornados.

**exemplo:**

- requisição:
  > `GET /api/jobs`

- resposta:
  > `200 OK`

```json
  Content-Type: application/json
{
	"data": [
		{
			"_id": "62504d7c709144f4b7dfde31",
			"name": "Job1.",
			"user": "Angular User editado",
			"status": "Inactive",
			"recurrenceType": "Interval",
			"recurrenceValue": 3,
			"time": "02:00",
			"__v": 0,
			"interval": null
		},
		{
			"_id": "62506e18ed1016d1f25e6936",
			"name": "Denis",
			"user": "user1",
			"status": "Active",
			"recurrenceType": "Fixed time",
			"recurrenceValue": 3,
			"time": "02:00",
			"__v": 0,
			"interval": null
		}
	],
	"size": 25
}
  ```

### 2. GET /api/users

`Filtros:` O usuário poderá filtrar um usuário através da sua data de criação ou nome utilizando os parâmetros dateat=dd/mm/yyyy ou name=xxxxx.

  > GET /api/users?user=xx
  > GET /api/users?dateat=dd/mm/yyyy


`Paginação:` O usuário poderá filtrar a quantidade de itens obtido através do parâmetro limit=xx e navegar entre as páginas com os parâmetros /api/users?page=xx&limit=xx 

  > GET /api/users?limit=xx
  > GET /api/users?page=1&limit=10

Caso nenhum parâmetro seja utilizado os 10 primeiros users serão retornados.

**exemplo:**

- requisição:
  > `GET /api/users`

- resposta:
  > `200 OK`

```json
  Content-Type: application/json
{
	"user": [
		{
			"_id": "6250734ef61b6e2adc66280a",
			"name": "user1.",
			"email": "ASDFEDITADO@gmail.com.",
			"phone": "UÉ",
			"__v": 0
		},
		{
			"_id": "625097c69bd1d40726f5025b",
			"name": "user2",
			"email": "dasdsadasd@adkjnsaj.com",
			"phone": "asddsadsa",
			"__v": 0
		}
	],
	"size": 25,
	"nav": "0 of 13"
}
  ```

### 3. POST /api/jobs

O usuário poderá criar um job utilizando o método POST

- requisição:
  > `POST /api/jobs`


```json
  Content-Type: application/json
{
	"interval": null,
	"name": "Job 1",
	"recurrenceType": "Fixed time",
	"recurrenceValue": "5",
	"status": "Active",
	"time": "17:30",
	"user": "user1"
}
  ```



### 4. POST /api/users

O usuário poderá criar um usuário utilizando o método POST

- requisição:
  > `POST /api/users`


```json
  Content-Type: application/json
{
	"name": "Denis",
	"email": "denis@denis.com",
	"phone": "12 0000-0000",
	"password": "123456789"
}
  ```

