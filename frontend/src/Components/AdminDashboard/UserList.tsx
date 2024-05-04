import React, { useEffect, useState } from 'react';
import { getUserList } from './api'; // Import API functions for CRUD operations
import UserItem from './UserItem';

const UserList: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await getUserList(); // Fetch users from backend API
        setUsers(userList);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;