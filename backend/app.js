//Set up Express, routes, middleware

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const newsRoutes = require('./routes/newsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/news', newsRoutes);

module.exports = app;
