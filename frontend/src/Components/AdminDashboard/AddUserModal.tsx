import React, { useState, useContext } from 'react';
import { addUser } from './api'; // Import API function for adding a user
import { AuthContext } from './AuthContext'; // Import AuthContext for accessing user authentication state

interface AddUserModalProps {
  onClose: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ onClose }) => {
  const { isAdmin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async () => {
    try {
      await addUser({ email, password }); // Call API function to add a new user
      onClose(); // Close modal after successful addition
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      {isAdmin && (
        <div>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleAddUser}>Add User</button>
        </div>
      )}
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default AddUserModal;
Now, let's create the corresponding API function component:

typescript
Copy code
// api.ts
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Update with your backend API base URL

export const addUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users`, userData); // POST request to add a new user
    return response.data;
  } catch (error) {
    throw new Error(`Error adding user: ${error.message}`);
  }
};