-- Create the database
CREATE DATABASE tinyurl;

-- Connect to the newly created database
\c tinyurl;

-- Create the users table
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  firstname VARCHAR(120) NOT NULL,
  lastname VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE
);

-- Create the projects table
CREATE TABLE projects(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  owner INT NOT NULL,
  CONSTRAINT fk_users 
    FOREIGN KEY(owner)
      REFERENCES users(id)
      ON DELETE CASCADE
);

-- Create the urls table
CREATE TABLE url_mappings(
  id SERIAL PRIMARY KEY,
  original_url TEXT NOT NULL,
  short_url VARCHAR(10) NOT NULL,
  project_id INT NOT NULL,
  CONSTRAINT fk_projects
    FOREIGN KEY(project_id)
      REFERENCES projects(id)
      ON DELETE CASCADE
);
