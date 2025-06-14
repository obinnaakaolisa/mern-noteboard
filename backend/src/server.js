import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 2000;

connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Define routes for notes
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:', PORT);
});