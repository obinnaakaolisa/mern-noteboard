import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Set the port from environment variables or default to 2000
const PORT = process.env.PORT || 2000;

// Middleware for CORS (Cross-Origin Resource Sharing)
app.use(cors({
    origins: ['https://localhost/5173'],
}));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Middleware for rate limiting
app.use(rateLimiter);

// Define routes for notes
app.use('/api/notes', noteRoutes);

// Root route to check if the server is running
app.get('/', (request, response) => {
    response.status(200).json({status: 200, message: 'Welcome to the Noteboard API'});
});

// Connect to the database and then start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});