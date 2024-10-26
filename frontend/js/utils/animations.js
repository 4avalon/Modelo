/*
==================================================================
Arquivo: animations.js
Descrição: Este arquivo contém funções utilitárias para animações em elementos do site, incluindo efeitos de transição, desvanecimento (fade), movimentos deslizantes (slide), e animações personalizadas para melhorar a experiência do usuário.
Importância: Animações tornam a interface mais dinâmica e atraente, ajudando a guiar o usuário e fornecer feedback visual sobre interações.
Como Funciona:
  - Define funções para diferentes tipos de animações (fade in/out, slide up/down, expandir/contrair).
  - Utiliza eventos de interação do usuário (como scroll, clique, hover) para ativar as animações.
  - Permite a customização da duração e estilo das animações através de variáveis configuráveis.
Variáveis Definidas:
  - `animationDuration`: Duração padrão das animações em milissegundos (ex: `500` para 500ms).
  - `fadeClass`: Classe CSS utilizada para controlar a opacidade em animações de fade (ex: `'fade-effect'`).
  - `slideClass`: Classe CSS que define a visibilidade e transições de elementos em animações deslizantes (ex: `'slide-effect'`).
  - `animationTimingFunction`: Função de temporização para suavizar as animações (ex: `'ease-in-out'` para uma animação suave).
  - `scrollAnimationTrigger`: Seletor que identifica os elementos que ativam animações durante o scroll (ex: `'.animate-on-scroll'`).
  - `animationDelay`: Atraso opcional antes do início de uma animação específica (em milissegundos).
Recomendações:
  - Use as classes CSS definidas para aplicar estilos de animação uniformemente, evitando duplicação de código.
  - Centralize o controle de duração e temporização nas variáveis, facilitando ajustes globais nas animações.
Observações:
  - Garanta que as animações não prejudiquem a acessibilidade e que o site continue navegável, mesmo com animações desativadas.
  - Teste as animações em diferentes dispositivos e navegadores para assegurar uma performance consistente.
==================================================================
*/
