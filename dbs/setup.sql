DROP DATABASE IF EXISTS products;
CREATE DATABASE products;

\c products;

DROP SCHEMA IF EXISTS products CASCADE;
CREATE SCHEMA products;
grant usage on schema products to public;
grant create on schema products to public;

DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(15),
    slogan VARCHAR(25),
    description VARCHAR(50),
    category VARCHAR(15),
    default_price INTEGER
);

DROP TABLE IF EXISTS features CASCADE;
CREATE TABLE features (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    feature VARCHAR(15),
    value VARCHAR(15)
);

DROP TABLE IF EXISTS styles CASCADE;
CREATE TABLE styles (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    style_id INTEGER,
    name VARCHAR(15),
    sale_price VARCHAR(10),
    original_price VARCHAR(10),
    default_style BOOLEAN
);

DROP TABLE IF EXISTS photos CASCADE;
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    style_id INTEGER references styles(id),
    main_url VARCHAR(50),
    thumbnail_url VARCHAR(50)
);

DROP TABLE IF EXISTS skus CASCADE;
CREATE TABLE skus (
    id SERIAL PRIMARY KEY,
    style_id INTEGER references styles(id),
    sku_id Integer,
    size VARCHAR(5),
    quantity INTEGER
);

DROP TABLE IF EXISTS related CASCADE;
CREATE TABLE related (
    id SERIAL PRIMARY KEY,
    product_id INTEGER references products(id),
    related_id INTEGER
);