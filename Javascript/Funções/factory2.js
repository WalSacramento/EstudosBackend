//Criando um objeto através da passagem de parametros na funcao factory

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: preco * 0.1
  }
}

const refrigerante = criarProduto('CocaCola', 25)
const sabonete = criarProduto('Dove', 10)


console.log(refrigerante)
console.log(sabonete)