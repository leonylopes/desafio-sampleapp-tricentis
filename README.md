## 🚀 Desafio Sample App Tricentis

Bem-vindo ao projeto Desafio Sample App Tricentis! Este repositório contém as instruções para configurar e executar o projeto. 

## ✅ Pré-requisitos

- Para executar este projeto, você precisará ter o **Node.js** instalado. Caso não tenha, você pode baixá-lo facilmente [Baixe aqui](https://nodejs.org/en/).

- E também um editor de código, pode ser uma IDE de sua preferência. Recomendo o **Visual Studio Code**. [Baixe aqui](https://code.visualstudio.com)

---

## 📥 Clonando o Projeto

Para clonar o projeto, utilize o seguinte comando:

```bash
git clone https://github.com/leonylopes/desafio-sampleapp-tricentis.git
```

---

## 📦 Instalando as dependências do projeto

Após clonar o projeto, siga as instruções abaixo:

**1**. Abra o VS Code

**2**. Procure a pasta do projeto clonado

**3**. Abra um novo terminal

**4**. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

**5**. Verifique se a pasta `node_modules` foi criada após a execução do comando acima.

## 🗓️ Atualizando a Data

Para atualizar a data no campo `startDateField` no arquivo `EnterProductData.json`, execute o comando:

```bash
node cypress/support/createAndUpdateJson.js
```

Verifique se a data foi atualizada no seguinte caminho: `cypress/fixtures/EnterProductData.json`. 

**Lembre-se**: Conforme regra do site, a data precisa ter pelo menos um mês à frente a partir da data atual.

---

## 🔧 Estrutura de Pastas do Projeto

Este projeto utiliza o Cypress para testes automatizados. Abaixo está a estrutura de pastas e arquivos organizados para facilitar a manutenção e escalabilidade do projeto.

## Estrutura

```plaintext
cypress/
│
├── e2e/
│   └── sampleappTricentis.feature
│
├── fixtures/
│   ├── EnterInsurantData.json
│   ├── EnterProductData.json
│   ├── EnterVehicleData.json
│   └── SendQuote.json
│
├── support/
│   ├── elements/
│   │   ├── enterInsurantData_elements.js
│   │   ├── enterProductData_elements.js
│   │   ├── enterVehicleData_elements.js
│   │   ├── selectPriceOption_elements.js
│   │   └── sendQuote_elements.js
│   │
│   ├── pages/
│   │   ├── enterInsurantData_page.js
│   │   ├── enterProductData_page.js
│   │   ├── enterVehicleData_page.js
│   │   ├── selectPriceOption_page.js
│   │   └── sendQuote_page.js
│   │
│   └── step_definitions/
│       ├── commands.js
│       ├── createAndUpdateJson.js
│       └── e2e.js
│
├── node_modules/
│
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 🖥️ Executando pela Interface

Para executar os testes pela interface, utilize o comando:

```bash
npx cypress open
```

- O Cypress será aberto. Selecione a opção **"E2E Testing"**.
- Em seguida, escolha o navegador para execução.
- Por fim, selecione o arquivo `.feature` que deseja testar.

## 🖥️ Rodando os Testes no Terminal

Se preferir rodar os testes diretamente pelo terminal, utilize o seguinte comando:

```bash
npx cypress run
```

---

## 📚 Documentação

- Consulte a documentação Oficial do Cypress. [Acesse aqui](https://docs.cypress.io/app/get-started/why-cypress)

---

## 🎉 Contribuições

Sinta-se à vontade para contribuir com melhorias! 

👨‍💻 Boa sorte e divirta-se testando! 🎉