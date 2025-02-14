import mongoose from "mongoose";

const appliedStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  preferredCountry: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  passportNumber: {
    type: String,
    required: true,
    unique: true,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
});

const AppliedStudent = mongoose.model('AppliedStudent', appliedStudentSchema);

module.exports = AppliedStudent;
