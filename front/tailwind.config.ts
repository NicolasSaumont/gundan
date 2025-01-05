module.exports = {
  content: [
    './front/**/*.{vue,js,ts,jsx,tsx}',
  ],
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
      backgroundImage: {
        topography: "url('~/assets/images/topography.svg')",
        luffy: "url('~/assets/images/luffy-lines.svg')",
        naruto: "url('~/assets/images/naruto-lines.svg')",
        goku: "url('~/assets/images/goku-lines.svg')",
        menu: "url('~/assets/images/homepage-menu-bg.png')",
        "menu-inverted-colors": "url('~/assets/images/homepage-menu-bg-inverted-colors.png')"
      },
    },
  },
};
