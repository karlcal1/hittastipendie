import { ScheduleItem } from '../types/content';
import { parseTextWithLinks } from '../lib/linkParser';

interface ScheduleTableProps {
  schedule: ScheduleItem[];
  monthLabel: string;
  foundationLabel: string;
  detailsLabel: string;
}

export default function ScheduleTable({ 
  schedule, 
  monthLabel, 
  foundationLabel, 
  detailsLabel 
}: ScheduleTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-neutral-300 my-5">
        <thead>
          <tr>
            <th className="border border-neutral-300 p-3 text-left bg-neutral-50 font-bold text-sm">
              {monthLabel}
            </th>
            <th className="border border-neutral-300 p-3 text-left bg-neutral-50 font-bold text-sm">
              {foundationLabel}
            </th>
            <th className="border border-neutral-300 p-3 text-left bg-neutral-50 font-bold text-sm">
              {detailsLabel}
            </th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className="hover:bg-neutral-50">
              <td className="border border-neutral-300 p-3">
                {item.month}
              </td>
              <td className="border border-neutral-300 p-3">
                {item.url ? (
                  <a 
                    href={item.url} 
                    className="text-blue-600 underline hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.foundation}
                  </a>
                ) : (
                  item.foundation
                )}
              </td>
              <td className="border border-neutral-300 p-3">
                {parseTextWithLinks(item.details)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
