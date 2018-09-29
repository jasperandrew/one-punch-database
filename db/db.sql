CREATE DATABASE OnePunch DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

CREATE TABLE characters (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(64),
	given_name varchar(32),
	gender varchar(32),
	race varchar(32),
	age INT,
	height varchar(10),
	threat varchar(6),
	occupation varchar(255),
	city varchar(1),
	status varchar(12),
	text varchar(255),
	PRIMARY KEY (id)
);

CREATE TABLE heroes (
	id INT NOT NULL,
	class varchar(1) NOT NULL,
	pos INT NOT NULL
);

ALTER TABLE heroes ADD CONSTRAINT heroes_fk0 FOREIGN KEY (id) REFERENCES characters(id);

CREATE TABLE abilities (
	id INT NOT NULL,
	name varchar(64) NOT NULL,
	text varchar(255) NOT NULL
);

CREATE TABLE affiliations (
	id INT NOT NULL,
	org_id INT NOT NULL
);

CREATE TABLE organizations (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(64) NOT NULL,
	text varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE relationships (
	id INT NOT NULL,
	char_id INT NOT NULL
);

ALTER TABLE abilities ADD CONSTRAINT abilities_fk0 FOREIGN KEY (id) REFERENCES characters(id);

ALTER TABLE affiliations ADD CONSTRAINT affiliations_fk0 FOREIGN KEY (id) REFERENCES characters(id);

ALTER TABLE affiliations ADD CONSTRAINT affiliations_fk1 FOREIGN KEY (orgid) REFERENCES organizations(id);

ALTER TABLE relationships ADD CONSTRAINT relationships_fk0 FOREIGN KEY (id) REFERENCES characters(id);

ALTER TABLE relationships ADD CONSTRAINT relationships_fk1 FOREIGN KEY (relid) REFERENCES characters(id);


ALTER TABLE heroes DROP FOREIGN KEY heroes_fk0;
DROP TABLE IF EXISTS heroes;
DROP TABLE IF EXISTS characters;

ALTER TABLE abilities DROP FOREIGN KEY abilities_fk0;

ALTER TABLE affiliations DROP FOREIGN KEY affiliations_fk0;

ALTER TABLE affiliations DROP FOREIGN KEY affiliations_fk1;

ALTER TABLE relationships DROP FOREIGN KEY relationships_fk0;

ALTER TABLE relationships DROP FOREIGN KEY relationships_fk1;

DROP TABLE IF EXISTS abilities;

DROP TABLE IF EXISTS affiliations;

DROP TABLE IF EXISTS organizations;

DROP TABLE IF EXISTS relationships;

