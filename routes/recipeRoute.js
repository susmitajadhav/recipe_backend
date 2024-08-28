const route = require('express').Router();
const { getRecipe, postRecipe, putRecipe, deleteRecipe } = require('../controllers/recipeController');
const auth = require('../middleware/auth');

route.get('/', getRecipe);
route.post('/', postRecipe);
route.put('/:id', auth, putRecipe);
route.delete('/:id', deleteRecipe);

module.exports = route;
