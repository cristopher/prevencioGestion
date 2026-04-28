import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Home, Settings, ShieldAlert, BadgeCheck, Construction, UserCircle, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
  showBack?: boolean;
  title?: string;
  activeTab?: string;
}

export function Layout({ children, showBack = false, title, activeTab }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'equipos', label: 'Equipos', icon: Construction, path: '/machinery' },
    { id: 'ingresos', label: 'Ingresos', icon: BadgeCheck, path: '/authorization' },
    { id: 'riesgos', label: 'Riesgos', icon: ShieldAlert, path: '/risks' },
  ];

  const showBottomNav = !['/', '/login'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-surface-dim z-50 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          {showBack && (
            <button 
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 rounded-full active:bg-surface-container transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
          )}
          {!showBack && (
             <ShieldAlert className="w-6 h-6 text-primary" />
          )}
          <h1 className="text-lg font-bold text-primary truncate max-w-[200px]">
             {title || 'SafetyGuard'}
          </h1>
        </div>
        
        {location.pathname === '/dashboard' && (
          <button className="w-8 h-8 rounded-full overflow-hidden border border-surface-dim">
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
               alt="Profile" 
               className="w-full h-full object-cover"
             />
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className={`flex-1 pt-20 ${showBottomNav ? 'pb-24' : 'pb-6'}`}>
        <motion.div
           key={location.pathname}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.3, ease: 'easeOut' }}
           className="w-full h-full"
        >
          {children}
        </motion.div>
      </main>

      {/* Bottom Nav */}
      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-surface-dim safe-area-pb z-50 flex justify-around items-center h-16 px-2 rounded-t-2xl ios-shadow">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab || location.pathname === tab.path;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`flex flex-col items-center justify-center px-4 py-1 rounded-xl transition-all ${
                  isActive 
                    ? 'text-primary bg-primary/5' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-primary/10' : ''}`} />
                <span className="text-[11px] font-medium">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
