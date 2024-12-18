# MySQL Data Types

## STRING DATA TYPES

### CHAR

A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1

### VARCHAR(size)

A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum column length in characters - can be from 0 to 65535

### BINARY(size)

Equal to CHAR(), but stores binary byte strings. The size parameter specifies the column length in bytes. Default is 1

### TINYBLOB

For BLOBs (Binary Large OBjects). Max length: 255 bytes

### TINYTEXT

Holds a string with a maximum length of 255 characters

### TEXT(size)

Holds a string with a maximum length of 65,535 bytes

### BLOB(size)

For BLOBs (Binary Large OBjects). Holds up to 65,535 bytes of data

### LONGTEXT

Holds a string with a maximum length of 4,294,967,295 characters

## Numeric Data Types

### INT(size)

A medium integer. Signed range is from -2147483648 to 2147483647. Unsigned range is from 0 to 4294967295. The size parameter specifies the maximum display width (which is 255)

### DECIMAL(size, d)

    An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.

## MySQL Date Data Types

DATE - format YYYY-MM-DD
DATETIME - format: YYYY-MM-DD HH:MI:SS
TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
YEAR - format YYYY or YY

# Mysql Constraints

SQL constraints are used to specify rules for the data in a table.Constraints are used to limit the type of data that can go into a table

- NOT NULL - Ensures that a column cannot have a NULL value

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);
-- To create a NOT NULL constraint on the "Age" column when the "Persons" table is -- -- already created, use the following SQL
ALTER TABLE Persons
MODIFY Age int NOT NULL;
```

- UNIQUE - Ensures that all values in a column are different

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    UNIQUE (ID)
);

ALTER TABLE Persons
ADD UNIQUE (ID);

-- To name a UNIQUE constraint, and to define a UNIQUE constraint on multiple columns, -- use the following SQL syntax:

ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);

-- DROP a UNIQUE Constraint

ALTER TABLE Persons
DROP INDEX UC_Person;
```

- PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (ID)
);

-- To create a PRIMARY KEY constraint on the "ID" column when the table is already -- -- created, use the following SQL:

ALTER TABLE Persons
ADD CONSTRAINT PRIMARY KEY (ID);
 -- DROP a PRIMARY KEY Constraint
ALTER TABLE Persons
DROP PRIMARY KEY;


```

- FOREIGN KEY - Prevents actions that would destroy links between tables
- CHECK - Ensures that the values in a column satisfies a specific condition

### CHECK on CREATE TABLE

The following SQL creates a CHECK constraint on the "Age" column when the "Persons" table is created. The CHECK constraint ensures that the age of a person must be 18, or older:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CHECK (Age>=18)
);
```

To allow naming of a CHECK constraint, and for defining a CHECK constraint on multiple columns, use the following SQL syntax:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);
```

## CHECK on ALTER TABLE

To create a CHECK constraint on the "Age" column when the table is already created, use the following SQL:

```
ALTER TABLE Persons
ADD CHECK (Age>=18);
```

## DROP a CHECK Constraint

To drop a CHECK constraint, use the following SQL:

```
ALTER TABLE Persons
DROP CHECK CHK_PersonAge;
```

- DEFAULT - Sets a default value for a column if no value is specified

## DEFAULT on CREATE TABLE

The following SQL sets a DEFAULT value for the "City" column when the "Persons" table is created:

```
CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);
```

The DEFAULT constraint can also be used to insert system values, by using functions like CURRENT_DATE():

```
CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT CURRENT_DATE()
);
```

- CREATE INDEX - Used to create and retrieve data from the database very quickly

## CREATE INDEX Syntax

Creates an index on a table. Duplicate values are allowed:

```
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

# MySQL AUTO INCREMENT Field

Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.By default, the starting value for AUTO_INCREMENT is 1, and it will increment by 1 for each new record.

```
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);
```

To let the AUTO_INCREMENT sequence start with another value, use the following SQL statement:

```
ALTER TABLE Persons AUTO_INCREMENT=100;
```

# MySQL Dates
