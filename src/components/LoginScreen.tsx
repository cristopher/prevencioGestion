import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User, Lock, Eye, EyeOff, ArrowRight, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-sm flex flex-col gap-10">
        {/* Brand */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center ios-shadow">
            <ShieldCheck className="w-10 h-10 text-on-primary-container fill-on-primary-container/20" />
          </div>
          <h2 className="text-2xl font-bold text-primary tracking-tight">SafeGuard Industrial</h2>
        </div>

        {/* Welcome */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-extrabold text-on-surface">Bienvenido a SafeGuard</h1>
          <p className="text-on-surface-variant font-medium">Ingrese sus credenciales para continuar</p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Usuario o Correo</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type="email" 
                  placeholder="ejemplo@empresa.com"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 pl-12 pr-4 py-4 rounded-t-lg outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1">Contraseña</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-outline group-focus-within:text-primary transition-colors" />
                </div>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 pl-12 pr-12 py-4 rounded-t-lg outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-sm font-semibold text-primary hover:underline">
              Olvidé mi contraseña
            </button>
          </div>

          <button 
            type="button"
            onClick={() => navigate('/dashboard')}
            className="w-full bg-primary text-white font-bold py-4 rounded-full ios-shadow flex items-center justify-center gap-2 active:scale-95 transition-all text-lg"
          >
            Iniciar Sesión
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        {/* Biometric */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full flex items-center py-5">
            <div className="flex-grow border-t border-outline-variant"></div>
            <span className="flex-shrink mx-4 text-sm font-medium text-outline">O ingrese con</span>
            <div className="flex-grow border-t border-outline-variant"></div>
          </div>
          
          <button 
            type="button"
            className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center text-primary ios-shadow active:scale-90 transition-all hover:bg-secondary-container"
          >
            <Fingerprint className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
