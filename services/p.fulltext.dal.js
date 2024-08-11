const dal = require("./p.db");

const getFullText = function(text) {
  // if (DEBUG) console.log("postgres.dal.getFullText()");
  return new Promise(function(resolve, reject) {
    const sql = `
SELECT title, ingredients, instructions, cuisine, dietaryRestrictions, prepTime, cookTime, nutrition, rating, author
FROM recipes
WHERE title ILIKE '%' || $1 || '%'
  OR ARRAY_TO_STRING(ingredients, ',') ILIKE '%' || $1 || '%'
  OR instructions ILIKE '%' || $1 || '%'
  OR cuisine ILIKE '%' || $1 || '%'
  OR ARRAY_TO_STRING(dietaryRestrictions, ',') ILIKE '%' || $1 || '%'
    `;

    // if (DEBUG) console.log(sql);
    dal.query(sql, [text], (err, result) => {
      if (err) {
        if (DEBUG) console.log(err);
        reject(err);
      } else {
        if (DEBUG) console.log(`Row count: ${result.rowCount}`);
        resolve(result.rows);
      }
    }); 
  }); 
};

module.exports = {
  getFullText,
};