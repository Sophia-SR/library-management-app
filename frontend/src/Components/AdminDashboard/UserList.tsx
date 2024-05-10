import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  username: string;
  email: string;
}

/**
 * This component fetches a list of users from the server
 * and displays them in a list.
 */
const UserList: React.FC = () => {
  // Store the list of users fetched from the server.
  const [users, setUsers] = useState<User[]>([]);

  // `useEffect` is a React hook that allows us to run some code
  // after the component has been rendered to the DOM.
  // The first argument is the function to run, and the second
  // argument is the dependencies of the function.
  // In this case, we only want to run the function when the
  // component is first rendered, so we pass an empty array
  // as the second argument.
  useEffect(() => {
    // Define an async function to fetch the list of users
    // from the server.
    const fetchUsers = async () => {
      try {
        // Make a GET request to the server to fetch the list
        // of users. The `await` keyword pauses the function
        // until the request is complete, and the response is
        // stored in the `response` variable.
        const response = await axios.get<User[]>(
          'http://localhost:5432/api/users'
        );

        // The `data` property of the response contains the
        // data returned from the server. In this case, it's
        // the list of users. Store this list in the `users`
        // state variable.
        setUsers(response.data);
      } catch (error) {
        // If there's an error, log it to the console.
        console.error('Error fetching users:', error);
      }
    };

    // Run the `fetchUsers` function defined above.
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="space-y-2">
        {/*
          Map over the list of users and render a list item
          for each one.
        */}
        {users.map((user) => (
          <li key={user.id} className="bg-gray-100 p-4 rounded-md">
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
