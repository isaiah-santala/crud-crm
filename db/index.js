const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/crudCrm', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const CRMSchema = new mongoose.Schema({
  leadName: String,
  company: String,
  email: String,
  phone: String,
  leadSrc: String,
  adress: Object,
  title: String,
  industry: String,
  revenue: Number,
  status: String
});

exports.CRM = mongoose.model('Leads', CRMSchema);

