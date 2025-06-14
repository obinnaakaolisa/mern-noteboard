import express from 'express';
import { index, show, store, update, destroy } from '../controllers/noteController.js';

const router = express.Router();

//Fetch all notes
router.get('/', index);

//Fetch a single note by ID
router.get('/:id', show);

//Create a new note
router.post('/', store);

// Update an existing note
router.put('/:id', update);

// Delete a note
router.delete('/:id', destroy);

export default router;