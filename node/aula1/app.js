const axios = require('axios')
const { Pessoa } = require('./mod1')

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => console.log(response.data))
//   .catch(e => console.log(e))

const p1 = new Pessoa('Jão')
console.log(p1)
