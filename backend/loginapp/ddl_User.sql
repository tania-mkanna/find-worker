CREATE TABLE users
(
    id        BIGINT AUTO_INCREMENT NOT NULL,
    full_name VARCHAR(255)          NOT NULL,
    phone     VARCHAR(255)          NULL,
    address   VARCHAR(255)          NULL,
    email     VARCHAR(255)          NOT NULL,
    password  VARCHAR(255)          NOT NULL,
    `role`    VARCHAR(255)          NULL,
    CONSTRAINT pk_users PRIMARY KEY (id)
);

ALTER TABLE users
    ADD CONSTRAINT uc_users_email UNIQUE (email);