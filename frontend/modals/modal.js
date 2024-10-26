 /*
==================================================================
Arquivo: modal.js
Descrição: Este arquivo contém o código JavaScript responsável por controlar a lógica de exibição, 
fechamento e comportamento das janelas modais no site. As modais são utilizadas para exibir informações 
adicionais sem redirecionar o usuário para outra página.
Importância: As janelas modais são uma ferramenta útil para exibir conteúdo complementar, mensagens de 
confirmação e formulários de maneira não intrusiva, melhorando a experiência do usuário.
Como Funciona:
  - Captura eventos de clique para abrir ou fechar a janela modal.
  - Aplica efeitos de transição para a exibição e ocultação da modal.
  - Gerencia a interação do usuário com a modal, permitindo fechar ao clicar fora ou pressionar a 
  tecla "Esc".
Variáveis Definidas:
  - `modalTriggerClass`: Classe CSS utilizada para identificar elementos que ativam a abertura de uma 
  modal (ex: `'.open-modal'`).
  - `modalContainerId`: ID do container principal da modal (ex: `'modalContainer'`).
  - `closeButtonClass`: Classe CSS para o botão que fecha a modal (ex: `'.close-modal'`).
  - `overlayClass`: Classe utilizada para o fundo (overlay) da modal, permitindo fechar a janela ao clicar 
  fora (ex: `'modal-overlay'`).
  - `openAnimationDuration`: Duração da animação de abertura da modal em milissegundos.
  - `closeAnimationDuration`: Duração da animação de fechamento da modal em milissegundos.
Recomendações:
  - Centralize a lógica de abertura e fechamento da modal em funções reutilizáveis para facilitar a 
  manutenção.
  - Use as classes e IDs definidos para manter o comportamento e estilos consistentes em todas as modais do 
  projeto.
Observações:
  - Certifique-se de testar a funcionalidade da modal em diferentes dispositivos e navegadores para garantir 
  compatibilidade.
  - Se a modal contiver formulários ou componentes dinâmicos, certifique-se de integrar corretamente com o 
  back-end e valide os dados conforme necessário.
==================================================================
*/
