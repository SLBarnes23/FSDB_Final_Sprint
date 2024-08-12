const { ObjectId } = require("mongodb");
const pool = require("./m.db");

async function getFullText(fulltext) {
  try {
    await pool.connect();
    const database = pool.db("Recipeideas");
    const collection = database.collection("Recipes");
    const result = await collection.find({ $text: { $search: fulltext } }).toArray();
    return result;
  } catch (err) {
    console.error('Error occurred while connecting to MongoDB:', err);
    throw err;
  } finally {
    await pool.close();
  }
};

async function getAllRecipes() {
  try {
    await pool.connect();
    const database = pool.db("Recipeideas");
    const collection = database.collection("Recipes");
    const recipes = await collection.find({}).toArray(); // Fetch all recipes
    return recipes;
  } catch (err) {
    console.error('Error occurred while querying MongoDB:', err);
    throw err;
  } finally {
    await pool.close();
  }
}

module.exports = {
  getFullText, getAllRecipes
}