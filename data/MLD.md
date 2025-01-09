user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL,
  tokens INTEGER NOT NULL
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
  type VARCHAR(255) NOT NULL,
  rarity VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL DEFAULT 0,
  legion_id INTEGER REFERENCES legion(id) NOT NULL
)

evolution (
  id SERIAL PRIMARY KEY,
  level INTEGER NOT NULL,
  experience_required INTEGER NOT NULL,
  power INTEGER NOT NULL,
  defense INTEGER NOT NULL,
  damage INTEGER NOT NULL,
  health_points INTEGER NOT NULL,
  image VARCHAR(255) NOT NULL,
  card_id INTEGER REFERENCES card(id) NOT NULL
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

collection_evolution(
  collection_id INTEGER REFERENCES collection(id),
  evolution_id INTEGER REFERENCES evolution(id),
  PRIMARY KEY (collection_id, evolution_id)
)

deck_evolution(
  deck_id INTEGER REFERENCES deck(id),
  evolution_id INTEGER REFERENCES evolution(id),
  PRIMARY KEY (deck_id, evolution_id)
)

evolution_capacity(
  evolution_id INTEGER REFERENCES evolution(id),
  capacity_id INTEGER REFERENCES capacity(id),
  PRIMARY KEY (evolution_id, capacity_id),
  level_activation INTEGER NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT false
)