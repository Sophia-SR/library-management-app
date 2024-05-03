// app.js

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./database/connection');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
