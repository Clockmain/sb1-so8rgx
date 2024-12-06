import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export function formatDate(dateString: string): string {
  try {
    return format(parseISO(dateString), 'dd MMM yyyy', { locale: es });
  } catch {
    return dateString;
  }
}