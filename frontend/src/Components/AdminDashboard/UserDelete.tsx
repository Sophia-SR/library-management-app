import React from 'react';
import axios from 'axios';

interface Props {
  userId: string;
  onDelete: () => void;
}

const UserDelete: React.FC<Props> = ({ userId, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5432/api/users/${userId}`);
      onDelete();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Delete
    </button>
  );
};

export default UserDelete;
