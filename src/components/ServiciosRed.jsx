import React from 'react';
import { Cpu, Check, Image } from 'lucide-react';

export default function ServiciosRed() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Configuración DHCP */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5" />
          Servicios Core de Red: DHCP Server
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          Evidencias de la instalación de la característica de DHCP y el aprovisionamiento del direccionamiento dinámico para el rango corporativo.
        </p>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Inicialización de la Consola DHCP
              </p>
              <img src="/img_paesca/dhcp.png" alt="DHCP 1" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Estado del Servidor IPv4
              </p>
              <img src="/img_paesca/dhcp2.png" alt="DHCP 2" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Configuración Ámbito Nuevo</p>
              <img src="/img_paesca/ambito_nuevo.png" alt="Ámbito DHCP" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Rango Exclusión e IP</p>
              <img src="/img_paesca/asignacion_ip.png" alt="Rango IP" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Enlace Dominio Parental</p>
              <img src="/img_paesca/nombre_dominio.png" alt="Nombre Dominio" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Activación Final del Ámbito DHCP
              </p>
              <img src="/img_paesca/finalizacion_ambito.png" alt="Ámbito Listo" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Consola Operativa de Concesiones
              </p>
              <img src="/img_paesca/contenido_dhcp.png" alt="Contenido DHCP" className="rounded-lg max-w-full h-auto mx-auto shadow-md border border-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}