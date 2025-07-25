export interface Scholarship {
  name: string;
  url?: string | null;
  amount: string;
  details?: string | null;
}

export interface ScheduleItem {
  month: string;
  foundation: string;
  url?: string | null;
  details: string;
}

export interface UsefulLink {
  name: string;
  url: string;
}

export interface ContentData {
  karlScholarships: Scholarship[];
  karlSchedule: ScheduleItem[];
  aliceSchedule: ScheduleItem[];
  usefulLinks: UsefulLink[];
}
