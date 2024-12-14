const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// MongoDB ConnectionAdmin123
const mongoURI = 'mongodb+srv://surajrathore8100:Admin123@cluster0.gm6yf.mongodb.net/'; // Replace with your MongoDB URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const playerRoutes = require('./routes/player');
app.use('/player', playerRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
