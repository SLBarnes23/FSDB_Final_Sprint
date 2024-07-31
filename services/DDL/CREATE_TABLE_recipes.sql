CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT[] NOT NULL,
    cuisine VARCHAR(255),
    dietaryRestrictions TEXT[],
    prepTime INTEGER,
    cookTime INTEGER,
    instructions TEXT,
    nutrition JSONB,
    rating FLOAT,
    author VARCHAR(255)
);