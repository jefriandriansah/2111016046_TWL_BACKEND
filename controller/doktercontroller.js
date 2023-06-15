const Doctor = require('../model/doktermodel');

// Create a new doctor
const createDoctor = async (req, res) => {
  try {
    const { id_doctor, name_doctor, specialist } = req.body;
    const doctor = new Doctor({ id_doctor, name_doctor, specialist });
    const newDoctor = await doctor.save();
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single doctor by ID
const getDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a doctor by ID
const updateDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const { id_doctor, name_doctor, specialist } = req.body;
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { id_doctor, name_doctor, specialist },
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(updatedDoctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a doctor by ID
const deleteDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctorById,
  deleteDoctorById,
};
