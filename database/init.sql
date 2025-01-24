CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(50) NOT NULL
);

INSERT INTO items (name, price) VALUES
('Laptop', '$1000'),
('Headphones', '$200'),
('Smartphone', '$800');

