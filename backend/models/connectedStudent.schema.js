import mongoose from "mongoose";

const connectedStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures each email is unique
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  dateSubmitted: {
    type: Date,
    default: Date.now, // Automatically records the submission date
  },
});

const ConnectedStudent = mongoose.model('ConnectedStudent', connectedStudentSchema);

export default  ConnectedStudent;
