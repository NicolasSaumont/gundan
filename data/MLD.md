user(
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL DEFAULT 0,
  tokens INTEGER NOT NULL DEFAULT 0
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

rarity (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)

card(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(255) NOT NULL,
  experience INTEGER NOT NULL DEFAULT 0,
  max_level INTEGER NOT NULL,
  legion_id INTEGER REFERENCES legion(id) NOT NULL,
  rarity_id INTEGER REFERENCES rarity(id) NOT NULL
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
)

bonus(
  id SERIAL PRIMARY KEY,
  mode VARCHAR(255) NOT NULL,
  legion_id INTEGER REFERENCES legion(id) NOT NULL,
)

effect(
  id SERIAL PRIMARY KEY,
  code VARCHAR(255) UNIQUE NOT NULL,
  description TEXT NOT NULL
)

transaction(
  id SERIAL PRIMARY KEY,
  code VARCHAR(255) UNIQUE NOT NULL,
  type VARCHAR(255) NOT NULL,
  amount INTEGER NOT NULL,
  description TEXT NOT NULL,
  user_id INTEGER REFERENCES user(id) NOT NULL,
  booster_id INTEGER REFERENCES booster(id) NULL
)

booster(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL, 
  price INTEGER NOT NULL,
  card_count INTEGER NOT NULL,
  common_chance DECIMAL(5, 2) NOT NULL,
  uncommon_chance DECIMAL(5, 2) NOT NULL,
  rare_chance DECIMAL(5, 2) NOT NULL,
  legendary_chance DECIMAL(5, 2) NOT NULL,
  user_id INTEGER REFERENCES user(id) NOT NULL
)

mission(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
)

mission_step(
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  objective INTEGER NOT NULL,
  step_order INTEGER NOT NULL,
  mission_id INTEGER REFERENCES mission(id) NOT NULL,
  reward_id INTEGER REFERENCES reward(id) NOT NULL
)

reward(
  id SERIAL PRIMARY KEY,
  type VRACH(255) NOT NULL,
  value INTEGER NOT NULL
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

bonus_effect(
  bonus_id INTEGER REFERENCES bonus(id),
  effect_id INTEGER REFERENCES effect(id),
  PRIMARY KEY (bonus_id, effect_id) 
)

capacity_effect(
  capacity_id INTEGER REFERENCES capacity(id),
  effect_id INTEGER REFERENCES effect(id),
  PRIMARY KEY (capacity_id, effect_id) 
)

user_step_mission(
  user_id INTEGER REFERENCES user(id),
  mission_step_id INTEGER REFERENCES mission_step(id),
  PRIMARY KEY (user_id, mission_step_id),
  status VARCHAR(255) NOT NULL DEFAUKT 'in_progress',
  progression INTEGER NOT NULL DEFAUL 0
)