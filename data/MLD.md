user(id, username, email, password)
question(id, title, description, picture)
tag(id, name)
comment(id, description, #user(id), #question(id))

question AVOIR categorie (#question(id), #categorie(id))
