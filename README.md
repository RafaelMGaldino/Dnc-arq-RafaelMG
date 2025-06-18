# 🏛️ ArchiLike - Site de Arquitetura 

Este é um projeto de site de arquitetura desenvolvido com **React + Vite**, que permite aos usuários navegarem por projetos arquitetônicos e marcarem seus favoritos com um sistema de "curtidas" (likes).

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para construção da interface
- **Vite** – Build tool para desenvolvimento rápido com HMR
- **React Router DOM** – Gerenciamento de rotas SPA
- **Context API** – Controle global dos likes
- **ESLint + Prettier** – Padronização e qualidade do código
- **SessionStorage** – Persistência temporária de likes no navegador

## 💡 Funcionalidades

- 🌍 Visualização de diferentes projetos arquitetônicos
- ❤️ Sistema de curtidas para marcar os lugares favoritos
- 🧠 Armazenamento temporário dos likes (Session Storage)
- 🔄 Navegação entre páginas sem recarregar o site
- 🖼️ Componentização de layout com `Header`, `Footer`, `ProjectCard`, etc.
- - 🌐 **Troca de idioma** (Português ↔ Estrangeiro)


## 🌐 Suporte a Idiomas

O site possui um botão ou seletor de idioma que permite alternar o conteúdo entre **Português** e outro idioma (ex: Inglês ou Espanhol).

A troca de idioma é feita usando:
- Estado global via **Context API** ou `useState`
- Textos armazenados em objetos de tradução
- Atualização dinâmica do conteúdo ao trocar a linguagem

## 📁 Estrutura do Projeto

src/
├── assets/ # Imagens e ícones 

├── components/ # Componentes reutilizáveis (Header, Footer, Cards, etc.)

├── contexts/ # Contexto global (AppContext para likes)

├── pages/ # Páginas principais (Home, About, Projects, Contact)

├── services/ # Lógica de acesso à "API" ou dados simulados

├── utils/ # Funções utilitárias (scroll, filtros, etc.)

├── App.jsx # Arquivo principal de rotas e estrutura

├── main.jsx # Ponto de entrada da aplicação

└── index.css # Estilo global


## 📦 Como rodar o projeto

### 1. Clone o repositório

bash

git clone https://github.com/RafaelMGaldino/Dnc-arq-RafaelMG

cd seu-repositorio

npm install

npm run dev


📬 Contato

Rafael Martins - rafaelmartinsgaldino2020@gmail.com

Link do Projeto: https://github.com/RafaelMGaldino/Dnc-arq-RafaelMG/

Link: https://dnc-arq-rafael-mg-g1j4-80q5vjj5e-rafaelmgaldinos-projects.vercel.app

