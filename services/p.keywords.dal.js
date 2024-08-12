const pool = require('./p.db'); // Assuming you have a pool setup in p.db

async function addKeyword(login_id, keywords, data_source, last_updated) {
    const query = `
        INSERT INTO keywords (login_id, keywords, data_source, last_updated)
        VALUES ($1, $2, $3, NOW())
        RETURNING keyword_id
    `;
    const values = [login_id, keywords, data_source];
    const result = await pool.query(query, values);
    return result.rows[0].keyword_id;
}

module.exports = { addKeyword };