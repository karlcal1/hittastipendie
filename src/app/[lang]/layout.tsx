import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from "../../i18n/request";

export async function generateStaticParams() {
  return locales.map((locale: Locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "HittaStipendier.se",
  description: "Aktiva stipendier för utlandsstudier",
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
