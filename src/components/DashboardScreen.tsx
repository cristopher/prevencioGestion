import { useNavigate } from 'react-router-dom';
import { 
  Wrench, 
  Truck, 
  Users, 
  ClipboardList, 
  PieChart, 
  FileOutput, 
  Settings,
  ChevronRight,
  UserCheck,
  Building2,
  ClipboardCheck
} from 'lucide-react';
import { Layout } from './Layout';

export function DashboardScreen() {
  const navigate = useNavigate();

  const modules = [
    { id: 'workers', name: 'Trabajadores', icon: ClipboardList, path: '/workers' },
    { id: 'companies', name: 'Empresas / Subcontratos', icon: Building2, path: '/settings' }, // Path placeholder
    { id: 'machinery', name: 'Maquinaria', icon: Truck, path: '/machinery' },
    { id: 'tools', name: 'Herramientas', icon: Wrench, path: '/tools' },
    { id: 'talks', name: 'Charlas integrales', icon: Users, path: '/talks' },
    { id: 'ast', name: 'AST (Sistema de gestión)', icon: ClipboardCheck, path: '/risks' },
    { id: 'reports', name: 'Informes', icon: PieChart, path: '/reports', badge: true },
    { id: 'export', name: 'Exportación', icon: FileOutput, path: '/export' },
    { id: 'settings', name: 'Configuración', icon: Settings, path: '/settings' },
  ];

  return (
    <Layout activeTab="inicio">
      <div className="px-4 space-y-8">
        {/* Header Header */}
        <div className="pt-2">
          <p className="text-on-surface-variant font-medium">Prevención Terreno DS44</p>
          <h2 className="text-3xl font-extrabold text-on-surface mt-1">Buenos días, Roberto</h2>
        </div>

        {/* Primary Action Card */}
        <button 
          onClick={() => navigate('/authorization')}
          className="w-full bg-primary text-white rounded-3xl p-6 flex flex-col items-start justify-between min-h-[160px] shadow-[0_8px_24px_rgba(0,61,155,0.25)] relative overflow-hidden group active:scale-[0.98] transition-all"
        >
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700"></div>
          <UserCheck className="w-10 h-10 mb-4 fill-white/10" />
          <div className="text-left">
            <h3 className="text-xl font-bold">Autorización Ingreso</h3>
            <p className="text-white/80 font-medium text-sm mt-1">Gestión de pases y protocolos</p>
          </div>
          <div className="absolute bottom-6 right-6">
            <ChevronRight className="w-6 h-6" />
          </div>
        </button>

        {/* Modules Grid */}
        <section>
          <h3 className="text-xl font-bold text-on-surface mb-5">Módulos de Gestión</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <button
                  key={module.id}
                  onClick={() => navigate(module.path)}
                  className="bg-surface-container-lowest rounded-2xl p-5 flex flex-col items-center justify-center gap-3 ios-shadow border border-surface-dim hover:bg-surface-container-low transition-all active:scale-95 group relative"
                >
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary transition-colors relative">
                    <Icon className="w-6 h-6" />
                    {module.badge && (
                       <div className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <span className="text-xs font-bold text-on-surface text-center">
                    {module.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
