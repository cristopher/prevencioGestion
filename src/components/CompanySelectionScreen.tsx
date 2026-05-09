import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, ArrowRight, History, BellRing, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function CompanySelectionScreen() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const companies = [
    { id: 1, name: 'Constructora Alfa S.A.', rut: '76.452.890-K', border: 'border-primary' },
    { id: 2, name: 'Servicios Gamma', rut: '91.233.111-4', border: 'border-secondary-fixed' },
    { id: 3, name: 'Minería Norte', rut: '88.777.666-5', border: 'border-primary' },
    { id: 4, name: 'Logística Central', rut: '77.100.200-9', border: 'border-outline-variant' },
  ];

  const filteredCompanies = companies.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.rut.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-surface-dim z-50 flex items-center px-4">
        <div className="flex items-center gap-4 max-w-7xl mx-auto w-full">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full active:bg-surface-container transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-primary rotate-180" />
          </button>
          <h1 className="text-xl font-bold text-primary">Selección de Empresa</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20 px-4 max-w-3xl mx-auto w-full space-y-8 pb-32">
        {/* Search Hero */}
        <section className="space-y-6 pt-4">
          <p className="text-on-surface-variant font-medium">
            Bienvenido de nuevo a SafeGuard Industrial. Por favor, seleccione el espacio de trabajo para comenzar su inspección de seguridad.
          </p>
          
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Buscar por nombre de empresa o RUT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-surface-container-low border-none rounded-2xl ios-shadow focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-outline-variant font-medium outline-none transition-all"
            />
          </div>
        </section>

        {/* Company List */}
        <div className="grid gap-4">
          {filteredCompanies.map((company) => (
            <motion.button
              key={company.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/dashboard')}
              className={`bg-surface-container-lowest p-5 rounded-3xl ios-shadow flex items-center justify-between border-l-4 ${company.border} hover:bg-surface-container-low transition-all active:scale-[0.98] group`}
            >
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface leading-tight">{company.name}</h3>
                  <p className="text-xs font-bold text-secondary uppercase tracking-tight mt-0.5">RUT: {company.rut}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-outline group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.button>
          ))}
        </div>

        {/* Bento Style Banner */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-surface-container-high p-5 rounded-3xl ios-shadow flex flex-col items-center text-center gap-2 border border-surface-dim">
            <History className="w-6 h-6 text-primary" />
            <div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">Última Visita</p>
              <p className="text-sm font-bold text-on-surface">Alfa S.A.</p>
            </div>
          </div>
          <div className="bg-surface-container-high p-5 rounded-3xl ios-shadow flex flex-col items-center text-center gap-2 border border-surface-dim">
            <BellRing className="w-6 h-6 text-tertiary" />
            <div>
              <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.1em]">Alertas Pendientes</p>
              <p className="text-sm font-bold text-on-surface">12 activas</p>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent pt-12">
        <div className="max-w-3xl mx-auto">
          <button 
            onClick={() => navigate('/dashboard')}
            className="w-full h-16 bg-primary text-white font-black rounded-3xl ios-shadow active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg"
          >
            Continuar al Dashboard
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
