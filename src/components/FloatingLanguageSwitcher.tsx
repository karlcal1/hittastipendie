import Link from 'next/link';
import { Locale } from '../i18n/request';

interface FloatingLanguageSwitcherProps {
  currentLang: Locale;
}

export default function FloatingLanguageSwitcher({ currentLang }: FloatingLanguageSwitcherProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white border border-neutral-300 rounded-full shadow-lg p-2 flex gap-1">
        <Link 
          href="/sv"
          className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium transition-colors ${
            currentLang === 'sv' 
              ? 'bg-blue-600 text-white' 
              : 'text-blue-600 hover:bg-blue-50'
          }`}
          title="Svenska"
        >
          SV
        </Link>
        <Link 
          href="/en"
          className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium transition-colors ${
            currentLang === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'text-blue-600 hover:bg-blue-50'
          }`}
          title="English"
        >
          EN
        </Link>
      </div>
    </div>
  );
}
