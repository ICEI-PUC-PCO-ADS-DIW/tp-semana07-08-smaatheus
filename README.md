[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KZhXwLZL)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=20650342)
# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Matheus Henrique Pereira Dos Santos
- Matricula: 900385
- Proposta de projeto escolhida: Lugares e experiências.
- Breve descrição sobre seu projeto: Site fictício sobre Belo Horizonte, destacando seus principais pontos turísticos.

## Print da Home-Page

<<  COLOQUE A IMAGEM AQUI >>

## Print da página de detalhes do item

<<  COLOQUE A IMAGEM AQUI >>

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const dados = [
  {
    "id": 1,
    "titulo": "Igreja São Francisco de Assis (Igrejinha da Pampulha)",
    "descricao": "Obra-prima de Oscar Niemeyer, com painéis de Cândido Portinari. Um ícone da arquitetura moderna mundial.",
    "conteudo": "A Igreja São Francisco de Assis, popularmente conhecida como Igrejinha da Pampulha, é um dos cartões-postais de Belo Horizonte. Projetada por Oscar Niemeyer e inaugurada em 1943, faz parte do Conjunto Arquitetônico da Pampulha, que é Patrimônio Mundial da UNESCO. Seus painéis externos e internos são de Cândido Portinari, e os jardins foram projetados por Burle Marx. A forma arrojada e as curvas da igreja romperam com os padrões arquitetônicos da época e continuam a encantar visitantes do mundo todo.",
    "imagem": "img/igreja.jpg"
  },
  {
    "id": 2,
    "titulo": "Museu de Arte da Pampulha (MAP)",
    "descricao": "O antigo cassino da Pampulha, hoje abriga um acervo de arte contemporânea brasileira.",
    "conteudo": "O Museu de Arte da Pampulha (MAP) foi o primeiro prédio do Conjunto Arquitetônico a ser construído. Originalmente, funcionava como o Cassino da Pampulha, um dos mais luxuosos da época. Após a proibição dos jogos de azar no Brasil em 1946, o espaço foi adaptado e reinaugurado como museu em 1957. Hoje, seu acervo conta com importantes obras de arte contemporânea brasileira, e o próprio edifício é uma atração, com seus jardins de Burle Marx e arquitetura de Niemeyer.",
    "imagem": "img/museu.jpg"
  },
  {
    "id": 3,
    "titulo": "Estádio Mineirão",
    "descricao": "Palco de grandes jogos e shows, o Gigante da Pampulha é um ícone do futebol brasileiro.",
    "conteudo": "Inaugurado em 1965, o Estádio Governador Magalhães Pinto, o Mineirão, é um dos maiores e mais importantes templos do futebol mundial. Foi palco de jogos históricos, incluindo partidas da Copa do Mundo de 2014. Além das partidas de futebol, o estádio recebe grandes shows e eventos. Os visitantes podem conhecer o Museu Brasileiro do Futebol, que fica em seu interior, e fazer um tour para ver de perto os bastidores do Gigante da Pampulha.",
    "imagem": "img/mineirao.jpg"
  }
];
```