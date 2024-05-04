import React from 'react';
import { deleteUser } from './api'; // Import API function for deleting a user

interface User {
  id: number;
  email: string;
  password: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id); // Call API function to delete user
      // Optionally, update the user list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <button>Edit</button>
      <button onClick={handleDeleteUser}>Delete</button>
    </div>
  );
};

export default UserItem;
