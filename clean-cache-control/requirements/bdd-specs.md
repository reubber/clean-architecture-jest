# BDD Specs

## Narrativa

```
Como um cliente offline
quero que o sistema me mostre minha ultimas compras gravadas
para eu poder ver minhas despesas mesmo sem internet
```

## Cenários

```
Dado que o cliente nao tem conexão com a internet
e exista algum dado gravado no chache
e os dados do cache forem mais novos que 3 dias
quando o cliente solicitar para carregar suas compras 
Entao o sistema deve exibir suas compras vindas do cache

Dado que o cliente não tem conexao a internet
E exista algum dado gravado no cache
E os dados do cache forem mais velhos ou iguais a 3 dias
Quando o cliente solicitar para carregar suas compras
Entao o sistema deve exibir uma mensagem de erro

Dado que o cliente não tem conexão com a internet 
E o cache esteja vazio
Quando o cliente solicitar para carregar suas comprars
Então o sistema deve exibir uma menssagem de erro.
```
