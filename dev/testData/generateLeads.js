const faker = require('faker')
const fs = require('fs')

exports.generateLeadsArr = (numberOfLeads) => {
  const leads = []

  for (let c = 0; c < numberOfLeads; c++) {
    leads.push(generateLead(c))
  }
  return leads
}

const generateLead = (idx) => ({
  leadName: `${faker.name.firstName()} ${faker.name.lastName()}` ,
  company: faker.company.companyName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  leadSrc: `${faker.name.firstName()} ${faker.name.lastName()}`,
  adress: generateAdress(idx),
  title: faker.name.jobTitle(),
  industry: faker.name.jobType(),
  revenue: 999999,
  status: 'pending'
})

const generateAdress = (idx) => JSON.parse(fs.readFileSync(__dirname + '/addresses.json'))[idx]

