-- Active: 1730684071005@@127.0.0.1@5432@softjobs
CREATE DATABASE softjobs;

\c softjobs;

CREATE TABLE usuarios (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    rol VARCHAR(25),
    lenguage VARCHAR(20)
);