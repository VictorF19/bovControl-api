# BovControl Teste
## Passos para iniciar o ambiente

O ambiente desenvolvido para o teste é executado em cima de um serviço docker que sobe dois contâiners: um para o mongoDB e um para a API feita em Node.js
Para utilizar a aplicação siga os seguintes passos:

### Instalar o Docker

Caso o ambiente de execução seja windows: siga os passos da documentação oficial para fazer a instalação.<br/> 
Disponível em: https://docs.docker.com/docker-for-windows/install/

Caso o ambiente de execução seja linux (utilizarei a distro ubuntu como exemplo por ser a mais utilizada em desktops), siga os passos do seguinte artigo:<br/> 
Disponível em: https://www.digitalocean.com/community/tutorials/omo-instalar-e-usar-o-docker-no-ubuntu-18-04-pt

Instale também o docker compose, pois ele será necessário para subir o serviço.<br/> 
Disponível em: https://docs.docker.com/compose/install/

### Subir o serviço

Com o terminal aberto na pasta raiz do projeto, digite: docker-compose up<br/> 
Aguarde o docker compose terminar de instanciar os contâiners.

### Instale o Postman

Faça o download do postman no site oficial: https://www.postman.com/downloads/
Siga as instruções de instalação providas pela ferramenta.

Crie uma nova collection no Postman, com o nome: "BovControlApi"<br/> 
Clique em Create

## Como utilizar

### Autenticação

Para se autenticar na API da BovControl, siga os seguintes passos:

#### Criação do usuário

- Clique nos três pontos em cima da Collection BovControlApi > Add Request
- Request name: POST User
- Clique em Save to as
- Selecione a request criada > altere o método HTTP para POST > insira a url: localhost:3000/api/registration
- Em Body, insira o seguinte JSON:
```
    {
	    "email": "test@bovcontrol.com",
	    "password": "test"
    }
```
- Mude o formato para "raw" e o tipo para JSON
- Envie a requisição e copie o token retornado na resposta

#### Endpoint de autenticação

O endpoint de cadastro de usuário já retorna o token no momento da criação, porém foi disponibilizado o endpoint "/authenticate" para que o usuário, já criado, possa se autenticar caso o token tenha sido expirado.
Para se autenticar siga os passos acima, porém trocando o endpoint de "/registration" para "/authenticate" e o nome da request para POST Authenticate.

### Funcionalidades da API

### Criação de animal

- Clique nos três pontos em cima da Collection BovControlApi > Add Request
- Request name: POST Animal
- Clique em Save to as
- Selecione a request criada > altere o método HTTP para POST > insira a url: localhost:3000/api/animals
- Em Body, insira o seguinte JSON:
```
    {
        "tipo": "Vaca",
        "nome": "Mimosa",
        "peso": 150,
        "idade": 30
    }
```
- Mude o formato para "raw" e o tipo para JSON
- Vá em Authorization > mude o Type para Bearer Token > no campo "Token" insira o token copiado do retorno dos endpoints de autenticação
- Envie a requisição
- O retorno deverá ser:
``` 
[
    {
        "tipo": "Vaca",
        "nome": "Mimosa",
        "peso": 30,
        "idade": 26,
        "id": 1
    }
]
```

### Consultar animal pelo Id

- Clique nos três pontos em cima da Collection BovControlApi > Add Request
- Request name: GET Animal By Id
- Clique em Save to as
- Selecione a request criada > altere o método HTTP para GET > insira a url: localhost:3000/api/animals/{id}
- Substitua o {id} pelo id do animal criado no passo acima
- Vá em Authorization > mude o Type para Bearer Token > no campo "Token" insira o token copiado do retorno dos endpoints de autenticação
- Envie a requisição
- O retorno deverá ser:
``` 
[
    {
        "tipo": "Vaca",
        "nome": "Mimosa",
        "peso": 30,
        "idade": 26,
        "id": 1
    }
]
```

### Alterar animal pelo Id

- Clique nos três pontos em cima da Collection BovControlApi > Add Request
- Request name: PUT Animal
- Clique em Save to as
- Selecione a request criada > altere o método HTTP para PUT > insira a url: localhost:3000/api/animals/{id}
- Substitua o {id} pelo id do animal criado no POST
- Mude o formato para "raw" e o tipo para JSON
- Em Body, insira o seguinte JSON:
```
    {
        "nome": "Belinda",
    }
```
- Vá em Authorization > mude o Type para Bearer Token > no campo "Token" insira o token copiado do retorno dos endpoints de autenticação
- Envie a requisição
- O retorno deverá ser:
``` 
[
    {
        "tipo": "Vaca"
        "nome": "Belinda",
        "peso": 30,
        "idade": 26,
        "id": 1
    }
]
```

### Consultar todos os animais

- Para testar o recurso de paginação da API, insira mais 10 animais seguindos os passos da Criação de Animal
- Clique nos três pontos em cima da Collection BovControlApi > Add Request
- Request name: GET Animals
- Clique em Save to as
- Selecione a request criada > altere o método HTTP para GET > insira a url: localhost:3000/api/animals
- Em Params > key: page e value: 1
- Vá em Authorization > mude o Type para Bearer Token > no campo "Token" insira o token copiado do retorno dos endpoints de autenticação
- Envie a requisição
- O retorno deverá ser parecido com esse:
``` 
{
    "docs": [
        {
            "tipo": "Dog",
            "nome": "ALmofadinhas",
            "peso": 30,
            "idade": 26,
            "id": 1
        },
        {
            "tipo": "Dog",
            "nome": "ALmofadinhas",
            "peso": 30,
            "idade": 26,
            "id": 2
        },
        {
            "tipo": "Dog",
            "nome": "ALmofadinhas",
            "peso": 30,
            "idade": 26,
            "id": 3
        },
        {
            "tipo": "Vaca",
            "nome": "Maria",
            "peso": 30,
            "idade": 26,
            "id": 4
        },
        {
            "tipo": "Galinha",
            "nome": "Lilica",
            "peso": 5,
            "idade": 12,
            "id": 5
        },
        {
            "tipo": "Galinha",
            "nome": "Lilica",
            "peso": 5,
            "idade": 12,
            "id": 6
        },
        {
            "tipo": "Galinha",
            "nome": "Lilica",
            "peso": 5,
            "idade": 12,
            "id": 7
        },
        {
            "tipo": "Bode",
            "nome": "John",
            "peso": 40,
            "idade": 15,
            "id": 8
        },
        {
            "tipo": "Bode",
            "nome": "John",
            "peso": 40,
            "idade": 15,
            "id": 9
        },
        {
            "tipo": "Bode",
            "nome": "John",
            "peso": 40,
            "idade": 15,
            "id": 10
        }
    ],
    "total": 12,
    "limit": 10,
    "page": "1",
    "pages": 2
}
```
- Em Params > key: page e value: 2
- Envie a requisição
- O retorno deverá ser parecido com esse:
```
{
    "docs": [
        {
            "tipo": "Bode",
            "nome": "John",
            "peso": 40,
            "idade": 15,
            "id": 11
        },
        {
            "tipo": "Bode",
            "nome": "John",
            "peso": 40,
            "idade": 15,
            "id": 12
        }
    ],
    "total": 12,
    "limit": 10,
    "page": "2",
    "pages": 2
}
```