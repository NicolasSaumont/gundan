user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
)

collection(
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user(id) NOT NULL
)

deck(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES user(id) NOT NULL
)

legion(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  tagline VARCHAR(255) NOT NULL
)

card(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  level INTEGER NOT NULL,
  power INTEGER NOT NULL,
  defense INTEGER NOT NULL,
  damage INTEGER NOT NULL,
  health_points INTEGER NOT NULL,
  type VARCHAR(255) NOT NULL,
  rarity VARCHAR(255) NOT NULL,
  legion_id INTEGER REFERENCES legion(id) NOT NULL
)

capacity(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  mode VARCHAR(255) NOT NULL,
  effect_code INTEGER REFERENCES effect(code) NOT NULL
)

bonus(
  id SERIAL PRIMARY KEY,
  mode VARCHAR(255) NOT NULL,
  legion_id INTEGER REFERENCES legion(id) NOT NULL,
  effect_code INTEGER REFERENCES effect(code) NOT NULL
)

effect(
  id SERIAL PRIMARY KEY,
  code VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL
)

-- Relations associatives

collection_card(
  collection_id INTEGER REFERENCES collection(id),
  card_id INTEGER REFERENCES card(id),
  PRIMARY KEY (collection_id, card_id)
)

deck_card(
  deck_id INTEGER REFERENCES deck(id),
  card_id INTEGER REFERENCES card(id),
  PRIMARY KEY (deck_id, card_id)
)

card_capacity(
  card_id INTEGER REFERENCES card(id),
  capacity_id INTEGER REFERENCES capacity(id),
  PRIMARY KEY (card_id, capacity_id)
)