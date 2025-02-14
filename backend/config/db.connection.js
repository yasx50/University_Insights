import mongoose from "mongoose";
import dotenv from "dotenv";
const DB_NAME = "UNIVERSITY_INSIGTS"

dotenv.config();

const connectDB = async () => {
    try {
        const connectionString = `mongodb+srv://khawsemanthan246:rvwEO5ZluVXwcrxX@cluster0.w4z3e.mongodb.net/${DB_NAME}`;
        console.log("Connecting to:", connectionString);

        const connectionInstance = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected:', connectionInstance.connection.host);
    } catch (error) {
        console.error('Error occurred while connecting to database:', error.message);
        process.exit(1);
    }
};

export default connectDB;
