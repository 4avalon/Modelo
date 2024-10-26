/*
==================================================================
Arquivo: formValidation.js
Descrição: Este arquivo contém funções utilitárias para a validação de formulários em todo o site. Valida campos de entrada como e-mails, números, textos, e campos obrigatórios, além de fornecer mensagens de erro personalizadas para o usuário.
Importância: A validação de formulários é crucial para assegurar que os dados inseridos pelos usuários sejam corretos antes de serem enviados ao servidor, evitando erros e possíveis problemas de segurança.
Como Funciona:
  - Define funções de validação para diferentes tipos de campos (texto, e-mail, números, etc.).
  - Adiciona eventos de escuta (listeners) aos campos de formulário para validação em tempo real.
  - Exibe mensagens de erro ou sucesso conforme o estado de cada campo.
  - Utiliza funções reutilizáveis para validar formatos de e-mail, números, e outros critérios de entrada.
Variáveis Definidas:
  - `validationRules`: Objeto que contém as regras de validação para cada campo (ex: `{ email: { required: true, pattern: /regex/ }, name: { minLength: 3 } }`).
  - `errorMessages`: Objeto que define mensagens de erro personalizadas para cada tipo de validação (ex: `{ email: 'E-mail inválido', required: 'Este campo é obrigatório' }`).
  - `formSelector`: Seletor que identifica o formulário a ser validado (ex: `'#contactForm'`).
  - `fieldSelector`: Seletor para identificar os campos a serem validados dentro do formulário (ex: `'input, textarea, select'`).
  - `errorClass`: Classe CSS utilizada para estilizar mensagens de erro e destacar campos inválidos (ex: `'field-error'`).
Recomendações:
  - Para cada novo formulário, reutilize as funções definidas neste arquivo e adapte as regras de validação conforme necessário.
  - Centralize a exibição de mensagens de erro para facilitar a manutenção e alteração dos estilos.
Observações:
  - Teste os critérios de validação para diferentes navegadores e dispositivos, assegurando compatibilidade.
  - Caso a validação precise se comunicar com o back-end (ex: validação de e-mails únicos), integre funções assíncronas e documente essa lógica.
==================================================================
*/
 
