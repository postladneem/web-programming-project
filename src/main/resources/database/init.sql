CREATE TABLE IF NOT EXISTS user
(
    id       int AUTO_INCREMENT PRIMARY KEY,
    name     varchar(50)  NOT NULL UNIQUE,
    password varchar(200) NOT NULL
);
CREATE TABLE IF NOT EXISTS advancement
(
    id          int AUTO_INCREMENT PRIMARY KEY,
    title       varchar(30)  NOT NULL,
    description varchar(250) NOT NULL,
    importance  int          NOT NULL default 1
);
CREATE TABLE IF NOT EXISTS advancements_tree
(
    advancement_id int REFERENCES advancement,
    child_id       int REFERENCES advancement,
    PRIMARY KEY (advancement_id, child_id)
);
CREATE TABLE IF NOT EXISTS role
(
    id   int AUTO_INCREMENT PRIMARY KEY,
    name varchar(20)
);
CREATE TABLE IF NOT EXISTS role_of_user
(
    user_id int REFERENCES user,
    role_id int REFERENCES role,
    PRIMARY KEY (user_id, role_id)
);
