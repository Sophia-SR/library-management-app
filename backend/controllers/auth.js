const User = require('../models/user');

/**
 * Handles user registration requests
 *
 * When a user submits a registration request, this function is called
 * with the user's username, email, and password in the request body.
 *
 * We first try to create a new user with the given data using the
 * `createUser` method from the `User` model.
 *
 * If the user is created successfully, we return a 201 Created status
 * code with a JSON object containing the message "User registered
 * successfully".
 *
 * If an error occurs while creating the user, we log the error to the
 * console and return a 500 Internal Server Error status code with a
 * JSON object containing the message "Something went wrong".
 */
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await User.createUser({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error); // Log the error to the console
    res.status(500).json({ error: 'Something went wrong' }); // Return a 500 status code with a JSON object containing the message
  }
};

/**
 * Handles login requests
 *
 * When a user submits a login request, this function is called
 * with the user's email and password in the request body.
 *
 * First, we try to find a user with the given email using the
 * `getUserByEmail` method from the `User` model. If no user is found,
 * we return a 400 error with the message "Invalid credentials".
 *
 * If a user is found, we compare the submitted password with the
 * user's actual password using the `compare` method from the `bcrypt`
 * library. If the passwords don't match, we return a 400 error with
 * the message "Invalid credentials".
 *
 * If the passwords match, we generate a JSON Web Token using the
 * `sign` method from the `jsonwebtoken` library. The token is signed
 * with the "your-secret-key" string as the secret (which is obviously
 * not a good idea in real life). The token has an expiration time of
 * 1 hour.
 *
 * Finally, we return the token to the user in a JSON object with a 200
 * OK status code.
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
