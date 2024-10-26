/*
==================================================================
Arquivo: main.js
Descrição: Este arquivo contém o código JavaScript principal para controlar a lógica central e inicializar 
funcionalidades globais do site. Serve como ponto de entrada para a aplicação, carregando e coordenando a 
execução de outros scripts e funcionalidades.
Importância: Centraliza a inicialização de scripts e garante que a estrutura do site funcione de forma 
integrada, gerenciando eventos, manipulações de DOM e integrações com APIs.
Como Funciona:
  - Inicializa funcionalidades globais ao carregar a página (eventos, animações, etc.).
  - Coordena a execução de módulos e componentes, importando e gerenciando scripts específicos.
  - Manipula o DOM para aplicar modificações dinâmicas em elementos visuais e conteúdo.
  - Define variáveis globais utilizadas em diferentes partes do código para manter consistência e reutilização.
Variáveis Definidas:
  - `initModules`: Função responsável por inicializar módulos específicos ao carregar a página.
  - `globalState`: Objeto que armazena o estado global da aplicação (ex: informações do usuário, 
  configurações atuais).
  - `apiEndpoints`: Objeto contendo URLs de APIs específicas usadas para requisições no site 
  (ex: `{ userData: '/api/user', productList: '/api/products' }`).
  - `defaultTimeout`: Tempo padrão para setTimeout ou setInterval, controlando animações e atualizações 
  (em milissegundos).
  - `userSettings`: Objeto que armazena preferências do usuário, como tema, idioma e outras configurações 
  personalizadas.
Recomendações:
  - Organize o código em funções e módulos reutilizáveis para evitar duplicação e facilitar a manutenção.
  - Utilize o objeto `globalState` para armazenar dados que precisem ser acessados por múltiplos componentes.
Observações:
  - Teste a inicialização de todos os módulos em diferentes navegadores para garantir compatibilidade.
  - Centralize a lógica de manipulação de eventos e integrações de API aqui para facilitar o monitoramento.
==================================================================
*/
 
