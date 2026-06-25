import { Network, Server, Zap } from 'lucide-react';

export default function Inicio() {
  return (
    <div className="space-y-8">
      {/* Sección de bienvenida */}
      <div className="text-center py-8">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-400 to-violet-500">
          Bienvenido a Wiki PAESCA
        </h1>
        <p className="text-xl text-slate-300 mb-2">Portada y Topología del Proyecto</p>
        <p className="text-slate-400">Asignatura: Sistemas Operativos</p>
      </div>

      {/* Tarjeta de descripción */}
      <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 rounded-lg p-6 mb-8">
        <p className="text-slate-300 leading-relaxed">
          Este wiki documenta la implementación y configuración de un servidor Active Directory en el dominio <code className="text-purple-300">inacap.local</code>, 
          incluyendo la topología de red, configuración básica del servidor DC01, integración de clientes y servicios de red avanzados.
        </p>
      </div>

      {/* Topología de Red */}
      <div>
        <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
          <Network className="w-6 h-6" />
          Topología de Red
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Servidor */}
          <div className="bg-slate-800/50 border border-purple-500/40 rounded-lg p-6 hover:border-purple-400/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-semibold text-purple-300">Servidor DC01</h4>
            </div>
            <div className="space-y-2 text-slate-400 text-sm">
              <p><span className="text-purple-400">IP:</span> 192.168.10.10</p>
              <p><span className="text-purple-400">Dominio:</span> inacap.local</p>
              <p><span className="text-purple-400">Servicios:</span> AD, DNS, DHCP</p>
              <p><span className="text-purple-400">SO:</span> Windows Server</p>
            </div>
          </div>

          {/* Cliente */}
          <div className="bg-slate-800/50 border border-purple-500/40 rounded-lg p-6 hover:border-purple-400/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-semibold text-purple-300">Cliente PC01</h4>
            </div>
            <div className="space-y-2 text-slate-400 text-sm">
              <p><span className="text-purple-400">IP:</span> DHCP</p>
              <p><span className="text-purple-400">Dominio:</span> inacap.local</p>
              <p><span className="text-purple-400">Estado:</span> Unido al dominio</p>
              <p><span className="text-purple-400">SO:</span> Windows 10/11</p>
            </div>
          </div>

          {/* Información */}
          <div className="bg-slate-800/50 border border-purple-500/40 rounded-lg p-6 hover:border-purple-400/70 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-semibold text-purple-300">Red Local</h4>
            </div>
            <div className="space-y-2 text-slate-400 text-sm">
              <p><span className="text-purple-400">Subnet:</span> 192.168.10.0/24</p>
              <p><span className="text-purple-400">Gateway:</span> 192.168.10.1</p>
              <p><span className="text-purple-400">Rango DHCP:</span> .100 - .200</p>
              <p><span className="text-purple-400">DNS:</span> 192.168.10.10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura del módulo */}
      <div>
        <h3 className="text-2xl font-bold text-purple-300 mb-6">Estructura del Módulo</h3>
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <div className="space-y-3 text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.1.1</span>
              <span>Configuración Básica - Servidor SRV-DC01 (IP 192.168.10.10)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.1.2</span>
              <span>Active Directory - Dominio inacap.local</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.1.3</span>
              <span>Cliente Dominio - Unión de PC01</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.1.4</span>
              <span>Servicios de Red - DNS y DHCP</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-400 font-bold">2.1.5</span>
              <span>Políticas de Grupo - Gestión de GPO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
