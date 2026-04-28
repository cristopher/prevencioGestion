import { useNavigate } from 'react-router-dom';
import { Truck, Users, Wrench, ChevronRight } from 'lucide-react';
import { Layout } from './Layout';

export function AuthorizationSelectionScreen() {
  const navigate = useNavigate();

  const options = [
    { 
      id: 'machinery', 
      title: 'Maquinaria Pesada', 
      desc: 'Cumplimiento Normativo', 
      icon: Truck, 
      color: 'bg-primary-container/10', 
      iconColor: 'text-primary',
      path: '/machinery-entry'
    },
    { 
      id: 'personnel', 
      title: 'Personal', 
      desc: 'Checklist de Seguridad', 
      icon: Users, 
      color: 'bg-tertiary-container/10', 
      iconColor: 'text-tertiary-container',
      path: '/personnel-entry'
    },
    { 
      id: 'tools', 
      title: 'Herramientas', 
      desc: 'Herramientas Personales', 
      icon: Wrench, 
      color: 'bg-secondary-container/30', 
      iconColor: 'text-on-secondary-container',
      path: '/tool-entry'
    },
  ];

  const stats = [
    { 
      title: 'MAQUINARIA', 
      icon: Truck, 
      items: [
        { label: 'Equipos Activos', value: '15', color: 'text-primary' },
        { label: 'Pendientes', value: '2', color: 'text-error' }
      ] 
    },
    { 
      title: 'PERSONAL', 
      icon: Users, 
      items: [
        { label: 'Trabajadores en Obra', value: '45', color: 'text-tertiary-container' },
        { label: 'Sin EPP', value: '5', color: 'text-error' }
      ] 
    },
    { 
      title: 'HERRAMIENTAS', 
      icon: Wrench, 
      items: [
        { label: 'Validadas', value: '128', color: 'text-secondary' }
      ] 
    }
  ];

  return (
    <Layout showBack title="Autoriza Ingreso" activeTab="ingresos">
      <div className="px-4 space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-on-surface">Selección de Autorización</h1>
          <p className="text-on-surface-variant font-medium mt-1">Seleccione el tipo de ingreso para iniciar el protocolo.</p>
        </header>

        <div className="grid gap-3">
          {options.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => navigate(opt.path)}
                className="bg-surface-container-lowest rounded-2xl p-4 flex items-center gap-4 ios-shadow border border-surface-dim hover:bg-surface-container-low transition-all active:scale-[0.98] group text-left"
              >
                <div className={`w-12 h-12 rounded-xl ${opt.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${opt.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-on-surface leading-tight">{opt.title}</h3>
                  <p className="text-xs font-semibold text-on-surface-variant uppercase mt-0.5">{opt.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </button>
            );
          })}
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-on-surface">Resumen de Estado</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="bg-surface-container-lowest border border-surface-dim rounded-2xl p-5 ios-shadow flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-on-surface-variant opacity-50" />
                    <span className="text-[10px] font-extrabold text-on-surface-variant tracking-[0.1em] uppercase">{stat.title}</span>
                  </div>
                  <div className="space-y-2">
                    {stat.items.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-on-surface-variant">{item.label}</span>
                        <span className={`font-bold text-base ${item.color}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
