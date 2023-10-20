
# Hiring Frontend 🖥️

Bem-vindo ao repositório do frontend da nossa aplicação! Aqui, utilizamos tecnologias de ponta como React, Vite, TypeScript e muitas outras para entregar uma experiência de usuário incrível.

### 🛠️ Configuração

**Passo 1:** Instale as dependências do backend e do frontend:

```bash
cd server && yarn
```

E depois:

```bash
cd frontend && yarn
```

**Passo 2:** Com as dependências instaladas, é hora de iniciar a aplicação:

```bash
yarn dev
```

Execute o comando acima tanto na pasta \`server\` quanto na \`frontend\`.

🎉 Agora, a aplicação frontend estará rodando em: [http://localhost:5173/](http://localhost:5173/).
### 🧪 Testes

Para executar os testes do frontend, navegue até a pasta \`frontend\` e execute:

```bash
yarn test
```

Para verificar a cobertura de testes, use:

```bash
yarn test:coverage
```

### 🏛️ Arquitetura

**Clean Architecture**: Esta abordagem, proposta por Robert C. Martin, visa separar as responsabilidades do software em camadas distintas. Isso torna o sistema mais modular, flexível e testável. No nosso projeto, adotamos a Clean Architecture para garantir um código mais organizado, escalável e fácil de manter.

Neste projeto, a Clean Architecture foi adotada para garantir que o código seja fácil de manter, escalar e testar. Ao separar as responsabilidades em diferentes camadas, podemos garantir que cada parte do sistema tenha um único propósito e que as dependências entre elas sejam mínimas.

Aqui estão as principais camadas usadas:

- **Camada de Dados (data)**: Responsável pela comunicação com fontes de dados externas, como APIs ou bancos de dados.
- **Camada de Domínio (domain)**: Contém a lógica de negócios central e as entidades do sistema.
- **Camada de Apresentação(presentation)**: Lida com a interface do usuário e a apresentação dos dados.
- **Camada Principal (main)**: Orquestra a inicialização da aplicação e a injeção de dependências.
Ao usar a Clean Architecture, garantimos que o sistema seja resistente a mudanças, pois as alterações em uma camada não afetam diretamente as outras. 

### 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces interativas.
- **Vite**: Ferramenta de build que proporciona um desenvolvimento mais ágil.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, trazendo mais segurança ao código.
- **Styled-Components**: Permite estilizar componentes React de forma elegante e dinâmica.
- **React Router**: Gerencia as rotas e a navegação da aplicação.
- **Jest**: Framework de testes robusto e focado na simplicidade.
- **Formik**: Facilita a construção e validação de formulários no React.

### 📂 Estrutura de Pastas

```
frontend/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── data/                    # Camada de Dados
│   │   ├── protocols/           # Define os contratos que os adaptadores de dados devem seguir
│   │   │   └── http/
│   │   └── usecases/            # Implementações dos casos de uso (regras de negócio)
│   │       └── stocks/
│   ├── domain/                  # Camada de Domínio
│   │   ├── errors/              # Erros específicos do domínio
│   │   └── models/              # Modelos de entidades e objetos de valor
│   ├── infra/                   # Camada de Infraestrutura
│   │   └── http/                # Implementações de protocolos HTTP (ex: adaptadores para APIs)
│   │       ├── axios-http-client/
│   │       └── routes/
│   ├── main/                    # Camada principal que orquestra a inicialização da aplicação
│   │   ├── factories/           # Fábricas para criar instâncias de objetos e injeção de dependências
│   │   │   ├── modules/
│   │   │   └── usecases/
│   │   │       └── stocks/
│   │   ├── http/
│   │   ├── routing/             # Configuração de roteamento da aplicação
│   │   ├── style.css
│   │   └── main.tsx             # Ponto de entrada da aplicação
│   ├── presentation/            # Camada de Apresentação
│   │   ├── assets/             
│   │   │   ├── animations/
│   │   │   └── fonts/
│   │   ├── components/          # Componentes reutilizáveis da UI
│   │   │   ├── button/
│   │   │   ├── errorPanel/
│   │   │   ├── iconBack/
│   │   │   ├── input/
│   │   │   ├── inputDate/
│   │   │   ├── loadingPanel/
│   │   │   ├── loadingScreen/
│   │   │   ├── searchInput/
│   │   │   ├── selectPeriod/
│   │   │   └── toast/
│   │   ├── hooks/               # Hooks customizados para lógica de apresentação
│   │   ├── layout/              # Componentes de layout (ex: cabeçalho, rodapé)
│   │   │   ├── content/
│   │   │   ├── pageWrapper/
│   │   │   └── topbar/
│   │   │       └── components/
│   │   │           └── itemMenu/
│   │   ├── modules/             # Módulos ou páginas específicas da aplicação
│   │   │   ├── dashboard/
│   │   │   │   └── components/
│   │   │   └── home-search/
│   │   ├── style/               # Estilos globais e temas
│   │   └── utils/               # Funções utilitárias para a camada de apresentação
│   ├── vite-env.d.ts
│   
│
├── tests/                       # Testes da aplicação
│   └── data/
│       └── mocks/
│
├── .eslintrc.cjs
├── babel.config.json
├── jest.config.cjs
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```
