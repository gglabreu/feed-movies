# Feed Movies 

## Instalação

### 1. Clonar o repositório

Para instalar o Feed Movies, primeiro clone o repositório usando o comando Git:

```bash
git clone https://github.com/gglabreu/feed-movies.git
```

### 2. Instalar as dependências

Após clonar o repositório, navegue até o diretório raiz do projeto (normalmente "feed-movies") abra o terminal e execute o seguinte comando para instalar todas as dependências:

```bash
pnpm install
```

### 3. Configurar variáveis de ambiente

Para que o Feed Movies funcione corretamente, é necessário configurar as variáveis de ambiente. Siga as instruções abaixo:

1. Crie um arquivo `.env` na raiz do projeto.

2. Adicione as seguintes variáveis de ambiente ao arquivo `.env`:

   ```plaintext
   VITE_API_KEY=api_key=sua_chave_de_api_aqui
   VITE_API=https://api.themoviedb.org/3/movie
   ```

3. Você precisará criar uma conta no TMDB para gerar uma chave de API. A criação da chave de API é rápida e simples, e pode ser feita preenchendo um formulário. Após a criação da conta e o envio do formulário, a chave de API estará disponível em https://www.themoviedb.org/settings/api.

### 4. Rodando a aplicação

Feito todos os passos acima, é só abrir o terminal na pasta raíz do projeto e rodar o seguinte comando:

```bash
pnpm run dev
```

### 5. Rodando testes

Navegue até src/tests no terminal e rode o seguinte comando:

```bash
pnpm test
```

## Como usar a aplicação 

### Tela inicial

A tela inicial é composta de um AppBar contendo uma logo, nome da aplicação e um dropdown contendo as listas de filmes a serem exibidas. 

![image](https://github.com/gglabreu/feed-movies/assets/59566440/e88571ee-2960-4a8c-af75-94c6fd423bac)

### Dropdown 

No AppBar é possível selecionar a lista de filmes a serem exibidas no Grid, se será a lista de filmes: Populares, Bem Avaliados ou Novidades. A lista de filmes exibidas na tabela muda conforme a seleção. Por padrão a lista exibida é a de Populares.

![image](https://github.com/gglabreu/feed-movies/assets/59566440/9fcc6e31-88a6-4897-885c-69a81e45e49c)
 
### Tabela

A tabela exibida possui 5 colunas: Título, Sinopse, Data de lançamento, Nota média e Grau de Popularidade. Todas as colunas possuem filtros e são ordenadas, além de existir uma paginação que limita a página até 10 filmes.

![image](https://github.com/gglabreu/feed-movies/assets/59566440/6c839c6b-68d2-403b-9cb9-e26cfdf3d4d7)

### Tabela - Filtros

Cada coluna possui um campo de busca, onde é possível filtrar os resultados da coluna pelo digitado nesse campo. 

![image](https://github.com/gglabreu/feed-movies/assets/59566440/3b314206-87fa-45e8-87b8-29a7e7b87379)

Também existem algumas opções a mais no ícone de filtro, que permite uma busca mais apurada. Além de existir um botão que limpa todos os filtros.

![image](https://github.com/gglabreu/feed-movies/assets/59566440/7f489939-0da2-406c-a6f1-a832f5a39cfc)

### Tabela - Ordenação

Clicando no título da coluna, é feita uma ordenação alfabética/numérica.

![image](https://github.com/gglabreu/feed-movies/assets/59566440/80a7d07a-eb54-4b72-997d-4d6a95f48ed0)

### Tabela - Paginação

A paginação limita até 10 filmes por página e funciona em conjunto com os filtros/ordenação.

![image](https://github.com/gglabreu/feed-movies/assets/59566440/8c325781-05dc-4ce2-9df7-f97fa32d88f4)

![image](https://github.com/gglabreu/feed-movies/assets/59566440/22f5923b-d773-4917-aea9-e42d86448f4f)

![image](https://github.com/gglabreu/feed-movies/assets/59566440/726def40-7438-4ef9-a178-13fa53323791)

