const dal = require("./p.db");

async function getLogins() {
  let SQL = `SELECT * FROM public."Logins"`;
  try {
    let results = await dal.query(SQL, []);
    return results.rows;
  } catch (error) {
    console.log(error);
  }
};

async function getLoginByUsername(identifier) {
  // SQL query to search by username, email, or social_id
  let SQL = `
    SELECT id AS _id, username, password, email
    FROM public."Logins"
    WHERE username = $1 OR email = $1 OR social_id = $1
  `;
  try {
    let results = await dal.query(SQL, [identifier]);
    if (DEBUG) console.log(`results after query: ${JSON.stringify(results.rows[0])}`);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function getLoginByEmail(email) {
  let SQL = `SELECT id AS _id, username, password, email, uuid AS google_id FROM public."Logins" WHERE email = $1`;
  try {
    let results = await dal.query(SQL, [email]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }  
};

async function getLoginById(id) {
  let SQL = `SELECT id AS _id, username, password, email, uuid AS google_id FROM public."Logins" WHERE id = $1`;
  try {
    let results = await dal.query(SQL, [id]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  } 
};

async function addLogin(name, email, password, uuidv4, socialId) {
  // SQL query to insert a new login record, allowing NULL for password and social_id
  let SQL = `INSERT INTO public."Logins"(username, email, password, uuid, social_id)
             VALUES ($1, $2, $3, $4, $5) RETURNING id;`;

  try {
      // Execute the SQL query
      let results = await dal.query(SQL, [name, email || 'default@example.com', password || null, uuidv4, socialId || null]);
      // Return the ID of the newly inserted record
      return results.rows[0].id;
  } catch (error) {
      // Handle specific error for duplicate username
      if (error.code === '23505') {
          return error;
      }
      // Log other errors
      console.log(error);
      throw error; // Rethrow the error for further handling
  }
}


module.exports = {
    getLogins,
    getLoginByUsername,
    getLoginByEmail, 
    getLoginById,
    addLogin,
}