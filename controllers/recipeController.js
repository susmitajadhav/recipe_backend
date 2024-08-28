const Recipe = require('../models/recipe');

exports.getRecipe = async (req, res) => {
    try {
        const data = await Recipe.find();
        return res.json({ errorsRecipe: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.postRecipe = async (req, res) => {
    try {
        const data = await Recipe.create(req.body);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.putRecipe = async (req, res) => {
    try {
        const data = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        const data = await Recipe.findByIdAndDelete(req.params.id);
        return res.json({ errors: false, data: data });
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
};
