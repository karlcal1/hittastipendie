import { getRequestConfig } from 'next-intl/server';

export const locales = ['sv', 'en'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // Default to 'sv' if locale is undefined
  const validLocale = locale || 'sv';
  
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});
