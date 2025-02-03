utilisateur: code utilisateur, pseudo, email, mot de passe, expérience, tokens
légion: code légion, nom, image, logo, description, slogan
carte: code carte, nom, description, type, experience, niveau max
rareté: code rareté, nom
évolution: code évolution, niveau, expérience recquise, puissance, défense, dégâts, points de vie, image
collection: code collection
deck: code deck, nom
capacité: code capacité, nom, mode
bonus: code bonus, mode
effet: code effet, code, description
transaction: code transaction, type, montant, description
booster: code booster, prix, pourcentage obtention carte commune, pourcentage obtention carte inhabituelle, pourcentage obtention carte rare, pourcentage obtention carte légendaire
mission: code mission, nom,
étape de mission: code étape de mission, description, objectif, ordre
récompense: code récompense, type, valeur

posséder, 01 utilisateur, 11 collection
construire, 0N utilisateur, 11 deck
inclure, 0N collection, 0N évolution
évoluer, 1N carte, 11 évolution
être, 11 carte, 0N rareté
englober, 1N deck, 0N évolution
contenir, 0N légion, 11 carte
maîtriser, 1N évolution, 0N capacité
porter, 11 légion, 0N bonus
exposer, 11 capacité, 0N effet
arborer, 11 bonus, 0N effet
effectuer, 0N utilisateur, 11 transaction
agrémenter, 1N booster, 01 transaction
ouvrir, 0N utilisateur, 11 booster
compléter, 0N utilisateur, 0N étape de mission
composer, 11 étape de mission, 1N mission
attribuer, 0N récompense, 11 étape de mission
