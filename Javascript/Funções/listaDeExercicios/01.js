/*01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/

const operacoes = (valor1, valor2) => {
  const soma = valor1 + valor2
  const subtracao = valor1 - valor2
  const multiplicacao = valor1 * valor2
  const divisao = valor1 / valor2

  return console.log(`Soma: ${soma}, Subtração: ${subtracao}, Multiplicação: ${multiplicacao}, Divisão: ${divisao}`) 
}

operacoes(1, 2)