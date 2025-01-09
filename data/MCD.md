utilisateur: code utilisateur, pseudo, email, mot de passe, expérience, tokens
légion: code légion, nom, image, logo, description, slogan
carte: code carte, nom, description, type, rareté, experience
évolution: code évolution, niveau, expérience recquise, puissance, défense, dégâts, points de vie, image
collection: code collection
deck: code deck, nom
capacité: code capacité, nom, mode
bonus: code bonus, mode
effet: code effet, code, description

posséder, 01 utilisateur, 11 collection
construire, 0N utilisateur, 11 deck
inclure, 0N collection, 0N évolution
évoluer, 1N carte, 11 évolution
englober, 1N deck, 0N évolution
contenir, 0N légion, 11 carte
maîtriser, 1N évolution, 0N capacité
porter, 11 légion, 0N bonus
exposer, 11 capacité, 0N effet
arborer, 11 bonus, 0N effet