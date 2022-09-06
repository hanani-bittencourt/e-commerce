const pedido = {
    numeroPedido: 12345,
    tipo: 'Camiseta Polo',
    valor: 150.00
};

const prazo = {
    numeroPedido: 12345,
    dataPedido: '10/08/2022',
    previsaoEntrega: '01/08/2022'
};

const endereco = {
    numeroCasa: 10,
    rua: 'São José',
    bairro: 'Cohama'
};

function getBotResponse(input) {
    if (input == "#prazo") {
        return "Numero do pedido: " + prazo.numeroPedido + "ㅤㅤㅤㅤData do pedido: " + prazo.dataPedido + "ㅤㅤㅤㅤPrevisão de entrega :  " + prazo.previsaoEntrega;
    } else if (input == "#endereco") {
        return "Número da casa: " + endereco.numeroCasa + "ㅤㅤㅤㅤㅤㅤㅤRua: " + endereco.rua + "ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤBairro : " + endereco.bairro;
    }

    // Simple responses
    if (input == "#meupedido") {
        return "Numero do pedido: " + pedido.numeroPedido + "ㅤㅤㅤㅤㅤProduto: " + pedido.tipo + "ㅤㅤㅤㅤㅤㅤValor : " + pedido.valor;

    } else if (input == "#help") {
        return "Comandos : #meupedido / #prazo / #endereco";
    } else {
        return "Comando inexistente !!! Digite #help para ver as opções";
    }
}