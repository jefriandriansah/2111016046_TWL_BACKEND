const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  id_doctor: {
    type: String,
    required: true,
    unique: true,
  },
  name_doctor: {
    type: String,
    required: true,
  },
  specialist: {
    type: String,
    required: true,
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
