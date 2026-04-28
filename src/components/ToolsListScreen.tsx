import { Search, Plus, Wrench, Bolt, Scissors, Calendar, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Layout } from './Layout';
import { useState } from 'react';

export function ToolsListScreen() {
  const [filter, setFilter] = useState('Todos');

  const tools = [
    {
      id: 1,
      name: 'Taladro Percutor Industrial',
      worker: 'Juan Pérez',
      lastReview: '12 Oct 2023',
      icon: Wrench,
      status: 'Operativo',
      colorClass: 'bg-green-50/50'
    },
    {
      id: 2,
      name: 'Generador Eléctrico 5kW',
      worker: 'María Gómez',
      lastReview: '05 Nov 2023',
      icon: Bolt,
      status: 'Vencida',
      expired: true,
      colorClass: 'bg-red-50/50 border-l-4 border-l-error'
    },
    {
      id: 3,
      name: 'Cortadora Circular',
      worker: 'Carlos Ruiz',
      lastReview: '28 Oct 2023',
      icon: Scissors,
      status: 'Operativo',
      colorClass: 'bg-green-50/50'
    }
  ];

  return (
    <Layout showBack title="Control de Equipos" activeTab="equipos">
      <div className="px-4 space-y-6">
        <div className="flex flex-col gap-4">
          <div className="relative group bg-surface-container-low rounded-2xl flex items-center p-1 px-4 border border-transparent focus-within:border-primary transition-all">
            <Search className="w-5 h-5 text-on-surface-variant opacity-60" />
            <input 
              placeholder="Buscar por código o nombre..." 
              className="bg-transparent border-none focus:ring-0 w-full py-4 font-medium text-on-surface"
            />
          </div>

          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
            <div className="flex gap-2">
              {['Todos', 'Operativo', 'Pendiente', 'Rechazado'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-sm ${
                    filter === f ? 'bg-primary text-white' : 'bg-white text-on-surface-variant border border-surface-dim'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-on-surface-variant shrink-0 bg-surface-container px-4 py-2 rounded-full border border-surface-dim font-bold text-sm">
              <span>Fecha</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div 
                key={tool.id}
                className={`${tool.colorClass} rounded-3xl p-6 ios-shadow flex flex-col relative active:scale-[0.99] transition-transform`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-white/60 flex items-center justify-center shrink-0">
                      <Icon className={`w-8 h-8 ${tool.expired ? 'text-error' : 'text-on-surface-variant'}`} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-on-surface">{tool.name}</h3>
                      <span className="text-xs font-bold text-on-surface-variant opacity-70 mt-1 uppercase tracking-wider">Trabajador: {tool.worker}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <Calendar className={`w-4 h-4 ${tool.expired ? 'text-error' : 'text-outline'}`} />
                  <span className={`text-xs font-bold ${tool.expired ? 'text-error' : 'text-outline'} uppercase tracking-tight`}>
                    {tool.expired ? `Vencida: ${tool.lastReview}` : `Última revisión: ${tool.lastReview}`}
                  </span>
                </div>

                <div className="border-t border-outline-variant/30 pt-4 w-full">
                  <button className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl transition-all font-black uppercase tracking-widest text-xs ${
                    tool.expired ? 'bg-error text-white ios-shadow hover:bg-error/90' : 'bg-transparent text-primary hover:bg-primary/5'
                  }`}>
                    <CheckSquare className="w-5 h-5" />
                    {tool.expired ? 'Completar Checklist Urgente' : 'Checklist Mantenimiento'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-3 py-6 pb-20">
          <button className="w-12 h-12 rounded-xl border border-surface-dim flex items-center justify-center text-on-surface-variant disabled:opacity-30" disabled>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 rounded-xl bg-primary text-white font-bold text-lg">1</button>
          <button className="w-12 h-12 rounded-xl border border-surface-dim text-on-surface-variant font-bold text-lg hover:bg-surface-dim transition-colors">2</button>
          <button className="w-12 h-12 rounded-xl border border-surface-dim text-on-surface-variant font-bold text-lg hover:bg-surface-dim transition-colors">3</button>
          <button className="w-12 h-12 rounded-xl border border-surface-dim flex items-center justify-center text-on-surface-variant hover:bg-surface-dim transition-colors transition-all active:scale-90">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

       {/* FAB */}
       <button className="fixed bottom-24 right-6 w-16 h-16 bg-primary text-white rounded-2xl shadow-[0_8px_24px_rgba(0,61,155,0.3)] flex items-center justify-center z-40 hover:bg-primary/95 hover:-translate-y-1 active:scale-90 transition-all duration-300">
        <Plus className="w-9 h-9" />
      </button>
    </Layout>
  );
}
