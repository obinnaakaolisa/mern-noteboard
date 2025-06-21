import { ArrowLeftIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Validate input fields
    let trimmedTitle = title.trim();
    let trimmedContent = content.trim();
    
    if (!trimmedTitle || !trimmedContent ) {
      toast.error("All input fields are required.");
      return;
    }

    // Set loading state to true
    setLoading(true);

    // Simulate an API call to create a note
    try {
      await axios.post("http://localhost:2000/api/notes", {
        title: trimmedTitle,
        content: trimmedContent,
      });

      // Show success message
      toast.success("Note created successfully!");

      navigate("/");

    } catch (error) {
      console.error("Error creating note:", error);
      if (error.response.status === 429) {
        toast.error("Too many requests. Please try again later.", {
          duration: 4000,
          icon: "⚠️",
        });
      } else {
        toast.error("Failed to create note. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="mr-2 size-5 " />
            Back to Home
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold mb-4">Create a New Note</h2>
              <form action="POST" onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label mb-2">
                    <span className="label-text">Title:</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter note title" 
                    id="title"
                    className="input input-bordered w-full"
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label mb-2">
                    <span className="label-text">Content:</span>
                  </label>
                  <textarea 
                    placeholder="Write your note here..." 
                    id="content"
                    className="textarea textarea-bordered w-full h-48"
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>
                <div className="card-actions justify-end">
                  <button 
                    type="submit" 
                    className={`btn btn-primary mt-4 ${loading ? 'loading' : ''}`}
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNote