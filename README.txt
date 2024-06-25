Para executar o projeto é necessario ter o node e npm instalados.
Caso nao tenha, podera baixa-los juntos facilmente em https://nodejs.org/en/

Para clonar o projeto:

    - git clone https://github.com/leonylopes/desafio-sampleapp-tricentis.git

Após clonar o projeto segue abaixo instruções para execução:

Com o terminal aberto realize os seguintes comandos:

    Para instalar as dependências do projeto:
        - npm install

    verificar que foi criada a pasta node_modules, após rodar o npm install.

    Para atualizar a data no campo "startDateField" no arquivo "EnterProductData.json" rodar o comando:

        - node cypress/support/createAndUpdateJson.js

    Verificar se a data foi atualizada no caminho: cypress/fixtures/EnterProductData.json
    Existe uma regra no site que a data precisa ter pelo menos um mês à frente.

    Para executar pela interface:

        - npx cypress open

    O cypress será aberto e precisa selecionar a opção "E2E Testing";
    Em seguida selecione o browser para execução
    E por fim, o arquivo .feature

    Para rodar os testes no terminal:

        - npm run cypress