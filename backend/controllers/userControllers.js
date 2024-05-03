const User = require('../models/user');

exports.editUser = async (req, res) => {
  // Get ID of user to be edited from request parameters
  const { id } = req.params;

  // Get updated user details from request body
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findByPk(id);

    // If user doesn't exist, return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user's email if it was provided in the request
    user.email = email || user.email; // If email is not provided, keep the existing email

    // Update user's password if it was provided in the request
    user.password = password || user.password; // If password is not provided, keep the existing password

    // Save updated user details to the database
    await user.save();

    // Return success message to the client
    res.status(200).json({ message: 'User details updated successfully' });
  } catch (error) {
    // If there's an error, log it to the console
    console.error(error);

    // Return error message to the client
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
  // Get ID of user to be deleted from request parameters
  const { id } = req.params;

  try {
    // Check if the user exists in the database
    const user = await User.findByPk(id);

    // If user doesn't exist, return error
    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // Return a 404 error with an error message
    }

    // Delete the user from the database
    await user.destroy(); // This will remove the user from the database

    // Return success message to the client
    res.status(200).json({ message: 'User deleted successfully' }); // Return a 200 success with a success message
  } catch (error) {
    // If there's an error, log it to the console
    console.error(error);

    // Return error message to the client
    res.status(500).json({ error: 'Internal server error' }); // Return a 500 error with an error message
  }
};
