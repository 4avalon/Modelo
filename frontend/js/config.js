/*
==================================================================
Arquivo: config.js
Descrição: Este arquivo contém as configurações globais e constantes do projeto, incluindo URLs de API,
 parâmetros de ambiente, chaves de API e outras definições essenciais que são utilizadas em todo o site 
 ou aplicação.
Importância: Centraliza configurações importantes para facilitar ajustes e manter a consistência ao longo 
do projeto. Simplifica a manutenção ao permitir a modificação de valores em um único local.
Como Funciona:
  - Define variáveis globais que são acessíveis por diferentes módulos e partes da aplicação.
  - Armazena URLs de APIs, chaves secretas, e parâmetros de configuração que podem ser alterados conforme 
  o ambiente (desenvolvimento, produção).
  - Utiliza um formato consistente para nomear as variáveis e garantir que sejam facilmente reconhecíveis 
  em qualquer parte do código.
Variáveis Definidas:
  - `apiBaseUrl`: URL base da API utilizada pela aplicação (ex: `'https://api.exemplo.com/v1'`).
  - `environment`: String que define o ambiente atual (`'development'`, `'production'`, `'test'`).
  - `apiKeys`: Objeto que contém as chaves de API necessárias para diferentes serviços 
  (ex: `{ googleMaps: 'API_KEY_AQUI', weatherService: 'API_KEY_AQUI' }`).
  - `defaultLanguage`: Define o idioma padrão do site ou aplicação (ex: `'pt-BR'`).
  - `themeSettings`: Objeto que armazena configurações globais de tema (cores, modo claro/escuro, etc.).
  - `timeoutDuration`: Tempo padrão de espera para requisições assíncronas em milissegundos 
  (ex: `10000` para 10 segundos).
Recomendações:
  - Utilize variáveis do arquivo `config.js` sempre que precisar de configurações globais, 
  evitando duplicação de informações.
  - Evite armazenar informações sensíveis diretamente aqui. Utilize variáveis de ambiente (env) sempre 
  que possível.
Observações:
  - Mantenha este arquivo claro e documentado, pois alterações aqui podem impactar múltiplas partes do 
  projeto.
  - Para ambientes diferentes (produção, desenvolvimento), utilize arquivos de configuração separados ou 
  ferramentas como dotenv para facilitar o gerenciamento.
==================================================================
*/
 
