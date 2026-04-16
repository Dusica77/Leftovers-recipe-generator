const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SavedRecipe = require('../models/SavedRecipe');

// Save a recipe
router.post('/', auth, async (req, res) => {
  try {
    const { recipeId, recipeName, ingredients, instructions, prepTime } = req.body;
    
    console.log('Received save request:');
    console.log('- Recipe Name:', recipeName);
    console.log('- Instructions:', instructions);
    console.log('- Instructions length:', instructions ? instructions.length : 0);
    
    const savedRecipe = new SavedRecipe({
      userId: req.userId,
      recipeId,
      recipeName,
      ingredients: ingredients || [],
      instructions: instructions || [],
      prepTime: prepTime || '15 minutes'
    });
    
    await savedRecipe.save();
    console.log('Saved recipe with instructions:', savedRecipe.instructions);
    res.status(201).json(savedRecipe);
  } catch (err) {
    console.error('Error saving recipe:', err);
    res.status(500).json({ message: 'Error saving recipe' });
  }
});

// Get user's saved recipes
router.get('/', auth, async (req, res) => {
  try {
    const savedRecipes = await SavedRecipe.find({ userId: req.userId })
      .sort({ savedAt: -1 });
    console.log(`Found ${savedRecipes.length} saved recipes`);
    savedRecipes.forEach(recipe => {
      console.log(`- ${recipe.recipeName}: ${recipe.instructions ? recipe.instructions.length : 0} instructions`);
    });
    res.json(savedRecipes);
  } catch (err) {
    console.error('Error fetching saved recipes:', err);
    res.status(500).json({ message: 'Error fetching saved recipes' });
  }
});

// Delete a saved recipe
router.delete('/:id', auth, async (req, res) => {
  try {
    const savedRecipe = await SavedRecipe.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    });
    
    if (!savedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    
    res.json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    console.error('Error deleting recipe:', err);
    res.status(500).json({ message: 'Error deleting recipe' });
  }
});

module.exports = router;