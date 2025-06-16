import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import RateLimitAlert from '../components/RateLimitAlert';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/notes")
        console.log(response.data);
        setNotes(response.data)
        setIsRateLimited(false)
      } catch (error) {
        console.error('Error fetching notes:', error);
        if(error.response && error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error('Failed to fetch notes. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitAlert />}
    </div>
  )
}

export default HomePage