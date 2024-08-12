const express = require('express');
const router = express.Router();
const pDb = require('../services/p.db'); // PostgreSQL service
const mDb = require('../services/m.fulltext.dal'); // MongoDB service

// Route to render the add recipe form
router.get('/add', (req, res) => {
    res.render('addRecipe', { status: req.session.status });
});

// Route to handle form submission
router.post('/add', async (req, res) => {
    const {
        title, ingredients, cuisine, dietaryRestrictions,
        prepTime, cookTime, instructions, nutrition, rating, author
    } = req.body;

    try {
        // Convert comma-separated ingredients and dietaryRestrictions to arrays
        const ingredientsArray = ingredients.split(',').map(item => item.trim());
        const dietaryRestrictionsArray = dietaryRestrictions.split(',').map(item => item.trim());
        const nutritionObject = nutrition ? JSON.parse(nutrition) : null;

        // Insert the recipe into PostgreSQL
        await pDb.query(
            `INSERT INTO recipes (title, ingredients, cuisine, dietaryRestrictions, prepTime, cookTime, instructions, nutrition, rating, author)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [title, ingredientsArray, cuisine, dietaryRestrictionsArray, prepTime, cookTime, instructions, nutritionObject, rating, author]
        );

        res.redirect('/recipes'); // Redirect to a list of recipes or a confirmation page
    } catch (error) {
        console.error('Error adding recipe:', error);
        res.status(500).send('An error occurred while adding the recipe.');
    }
});

// Route to render list of recipes from MongoDB and PostgreSQL
router.get('/', async (req, res) => {
    try {
        // Fetch all recipes from MongoDB
        const mongoRecipes = await mDb.getAllRecipes();

        // Fetch recipes from PostgreSQL
        const postgresResult = await pDb.query('SELECT * FROM recipes');
        const postgresRecipes = postgresResult.rows;

        // Render the recipesList view with recipes from both databases
        res.render('recipesList', { 
            recipes: { 
                mongo: mongoRecipes, 
                postgres: postgresRecipes 
            }, 
            status: req.session.status 
        });
    } catch (error) {
        console.error('Error retrieving recipes:', error);
        res.status(500).send('An error occurred while retrieving the recipes.');
    }
});

module.exports = router;