import React, { useState } from 'react';
import axios from 'axios';

interface UserFormProps {
  onSubmit: (formData: FormData) => void;
  initialData?: FormData;
}

interface FormData {
  id?: string;
  username: string;
  email: string;
  password: string;
}

/**
 * The UserForm component is a form that allows the user to create a new user
 * or edit an existing one. It takes two props:
 *
 * - onSubmit: A function that will be called when the form is submitted. The
 *    function will be passed the form data as an argument.
 * - initialData: The initial data for the form. If not provided, the form
 *    will be blank.
 */
const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialData }) => {
  /**
   * The formData state variable holds the current state of the form. We use
   * initialData as the initial value if it is provided, otherwise we
   * initialize the form with empty strings for the username, email, and
   * password.
   */
  const [formData, setFormData] = useState<FormData>(initialData || { username: '', email: '', password: '' });

  /**
   * The handleChange function is called whenever the user changes the value
   * of an input field. It takes the event object as an argument, and uses the
   * event.target.name to determine which field to update. Then it updates the
   * formData state variable with the new value.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * The handleSubmit function is called when the user submits the form. It
   * prevents the default form submission behavior and calls the onSubmit
   * function with the form data.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter username"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UserForm;
