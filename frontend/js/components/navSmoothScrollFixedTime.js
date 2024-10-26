 
/*
==================================================================
Arquivo: navSmoothScrollFixedTime.js
Descrição: Este arquivo contém o código JavaScript responsável por implementar a rolagem suave ao clicar em links de navegação. A rolagem é controlada com um tempo fixo, independentemente da distância entre os elementos.
Importância: A rolagem suave melhora a experiência do usuário, oferecendo transições visuais agradáveis ao navegar entre seções da página.
Como Funciona:
  - Captura eventos de clique nos links de navegação e impede o comportamento padrão de rolagem brusca.
  - Calcula a posição de destino do elemento alvo e executa uma rolagem suave usando um tempo fixo.
  - Implementa um efeito de rolagem suave utilizando funções JavaScript nativas para manipular o scroll da página.
Variáveis Definidas:
  - `scrollDuration`: Duração fixa da rolagem suave em milissegundos (ex: `600`).
  - `navigationLinks`: Seleção de todos os links de navegação que devem ativar a rolagem suave (ex: `document.querySelectorAll('.nav-link')`).
  - `targetOffset`: Offset (margem) opcional que pode ser aplicada ao destino da rolagem para ajustar a posição final (ex: `50` para evitar cabeçalhos fixos).
  - `scrollTimingFunction`: Função de temporização da rolagem (ex: `'ease-in-out'` para suavizar a animação).
Recomendações:
  - Centralize o comportamento de rolagem em uma função reutilizável para facilitar ajustes futuros.
  - Teste a funcionalidade em diferentes dispositivos e tamanhos de tela para garantir uma experiência consistente.
Observações:
  - Para evitar conflitos com cabeçalhos fixos, ajuste a variável `targetOffset` conforme necessário.
  - Caso precise integrar com o back-end (por exemplo, para registrar interações de navegação), defina endpoints específicos e documente a lógica envolvida.
==================================================================
*/
