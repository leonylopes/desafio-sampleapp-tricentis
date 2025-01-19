```markdown
# 🚀 Desafio Sample App Tricentis

Bem-vindo ao projeto Desafio Sample App Tricentis! Este repositório contém as instruções para configurar e executar o projeto. 

## 📦 Pré-requisitos

Para executar este projeto, você precisará ter o **Node.js** instalado. Caso não tenha, você pode baixá-lo facilmente em [nodejs.org](https://nodejs.org/en/).

## 📥 Clonando o Projeto

Para clonar o projeto, utilize o seguinte comando:

```bash
git clone https://github.com/leonylopes/desafio-sampleapp-tricentis.git
```

## ⚙️ Instruções para Execução

Após clonar o projeto, siga as instruções abaixo:

**1**. Abra o terminal e navegue até a pasta do projeto.
**2**. Execute o seguinte comando para instalar as dependências do projeto:

    ```bash
    npm install
    ```

**3**. Verifique se a pasta `node_modules` foi criada após a execução do comando acima.

### 🗓️ Atualizando a Data

Para atualizar a data no campo `startDateField` no arquivo `EnterProductData.json`, execute o comando:

```bash
node cypress/support/createAndUpdateJson.js
```

Verifique se a data foi atualizada no seguinte caminho: `cypress/fixtures/EnterProductData.json`. **Lembre-se**: A data precisa ter pelo menos um mês à frente a partir da data atual.

## 🖥️ Executando pela Interface

Para executar os testes pela interface, utilize o comando:

```bash
npx cypress open
```

- O Cypress será aberto. Selecione a opção **"E2E Testing"**.
- Em seguida, escolha o navegador para execução.
- Por fim, selecione o arquivo `.feature` que deseja testar.

## 🏃‍♂️ Rodando os Testes no Terminal

Se preferir rodar os testes diretamente pelo terminal, utilize o seguinte comando:

```bash
npm run cypress
```

## 🎉 Contribuições

Sinta-se à vontade para contribuir com melhorias! 

---

👨‍💻 Boa sorte e divirta-se testando! 🎉
```