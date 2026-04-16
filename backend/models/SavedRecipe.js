const mongoose = require('mongoose');

const savedRecipeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipeId: {
    type: String,
    required: true
  },
  recipeName: {
    type: String,
    required: true
  },
  ingredients: [{
    name: String,
    isPantryItem: Boolean
  }],
  instructions: [String],
  prepTime: String,
  savedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('SavedRecipe', savedRecipeSchema);