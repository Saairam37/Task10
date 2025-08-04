const recipe = require("../models/recipe");

  const RecipeController = {
    
    getAllRecipes: async (req, res) => {

        try{
            const Recipes = await recipe.find();
            res.status(200).json(Recipes);

        }catch(error){
            res.status(500).json({ message: "Failed to fetch recipes", error: error.message })
        }
        
    },
    getRecipeById: async (req, res) => {

        try{
            const { id } = req.params;
            const Recipe = await recipe.findById(id);
            res.status(200).json(Recipe);

        }catch(error){
            res.status(500).json({ message: "Failed to fetch recipe", error: error.message });
        }

    },
    createRecipe: async (req, res) => {

        try{
            const { name, ingredients, instructions } = req.body;
            const newRecipe = new recipe({ name, ingredients, instructions });
            await newRecipe.save();
            res.status(201).json(newRecipe);

        }catch(error){
            res.status(500).json({ message: "Failed to create recipe", error: error.message });
        }

    },
    updateRecipe: async (req, res) => {

        try{
            const { id } = req.params;
            const { name, ingredients, instructions } = req.body;
            const updatedRecipe = await recipe.findByIdAndUpdate(id, { name, ingredients, instructions });
            res.status(201).json(updatedRecipe);

        }catch(error){
            res.status(500).json({ message: "Failed to update recipe", error: error.message });
        }
    },
    deleteRecipe: async (req, res) => {

        try{
            const { id } = req.params;
            await recipe.findByIdAndDelete(id);
            res.status(200).json({ message: "Recipe deleted successfully" });

        }catch(error){
            res.status(500).json({ message: "Failed to delete recipe", error: error.message });
        }
    }

  }

  module.exports = RecipeController;