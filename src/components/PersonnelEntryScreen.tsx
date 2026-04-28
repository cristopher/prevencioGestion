import { useNavigate } from 'react-router-dom';
import { BadgeCheck, User, Construction, ShieldCheck, ClipboardCheck, Trash2, CheckCircle } from 'lucide-react';
import { Layout } from './Layout';
import { motion } from 'motion/react';

export function PersonnelEntryScreen() {
  const navigate = useNavigate();

  return (
    <Layout showBack title="Ingreso de Personal">
      <div className="px-4 space-y-6 max-w-2xl mx-auto">
        {/* Worker ID Section */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-5 flex flex-col gap-5">
           <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider" htmlFor="rut">RUT</label>
              <input id="rut" type="text" placeholder="Ej: 12.345.678-9" className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg text-lg font-medium transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider" htmlFor="name">Nombres</label>
              <input id="name" type="text" placeholder="Ingrese nombres" className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg text-lg font-medium transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider" htmlFor="lname">Apellidos</label>
              <input id="lname" type="text" placeholder="Ingrese apellidos" className="w-full bg-surface-container-low border-0 border-b-2 border-surface-variant focus:border-primary focus:ring-0 px-4 py-3 rounded-t-lg text-lg font-medium transition-all" />
            </div>
          </div>
        </section>

        {/* Health Toggle */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-on-surface">Salud Compatible</span>
            <span className="text-xs font-semibold text-on-surface-variant uppercase">Apto para labores en terreno</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer group">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-14 h-8 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </section>

        {/* EPP Checklist */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-5 space-y-6">
          <h2 className="text-xl font-bold text-on-surface">Checklist EPP</h2>
          <div className="space-y-2">
            {[
              { label: 'Casco de Seguridad', icon: Construction },
              { label: 'Lentes de Seguridad', icon: ShieldCheck },
              { label: 'Guantes de Cuero', icon: ClipboardCheck },
              { label: 'Chaleco Reflectante', icon: BadgeCheck }
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container transition-all group border border-transparent hover:border-surface-dim">
                <div className="flex items-center gap-4">
                  <item.icon className="w-5 h-5 text-on-secondary-container group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-on-surface">{item.label}</span>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-variant after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Signature */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-on-surface">Firma del Trabajador</h2>
            <button className="text-xs font-bold text-primary hover:bg-primary/5 px-2 py-1 rounded-md transition-colors">
              LIMPIAR
            </button>
          </div>
          <div className="w-full h-40 bg-surface-container-low border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center relative active:bg-surface-container transition-colors">
            <span className="text-sm font-bold text-outline uppercase tracking-widest opacity-50 select-none">Firme aquí digitalmente</span>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-4 pt-4 pb-10">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary text-white font-bold py-5 rounded-2xl ios-shadow flex items-center justify-center gap-2 active:scale-95 transition-all text-lg shadow-[0_8_16_rgba(0,61,155,0.2)]"
          >
            <CheckCircle className="w-6 h-6" />
            Autorizar Ingreso
          </button>
        </div>
      </div>
    </Layout>
  );
}
