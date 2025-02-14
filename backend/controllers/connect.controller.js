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



// Controller to return all connected students
const getAllConnectedStudents = async (req, res) => {
  try {
    // Fetch all students from the collection
    const students = await ConnectedStudent.find();

    // Return the list of students
    res.status(200).json({
      message: 'Connected students retrieved successfully',
      students,
    });
  } catch (error) {
    console.error('Error fetching connected students:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export  {
    getAllConnectedStudents,
    addConnectedStudent
} ;
    



