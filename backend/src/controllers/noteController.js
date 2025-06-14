import Note from "../models/Note.js";


export async function index(request, response) {
    try {
        
        // Fetch all notes from the database
        // and sort them by creation date, newest first
        const notes = await Note.find().sort({ createdAt: -1 });
        
        // Return the list of notes
        response.status(200).json(notes);
    } catch (error) {
        console.error('Error fetching notes:', error);
        response.status(500).json({message: 'Internal Server Error'});
    }
}

export async function show(request, response) {

    try {
        const noteId = request.params.id;

        const note = await Note.findById(noteId);
        
        // Check if the note exists
        if (!note) {
            return response.status(404).json({ message: 'Note not found' });
        }

        // Return the note
        response.status(200).json( { message: "Note fetched successfully", note: note});
    } catch (error) {
        console.error('Error fetching note:', error);
        response.status(500).json({message: 'Internal Server Error'});
    }
}

export async function store(request, response) {
    
    try {
        const { title, content } = request.body;

        const newNote = new Note({
            title: title,
            content: content
        });

        const savedNote = await newNote.save();
        response.status(201).json({ message: 'Note created successfully', note: savedNote });

    } catch (error) {
        console.error('Error creating note:', error);
        response.status(500).json({message: 'Internal Server Error'});
    }
}

export async function update(request, response) {
    const noteId = request.params.id;
    const { title, content } = request.body;   

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            noteId, 
            { 
                title: title, 
                content: content 
            }, 
            { 
                new: true 
            }
        );

        if (!updatedNote) {
            return response.status(404).json({ message: 'Note not found' });
        }

        // Return the updated note
        response.status(200).json({ message: 'Note updated successfully', note: updatedNote });

    } catch (error) {
        console.error('Error updating note:', error);
        response.status(500).json({message: 'Internal Server Error'});
    } 
}

export async function destroy(request, response) {
    const noteId = request.params.id;
    try {
        const deletedNote = await Note.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return response.status(404).json({ message: 'Note not found' });
        }

        // Return a success message
        response.status(200).json({ message: `Note with ID ${noteId} deleted successfully!` });

    } catch (error) {
        console.error('Error deleting note:', error);
        return response.status(500).json({message: 'Internal Server Error'});
    }
}