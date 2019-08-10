const { addLeads } = require('./controllers')
const { generateLeadsArr } = require('../dev/testData/generateLeads')

console.log(addLeads(generateLeadsArr(99), (err, response) => {
  console.log(err, response)
}))