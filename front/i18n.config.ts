import frFR from '~/i18n/fr-fr';

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackWarn: false,
  missingWarn: false,
  locales: ['fr'],
  locale: 'fr',
  defaultLocale: 'fr',
  lazy: true,
  langDir: '~/lang',
  messages: {
    fr: frFR,
  },
}));
