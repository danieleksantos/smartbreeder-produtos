# 🛒 Teste Técnico - Desenvolvedora Front-End (React + TypeScript)

Este projeto consiste em uma aplicação web desenvolvida em React e TypeScript para exibir e manipular uma lista de produtos, permitindo filtragem por nome e categoria, visualização detalhada em modal, favoritar produtos com limite por categoria e acompanhar favoritos em tempo real no Header. A aplicação simula requisições assíncronas, trata dados incompletos, oferece paginação, responsividade para diferentes dispositivos e cuidados básicos de acessibilidade, com gerenciamento de estado centralizado via Context API e estilo modularizado seguindo a metodologia BEM.
---

## 📌 Descrição da Aplicação

Esta aplicação web permite a exibição e manipulação de uma lista de produtos com as seguintes funcionalidades:

- Exibição da lista de produtos a partir de dados mockados.
- Simulação de requisição assíncrona com atraso utilizando **Promise** e **setTimeout**.
- Tratamento de dados faltantes (ex.: produtos sem nome ou preço).
- Favoritar e desfavoritar produtos com restrição de até dois favoritos por categoria.
- Exibição de uma aba exclusiva com os produtos favoritados.
- Modal para visualização de detalhes completos do produto, incluindo suas variações.
- Filtros por nome e por categoria.
- Contador de produtos favoritos exibido e atualizado em tempo real no **Header fixo**.
- Paginação para navegação entre os produtos.
- Responsividade para diferentes tamanhos de tela (desktop, tablet e celular).


---

## 🚀 Deploy

A aplicação está disponível em produção através do Vercel:

👉 [Acesse o deploy](https://catalogo-de-produtos-ashen.vercel.app/)

---

## 🧑‍💻 Tecnologias e Ferramentas

- **React** (com Vite)
- **TypeScript**
- **CSS Modules**
- **Context API** (para gerenciamento global de favoritos)
- **Lucide React** (para ícones)
- **Vercel** (hospedagem)

---


---

## ✅ Requisitos Atendidos

- [x] Exibição da lista de produtos
- [x] Simulação de requisição assíncrona
- [x] Tratamento de dados incompletos
- [x] Favoritar/desfavoritar com regra de no máximo dois por categoria
- [x] Aba/página de favoritos
- [x] Modal com informações detalhadas e variações
- [x] Filtro por nome e categoria
- [x] Contador de favoritos atualizado em tempo real no Header
- [x] Uso consistente de **TypeScript** com tipagens para produtos, categorias e contextos
- [x] Paginação
- [x] Responsividade (tablet e mobile)
- [x] Cuidados básicos com acessibilidade (`aria-label`, roles)

---

## 🎨 Considerações de Estilo

- As cores da aplicação foram definidas com base na **identidade visual da empresa**, utilizando **nomes de variáveis que refletem a nomenclatura das cores no site institucional da empresa**.
- Estilo modularizado via **CSS Modules**, com nomenclatura baseada na metodologia **BEM** para melhor organização e manutenção.
- Responsividade: Foram aplicadas media queries para garantir uma boa experiência de navegação em celulares, tablets e desktops, adaptando o layout e os grids conforme o tamanho da tela.

---

## 📝 Decisões Técnicas

- **Gerenciamento de estado global:** Utilização da **Context API** para centralizar os produtos favoritos e permitir seu acesso entre componentes distintos (Header, Lista de Produtos, Modal).
- **Hooks personalizados:** Criação de hooks como `useFavorites` e `useCategoriaNome` para centralizar lógica reutilizável.
- **Tipagem:** Toda manipulação de dados segue tipos declarados, reduzindo risco de erros de execução.
- **Acessibilidade:** Inclusão de labels ARIA para melhorar a experiência de navegação por leitores de tela.
- **Responsividade:** Layout ajustado com CSS Grid e media queries, garantindo que o conteúdo se reorganize de forma fluida em diferentes tamanhos de tela.

---

## 🛠️ Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/danieleksantos/catalogo-de-produtos.git

2. Clone o repositório:
npm install

2. Rode o Projeto:
npm run dev



