import { ColumnDef } from '../../types/table';
import { Sanction } from '../../types/sanction';
import { formatDate } from '../../utils/formatDate';

export const columns: ColumnDef<Sanction>[] = [
  {
    header: 'N°',
    accessorKey: 'id',
  },
  {
    header: 'Organizador',
    accessorKey: 'organizer',
  },
  {
    header: 'Tipo',
    accessorKey: 'type',
  },
  ...Array.from({ length: 7 }, (_, i) => ({
    header: `Sanción ${i + 1}`,
    accessorFn: (row: Sanction) => row.sanctions[i] || '-',
  })),
  {
    header: 'Partido',
    accessorFn: (row: Sanction) => `${row.match.home} vs ${row.match.away}`,
  },
  {
    header: 'Fecha Partido',
    accessorFn: (row: Sanction) => formatDate(row.match.date),
  },
  {
    header: 'Fecha Ingreso',
    accessorFn: (row: Sanction) => formatDate(row.dates.start),
  },
  {
    header: 'Fecha Término',
    accessorFn: (row: Sanction) => formatDate(row.dates.end),
  },
  {
    header: 'Tiempo Sanción',
    accessorFn: (row: Sanction) => 
      row.durationYears === 1 
        ? '1 año'
        : row.durationYears < 1 
          ? `${Math.round(row.durationYears * 12)} meses`
          : `${row.durationYears} años`,
  },
];