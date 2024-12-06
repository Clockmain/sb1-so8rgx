export interface ColumnDef<T> {
  header: string;
  accessorKey?: keyof T;
  accessorFn?: (row: T) => string | number;
}