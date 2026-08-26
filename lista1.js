// Calculadora web simples em JavaScript

//Variável para armazenar a entrada atual do usuário
let entradaAtual = '';
//Variável para armazenar o resultado atual da operação
let resultadoAtual = '';
//Variável para armazenar a entrada anterior do usuário
let entradaAnterior = '';

// Adiciona um evento de clique a todos os botões da calculadora
document.querySelectorAll('button').forEach((botao) => {
    botao.addEventListener('click', () => {
        console.log(`Botão pressionado: ${botao.textContent.trim()}`);
    });
});

// Função para adicionar números à entrada atual
function adicionarNumero (numero) {
    entradaAtual += numero;
    document.getElementById('display').value = `${entradaAnterior} ${resultadoAtual} ${entradaAtual}`;
}

// Função para adicionar operadores à operação atual
function adicionarOperador (operacao) {
    if (entradaAtual === '') {
        return;
    }
    if (entradaAnterior !== '') {
        calcular();
    }
    resultadoAtual = operacao;
    entradaAnterior = entradaAtual;
    entradaAtual = '';
    document.getElementById('display').value = `${entradaAnterior} ${resultadoAtual}`; 
}

// Função para calcular o resultado da operação atual
function calcular() {
    // Verifica se as entradas são válidas
    if (entradaAnterior === '' || entradaAtual === '') {
        // Se uma das entradas estiver vazia, não faz nada
        return;
    }
    // Converte as entradas para números de ponto flutuante
    let resultado;
    const anterior = parseFloat(entradaAnterior);
    const atual = parseFloat(entradaAtual);

    // Realiza a operação com base no operador atual
    switch (resultadoAtual) {
        case '+':
        resultado = anterior + atual;
        break;
    case '-':
        resultado = anterior - atual;
        break;
    case '*':
        resultado = anterior * atual;
        break;
    case '/':
        // Verifica se o divisor é zero antes de realizar a divisão
        if (atual === 0) {
            alert('Erro: Divisão por zero não é permitida.');
            return;
        }
        resultado = anterior / atual;
        break;
    default:
        return;
    }
    // Atualiza as variáveis de entrada e resultado após o cálculo
    entradaAtual = resultado.toString();
    resultadoAtual = '';
    entradaAnterior = '';
    document.getElementById('display').value = entradaAtual;
}

// Função para limpar o display e resetar as variáveis
function limparDisplay() {
    entradaAtual = '';
    resultadoAtual = '';
    entradaAnterior = '';
    document.getElementById('display').value = '';
}

