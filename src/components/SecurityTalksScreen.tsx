import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Users, 
  MapPin, 
  CheckCircle, 
  FileText, 
  Clock,
  Eye,
  BadgeCheck
} from 'lucide-react';
import { Layout } from './Layout';

export function SecurityTalksScreen() {
  const navigate = useNavigate();

  const talks = [
    {
      id: 1,
      status: 'PENDIENTE',
      time: '08:00 AM',
      title: 'Uso correcto de EPP en altura',
      desc: 'Revisión de arneses, líneas de vida y puntos de anclaje antes de iniciar trabajos en andamios.',
      location: 'Sector A - Torre 2',
      attendees: '15 Operarios',
      borderClass: 'border-l-primary',
      statusClass: 'bg-secondary-container text-on-secondary-container'
    },
    {
      id: 2,
      status: 'RETRASADA',
      time: '07:30 AM',
      title: 'Riesgos Eléctricos - LOTO',
      desc: 'Procedimiento de bloqueo y etiquetado para mantenimiento de tableros principales.',
      location: 'Sala Eléctrica B',
      attendees: '5 Técnicos',
      borderClass: 'border-l-error',
      statusClass: 'bg-error-container text-on-error-container',
      timeClass: 'text-error font-bold'
    },
    {
      id: 3,
      status: 'COMPLETADA',
      time: 'Ayer',
      title: 'Manejo de Sustancias Peligrosas',
      desc: 'Lectura de hojas MSDS y protocolos de derrame.',
      location: 'Bodega de Químicos',
      attendees: '8 Trabajadores',
      borderClass: 'border-l-surface-dim opacity-75',
      statusClass: 'bg-surface-container text-on-surface-variant',
      completed: true
    }
  ];

  return (
    <Layout showBack title="Charlas de Seguridad">
      <div className="px-4 space-y-8 max-w-5xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-on-background">Charlas de Seguridad</h1>
            <p className="font-medium text-on-surface-variant">Gestión y registro de capacitaciones de 5 minutos.</p>
          </div>
          <button className="bg-primary text-white font-bold px-6 py-4 rounded-2xl ios-shadow hover:bg-primary-container active:scale-95 transition-all flex items-center justify-center gap-3 w-full md:w-auto text-lg">
            <Plus className="w-6 h-6" />
            Programar Charla
          </button>
        </header>

        {/* Calendar Widget */}
        <section className="bg-surface-container-lowest rounded-3xl p-6 ios-shadow border border-surface-dim">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-on-surface flex items-center gap-3">
              <Calendar className="w-6 h-6 text-primary" />
              Calendario Semanal
            </h2>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
          
          <div className="grid grid-cols-5 gap-3">
            {[
              { day: 'Lun', num: '12' },
              { day: 'Mar', num: '13', active: true },
              { day: 'Mié', num: '14', dot: 'bg-primary' },
              { day: 'Jue', num: '15' },
              { day: 'Vie', num: '16', dot: 'bg-error' }
            ].map((d) => (
              <div 
                key={d.num}
                className={`flex flex-col items-center justify-center py-5 rounded-2xl border transition-all ${
                  d.active 
                    ? 'bg-primary text-white border-primary shadow-lg ring-4 ring-primary/10 scale-105' 
                    : 'bg-surface-container-low border-transparent text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <span className={`text-xs font-bold uppercase tracking-widest ${d.active ? 'text-white' : 'text-outline'}`}>{d.day}</span>
                <span className={`text-2xl font-black mt-1 ${d.active ? 'text-white' : 'text-on-surface'}`}>{d.num}</span>
                {!d.active && d.dot && <div className={`w-1.5 h-1.5 ${d.dot} rounded-full mt-2`}></div>}
                {d.active && <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-pulse"></div>}
              </div>
            ))}
          </div>
        </section>

        {/* List Content */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-on-surface">Charlas de Hoy</h2>
          <div className="grid gap-4">
            {talks.map((talk) => (
              <article 
                key={talk.id}
                className={`bg-surface-container-lowest rounded-3xl p-6 ios-shadow border-l-[6px] ${talk.borderClass} flex flex-col md:flex-row gap-6 md:items-center relative group active:scale-[0.99] transition-all`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span className={`px-2.5 py-1 rounded-lg font-black text-[10px] tracking-widest uppercase ${talk.statusClass}`}>
                      {talk.status}
                    </span>
                    <span className={`text-sm font-bold flex items-center gap-1.5 ${talk.timeClass || 'text-on-surface-variant'}`}>
                      <Clock className="w-4 h-4" /> 
                      {talk.time}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-black text-on-surface leading-tight ${talk.completed ? 'line-through decoration-outline-variant opacity-60' : ''}`}>
                      {talk.title}
                    </h3>
                    <p className="text-on-surface-variant font-medium mt-2 line-clamp-2">
                       {talk.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <MapPin className="w-4 h-4 text-primary opacity-70" />
                      <span className="text-xs font-bold uppercase tracking-wider">{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <Users className="w-4 h-4 text-primary opacity-70" />
                      <span className="text-xs font-bold uppercase tracking-wider">{talk.attendees}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:min-w-[160px]">
                  {!talk.completed ? (
                    <>
                      <button className="bg-primary text-white font-bold py-4 rounded-xl ios-shadow flex items-center justify-center gap-2 active:scale-95 transition-all text-sm group">
                        <BadgeCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Registrar
                      </button>
                      <button className="bg-surface-container text-on-surface font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all text-sm">
                        <FileText className="w-5 h-5" />
                        Material
                      </button>
                    </>
                  ) : (
                    <button className="bg-surface-container text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all text-sm border border-primary/20">
                      <Eye className="w-5 h-5" />
                      Ver Asistencia
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <div className="pb-10"></div>
      </div>
    </Layout>
  );
}
