import express from 'express';

const app = express();

app.listen(2000, () => {
    console.log('Server is running on http://localhost:2000');
});