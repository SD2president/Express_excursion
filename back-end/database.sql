CREATE DATABASE Express_Excursions

CREATE Table destinations(
    destination_id SERIAL PRIMARY KEY, 
    name VARCHAR(255),
    continent_name VARCHAR(255),
    country_name VARCHAR(255),
    description VARCHAR(255),
    author VARCHAR(255),
    date_visited DATE,
    picture VARCHAR(255)

)