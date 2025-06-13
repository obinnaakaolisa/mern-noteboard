import express from 'express';

const app = express();

//Fetch all notes
app.get('/api/notes', (request, response) => {
    response.send('Notes fetched successfully!');
});

//Create a new note
app.post('/api/notes', (request, response) => {
    response.send('Note created successfully!');
});

// Update an existing note
app.put('/api/notes/:id', (request, response) => {
    const noteId = request.params.id;
    response.send(`Note with ID ${noteId} updated successfully!`);
});

// Delete a note
app.delete('/api/notes/:id', (request, response) => {
    const noteId = request.params.id;
    response.send(`Note with ID ${noteId} deleted successfully!`);
});

app.listen(2000, () => {
    console.log('Server is running on http://localhost:2000');
});