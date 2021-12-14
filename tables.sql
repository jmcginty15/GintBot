DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    username TEXT,
    first_name TEXT,
    last_name TEXT,
    score INT,
    time_cutoff TIMESTAMPTZ
);

-- INSERT INTO users (id, username, first_name, last_name, score, time_cutoff) VALUES
--     (1914032763, NULL, 'Sand', 'Crab', 1, NULL),
--     -- (1901369769, 'GintFather', 'Jason', 'McGinty', 0, NULL),
--     (1505761461, 'Erikolson1', 'Erik', 'Olson', 36, NULL),
--     (546595002, NULL, 'Ryne', NULL, 34, NULL),
--     (1087968824, NULL, 'King', 'Hambrick', 0, NULL),
--     (1902385412, NULL, 'Chris', 'Kleinfelter', 24, NULL),
--     (1779689972, 'Grizwald_Jr', 'Caleb', 'A', 4, NULL),
--     (2011619685, NULL, 'Trent', 'Jones', 0, NULL),
--     (2086305632, NULL, 'NoseRingMama69', 'Myers', 0, NULL),
--     (1812503085, NULL, 'Addie', 'Beck', 0, NULL),
--     (1936524573, NULL, 'Zack', 'Ellison', 0, NULL),
--     (1845033972, NULL, 'Jake', 'the Larger', 0, NULL),
--     (1880837871, NULL, 'Shawn', 'Sisco', 0, NULL),
--     (1024257970, NULL, 'MMB', NULL, 0, NULL);