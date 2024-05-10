import React, { useState } from 'react';
import axios from 'axios';

interface BookFavoriteProps {
  userId: string;
  bookId: string;
}

const BookFavorite: React.FC<BookFavoriteProps> = ({ userId, bookId }) => {
  const [message, setMessage] = useState<string>('');

  const handleAddToFavorites = async () => {
    try {
      const response = await axios.post<{ message: string }>('http://localhost:5432/api/favorites', { userId, bookId });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error adding book to favorites:', error);
      setMessage('Error adding book to favorites');
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleAddToFavorites}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Add to Favorites
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default BookFavorite;
