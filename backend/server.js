const express = require('express');
const cors = require('cors');
const userRoutes = require('./userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});