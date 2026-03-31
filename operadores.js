//OPERADOR E &&
let maiorIdade = true;
let possuiDocumento = false;

if (maiorIdade && possuiDocumento) {
    console.log('Pode entrar na festa!')
} else {
    console.log('Não pode entrar na festa.')
};

//OPERADOR OU ||
let cartaoCredito = false;
let dinheiro = true;

if (cartaoCredito || dinheiro) {
    console.log('Pode fazer a compra.')
} else {
    console.log('Não pode fazer a compra.')
};

//OPERADOR NOT!
let estaChovendo = true;

if (!estaChovendo) {
    console.log('Pode sair sem guarda-chuva')
} else {
    console.log('Leve o guarda-chuva.')
};