# Desafio MKS-Frontend-Challenge

Documentação do projeto criado para atender ao teste técnico enviado pela equipe da MKS DESENVOLVIMENTO DE SISTEMAS E EMPREENDIMENTOS, para a vaga de JUNIOR FRONT-END DEVELOPER (REACT).

## Iniciando

Primeiro, rode o servidor de desenvolvimento

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu browser para ver o resultado.

## Estrutura

```bash
src
|components
||...
|models
||...
|pages
||...
|services
||api
|||...
||context
|||...
||useCases
|||...
||outros...
|styles
||...
```

1. O `_app.tsx` é responsavel pelo layout e pela renderização das páginas. O `_document.tsx` da renderização do documento e meta dados.
2. Escolhi a estrutura de páginas a partir da pasta page. Página index e checkout
3. O fetch dos produtos é feito pelo useCase getProducts utilizando o useQuery e axios.
4. Os produtos no cart são controlados pelo context usando Redux

### Recursos

* Página de listagem de produtos com efeito de brilho durante o carregamento
* Página de detalhes do produto com imagem, nome, marca, descrição e preço
* Funcionalidade de adicionar ao carrinho com ícone de carrinho e contador
* Página de checkout com resumo do carrinho e preço total
* Design responsivo para desktop e dispositivos móveis

### Tecnologias Utilizadas

* React.js para construir a interface do usuário
* Next.js para renderização no lado do servidor e roteamento
* Redux para gerenciamento de estado
* Axios para fazer requisições de API
* React Query para cache e gerenciamento de busca de dados
* CSS Modules para estilização e layout

### Desafios Superados

* Implementação do efeito de brilho para a página de listagem de produtos
* Gerenciamento do estado do carrinho usando Redux
* Lidar com erros e estados de carregamento para requisições de API
* Otimização de desempenho da aplicação

### Melhorias Futuras

* Adição de funcionalidades de filtragem e ordenação para produtos
* Melhoria da acessibilidade da aplicação
* Adição de mais funcionalidades para a página de checkout, como integração com gateway de pagamento

### Conclusão

Este projeto demonstra minhas habilidades na construção de uma aplicação React com Next.js, Redux e React Query. Consegui superar vários desafios e implementar recursos como o efeito de brilho e o gerenciamento de carrinho. Estou orgulhoso do resultado e acredito que ele mostra minhas habilidades como desenvolvedor front-end júnior.
