let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a //return implicito

let ola = function () {
  return 'Olá'
}

ola = () => {
  return 'Olá'
}

ola = () => 'Olá' 
ola = _ => 'Olá' //possui um param _
console.log(ola())