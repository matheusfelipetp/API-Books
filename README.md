# 📚 API Books
> API criada em Node.js, com a funcionalidade de um CRUD para um sistema de usuários e cadastro de livros.

## ⚙️ Tecnologias
* Node.js
* Express
* Nodemon
* Bcryptjs
* Json Web Token
* Uuid

## 🚀 Instalando API Books em seu computador

Para instalar a API Books, siga essas etapas:

1) Clone esse repositório para a sua máquina.
```
git clone https://github.com/matheusfelipetp/API-Books.git
```

2) Instale as depedências e os pacotes do projeto.
```
yarn install
```

## ☕ Usando API Books

Para usar a API Books, siga essas etapas:

1) Em ambiente de desenvolvimento, utilize o comando a seguir para iniciar o servidor.
```
yarn dev
```
2) Utilize a seguinte URL como base:
```
http://localhost:3000
```

## ➡️ Rotas do usuário
### Rotas sem necessidade de autorização

**1) Listar todos os usuários** </br>
Para listar todos os usuários, utilize o método *GET* no enpoint:
```
http://localhost:3000/users
```

``
Exemplo de response - 200
``
```
[
	{
		"id": "a160f8e2-4f9c-44e1-8ab9-b52572045f31",
		"email": "matheus@email.com",
		"name": "Matheus Felipe",
		"password": "$2a$10$ziiNijkxmbom60.FUWQZmO2dacR8lXtXU5vJ4wifDBtN2XfCY/Ht6",
		"books": []
	},
	{
		"id": "96dd0073-d447-49a3-8187-35655978719a",
		"email": "carlos@email.com",
		"name": "Carlos José",
		"password": "$2a$10$vfHShWd/Jg/XOdByMq.udengeZj05i5II5VMYxsge5r12MagfslsO",
		"books": []
	}
]
```


</br>

**2) Cadastrar um novo usuário** </br>
Para criar um novo cadastro de usuário, utilize o método *POST* no endpoint:
```
http://localhost:3000/users
```

``
Exemplo de body
``
```
{
	"name": "Matheus Felipe",
	"email": "matheus@email.com",
	"password": "teste123"
}
```

``
Exemplo de response - 201
``
```
{
	"id": "1a7c8d15-28ed-4c46-8dcd-0c7103c5e981",
	"email": "matheus@email.com",
	"name": "Matheus Felipe",
	"password": "$2a$10$CPz1jlezjXW1bWaqSaJxAeTr3p.xG0fNq./tvpo.uzzpKJv/KXIES",
	"books": []
}
```

</br>

**3) Realizar o login na plataforma** </br>
Para logar em sua conta, utilize o método *POST* no endpoint: 
```
http://localhost:3000/login
```

``
Exemplo de body
``
```
{
	"email": "matheus@email.com",
	"password": "teste123"
}
```

``
Exemplo de response - 200
``
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdGhldXNAZW1haWwuY29tIiwiaWF0IjoxNjY5MTQyOTE3LCJleHAiOjE2NjkyMjkzMTcsInN1YiI6IjFhN2M4ZDE1LTI4ZWQtNGM0Ni04ZGNkLTBjNzEwM2M1ZTk4MSJ9.lwTDBk-r3IRq2yB4l66ApMdZxYnRX6ft7pNaRk5Ulno"
}
```

### Rotas que necessitam de autorização (TOKEN)
**1) Atualizar informaçoes do usuário** </br>
Para atualizar uma ou mais informações específicas do usuário, utilize o método *PATCH* no endpoint:
```
http://localhost:3000/users/userId
```

``
Exemplo de body
``
```
{
	"name": "Matheus"
}
```

``
Exemplo de response - 200
``
```
{
	"id": "1a7c8d15-28ed-4c46-8dcd-0c7103c5e981",
	"email": "matheus@email.com",
	"name": "Matheus",
	"password": "$2a$10$CPz1jlezjXW1bWaqSaJxAeTr3p.xG0fNq./tvpo.uzzpKJv/KXIES",
	"books": []
}
```

</br> 

**2) Deletar usuário** </br>
Para deletar um usuário, utilize o método *DELETE* no endpoint:
```
http://localhost:3000/users/userId
```

``
Exemplo de response - 200
``
```
{
	"message": "Usuário deletado com sucesso!"
}
```

</br>

## 📚 Rotas dos livros
### Todas as rotas referentes aos livros precisam de autorização (TOKEN).

**1) Listar todos os livros** </br>
Para listar todos os livros cadastrados no sistema pelos usuários, utilize o método *GET* no endpoint:
```
http://localhost:3000/books
```

``
Exemplo de response - 200
``
```
[
	{
		"title": "O Senhor dos Anéis",
		"author": "J. R. R. Tolkien",
		"year": "1954",
		"userId": "228193cc-7de2-41cf-8c6e-6f2c6c676056",
		"id": "1211d054-186b-41a0-b3a1-d286493a4c78"
	}
]
```

</br>

**2) Cadastrar um novo livro** </br>
Para cadastrar um novo livro no sistema, utilize o método *POST* no endpoint:
```
http://localhost:3000/books/userId
```

``
Exemplo de body
``
```
{
	"title": "O Senhor dos Anéis",
	"author": "J. R. R. Tolkien",
	"year": "1954"
}
```

``
Exemplo de response - 201
``
```
{
	"title": "O Senhor dos Anéis",
	"author": "J. R. R. Tolkien",
	"year": "1954",
	"userId": "228193cc-7de2-41cf-8c6e-6f2c6c676056",
	"id": "1211d054-186b-41a0-b3a1-d286493a4c78"
}
```

</br>

**3) Editar as informações de um livro** </br>
Para editar uma ou mais informações de um livro específico, utilize o método *PATCH* no endpoint:
```
http://localhost:3000/books/bookId
```

``
Exemplo de body
``
```
{
	"title": "Harry Potter",
	"year": "1970"
}
```

``
Exemplo de response - 200
``
```
{
	"title": "Harry Potter",
	"author": "J. R. R. Tolkien",
	"year": "1970",
	"userId": "228193cc-7de2-41cf-8c6e-6f2c6c676056",
	"id": "d80a47ec-d11d-4f11-92fa-b26d50bb9679"
}
```

</br>

**4) Deletar um livro** </br>
Para deletar um livro em específico, utilize o método *DELETE* no endpoint:
```
http://localhost:3000/books/bookId
```

``
Exemplo de response - 200
``
```
{
	"message": "Livro deletado com sucesso!"
}
```
