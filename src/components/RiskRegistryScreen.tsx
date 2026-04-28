import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserX, Landmark, AlertCircle, Info, Send, Camera } from 'lucide-react';
import { Layout } from './Layout';

export function RiskRegistryScreen() {
  const navigate = useNavigate();
  const [type, setType] = useState('acto');
  const [level, setLevel] = useState('grave');

  return (
    <Layout showBack title="Registro de Riesgos" activeTab="riesgos">
      <div className="px-4 space-y-8 max-w-2xl mx-auto">
        {/* Header */}
        <header className="space-y-1 pt-2">
          <h1 className="text-3xl font-extrabold text-on-background">Registro Diario</h1>
          <p className="text-lg font-medium text-on-surface-variant">Actos y Condiciones Laborales</p>
        </header>

        {/* Type Selection */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => setType('acto')}
            className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-3 ios-shadow transition-all duration-300 border-2 active:scale-95 ${
              type === 'acto' 
                ? 'bg-primary-container text-white border-primary shadow-lg scale-105 z-10' 
                : 'bg-surface-container text-on-surface-variant border-transparent'
            }`}
          >
            <UserX className={`w-12 h-12 ${type === 'acto' ? 'fill-white/20' : ''}`} />
            <div className="text-center">
              <span className="block font-bold text-lg leading-tight text-center">Acto Inseguro</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">(Trabajador)</span>
            </div>
          </button>

          <button 
            onClick={() => setType('condicion')}
            className={`rounded-2xl p-6 flex flex-col items-center justify-center gap-3 ios-shadow transition-all duration-300 border-2 active:scale-95 ${
              type === 'condicion' 
                ? 'bg-primary-container text-white border-primary shadow-lg scale-105 z-10' 
                : 'bg-surface-container text-on-surface-variant border-transparent'
            }`}
          >
            <Landmark className={`w-12 h-12 ${type === 'condicion' ? 'fill-white/20' : ''}`} />
            <div className="text-center">
              <span className="block font-bold text-lg leading-tight">Condición</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">(Empresa)</span>
            </div>
          </button>
        </div>

        {/* Risk Level */}
        <section className="bg-surface-container-lowest rounded-2xl p-6 ios-shadow border border-surface-dim space-y-5">
          <h2 className="text-xl font-bold text-on-background">Nivel de Riesgo</h2>
          <div className="flex gap-3">
            {[
              { id: 'leve', label: 'Leve', icon: Info, color: 'bg-surface-variant text-on-surface-variant' },
              { id: 'moderado', label: 'Moderado', icon: AlertCircle, color: 'bg-tertiary-container text-white' },
              { id: 'grave', label: 'Grave', icon: AlertCircle, color: 'bg-error text-white' }
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => setLevel(l.id)}
                className={`flex-1 rounded-xl py-4 px-2 flex flex-col items-center gap-2 transition-all duration-300 active:scale-95 ${
                  level === l.id 
                    ? `${l.color} shadow-lg ring-2 ring-primary ring-offset-4 ring-offset-white scale-105` 
                    : 'bg-surface-container-low text-outline grayscale-[0.8] opacity-60'
                }`}
              >
                <l.icon className={`w-6 h-6 ${level === l.id ? 'fill-white/10' : ''}`} />
                <span className="text-[10px] font-black uppercase tracking-[0.15em]">{l.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Evidence */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-on-background">Evidencia Fotográfica</h2>
          <button className="w-full h-40 bg-surface-container-low border-2 border-outline-variant border-dashed rounded-3xl flex flex-col items-center justify-center gap-3 text-on-surface-variant hover:bg-surface-container transition-all active:scale-[0.98] ios-shadow">
            <Camera className="w-12 h-12 opacity-50" />
            <span className="text-sm font-bold uppercase tracking-widest text-outline">Toca para añadir foto</span>
          </button>
        </section>

        {/* Description */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-on-background">Descripción Detallada</h2>
          <div className="bg-surface-container-low rounded-2xl border-b-2 border-outline-variant focus-within:border-primary focus-within:bg-surface-container transition-colors p-4 ios-shadow">
            <textarea 
              placeholder="Describe el acto o condición observada con el mayor detalle posible..."
              className="w-full bg-transparent border-none focus:ring-0 font-medium text-on-surface placeholder:text-on-surface-variant/50 h-32 resize-none"
            ></textarea>
          </div>
        </section>

        {/* Action */}
        <div className="pb-10 pt-2">
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary text-white rounded-full py-5 px-8 font-bold text-xl ios-shadow active:scale-95 transition-all flex items-center justify-center gap-3 shadow-[0_8px_24px_rgba(0,61,155,0.2)]"
          >
            <Send className="w-6 h-6 fill-white/10" />
            Registrar Incidencia
          </button>
        </div>
      </div>
    </Layout>
  );
}
