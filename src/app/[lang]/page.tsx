import { getTranslations } from 'next-intl/server';
import { getContentData } from '../../lib/content';
import { Locale } from '../../i18n/request';
import { getBuildTimeDate } from '../../lib/buildTime';
import ScholarshipList from '../../components/ScholarshipList';
import ScheduleTable from '../../components/ScheduleTable';
import UsefulLinks from '../../components/UsefulLinks';
import FloatingLanguageSwitcher from '../../components/FloatingLanguageSwitcher';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang });
  const contentData = getContentData(lang);
  const lastUpdatedDate = getBuildTimeDate(lang);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-800 p-5 leading-relaxed">
      <div className="max-w-4xl mx-auto bg-white p-10 border border-neutral-300">
        {/* Header */}
        <div className="mb-6 p-4 bg-neutral-50 border-l-4 border-neutral-900">
          <div className="text-center mb-0">
            <h1 className="text-4xl text-blue-900 font-normal font-serif">
              HittaStipendier.se
            </h1>
            <span className="text-sm text-neutral-600 block">
              {t('site.lastUpdated')}: <strong>{lastUpdatedDate}</strong>
            </span>
            <div className="text-base italic text-blue-900 block -mt-1 mb-4">
              {t('site.subtitle')}
            </div>
          </div>
          
          <div className="space-y-1 text-sm">
            <p>
              <em>{t('intro.description1')}</em>
            </p>
            <p>
              <em>
                {t('intro.description2')}{' '}
                <span className="bg-yellow-300 px-1 py-0.5 font-bold">
                  {t('intro.description3')}
                </span>
              </em>
            </p>
            <p>
              <strong>
                {t('intro.contact')}{' '}
                <a href="mailto:karlcal@berkeley.edu" className="text-blue-600 underline">
                  karlcal@berkeley.edu
                </a>{' '}
                eller{' '}
                <a href="mailto:aheiman@stanford.edu" className="text-blue-600 underline">
                  aheiman@stanford.edu
                </a>
                .
              </strong>
            </p>
            <p>
              <strong>{t('intro.authors')}</strong>
            </p>
          </div>
        </div>

        {/* Karl's Scholarships */}
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-5 pb-2 border-b-2 border-neutral-900 font-sans">
            {t('sections.karlScholarships')}
          </h2>
          <ScholarshipList scholarships={contentData.karlScholarships} />
        </section>

        {/* Karl's Schedule */}
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-5 pb-2 border-b-2 border-neutral-900 font-sans">
            {t('sections.karlSchedule')}
          </h2>
          <p className="italic mb-2 text-sm">
            {t('scheduleNote')}
          </p>
          <ScheduleTable 
            schedule={contentData.karlSchedule}
            monthLabel={t('table.month')}
            foundationLabel={t('table.foundation')}
            detailsLabel={t('table.details')}
          />
        </section>

        {/* Alice's Schedule */}
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-5 pb-2 border-b-2 border-neutral-900 font-sans">
            {t('sections.aliceSchedule')}
          </h2>
          <ScheduleTable 
            schedule={contentData.aliceSchedule}
            monthLabel={t('table.month')}
            foundationLabel={t('table.scholarship')}
            detailsLabel={t('table.details')}
          />
        </section>

        {/* Useful Links */}
        <section className="mb-10">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-5 pb-2 border-b-2 border-neutral-900 font-sans">
            {t('sections.usefulLinks')}
          </h2>
          <UsefulLinks links={contentData.usefulLinks} />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-neutral-300 text-center text-sm text-neutral-600">
          <p>{t('footer')}</p>
          <p className="mt-2">
            {t('visitors')}: 
            <script 
              type="text/javascript" 
              src="https://counter.websiteout.com/js/5/6/0/1"
              defer
            />
          </p>
        </footer>
      </div>
      
      {/* Floating Language Switcher */}
      <FloatingLanguageSwitcher currentLang={lang} />
    </div>
  );
}
