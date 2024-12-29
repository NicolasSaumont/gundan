utilisateur: code utilisateur, pseudo, email, mot de passe  
question: code question, titre, description, image
catégorie: code catégorie, nom
commentaire: code_commentaire, description

créer, 0N utilisateur, 11 commentaire
précise, 11 commentaire, 0N question
appartenir, 0N catégorie, 0N question

utilisateur: code utilisateur, pseudo, email, mot de passe
légion: code légion, nom, image, logo, description, slogan, bonus
carte: code carte, nom, description, niveau, puissance, défense, dégâts, points de vie, type, capacité mode classique, capacité mode rapide, rareté
collection: code collection
deck: code deck, nom

posséder, 01 utilisateur, 11 collection
construire, 0N utilisateur, 11 deck
inclure, 0N collection, 0N carte
contenir, 0N légion, 11 carte