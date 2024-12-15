module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#BD002C', // Red (NPC)
        secondary: '#D4AF37', // Gold (metallic)
        tertiary: '#0F0F4D', // Federal blue
        black: '#110B0D', // Smoky black
        white: '#FFF4E8', // Linen
      },
      fontFamily: {
        bungee: ['Bungee', 'sans-serif'], // Titres
        'yusei-magic': ['Yusei Magic', 'sans-serif'], // Textes principaux
        caveat: ['Caveat', 'cursive'], // Textes alternatifs
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: { color: '#110B0D' }, // Définit le texte en noir par défaut
      });
    },
  ],
};
