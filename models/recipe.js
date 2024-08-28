const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    recipeName: {
        type: String,
        required: true
    },
    totalCookTime: {
        type: String,
        required: true
    },
    prepTime: {
        type: String,
        required: true
    },
    cookTime: {
        type: String,
        required: true
    },
    serves: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    difficuiltyLevel: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    meals: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);
