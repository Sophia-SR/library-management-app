import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';
import UserDelete from './UserDelete';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5432/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleCreateUser = async (formData) => {
    try {
      await axios.post('http://localhost:5432/api/users/register', formData);
      const updatedUsers = [...users, formData];
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.username}</strong> - {user.email}
            <UserDelete userId={user.id} onDelete={() => handleDeleteUser(user.id)} />
          </li>
        ))}
      </ul>
      <h2>Create User</h2>
      <UserForm onSubmit={handleCreateUser} />
    </div>
  );
};

export default AdminDashboard;
