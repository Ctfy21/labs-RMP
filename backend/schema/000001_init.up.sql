CREATE TABLE users
(
    id serial not null PRIMARY KEY,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    password varchar(255) not null
);
