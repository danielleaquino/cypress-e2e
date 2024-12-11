# Projeto Cypress E2E

## Descrição
Este projeto foi desenvolvido para realizar **testes end-to-end (E2E)** em uma aplicação web usando **Cypress**. O objetivo é garantir a qualidade e a funcionalidade do sistema, testando tanto o Front-End quanto o Back-End de forma integrada. Este projeto pode ser utilizado como base para a automação de testes de outros sistemas web.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:
- **`cypress/`**: Contém os testes automatizados, com pastas para `integration`, `fixtures`, `support`, etc.
- **`cypress.json`**: Configuração principal do Cypress.
- **`package.json`**: Gerencia as dependências do projeto e scripts de execução.
- **`cypress/plugins/`**: Plugins e configurações específicas do Cypress.
- **`cypress/support/`**: Arquivos auxiliares, como comandos customizados e configuração de pré-testes.

## Funcionalidades
- **Testes E2E**: Automação de testes que simulam a interação do usuário com a aplicação.
- **Testes Integrados**: Testes que verificam a comunicação entre o front-end e o back-end.
- **Relatórios de Testes**: Geração de relatórios de execução para análise e monitoramento de resultados.

## Tecnologias Utilizadas
- **Cypress**: Framework de teste para aplicações web.
- **Node.js**: Ambiente de execução do JavaScript.
- **NPM/Yarn**: Gerenciadores de pacotes para dependências.

## Acesso aos Sistemas
Para executar os testes, você pode acessar as URLs do sistema que está sendo testado:
- **Front-End**: [Acesse o Front-End](https://adopet-frontend-cypress.vercel.app)
- **Back-End**: [Acesse o Back-End](https://adopet-api-i8qu.onrender.com/adotante/)

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas no seu computador:
- **Node.js**: [Baixe aqui](https://nodejs.org/).
- **Git**: [Baixe aqui](https://git-scm.com/).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielleaquino/cypress-e2e.git
   cd cypress-e2e
