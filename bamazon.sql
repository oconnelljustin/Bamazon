create database bamazon;
use bamazon;

create table products(
    itemid integer auto_increment(45) not null,
    productname varchar(45) not null,
    departmentname varchar(45) not null,
    price decimal(10,4) not null,
    stockquantity integer(10) not null,
    primary key (itemid)
);

SELECT * FROM bamazon.products;


INSERT INTO products(ProductName, DepartmentName, Price, StockQUantity)
VALUES ("Uncharted 4", "Video Games", 49,95, 150),
    ("Simpsons", "Video Games", 59,99,200),
    ("Slim Jim", "Food and Drink", 24,50,50),
    ("Sunglasses", "Apparel", 75,00,5),
    ("Jeans", "Apparel", 54,25, 35),
    ("Survival Towel", "Necessities", 42, 42, 42),
    ("Matrix", "Films", 15.00,25),
    ("Good Will Hunting", 30, 50,35),
    ("Yahtzee", "Board Games", 19.95, 23);

    SELECT * FROM bamazon.products;

    