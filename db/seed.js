const { addLeads } = require('./controllers')
const { generateLeadsArr } = require('../dev/testData/generateLeads')

console.log(addLeads(generateLeadsArr(400), (err, response) => {
  console.log(err, response)
}))