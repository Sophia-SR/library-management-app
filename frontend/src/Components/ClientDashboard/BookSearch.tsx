import React, { useState } from 'react';
import axios from 'axios';

interface Book {
  _id: string;
  title: string;
  author: string;
}

const BookSearch: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get<Book[]>(`http://localhost:5432/api/books/search?title=${title}&author=${author}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Search Books</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="border border-gray-400 rounded px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        />
        <input
          type="text"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
          className="border border-gray-400 rounded px-2 py-1 mb-2 md:mb-0 md:mr-2 w-full md:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
        >
          Search
        </button>
      </div>
      <ul>
        {searchResults.map((book: Book) => (
          <li key={book._id} className="mb-2">
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookSearch;
