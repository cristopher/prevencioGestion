import { useState } from 'react';
import { Search, Construction, Truck, Drone, Plus, Info, AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout } from './Layout';

export function MachineryListScreen() {
  const [filter, setFilter] = useState('Todos');

  const items = [
    { 
      id: 1, 
      type: 'Retroexcavadora', 
      model: 'CAT 420F2', 
      status: 'Operativo', 
      patent: 'AB-CD-12', 
      operator: 'Juan Pérez', 
      icon: Truck,
      statusClass: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-600' }
    },
    { 
      id: 2, 
      type: 'Grúa Torre', 
      model: 'Liebherr 85 EC-B', 
      status: 'Pendiente', 
      patent: 'S/N - T1', 
      operator: 'Carlos Soto', 
      icon: Drone,
      alert: 'Inspección mensual caduca mañana',
      statusClass: { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-600' }
    },
    { 
      id: 3, 
      type: 'Camión Tolva', 
      model: 'Mercedes-Benz Actros', 
      status: 'Rechazado', 
      patent: 'XT-99-21', 
      operator: 'Luis Gómez', 
      icon: Truck,
      critical: 'Falla en sistema hidráulico reportada',
      statusClass: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-600' }
    },
    { 
      id: 4, 
      type: 'Grúa Horquilla', 
      model: 'Toyota 8FD25', 
      status: 'Operativo', 
      patent: 'XYZ-123', 
      operator: 'María Rojas', 
      icon: Truck,
      statusClass: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-600' }
    }
  ];

  const filters = ['Todos', 'Operativo', 'Pendiente', 'Rechazado'];

  return (
    <Layout showBack title="Maquinaria" activeTab="equipos">
      <div className="px-4 flex flex-col gap-6">
        {/* Search */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-outline group-focus-within:text-primary" />
          </div>
          <input 
            type="text" 
            placeholder="Buscar patente, modelo o tipo..."
            className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 pl-12 pr-4 py-4 rounded-xl outline-none font-medium transition-all"
          />
        </div>

        {/* Filters */}
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
        <div className="grid gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article 
                key={item.id}
                className={`${item.statusClass.bg} rounded-2xl p-5 ios-shadow border-l-4 ${item.statusClass.border} flex flex-col gap-4 relative overflow-hidden active:scale-[0.99] transition-transform`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center text-on-surface flex-shrink-0">
                      <Icon className={`w-7 h-7 ${item.statusClass.text} opacity-70`} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-on-surface leading-tight">{item.type}</h2>
                      <p className="text-xs font-semibold text-on-surface-variant uppercase mt-0.5 tracking-wider">{item.model}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/60 ${item.statusClass.text}`}>
                    {item.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-white/40 rounded-xl p-4">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider block">Patente</span>
                    <span className="text-base font-bold text-on-surface">{item.patent}</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider block">Operador</span>
                    <span className="text-base font-bold text-on-surface">{item.operator}</span>
                  </div>
                </div>

                {item.alert && (
                  <div className="flex items-center gap-2 pt-2 border-t border-amber-200 mt-1">
                    <Info className="w-4 h-4 text-amber-600" />
                    <p className="text-xs font-bold text-amber-700">{item.alert}</p>
                  </div>
                )}

                {item.critical && (
                  <div className="flex items-center gap-2 pt-2 border-t border-red-200 mt-1">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <p className="text-xs font-bold text-red-700">{item.critical}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Pagination placeholder */}
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
      <button className="fixed bottom-24 right-5 w-16 h-16 bg-primary-container text-white rounded-2xl ios-shadow flex items-center justify-center hover:bg-primary active:scale-95 transition-all z-40 group">
        <Plus className="w-9 h-9 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </Layout>
  );
}
