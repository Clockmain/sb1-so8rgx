import React from 'react';
import { ColumnDef } from '../../types/table';

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
}

export function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50"
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.length === 0 ? (
          <tr>
            <td 
              colSpan={columns.length}
              className="px-6 py-8 text-center text-gray-500 text-sm"
            >
              No se encontraron resultados para la búsqueda
            </td>
          </tr>
        ) : (
          data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={`
                ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                hover:bg-blue-50 transition-colors duration-150
              `}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {column.accessorFn 
                    ? column.accessorFn(row)
                    : column.accessorKey 
                      ? row[column.accessorKey as keyof T]
                      : '-'
                  }
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}