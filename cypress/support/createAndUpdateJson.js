const fs = require('fs');

// Caminho para o arquivo JSON
const filePath = 'cypress/fixtures/EnterProductData.json';

// Função para calcular a data atual + 31 dias no formato MM/DD/YYYY
function calcularDataMais31Dias() {
    const hoje = new Date();
    hoje.setDate(hoje.getDate() + 31); // Adiciona 31 dias à data atual

    // Formata a data no formato MM/DD/YYYY
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0, então adicionamos +1
    const dia = hoje.getDate().toString().padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${mes}/${dia}/${ano}`;
}

// Lê o arquivo JSON, atualiza o campo startDateField e escreve de volta
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        const novaData = calcularDataMais31Dias();
        jsonData.startDateField = novaData;

        // Escreve de volta para o arquivo JSON
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
        console.log('Data atualizada com sucesso:', novaData);
    } catch (error) {
        console.error('Erro ao atualizar a data:', error);
    }
});
