import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils';
import axiosInstance from '../lib/axios';
import toast from 'react-hot-toast';

const NoteCard = ({ note, setNotes }) => {

    const handleDelete = async (e, note_id) => {
        // Implement delete functionality here
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delete this note?")) {
            return;
        }

        // Call the API to delete the note
        try {
            await axiosInstance.delete(`/notes/${note_id}`);
            setNotes((prevNotes) => prevNotes.filter(note => note._id !== note_id));
            toast.success("Note deleted successfully!");
        } catch (error) {
            console.error("Error deleting note:", error);
            toast.error("Failed to delete note. Please try again.");
            return;
        }
    }

  return (
    <Link 
        to={ `/notes/${note._id}` }
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#35bd89] hover:border-[#00FF9D] p-4">
            <div className="card-body">
                <h3 className="card-title text-base-content">{ note.title }</h3>
                <p className="text-base-content/70 line-clamp-3">{ note.content }</p>
                <div className="card-actions justify-between mt-4 items-center">
                    <span className="text-base-content/60 text-sm">
                        { formatDate(new Date(note.createdAt)) }
                    </span>
                    <div className="flex items-center gap-1">
                        <PenSquareIcon className="size-4" />
                        <button className="btn btn-ghost btn-xs text-error" onClick={(e) => handleDelete(e, note._id)}>
                            <Trash2Icon className="size-4"></Trash2Icon>
                        </button>
                    </div>
                </div>
            </div>
    </Link>
  )
}

export default NoteCard