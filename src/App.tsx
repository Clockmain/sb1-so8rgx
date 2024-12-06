import React from 'react';
import { SanctionsTable } from './components/SanctionsTable/SanctionsTable';
import { ClipboardList } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <ClipboardList className="h-10 w-10 text-blue-600" />
              <h1 className="text-4xl font-bold text-gray-900">Rutificador de Sanciones</h1>
            </div>
            <p className="text-gray-600 text-lg">
              Busca sanciones por fecha del partido
            </p>
          </div>
          <SanctionsTable />
        </div>
      </div>
    </div>
  );
}

export default App;