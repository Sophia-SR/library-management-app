import axios from 'axios';

const BASE_URL = 'http://localhost:5432'; // Backend API base URL


/**
 * This function sends a GET request to the backend API to retrieve a list of all users.
 * The function constructs the URL for the request based on the BASE_URL constant
 * and the '/api/users' endpoint.
 * The request is sent to the backend API using the axios library.
 * The function returns a Promise which resolves to the data from the successful response.
 * If the request fails for any reason, the function throws an error with a descriptive message.
 * The error message includes the error message from the failed request.
 *
 * @returns A Promise which resolves to the list of all users from the successful response
 */
export const listUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users`); // GET request to retrieve list of all users
    return response.data; // Return the list of all users from the successful response
  } catch (error) {
    throw new Error(`Error listing users: ${error.message}`); // Throw an error with a descriptive message
  }
};


export const deleteUser = async (userId: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};


/**
 * This function sends a PUT request to the backend API to update an existing user.
 * The function takes in a userId as a parameter which is used to construct the URL
 * for the request.
 * The function also takes in an object containing the user's email and/or password
 * as the second parameter. The object is expected to have at least one of the two
 * fields (email or password) set, and the function will throw an error if neither
 * field is set.
 * The request is sent to /api/users/:userId where :userId is replaced with the userId
 * parameter.
 * The request sends a JSON object containing the updated email and/or password.
 * The function returns a Promise which resolves to the data from the successful response.
 * If the request fails for any reason, the function throws an error with a descriptive message.
 *
 * @param userId The ID of the user to update
 * @param userData An object containing the updated email and/or password
 * @returns The updated user object from the successful response
 */
export const editUser = async (userId: number, userData: { email?: string; password?: string }) => {
  // Ensure that the userData object has at least one field set
  if (!userData.email && !userData.password) {
    throw new Error('Invalid user data: Must specify at least one of email or password');
  }

  try {
    const response = await axios.put(`${BASE_URL}/api/users/${userId}`, userData); // PUT request to update an existing user
    return response.data; // Return the updated user object from the successful response
  } catch (error) {
    throw new Error(`Error editing user: ${error.message}`); // Throw an error with a descriptive message
  }
};


/**
 * This function sends a POST request to the backend API to add a new user.
 * The function takes in an object containing the user's email and password.
 * The request is sent to the /api/users endpoint on the backend API base URL.
 * The request sends a JSON object containing the user's email and password.
 * The function returns a Promise which resolves to the data from the successful response.
 * If the request fails for any reason, the function throws an error with a descriptive message.
 * The error message includes the error message from the failed request.
 *
 * @param userData An object containing the user's email and password
 * @returns A Promise which resolves to the data from the successful response
 */
export const addUser = async (userData: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users`, userData); // POST request to add a new user
    return response.data; // Return the data from the successful response
  } catch (error) {
    throw new Error(`Error adding user: ${error.message}`); // Throw an error with a descriptive message
  }
};

  // Add a new book
/**
 * This function sends a POST request to the backend API to add a new book.
 * The request sends a JSON object containing the book's title and author.
 * If the request is successful, the backend API returns the newly created book object.
 * This function returns the book object from the successful response.
 *
 * @param bookData An object containing the book's title and author
 * @returns The newly created book object
 */
export const addBook = async (bookData: { title: string; author: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/books`, bookData); // POST request to add a new book
    return response.data; // Return the book object from the successful response
  } catch (error) {
    throw new Error(`Error adding book: ${error.message}`); // Throw an error with a descriptive message
  }
};

// Update an existing book

/**
 * This function sends a PUT request to the backend API to update an existing book.
 * The request sends a JSON object containing the book's title and/or author.
 * The function takes in a bookId as a parameter which is used to construct the URL
 * for the request.
 * The request is sent to /api/books/:bookId where :bookId is replaced with the bookId
 * parameter.
 * If the request is successful, the backend API returns the updated book object.
 * This function returns the book object from the successful response.
 *
 * @param bookId The ID of the book to update
 * @param bookData An object containing the updated title and/or author
 * @returns The updated book object
 */
export const updateBook = async (bookId: number, bookData: { title?: string; author?: string }) => {
  try {
    const response = await axios.put(`${BASE_URL}/api/books/${bookId}`, bookData); // PUT request to update an existing book
    return response.data; // Return the updated book object from the successful response
  } catch (error) {
    throw new Error(`Error updating book: ${error.message}`); // Throw an error with a descriptive message
  }
};

// Delete a book
/**
 * This function sends a DELETE request to the backend API to delete a book.
 * The function takes in a bookId as a parameter which is used to construct the URL
 * for the request.
 * The request is sent to /api/books/:bookId where :bookId is replaced with the bookId
 * parameter.
 * If the request is successful, the backend API returns the deleted book object.
 * This function returns the deleted book object from the successful response.
 *
 * @param bookId The ID of the book to delete
 * @returns The deleted book object
 */
export const deleteBook = async (bookId: number) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/books/${bookId}`); // DELETE request to delete a book
    return response.data; // Return the deleted book object from the successful response
  } catch (error) {
    throw new Error(`Error deleting book: ${error.message}`); // Throw an error with a descriptive message
  }
};

// Fetch all books
/**
 * This function sends a GET request to the backend API to fetch all books.
 * The request is sent to /api/books.
 * If the request is successful, the backend API returns an array of book objects.
 * This function returns the array of book objects from the successful response.
 *
 * If the request fails for any reason, the function throws an error with a descriptive message.
 * The error message includes the error message from the failed request.
 *
 * @returns The array of book objects from the successful response
 */
export const getBooks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/books`); // GET request to fetch all books
    return response.data; // Return the array of book objects from the successful response
  } catch (error) {
    throw new Error(`Error fetching books: ${error.message}`); // Throw an error with a descriptive message
  }
};
