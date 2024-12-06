export interface Sanction {
  id: number;
  organizer: string;
  type: string;
  sanctions: string[];
  match: {
    home: string;
    away: string;
    date: string;
  };
  dates: {
    start: string;
    end: string;
  };
  durationYears: number;
}