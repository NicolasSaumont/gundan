const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.PG_URL, {
  dialect: 'postgres',
  logging: false,
})

// Teste la connexion à la base de données
sequelize
  .authenticate()
  .then(() => console.log('Connexion à PostgreSQL réussie.'))
  .catch((err) => console.error('Erreur de connexion à PostgreSQL :', err))

module.exports = sequelize
