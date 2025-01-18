# Gestão de Alunos com Angular

Este projeto é uma aplicação Angular que permite gerenciar dados de alunos, incluindo cadastro, atualização, remoção e cálculo da média das notas. A interface é construída utilizando formulários reativos e validações personalizadas, com suporte para manipulação e exibição dinâmica dos dados em uma tabela.

https://angular17-boletim-digital.vercel.app/

## 🚀 Funcionalidades

- **Cadastro de Alunos**: Adicione alunos informando nome e notas.
- **Validações**: 
  - Nome obrigatório e com no mínimo 3 caracteres.
  - Notas obrigatórias, com valores entre 0 e 10.
- **Edição de Dados**: Selecione um aluno para editar suas informações.
- **Remoção**: Exclua alunos do sistema.
- **Cálculo da Média**: Exibe automaticamente a média das notas de cada aluno.
- **Cancelamento**: Cancele ações de edição para voltar ao modo de cadastro.

## 🛠️ Tecnologias Utilizadas

- **Angular**: Framework front-end.
- **Reactive Forms**: Gerenciamento de formulários com validações reativas.
- **Pipes**: Criação de `MediaPipe` para cálculo e exibição da média das notas.
- **Bootstrap**: Estilização da interface.

## 📂 Estrutura do Código

### Componentes

1. **`Componente01Component`**: Gerencia as ações relacionadas aos alunos, como cadastro, edição, remoção e manipulação de botões.
2. **`MediaPipe`**: Pipe personalizado para calcular a média das notas.

### Modelo

- **`Aluno`**: Representa a estrutura de dados de um aluno, incluindo nome, nota1 e nota2.

### Tabela

- Exibe a lista de alunos cadastrados, mostrando:
  - Nome.
  - Nota 1.
  - Nota 2.
  - Média das notas.
  - Botão para selecionar o aluno.

## Deploy do Projeto realizado no vercel
https://angular17-boletim-digital.vercel.app/


