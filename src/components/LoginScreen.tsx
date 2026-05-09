import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Lock, Eye, EyeOff, Fingerprint, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-surface-dim z-50">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-primary tracking-tight">SafeGuard Industrial</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col md:flex-row md:h-screen pt-16">
        {/* Image Panel (Desktop Only) */}
        <section className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden h-full">
          <img 
            alt="Industrial environment" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">Precisión Industrial</h2>
              <p className="text-lg lg:text-xl font-medium opacity-90 max-w-md">Monitoreo en tiempo real para entornos de alto riesgo y gestión de seguridad avanzada.</p>
              
              <div className="flex gap-2 mt-8">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
                <div className="w-2 h-2 rounded-full bg-white opacity-40"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Login Panel */}
        <section className="flex-grow flex flex-col justify-center items-center px-6 py-12 md:w-1/2 lg:w-2/5 md:h-full overflow-y-auto">
          <div className="w-full max-w-md space-y-8 my-auto">
            {/* Welcome Header */}
            <div className="text-center md:text-left space-y-2">
              <h1 className="text-3xl font-black text-on-surface tracking-tight">Bienvenido a SafeGuard</h1>
              <p className="font-medium text-on-surface-variant">Ingrese sus credenciales para acceder al panel de control.</p>
            </div>

            {/* Promotional Banner (Mobile Only) */}
            <div className="md:hidden p-4 bg-primary-container/10 border border-primary/10 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-primary-container/20 rounded-xl">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest">NUEVA ACTUALIZACIÓN</p>
                <p className="text-sm font-bold text-on-surface">Protocolos de seguridad v4.2 activos</p>
              </div>
            </div>

            {/* Login Form */}
            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-outline uppercase tracking-widest ml-1" htmlFor="user">USUARIO / EMAIL</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
                    <input 
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all font-bold text-on-surface rounded-t-xl outline-none" 
                      id="user" 
                      placeholder="ejemplo@empresa.com" 
                      type="text" 
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-outline uppercase tracking-widest ml-1" htmlFor="password">CONTRASEÑA</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
                    <input 
                      className="w-full pl-12 pr-12 py-4 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-all font-bold text-on-surface rounded-t-xl outline-none" 
                      id="password" 
                      placeholder="••••••••" 
                      type={showPassword ? 'text' : 'password'} 
                    />
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors" 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="text-xs font-black text-primary hover:underline uppercase tracking-widest">
                  ¿olvidé mi contraseña?
                </button>
              </div>

              <button 
                className="w-full py-5 bg-primary text-white font-black rounded-2xl ios-shadow hover:opacity-95 active:scale-[0.98] transition-all flex justify-center items-center gap-2 text-lg" 
                type="button"
                onClick={() => navigate('/company-selection')}
              >
                Iniciar Sesión
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
                <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em] px-2">O ACCEDER CON</span>
                <div className="flex-grow h-[1px] bg-outline-variant/30"></div>
              </div>

              {/* Biometric Access */}
              <button 
                className="w-full py-5 border-2 border-outline-variant rounded-2xl flex items-center justify-center gap-3 font-bold text-on-surface-variant hover:bg-surface-container-low transition-all active:scale-[0.98]" 
                type="button"
              >
                <Fingerprint className="w-7 h-7 text-primary" />
                Acceso Biométrico
              </button>
            </form>

            <p className="text-center text-xs font-bold text-on-surface-variant opacity-70">
              ¿No tiene una cuenta? <button type="button" className="text-primary font-black hover:underline uppercase ml-1">Contacte a Soporte IT</button>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-surface-dim mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 py-6 gap-4 max-w-7xl mx-auto">
          <span className="text-[10px] font-black text-outline uppercase tracking-widest text-center md:text-left">© 2024 SafeGuard Industrial Systems. All rights reserved.</span>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Safety Standards', 'Help Center'].map((link) => (
              <button key={link} className="text-[10px] font-black text-primary hover:underline uppercase tracking-wide">
                {link}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

