require('dotenv').config();

const ManagementClient = require('auth0').ManagementClient;
const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;


const auth0 = new ManagementClient({
  domain: 'dev-urdzk5yq.us.auth0.com',
  clientId: 'YYCViVGRKioB5RNOuZHWNvs50fajQmGI5',
  clientSecret: auth0ClientSecret,
  scope: 'read:users create:users update:users delete:users',
});

exports.userSignUp = async (req, res) => {
  const { email, password } = req.body; // Get email and password from request body

  try {
    // Check if user already exists in Auth0
    const userExists = await auth0.getUser({ email }); // Check if user with given email exists in Auth0
    if (userExists) { // If user exists, return error
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create user in Auth0
    await auth0.createUser({ // Create user in Auth0
      email, // Set user's email
      password, // Set user's password
      connection: 'Username-Password-Authentication', // Update connection name if needed
    });

    res.status(201).json({ message: 'User registered successfully' }); // If user doesn't exist, create user and return success message
  } catch (error) {
    console.error(error); // If there's an error, log it to the console
    res.status(500).json({ error: 'Internal server error' }); // Return error message to client
  }
};

/**
 * Sign up an admin to Auth0.
 *
 * This controller function is called when the frontend makes a POST request to
 * '/api/auth/admin/sign-up'. It takes the request body containing the admin's
 * username and password, and creates a new user in Auth0 with the given
 * credentials.
 *
 * @param {Object} req - The request object received from the frontend.
 * @param {Object} req.body - The body of the request containing the new admin's
 *                            username and password.
 * @param {string} req.body.username - The new admin's username.
 * @param {string} req.body.password - The new admin's password.
 * @param {Object} res - The response object.
 *
 * @returns {Object} The response object containing the status code and a JSON
 *                   object with a message indicating success or an error.
 */
exports.adminSignUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin already exists in Auth0
    const adminExists = await auth0.getUser({ username });
    if (adminExists) {
      return res.status(400).json({
        error: 'Admin username is already taken',
      });
    }

    // Create admin in Auth0
    await auth0.createUser({
      username,
      password,
      connection: 'Username-Password-Authentication', // Update connection name if needed
    });

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

