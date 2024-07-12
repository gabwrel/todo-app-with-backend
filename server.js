const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your allowed origin
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
}));

app.use(express.json());

app.use(authRoutes );

mongoose.connect(process.env.DB_URL)
    .then(() => console.log("Successfully Connected to DB!"))
    .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
