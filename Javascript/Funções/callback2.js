const notas = [7.7, 6.5, 8.9, 3.6, 9.8, 10, 7.1]

//sem callback
let notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1)

//Com callback

let notasBaixas2
notasBaixas2 = notas.filter((nota) => {
  return nota < 7
})

console.log(notasBaixas2)

//Ou

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)