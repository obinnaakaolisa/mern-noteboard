import mongoose from 'mongoose';

// Define the schema for a Note
// This schema will define the structure of the Note documents in the MongoDB collection
const noteSchema = new mongoose.Schema(
    {
        title: {  type: String, required: true },
        content: { type: String, required: true },
    }, 
    {
        timestamps: true // Automatically manage createdAt and updatedAt fields
    } 
);

// Create a model for the Note schema
const Note = mongoose.model('Note', noteSchema);

export default Note;