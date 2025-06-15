const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// ✅ Use built-in Express JSON parser
app.use(express.json());

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('API is running');
});

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
