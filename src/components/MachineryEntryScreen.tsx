import { useNavigate } from 'react-router-dom';
import { Truck, User, FileCheck, CheckCircle, ShieldCheck, Lightbulb, Activity, Droplets } from 'lucide-react';
import { Layout } from './Layout';

export function MachineryEntryScreen() {
  const navigate = useNavigate();

  return (
    <Layout showBack title="Ingreso de Maquinaria">
      <div className="px-4 space-y-6 max-w-3xl mx-auto">
        {/* Machine Identity */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-4 space-y-5">
          <h2 className="text-xl font-bold text-on-surface">Identificación de Maquinaria</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">TIPO DE MAQUINARIA</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-lg font-medium outline-none appearance-none">
                <option value="">Seleccione equipo...</option>
                <option value="exc">Excavadora</option>
                <option value="retro">Retroexcavadora</option>
                <option value="grua">Grúa</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">PATENTE / CODIGO</label>
              <input type="text" placeholder="Ej: AB-12-34" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-lg font-medium outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">HORÓMETRO ACTUAL</label>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="0.0" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-lg font-medium outline-none" />
                <span className="text-sm font-bold text-outline uppercase tracking-wider">hrs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Operator Data */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-4 space-y-5">
          <h2 className="text-xl font-bold text-on-surface">Datos del Chofer/Operador</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">NOMBRE COMPLETO</label>
              <input type="text" placeholder="Nombre y Apellido" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-lg font-medium outline-none" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">NÚMERO DE LICENCIA</label>
              <input type="text" placeholder="Rut o Número de documento" className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-0 py-2 text-lg font-medium outline-none" />
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-4 space-y-4">
          <h2 className="text-xl font-bold text-on-surface">Documentación del Equipo</h2>
          <div className="space-y-2">
            {[
              { label: 'Seguro Obligatorio Vigente', icon: ShieldCheck },
              { label: 'Revisión Técnica al Día', icon: FileCheck }
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between p-3 rounded-xl border border-surface-dim hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-on-surface">{item.label}</span>
                </div>
                <input type="checkbox" className="w-6 h-6 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface cursor-pointer" />
              </label>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="bg-surface-container-lowest rounded-2xl ios-shadow border border-surface-dim p-4 space-y-5 pb-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-on-surface">Inspección Visual Rápida</h2>
            <span className="px-2 py-1 rounded-lg bg-error-container text-on-error-container text-[10px] uppercase font-black tracking-widest">Obligatorio</span>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Neumáticos / Orugas en buen estado', icon: Activity },
              { label: 'Sistema de luces operativo', icon: Lightbulb },
              { label: 'Frenos de servicio y parqueo', icon: Activity },
              { label: 'Sin fugas visibles (aceite/hidráulico)', icon: Droplets }
            ].map((item) => (
              <label key={item.label} className="flex items-center justify-between p-3 rounded-xl border border-surface-dim hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                  <span className="text-sm font-bold text-on-surface">{item.label}</span>
                </div>
                <input type="checkbox" className="w-6 h-6 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface cursor-pointer" />
              </label>
            ))}
          </div>
          <div className="space-y-2 pt-2">
            <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-wider">Observaciones</label>
            <textarea placeholder="Detalle cualquier anomalía..." className="w-full bg-surface-container-low border-0 border-b border-outline-variant focus:border-primary focus:ring-0 p-3 rounded-t-lg text-sm font-medium h-20 resize-none outline-none transition-all"></textarea>
          </div>
        </section>

        {/* Footer Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-surface-dim safe-area-pb z-50">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary text-white font-bold py-4 rounded-2xl ios-shadow flex items-center justify-center gap-2 active:scale-95 transition-all text-lg"
          >
            <CheckCircle className="w-6 h-6" />
            Validar Ingreso
          </button>
        </div>
      </div>
    </Layout>
  );
}
