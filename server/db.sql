DROP TABLE IF EXISTS blogposts;

CREATE TABLE blogposts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  body TEXT,
  imageurl TEXT,
  author VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  blogposts (title, body, author)
VALUES
  (
    'Example Post #1',
    'Hello! I''m an example post body created so you can see some example text.',
    'me'
  ),
  (
    'Example Post #2',
    'Hi! I''m another example post body for the blogposts table.',
    'also me'
  ),
  (
    'Example Post #3',
    'And I''m a third example post body.',
    'me again'
  );