
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


CREATE TABLE "hike" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(255) NOT NULL,
	"location" VARCHAR(255) NOT NULL,
	"description" TEXT
);


--Junction Table between user table and hike table

CREATE TABLE "rating" (
	"id" SERIAL PRIMARY KEY,
	"favorite" BOOLEAN,
	"ratings" INT,
	"hike_id" INT REFERENCES "hike" NOT NULL,
	"user_id" INT REFERENCES "user" NOT NULL
);