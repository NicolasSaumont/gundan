user(id, username, email, password)
legion(id, name, image, logo, description, tagline, bonus_effect)
card(id, name, description, level, power, defense, damage, health_points, type, classic_fight_ability, quick_fight_ability, rarity, #legion(id))
collection(id, #user(id))
deck(id, name, #user(id))

collection INCLUDES card (#collection(id), #card(id), PRIMARY KEY (#collection(id), #card(id)))
deck INCORPORATES card (#deck(id), #card(id), PRIMARY KEY (#deck(id), #card(id)))
