INSERT INTO burgers (burger_name) VALUE ('Cheeseburger');
INSERT INTO burgers (burger_name) VALUE ('Double Cheeseburger');
INSERT INTO burgers (burger_name) VALUE ('Turkey Burger');
INSERT INTO burgers (burger_name, devoured) VALUE ('Baconburger', TRUE );

SELECT * FROM burgers WHERE devoured=TRUE;
