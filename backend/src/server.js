import express from 'express';
import noteRoutes from './routes/noteRoutes.js';
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT || 2000;

connectDB();

app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:', PORT);
});