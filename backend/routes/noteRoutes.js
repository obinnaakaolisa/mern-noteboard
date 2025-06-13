import express from 'express';

const router = express.Router();

//Fetch all notes
router.get('/', (request, response) => {
    response.status(200).send('Notes fetched successfully!');
});

//Fetch a single note by ID
router.get('/:id', (request, response) => {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} fetched successfully!`);
});

//Create a new note
router.post('/', (request, response) => {
    response.status(201).send('Note created successfully!');
});

// Update an existing note
router.put('/:id', (request, response) => {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} updated successfully!`);
});

// Delete a note
router.delete('/:id', (request, response) => {
    const noteId = request.params.id;
    response.status(200).send(`Note with ID ${noteId} deleted successfully!`);
});

export default router;