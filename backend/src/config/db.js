import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Function to connect to MongoDB using Mongoose
export const connectDB = async () => {
    try {
        // Connect to MongoDB using Mongoose
        // Replace 'mongodb://localhost:27017/' with your MongoDB connection string
        // If you have a specific database, append it to the connection string
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected successfully');        
    } catch (error) {
        // Log the error and exit the process if the connection fails
        console.error('MongoDB connection error:', error);
         // Exit the process with failure
        process.exit(1);

    }
}
