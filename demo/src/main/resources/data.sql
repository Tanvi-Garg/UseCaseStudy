DROP TABLE IF EXISTS PERSON;
CREATE TABLE PERSON (person_id INT PRIMARY KEY,first_name VARCHAR(50) NOT NULL,last_name VARCHAR(50) NOT NULL,age INT NOT NULL);

INSERT INTO PERSON VALUES (1, 'Tanvi', 'Garg', 28);
INSERT INTO PERSON VALUES (2, 'Vishav','Bansal' , 32);
INSERT INTO PERSON VALUES (3, 'Neeraj','Sharma' , 35);