function criarPessoa (nome) {
  this.nome = nome

  this.falarNome = () => console.log(`Meu nome é ${this.nome}`)
}

const p3 = new criarPessoa('Waldsson')
p3.falarNome()

console.log(p3)