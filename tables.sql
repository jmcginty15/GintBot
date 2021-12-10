USE hambrick_chat;
GO

DROP TABLE IF EXISTS users;
GO

CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    score INT
);
GO
