import ConnectedStudent from '../models/connectedStudent.schema.js'

// Controller to handle adding a new student
const addConnectedStudent = async (req, res) => {
  try {
    const { name, email, phone, country } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !country) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if a student with the same email already exists
    const existingStudent = await ConnectedStudent.findOne({ email });
    if (existingStudent) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // Create a new ConnectedStudent document
    const newStudent = new ConnectedStudent({
      name,
      email,
      phone,
      country,
    });

    // Save the new student to the database
    await newStudent.save();

    res.status(201).json({
      message: 'Student added successfully',
      student: newStudent,
    });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export default addConnectedStudent;
