import express from 'express';
import noteRoutes from './routes/noteRoutes.js';

const app = express();

app.use('/api/notes', noteRoutes);

app.listen(2000, () => {
    console.log('Server is running on http://localhost:2000');
});