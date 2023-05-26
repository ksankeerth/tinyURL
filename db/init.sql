-- Create the database
CREATE DATABASE tinyurl;

-- Connect to the newly created database
\c tinyurl;

-- Create the users table
CREATE TABLE "user" (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  firstname VARCHAR(120) NOT NULL,
  lastname VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE
);

-- Token 
CREATE TABLE oauth_token(
  id UUID PRIMARY KEY,
  issued_at TIMESTAMP NOT NULL,
  user_id INT NOT NULL,
  expire_at TIMESTAMP NOT NULL,
  CONSTRAINT fk_user 
    FOREIGN KEY(user_id)
      REFERENCES "user"(id)
        ON DELETE CASCADE
);

-- Create the projects table
CREATE TABLE project(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  owner INT NOT NULL,
  CONSTRAINT fk_user 
    FOREIGN KEY(owner)
      REFERENCES "user"(id)
      ON DELETE CASCADE
);

-- Create the urls table
CREATE TABLE url_mapping(
  id SERIAL PRIMARY KEY,
  original_url TEXT NOT NULL,
  short_url VARCHAR(10) NOT NULL,
  project_id INT NOT NULL,
  CONSTRAINT fk_project
    FOREIGN KEY(project_id)
      REFERENCES project(id)
      ON DELETE CASCADE
);
