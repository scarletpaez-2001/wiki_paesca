import React from 'react';
import { Shield, CheckCircle, Image } from 'lucide-react';

export default function ActiveDirectory() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Información del Dominio */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Configuración del Controlador de Dominio
        </h3>
        <div className="space-y-3 text-slate-300 text-sm">
          <div>
            <span className="text-purple-400">Nombre de Dominio (FQDN):</span>
            <p className="font-mono text-slate-200">inacap.local</p>
          </div>
          <div>
            <span className="text-purple-400">NetBIOS:</span>
            <p className="font-mono text-slate-200">INACAP</p>
          </div>
          <div>
            <span className="text-purple-400">Nivel Funcional del Bosque:</span>
            <p className="font-mono text-slate-200">Windows Server 2016 / 2019</p>
          </div>
        </div>
      </div>

      {/* Evidencias del Despliegue de Roles */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          Evidencias de Instalación (AD DS + DNS)
        </h3>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 1. Selección de Roles del Servidor
              </p>
              <img src="/img_paesca/roles.png" alt="Roles AD" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 2. Confirmación de Características DNS
              </p>
              <img src="/img_paesca/roles2.png" alt="Roles DNS" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/40 shadow-inner">
            <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
              <Image className="w-3.5 h-3.5" /> 3. Reinicio y Promoción del Servidor a Controlador de Dominio
            </p>
            <img src="/img_paesca/reinicio_rol.png" alt="Reinicio Rol" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}