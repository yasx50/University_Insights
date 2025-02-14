import {AppliedStudent} from "../models/appliedStudent.schema.js";

// Controller to add a new applied student
export const addAppliedStudent = async (req, res) => {
  try {
    const { name, email, phone, preferredCountry, dateOfBirth, passportNumber } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !phone || !preferredCountry || !dateOfBirth || !passportNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if a student with the same email or passport number already exists
    const existingStudent = await AppliedStudent.findOne({ 
      $or: [{ email }, { passportNumber }] 
    });
    if (existingStudent) {
      return res.status(409).json({ message: "Email or passport number already exists" });
    }

    // Create a new AppliedStudent document
    const newStudent = new AppliedStudent({
      name,
      email,
      phone,
      preferredCountry,
      dateOfBirth,
      passportNumber,
    });

    // Save the new student to the database
    await newStudent.save();

    res.status(201).json({
      message: "Applied student added successfully",
      student: newStudent,
    });
  } catch (error) {
    console.error("Error adding applied student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller to fetch all applied students
export const getAllAppliedStudents = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await AppliedStudent.find();

    // Return the response
    res.status(200).json({
      message: "Applied students retrieved successfully",
      students,
    });
  } catch (error) {
    console.error("Error fetching applied students:", error);
    res.status(500).json({ message: "Server error" });
  }
};
