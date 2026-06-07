CREATE TABLE books (
  id INTEGER,
  title TEXT,
  author TEXT
);
-- Do not modify above this line --

ALTER TABLE books ADD COLUMN age INTEGER,

ALTER TABLE books RENAME COLUMN name TO full_name,

ALTER TABLE books DROP COLUMN name









-- Do not modify below this line --
SELECT column_name, data_type, column_default
FROM information_schema.columns
WHERE table_name = 'books'
ORDER BY column_name;
