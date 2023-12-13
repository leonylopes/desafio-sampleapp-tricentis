 # language: pt

Funcionalidade: Sampleapp Tricentis

        Cenário: Enviar cotação Automovel com sucesso
            Dado que eu esteja na página Automobile Insurance
            E preencho o formulário Enter Vehicle Data
            E preencho o formulário Enter Insurant Data
            E preencho o formulário Enter Product Data
            Quando seleciono a opção desejada clicando no botão Next
            E preencho o formulário Send Quote clicando no botão Send
            Então devo validar a mensagem "Sending e-mail success!" exibida na tela
