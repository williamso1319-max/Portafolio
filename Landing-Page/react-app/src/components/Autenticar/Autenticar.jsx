import React, { useState } from 'react';
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Github, 
  Chrome, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  UserPlus
} from 'lucide-react';


const Autenticar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState('');
  const[error, setError] = useState('');
  const[isRegistering, setIsRegistering] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulación de autenticación  
    setTimeout(() => {
      if (email === "test@example.com" && password === "password123") {
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        setError("Credenciales incorrectas. Intente con test@example.com / password123");
        setIsLoading(false);
      }
    }, 1500);
  };




     if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 transition-colors duration-500">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">¡Bienvenido de nuevo!</h2>
          <p className="text-slate-600 mb-8">Has iniciado sesión correctamente en el sistema.</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-200"
          >
            Ir al Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-50px flex items-center justify-center rounded-4xl  bg-slate-50 p-4">
      <div className="max-w-md w-full flex flex-col gap-6">
        
        {/* Encabezado del Logo/App */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white mb-4 shadow-lg shadow-indigo-200">
            <LogIn className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
            {isRegistering ? 'Crea tu cuenta' : 'Bienvenido'}
          </h1>
          <p className="text-slate-500 mt-2">
            {isRegistering 
              ? 'Únete a nuestra plataforma hoy mismo.' 
              : 'Ingresa tus credenciales para acceder.'}
          </p>
        </div>

        {/* Tarjeta Principal */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
          
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Campo Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Correo Electrónico
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                  placeholder="ejemplo@correo.com"
                />
              </div>
            </div>

            {/* Campo Contraseña */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-slate-700">
                  Contraseña
                </label>
                {!isRegistering && (
                  <a href="#" className="text-xs font-semibold text-indigo-600 hover:text-indigo-500">
                    ¿Olvidaste tu contraseña?
                  </a>
                )}
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Alerta de Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-600 bg-red-50 rounded-lg animate-pulse">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{error}</p>
              </div>
            )}

            {/* Botón de Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg shadow-md shadow-indigo-100 transition-all duration-200"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Divisor */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-500 font-medium">O continúa con</span>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Chrome className="w-4 h-4 text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors font-medium text-slate-700">
              <Github className="w-4 h-4 text-slate-900" />
              Github
            </button>
          </div>
        </div>

        {/* Footer de Registro */}
        <p className="text-center text-slate-600 text-sm">
          {isRegistering ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
          {' '}
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-bold text-indigo-600 hover:text-indigo-500 underline-offset-4 hover:underline"
          >
            {isRegistering ? 'Inicia sesión' : 'Regístrate gratis'}
          </button>
        </p>
      </div>
      </div>
    );
};


export default Autenticar;