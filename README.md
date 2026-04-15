# Aula_JavaScript

Repositório de projetos JavaScript focado em desenvolvimento fullstack com diferentes tecnologias e paradigmas. A coleção abrange desde aplicações simples com DOM manipulation até implementações mais complexas com React Native, Firebase e Express.

## API-Tarefa

Aplicação React Native desenvolvida com Expo que consome a API pública JSONPlaceholder para listar usuários. Implementa requisições assíncronas via fetch com tratamento de erros em hook useEffect. A estrutura utiliza ScrollView para renderização eficiente de listas, StyleSheet para estilização nativa e destructuring de props para apresentação de dados (nome, email e localização). O componente carrega dados ao montar utilizando dependência vazia do useEffect, demonstrando o ciclo de vida funcional com hooks.

## API_Dog.ceo

Aplicação React que integra a API dog.ceo para exibição de imagens aleatórias de cães. Implementa lógica de requisição assíncrona com fetch dentro de função useEffect com depedência vazia, garantindo carregamento único no mount. Utiliza state management com useState para armazenar URL da imagem e oferece função callback para refresh de dados através de listener onClick. O componente implementa fallback rendering com verificação de estado antes de renderizar a imagem, evitando erros de undefined. Estilos inline CSS-in-JS definidos como objeto JavaScript com propriedades flexbox para layout centralizado.

## Calculo_salario

Projeto vanilla JavaScript que implementa calculadora de salário com operações matemáticas para dedução de impostos e benefícios. Realiza manipulação direta do DOM através de seletores CSS e eventos de clique em botões. O script processa valores de entrada do usuário, executa fórmulas de cálculo e atualiza elementos HTML com resultados dinâmicos. Demonstra validação de entrada e formatação de saída monetária.

## Contador

Aplicação JavaScript Vanilla implementando padrão de state management básico com variáveis globais. Fornece funções de incremento e decremento que modificam valor interno e refletem alterações no DOM através de textContent ou innerHTML. Implementa listeners de evento para botões que disparam funções de callback. Demonstra padrão de single responsibility onde cada função modifica estado isoladamente.

## Introdução

Pasta com exemplos educacionais abordando conceitos fundamentais de JavaScript como variáveis com var, let e const, tipos de dados primitivos e operadores. Inclui exemplos de funções declaradas, arrow functions, métodos de array como map e filter, e operações básicas com objetos. Fornece base teórica para compreensão de sintaxe e semântica da linguagem.

## Navbar

Projeto HTML com Bootstrap 4 que demonstra construção de barra de navegação responsiva utilizando grid system Bootstrap. Implementa navbar-toggler para collapse em dispositivos móveis com atributos aria para acessibilidade. Utiliza componentes Bootstrap como containers, rows, cols com breakpoints (col-md-6, col-sm-12) para layout fluido. Inclui alerts com diferentes variantes (success, warning) e integração de dependências jQuery, Popper.js e Bootstrap via CDN. Estrutura semântica HTML5 com viewport meta tag para responsividade.

## aula-navegacao-express

Projeto backend Node.js implementado com Express.js framework de roteamento. Configura middleware de roteamento para navegação entre páginas, demonstrando padrão MVC com separação de rotas e views. Utiliza template engines para renderização dinâmica de conteúdo no servidor. Implementa requisições HTTP com métodos GET e POST para manipulação de dados em sessão do usuário.

## crud_firebase

Aplicação fullstack que implementa operações CRUD contra Firebase Realtime Database com integração de autenticação Firebase. Realiza operações de Create com push(), Read com on() listener, Update com update() e Delete com remove(). Utiliza paradigma de event-driven para sincronização em tempo real de dados. Implementa mecanismo de autenticação por email/senha com gerenciamento de sessão do usuário. Utiliza promessas e async/await para operações assíncronas contra API Firebase.

## sistema-categorias

Sistema de gerenciamento de categorias com operações de criação, listagem, edição e exclusão de registros. Implementa persistência de dados em memória ou através de integração com banco de dados. Utiliza estruturas de dados como arrays e objetos para organização de categorias. Fornece interface para manipulação de dados categorizados com validação de entrada e tratamento de duplicatas.
