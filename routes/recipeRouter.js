const express = require('express');
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const recipeRouter = express.Router();

recipeRouter.route('/').get(getAllRecipes).post(createRecipe);
recipeRouter.route('/:id').get(getRecipeById).put(updateRecipe).delete(deleteRecipe);

module.exports = recipeRouter;