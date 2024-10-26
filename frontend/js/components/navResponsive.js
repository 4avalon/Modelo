/*
==================================================================
Arquivo: navResponsive.js
Descrição: Este arquivo contém o código JavaScript responsável por controlar a funcionalidade do menu de navegação responsivo no site. Inclui o comportamento do menu "hambúrguer" e a exibição dos links de navegação em dispositivos móveis.
Importância: A funcionalidade do menu responsivo garante uma navegação fluida e acessível para usuários em dispositivos móveis, melhorando a usabilidade do site.
Como Funciona:
  - Manipula a exibição do menu em dispositivos móveis, alternando entre aberto e fechado ao clicar no botão de menu.
  - Implementa animações suaves para a transição do menu responsivo.
  - Gerencia a visibilidade dos submenus (se houver), permitindo que sejam expandidos ou recolhidos conforme necessário.
Variáveis Definidas:
  - `toggleButton`: Seleciona o elemento do botão que ativa/desativa o menu responsivo (ex: `document.getElementById('menuToggle')`).
  - `navigationMenu`: Seleciona o container que contém o menu de navegação (ex: `document.getElementById('navMenu')`).
  - `submenuTriggerClass`: Classe usada para identificar itens que têm submenus e precisam de comportamento de expansão (ex: `'.submenu-trigger'`).
  - `activeMenuClass`: Classe CSS que é adicionada ao menu quando ele está aberto (ex: `'menu-open'`).
  - `transitionSpeed`: Define a duração da animação de transição do menu responsivo, em milissegundos (ex: `300`).
Recomendações:
  - Centralize qualquer ajuste visual no arquivo CSS correspondente para manter a separação entre estilo e comportamento.
  - Utilize as variáveis definidas para personalizar IDs e classes, facilitando a adaptação do código para diferentes projetos.
Observações:
  - Certifique-se de testar a funcionalidade do menu em diferentes navegadores e dispositivos para garantir compatibilidade.
  - Caso o back-end precise interagir com o menu (por exemplo, para autenticação de usuário ou controle de sessão), defina endpoints específicos no servidor e documente a interação.
==================================================================
*/
