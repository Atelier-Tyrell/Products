-- sudo -u isaac psql -d products

DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

DROP SCHEMA IF EXISTS products CASCADE;
CREATE SCHEMA products;
-- grant usage on schema products to public;
-- grant create on schema products to public;

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    slogan TEXT,
    description TEXT,
    category TEXT,
    default_price INTEGER
);

DROP TABLE IF EXISTS features CASCADE;
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    feature TEXT,
    value TEXT
);

DROP TABLE IF EXISTS styles CASCADE;
CREATE TABLE styles (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    name TEXT,
    sale_price TEXT,
    original_price TEXT,
    default_style BOOLEAN
);

DROP TABLE IF EXISTS photos CASCADE;
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    style_id INTEGER references styles(id),
    main_url TEXT,
    thumbnail_url TEXT
);

DROP TABLE IF EXISTS skus CASCADE;
CREATE TABLE skus (
    id SERIAL PRIMARY KEY,
    style_id INTEGER references styles(id),
    size TEXT,
    quantity INTEGER
);

DROP TABLE IF EXISTS related CASCADE;
CREATE TABLE related (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    related_id INTEGER
);

COPY products(id, name, slogan, description, category, default_price)
FROM '/home/isaac/SDC/data/product.csv'
DELIMITER ','
CSV HEADER;

COPY features(id, product_id, feature, value)
FROM '/home/isaac/SDC/data/features.csv'
DELIMITER ','
CSV HEADER;

COPY styles(id, product_id, name, sale_price, original_price, default_style)
FROM '/home/isaac/SDC/data/styles.csv'
DELIMITER ','
CSV HEADER;

COPY photos(id, style_id, main_url, thumbnail_url)
FROM '/home/isaac/SDC/data/photos.csv'
DELIMITER ','
CSV HEADER;

COPY skus(id, style_id, size, quantity)
FROM '/home/isaac/SDC/data/skus.csv'
DELIMITER ','
CSV HEADER;

COPY related(id, product_id, related_id)
FROM '/home/isaac/SDC/data/related.csv'
DELIMITER ','
CSV HEADER;