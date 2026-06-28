import React from 'react';
import { Users, Laptop, Image } from 'lucide-react';

export default function ClienteDominio() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Estructura Lógica de OUs */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Estructura de Objetos y Unidades Organizativas (OU)
        </h3>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 1. Creación de Usuarios de Soporte (Paso 1)
              </p>
              <img src="/img_paesca/creacion_usuario_s.png" alt="Usuario Soporte 1" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 2. Configuración de Credenciales de Soporte
              </p>
              <img src="/img_paesca/creacion_usuario_s2.png" alt="Usuario Soporte 2" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/40 shadow-inner">
            <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
              <Image className="w-3.5 h-3.5" /> 3. Directorio Activo: Vista General de Usuarios Creados
            </p>
            <img src="/img_paesca/usuarios.png" alt="Listado Usuarios" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 4. Creación y Definición de Grupos Globales
              </p>
              <img src="/img_paesca/creacion_grupo.png" alt="Creación Grupo" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 5. Asignación de Miembros al Grupo Corporativo
              </p>
              <img src="/img_paesca/creacion_grupo2.png" alt="Grupo Finalizado" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Incorporación del Cliente (Parte E) */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Laptop className="w-5 h-5" />
          Incorporación de Estaciones de Trabajo al Dominio
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
            <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
              <Image className="w-3.5 h-3.5" /> 1. Despliegue de la VM Cliente (Windows 10)
            </p>
            <img src="/img_paesca/creacion_vm_cliente.png" alt="VM Cliente" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
          </div>
          <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
            <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
              <Image className="w-3.5 h-3.5" /> 2. Verificación de Conexión y Cliente Integrado
            </p>
            <img src="/img_paesca/cliente_creado.png" alt="Cliente OK" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}