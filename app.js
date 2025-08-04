const express = require('express');
const errorRoute = require('./utils/errorRoute');
const recipeRouter = require('./routes/recipeRouter');

const app = express();

app.use(express.json());

app.use('/api/v1/recipes', recipeRouter);

app.use(errorRoute);

module.exports = app;