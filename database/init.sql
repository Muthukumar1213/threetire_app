-- Create the database
CREATE DATABASE shopping_db;

-- Switch to the database
USE shopping_db;

-- Create the products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- Insert sample data
INSERT INTO products (name, description, price) VALUES 
('Laptop', 'A high-performance laptop.', 999.99),
('Smartphone', 'A sleek and powerful smartphone.', 699.99),
('Headphones', 'Noise-cancelling over-ear headphones.', 199.99);
