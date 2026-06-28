import React from 'react';
import { Server, Network, Settings, Image } from 'lucide-react';

export default function ConfiguracionBasica() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Grilla de Especificaciones y Red */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Especificaciones del Servidor */}
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" />
            Especificaciones del Servidor
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Nombre del Servidor:</span>
              <p className="font-mono text-slate-200">SRV-DC01</p>
            </div>
            <div>
              <span className="text-purple-400">IP Estática:</span>
              <p className="font-mono text-slate-200">192.168.10.10</p>
            </div>
            <div>
              <span className="text-purple-400">Máscara de Red:</span>
              <p className="font-mono text-slate-200">255.255.255.0</p>
            </div>
            <div>
              <span className="text-purple-400">Puerta de Enlace:</span>
              <p className="font-mono text-slate-200">192.168.10.10</p>
            </div>
          </div>
        </div>

        {/* Configuración de Red */}
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Network className="w-5 h-5" />
            Configuración de Red
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Adaptador de Red:</span>
              <p className="font-mono text-slate-200">Ethernet</p>
            </div>
            <div>
              <span className="text-purple-400">Ruta por defecto:</span>
              <p className="font-mono text-slate-200">192.168.10.1</p>
            </div>
            <div>
              <span className="text-purple-400">DNS Primario:</span>
              <p className="font-mono text-slate-200">127.0.0.1</p>
            </div>
            <div>
              <span className="text-purple-400">DNS Secundario:</span>
              <p className="font-mono text-slate-200">8.8.8.8 (opcional)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Pasos de Configuración */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Pasos de Configuración
        </h3>
        <p className="text-slate-300 text-sm mb-6">
          A continuación se presentan las evidencias del despliegue inicial del hipervisor, la asignación de recursos de hardware y la configuración base del sistema operativo Windows Server.
        </p>

        {/* CONTENEDOR DE IMÁGENES */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 1. Creación de la Máquina Virtual
              </p>
              <img src="/img_paesca/creacion_vm.png" alt="Creación VM" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 2. Configuración Lógica de la VM
              </p>
              <img src="/img_paesca/config_vm.png" alt="Configuración VM" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-purple-900/40 shadow-inner">
            <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
              <Image className="w-3.5 h-3.5" /> 3. Proceso de Instalación de Windows Server
            </p>
            <img src="/img_paesca/instalacion_server.png" alt="Instalación Server" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 4. Configuración de Usuario Administrador
              </p>
              <img src="/img_paesca/usuario.png" alt="Usuario Admin" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> 5. Cambio de Nombre del Servidor (SRV-DC01)
              </p>
              <img src="/img_paesca/cambio_nombre.png" alt="Cambio Nombre Servidor" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>
        </div>
        {/* FIN CONTENEDOR DE IMÁGENES */}

      </div>
    </div>
  );
}