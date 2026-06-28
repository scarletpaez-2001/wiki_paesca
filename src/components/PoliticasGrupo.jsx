import React from 'react';
import { Lock, CheckSquare, Image } from 'lucide-react';

export default function PoliticasGrupo() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Administración de Directivas */}
      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Directivas de Seguridad del Grupo (GPO)
        </h3>
        <p className="text-sm text-slate-300 mb-6">
          Configuración de políticas de restricción centralizadas aplicadas a las Unidades Organizativas para auditar y securizar el entorno operativo de los clientes.
        </p>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Editor de Administración de Directivas
              </p>
              <img src="/img_paesca/gpo.png" alt="Consola GPO 1" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-semibold text-purple-400 mb-2 flex items-center gap-1">
                <Image className="w-3.5 h-3.5" /> Vinculación de GPO Corporativa
              </p>
              <img src="/img_paesca/gpo2.png" alt="Consola GPO 2" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Prohibición Panel Control (Config)</p>
              <img src="/img_paesca/prohibicion_panel_control.png" alt="GPO Panel 1" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Habilitación de Restricciones</p>
              <img src="/img_paesca/prohibicion_panel_control2.png" alt="GPO Panel 2" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
            <div className="bg-slate-950 p-2 rounded-xl border border-purple-900/40 shadow-inner">
              <p className="text-xs font-medium text-slate-400 mb-1.5 text-center">Listado General de Directivas</p>
              <img src="/img_paesca/prohibicion_lista.png" alt="Lista Directivas" className="rounded-lg max-w-full h-auto mx-auto border border-slate-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
