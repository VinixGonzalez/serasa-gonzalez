# Serasa Gonzalez

🚀 Projeto clone da página de login e área do cliente.

## 📋 Descrição

O projeto é um clone da página de login e área do cliente do Serasa. O intuito é mostrar os conhecimentos técnicos na criação de aplicações Reactjs. Os dados mostrados são dados mock, o projeto não está ligado a nenhuma API ou serviço. O projeto utiliza a esturutra de atomic design para organizar e separar os componentes.

## 🛠️ Tecnologias Utilizadas

- **ReactJS**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Tipagem estática para maior segurança e qualidade no código.
- **TailwindCSS**: Framework CSS para estilização eficiente.
- **Framer Motion**: Biblioteca para animações.
- **React Testing Library + Jest**: Para criação e execução de testes.
- **React Icons**: Ícones usados nos componentes.
- **Chakra UI**: Componentes estilizados para acessibilidade e performance.

## 📂 Estrutura de Pastas

```plaintext
src/
├── assets/          # Imagens, ícones e outros recursos estáticos
├── components/      # Componentes reutilizáveis
│   ├── atoms/       # Componentes básicos
│   ├── molecules/   # Componentes compostos
│   ├── organisms/   # Componentes complexos
│   └── templates/   # Componentes completos que compõe uma página
├── constants/       # Constantes de textos estáticos
├── hooks/           # Custom Hooks reutilizáveis
├── mocks/           # Mocks de dados variados
├── pages/           # Páginas principais da aplicação (cada page pode ter seus próprios componentes e repete a estrutura de atomic design)
├── routes/          # Rotas e configurações de navegação
├── schemas/         # Schemas de validação
├── utils/           # Funções utilitárias
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- Node.js (20 ou superior)
- pnpm / yarn / npm

### Passos para rodar o projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/serasa-gonzalez.git
   cd serasa-gonzalez
   ```

2. Instale as dependências:

   ```bash
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   pnpm dev
   ```

4. Acesse o projeto no navegador, geralmente em:
   ```plaintext
   http://localhost:5173
   ```

### Rodando os Testes

Execute os testes para garantir que os componentes estão funcionando corretamente:

```bash
pnpm test
```

## 📧 Contato

- **Email**: vinix74@hotmail.com
- **GitHub**: [VinixGonzalez](https://github.com/VinixGonzalez)
