DROP TABLE IF EXISTS blogposts;

CREATE TABLE blogposts (
  id SERIAL PRIMARY KEY,
  body TEXT,
  imageurl TEXT,
  author VARCHAR(255),
  createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  blogposts (body, author)
VALUES
  (
    'Hello! I''m an example post body created so you can see some example text.',
    'me'
  ),
  (
    'Hi! I''m another example post body for the blogposts table.',
    'also me'
  ),
  (
    'And I''m a third example post body.',
    'me again'
  );