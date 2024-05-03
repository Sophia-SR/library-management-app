import React, { useState } from 'react';
import axios from 'axios';

interface SignUpProps {
  onSignUp: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    setIsValid(email.length > 0 && password.length > 0);
  };

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('Password is required');
    } else if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      try {
        await axios.post('/api/auth/user/signup', { email, password });
        // Call the onSignUp callback to notify the parent component
        onSignUp();
      } catch (error) {
        console.error('Error:', error);
        // Handle error response from the server
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-12 max-w-full text-lg leading-8">
        <div className="flex flex-col w-full max-w-md">
          <label htmlFor="email" className="mb-2">Email*</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
              validateForm();
            }}
            className={`h-12 bg-white border ${emailError ? 'border-red-500' : 'border-gray-300'} px-4 py-2 rounded-md w-full`}
            required
            aria-label="Email"
          />
          {emailError && <p className="text-red-500 mt-1">{emailError}</p>}
        </div>
        <div className="flex flex-col mt-6 w-full max-w-md">
          <label htmlFor="password" className="mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
              validateForm();
            }}
            className={`h-12 bg-white border ${passwordError ? 'border-red-500' : 'border-gray-300'} px-4 py-2 rounded-md w-full`}
            required
            aria-label="Password"
          />
          {passwordError && <p className="text-red-500 mt-1">{passwordError}</p>}
        </div>
        <div className="flex flex-col mt-8 w-full max-w-md">
          <button
            type="submit"
            className={`px-8 py-4 bg-black text-white rounded-md text-xl ${
              isValid ? 'hover:bg-gray-900' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!isValid}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
