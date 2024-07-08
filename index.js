const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const authRoutes = require('./routes/authRoutes');
const dietRoutes = require('./routes/dietRoutes');

require('dotenv').config();

const app = express();



app.use(bodyParser.json());
connectDB();
// app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/diet', dietRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});