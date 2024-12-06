import { Sanction } from '../types/sanction';
import { isValid, parseISO, isSameDay } from 'date-fns';

export function filterSanctions(sanctions: Sanction[], dateQuery: string): Sanction[] {
  if (!dateQuery.trim()) {
    return sanctions;
  }

  const searchDate = parseISO(dateQuery);
  
  if (!isValid(searchDate)) {
    return sanctions;
  }

  return sanctions.filter((sanction) => {
    const matchDate = parseISO(sanction.match.date);
    return isSameDay(matchDate, searchDate);
  });
}