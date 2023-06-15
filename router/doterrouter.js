const express = require('express');
const {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
} = require('../controller/doktercontroller');

const router = express.Router();

// Create a new doctor
router.post('/doctors', createDoctor);

// Get all doctors
router.get('/doctors', getAllDoctors);

// Get a single doctor by ID
router.get('/doctors/:doctorId', getDoctorById);

// Update a doctor by ID
router.put('/doctors/:doctorId', updateDoctorById);

// Delete a doctor by ID
router.delete('/doctors/:doctorId', deleteDoctorById);

module.exports = router;
