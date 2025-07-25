import { Scholarship } from '../types/content';
import { parseTextWithLinks } from '../lib/linkParser';

interface ScholarshipListProps {
  scholarships: Scholarship[];
}

export default function ScholarshipList({ scholarships }: ScholarshipListProps) {
  return (
    <div className="space-y-4">
      {scholarships.map((scholarship, index) => (
        <div key={index} className="mb-4 p-4 bg-neutral-50 border-l-4 border-neutral-900">
          <div className="block mb-1">
            {scholarship.url ? (
              <a 
                href={scholarship.url} 
                className="text-blue-600 underline hover:text-blue-800 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {scholarship.name}
              </a>
            ) : (
              <span className="font-bold">{scholarship.name}</span>
            )}
          </div>
          <span className="text-green-700 font-bold">{scholarship.amount}</span>
          {scholarship.details && (
            <div className="text-sm text-neutral-600 mt-1">
              {parseTextWithLinks(scholarship.details)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
