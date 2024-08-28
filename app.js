require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoute = require('./routes/recipeRoute');

// Initialization
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Default route
app.get('/', (req, res) => {
    res.send("hello");
});

// Using routes
app.use('/api/recipe', recipeRoute);

// Server
app.listen(process.env.PORT || 5001, () => {
    console.log(`Server running on port ${process.env.PORT || 5001}`);
});

// Connection
async function mongoConnection() {
    try {
        await mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
    }
}
mongoConnection();
