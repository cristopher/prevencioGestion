import { useState } from 'react';
import { Search, Plus, BadgeCheck, Building2, ChevronRight, ChevronLeft } from 'lucide-react';
import { Layout } from './Layout';

export function WorkersListScreen() {
  const [filter, setFilter] = useState('Todos');

  const workers = [
    { 
      id: 1, 
      name: 'Carlos Mendoza', 
      status: 'Activo', 
      rut: '15.432.198-K', 
      company: 'Constructora Alfa S.A.',
      statusClass: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-600' }
    },
    { 
      id: 2, 
      name: 'Ana Rojas', 
      status: 'Pendiente', 
      rut: '18.765.432-1', 
      company: 'Subcontratos Beta Ltda.',
      statusClass: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-600' }
    },
    { 
      id: 3, 
      name: 'Luis Soto', 
      status: 'Bloqueado', 
      rut: '12.987.654-3', 
      company: 'Servicios Generales Gamma',
      statusClass: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-600' }
    },
    { 
      id: 4, 
      name: 'María Elena Vidal', 
      status: 'Activo', 
      rut: '16.555.222-8', 
      company: 'Constructora Alfa S.A.',
      statusClass: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-600' }
    }
  ];

  const filters = ['Todos', 'Activos', 'Pendientes', 'Vencidos'];

  return (
    <Layout showBack title="Trabajadores" activeTab="ingresos">
      <div className="px-4 flex flex-col gap-6">
         {/* Search */}
         <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar por nombre o RUT"
            className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 pl-12 pr-4 py-4 rounded-xl outline-none font-medium transition-all"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap text-sm ios-shadow ${
                filter === f 
                  ? 'bg-primary text-white scale-105' 
                  : 'bg-surface-container-high text-on-surface-variant border border-outline-variant'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="grid gap-3">
          {workers.map((worker) => (
            <div 
              key={worker.id}
              className="bg-surface-container-lowest rounded-2xl ios-shadow overflow-hidden flex relative border border-surface-dim hover:bg-surface-container-low transition-all active:scale-[0.99]"
            >
              <div className={`w-1.5 ${worker.statusClass.border.replace('border', 'bg')} shrink-0`}></div>
              <div className="p-5 flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-on-surface tracking-tight">{worker.name}</h3>
                  <span className={`${worker.statusClass.bg} ${worker.statusClass.text} px-3 py-1 rounded-full font-black text-[9px] uppercase tracking-widest`}>
                    {worker.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <BadgeCheck className="w-4 h-4 opacity-50" />
                    <span className="text-sm font-bold">{worker.rut}</span>
                  </div>
                  <div className="flex items-center gap-3 text-on-surface-variant">
                    <Building2 className="w-4 h-4 opacity-50" />
                    <span className="text-sm font-medium">{worker.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 py-8">
           <button className="p-2 rounded-full text-outline-variant hover:bg-surface-container transition-all">
             <ChevronLeft className="w-5 h-5" />
           </button>
           <div className="flex gap-1">
             <button className="w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">1</button>
             <button className="w-10 h-10 rounded-full text-on-surface-variant font-bold text-sm hover:bg-surface-container transition-all">2</button>
             <button className="w-10 h-10 rounded-full text-on-surface-variant font-bold text-sm hover:bg-surface-container transition-all">3</button>
             <span className="w-10 h-10 flex items-center justify-center text-outline-variant tracking-widest pb-2">...</span>
           </div>
           <button className="p-2 rounded-full text-on-surface hover:bg-surface-container transition-all">
             <ChevronRight className="w-5 h-5" />
           </button>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-5 w-16 h-16 bg-primary text-white rounded-2xl ios-shadow flex items-center justify-center hover:bg-primary-container active:scale-95 transition-all z-40">
        <Plus className="w-9 h-9" />
      </button>
    </Layout>
  );
}
