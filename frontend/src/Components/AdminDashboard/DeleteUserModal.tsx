import React from 'react';
import { deleteUser } from './api'; // Import API function for deleting a user

interface DeleteUserModalProps {
  user: User;
  onClose: () => void;
}

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ user, onClose }) => {
  const handleDeleteUser = async () => {
    try {
      await deleteUser(user.id); // Call API function to delete user
      onClose(); // Close modal after successful deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={onClose}>Cancel</button>
      <button onClick={handleDeleteUser}>Delete</button>
    </div>
  );
};

export default DeleteUserModal;