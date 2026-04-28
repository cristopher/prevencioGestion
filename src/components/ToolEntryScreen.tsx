import { useNavigate } from 'react-router-dom';
import { 
  BadgeCheck, 
  Wrench, 
  ChevronRight, 
  BadgeInfo, 
  Cpu, 
  QrCode, 
  CheckCircle,
  Eye,
  Edit3,
  ToggleLeft
} from 'lucide-react';
import { Layout } from './Layout';
import { useState } from 'react';

export function ToolEntryScreen() {
  const navigate = useNavigate();
  const [personType, setPersonType] = useState('jornal');
  const [toolStatus, setToolStatus] = useState('optimo');

  return (
    <Layout showBack title="Ingreso de Herramienta">
      <div className="px-4 space-y-8 max-w-2xl mx-auto pb-10">
        <form className="space-y-8">
          {/* Worker ID Card */}
          <section className="bg-surface-container-lowest rounded-3xl p-6 ios-shadow border border-surface-dim space-y-6">
            <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.15em] ml-1">Identificación del Trabajador</label>
            
            <div className="flex bg-surface-container rounded-2xl p-1.5 gap-1.5">
              <button 
                type="button"
                onClick={() => setPersonType('jornal')}
                className={`flex-1 rounded-xl flex items-center justify-center gap-3 py-3 transition-all font-bold text-sm ${
                  personType === 'jornal' 
                    ? 'bg-surface-container-lowest text-primary shadow-sm ios-shadow' 
                    : 'text-on-surface-variant hover:bg-surface-dim'
                }`}
              >
                <BadgeCheck className={`w-5 h-5 ${personType === 'jornal' ? 'fill-primary/10' : ''}`} />
                Jornal
              </button>
              <button 
                type="button"
                onClick={() => setPersonType('contratista')}
                className={`flex-1 rounded-xl flex items-center justify-center gap-3 py-3 transition-all font-bold text-sm ${
                  personType === 'contratista' 
                    ? 'bg-surface-container-lowest text-primary shadow-sm ios-shadow' 
                    : 'text-on-surface-variant hover:bg-surface-dim'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                   <BadgeInfo className="w-5 h-5" />
                </div>
                Contratista
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">RUT</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <BadgeCheck className="w-5 h-5 text-on-surface-variant opacity-50 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ej. 12.345.678-9"
                    className="w-full bg-surface-container-low border border-surface-dim focus:border-primary focus:ring-0 pl-12 pr-4 py-4 rounded-2xl font-bold text-lg outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Nombre</label>
                  <input type="text" placeholder="Nombre" className="w-full bg-surface-container-low border border-surface-dim focus:border-primary focus:ring-0 px-4 py-4 rounded-2xl font-bold text-lg outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Apellido</label>
                  <input type="text" placeholder="Apellido" className="w-full bg-surface-container-low border border-surface-dim focus:border-primary focus:ring-0 px-4 py-4 rounded-2xl font-bold text-lg outline-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Tool Details Card */}
          <section className="bg-surface-container-lowest rounded-3xl p-6 ios-shadow border border-surface-dim space-y-8">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Tipo de Herramienta</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Wrench className="w-5 h-5 text-on-surface-variant opacity-50 group-focus-within:text-primary transition-colors" />
                </div>
                <select className="w-full bg-surface-container-low border border-surface-dim focus:border-primary focus:ring-0 pl-12 pr-12 py-4 rounded-2xl font-bold text-lg outline-none appearance-none cursor-pointer">
                  <option value="">Seleccionar tipo...</option>
                  <option value="taladro">Taladro</option>
                  <option value="sierra">Sierra Circular</option>
                  <option value="pulidora">Pulidora</option>
                </select>
                <ChevronRight className="w-5 h-5 text-on-surface-variant absolute right-4 top-1/2 -translate-y-1/2 rotate-90" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Marca y Modelo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <QrCode className="w-5 h-5 text-on-surface-variant opacity-50 group-focus-within:text-primary transition-colors" />
                </div>
                <input type="text" placeholder="Ej. DeWalt DCD771" className="w-full bg-surface-container-low border border-surface-dim focus:border-primary focus:ring-0 pl-12 pr-4 py-4 rounded-2xl font-bold text-lg outline-none " />
              </div>
            </div>

            {/* State Selection */}
            <div className="space-y-3">
              <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Estado Visual General</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                   { id: 'deficiente', label: 'Deficiente', icon: BadgeInfo, color: 'text-error' },
                   { id: 'regular', label: 'Regular', icon: BadgeInfo, color: 'text-on-surface-variant' },
                   { id: 'optimo', label: 'Óptimo', icon: CheckCircle, color: 'text-primary' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setToolStatus(s.id)}
                    className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                       toolStatus === s.id 
                         ? `border-primary bg-primary/5 ring-1 ring-primary pr-ring` 
                         : 'border-surface-dim hover:bg-surface-container'
                    }`}
                  >
                    <s.icon className={`w-6 h-6 ${toolStatus === s.id ? s.color : 'text-outline opacity-50'}`} />
                    <span className={`text-[10px] font-black uppercase tracking-widest ${toolStatus === s.id ? 'text-primary' : 'text-on-surface-variant'}`}>{s.label}</span>
                  </button>
                ))}
              </div>
            </div>

             {/* Cable Toggle */}
             <div className="bg-surface-container-low border border-surface-dim rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base text-on-surface">Cableado íntegro</span>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-tight">Sin cortes ni empalmes expuestos</span>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer group scale-110">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-dim after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
              </label>
            </div>
          </section>

          {/* Signature */}
          <section className="bg-surface-container-lowest rounded-3xl p-6 ios-shadow border border-surface-dim space-y-4">
            <label className="text-[10px] font-extrabold text-on-surface-variant uppercase tracking-[0.1em] ml-1">Firma del Trabajador</label>
            <div className="w-full h-44 bg-surface-container-low border-2 border-dashed border-outline-variant rounded-3xl flex flex-col items-center justify-center text-outline group active:bg-surface-dim transition-colors cursor-crosshair">
              <Edit3 className="w-10 h-10 mb-2 opacity-50 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold uppercase tracking-widest opacity-60">Firme aquí digitalmente</p>
            </div>
          </section>

          {/* Submit */}
          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary text-white font-black py-5 rounded-3xl ios-shadow active:scale-95 transition-all text-xl shadow-[0_8px_24px_rgba(0,61,155,0.2)] flex items-center justify-center gap-3"
          >
            <CheckCircle className="w-7 h-7 fill-white/10" />
            Registrar Ingreso
          </button>
        </form>
      </div>
    </Layout>
  );
}
