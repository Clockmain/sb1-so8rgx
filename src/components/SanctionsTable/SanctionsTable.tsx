import React, { useState, useMemo } from 'react';
import { Table } from '../Table/Table';
import { SearchBox } from '../SearchBox/SearchBox';
import { columns } from './columns';
import { useSanctionsData } from '../../hooks/useSanctionsData';
import { filterSanctions } from '../../utils/filterSanctions';

export function SanctionsTable() {
  const { data, isLoading } = useSanctionsData();
  const [dateQuery, setDateQuery] = useState('');

  const filteredData = useMemo(() => {
    return filterSanctions(data, dateQuery);
  }, [data, dateQuery]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <SearchBox 
        value={dateQuery}
        onChange={setDateQuery}
      />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <Table 
            data={filteredData} 
            columns={columns}
          />
        </div>
      </div>
      <div className="text-sm text-gray-500 text-center">
        Mostrando {filteredData.length} de {data.length} registros
      </div>
    </div>
  );
}