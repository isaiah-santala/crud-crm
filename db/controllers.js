const { CRM } = require('./index')

exports.addLeads = (leads, cb) => {
  CRM.create(leads, (err, response) => {
    if (err) return cb(err)
    cb(null, response)
  })
}

exports.getAllLeads = (cb) => {
  CRM.find({}, (err, leads) => {
    if (err) return cb(err)
    cb(null, leads)
  })
}

