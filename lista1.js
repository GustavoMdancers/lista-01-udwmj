// Calculadora web básica

//Variável para armazenar a entrada atual do usuário
let entradaAtual = '';
//Variável para armazenar o resultado atual da operação
let resultadoAtual = '';
//Variável para armazenar a entrada anterior do usuário
let entradaAnterior = '';

function concatenaEntrada (numero) {
    entradaAtual += numero;

}

function concatenaOperacao (operacao) {
    if (entradaAtual === '') {
        return;
    }
    if (entradaAnterior !== '') {
        calculaResultado();
    }
}