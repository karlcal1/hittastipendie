import { Locale } from '../i18n/request';

/**
 * Gets the current date formatted according to the specified locale
 * This is evaluated at build time when used in static generation
 */
export function getBuildTimeDate(locale: Locale): string {
  const now = new Date();
  
  // Map locale to appropriate locale string for Intl.DateTimeFormat
  const localeMap: Record<Locale, string> = {
    'en': 'en-US',
    'sv': 'sv-SE'
  };
  
  const dateFormatter = new Intl.DateTimeFormat(localeMap[locale], {
    year: 'numeric',
    month: 'long'
  });
  
  return dateFormatter.format(now);
}
