import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import UserList from './UserList';

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) return <div>Please log in to access this page</div>;
  if (!user || !user.isAdmin) return <div>Access denied</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserList />
    </div>
  );
};

export default AdminDashboard;
//TODO: Add Interactive DashBoard UI