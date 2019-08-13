const faker = require('faker')
const fs = require('fs')

exports.generateLeadsArr = (numberOfLeads) => {
  const leads = []
  const doNotRun = [
    41,
    74,
    111,
    142,
    234,
    335
  ]

  for (let c = 0; c < numberOfLeads; c++) {
    if (!doNotRun.includes(c)) leads.push(generateLead(c))
  }
  return leads
}

const generateLead = (idx) => ({
  leadName: `${faker.name.firstName()} ${faker.name.lastName()}` ,
  company: faker.company.companyName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  leadSrc: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: generateAdress(idx),
  title: faker.name.jobTitle(),
  industry: faker.name.jobType(),
  revenue: 999999,
  status: 'pending'
})

const generateAdress = (idx) => JSON.parse(fs.readFileSync(__dirname + '/addresses.json'))[idx]

