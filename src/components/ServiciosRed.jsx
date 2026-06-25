import { Network, Wifi, AlertCircle, Settings } from 'lucide-react';

export default function ServiciosRed() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          Configuración de servicios críticos de red: DNS y DHCP, esenciales para el funcionamiento correcto de la red corporativa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Wifi className="w-5 h-5" />
            Servicio DNS
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Puerto:</span>
              <p className="font-mono text-slate-200">53 (UDP/TCP)</p>
            </div>
            <div>
              <span className="text-purple-400">Servidor:</span>
              <p className="font-mono text-slate-200">192.168.10.10</p>
            </div>
            <div>
              <span className="text-purple-400">Zona Principal:</span>
              <p className="font-mono text-slate-200">inacap.local</p>
            </div>
            <div>
              <span className="text-purple-400">Tipo de Zona:</span>
              <p className="font-mono text-slate-200">Integrada en AD</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Network className="w-5 h-5" />
            Servicio DHCP
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Puerto:</span>
              <p className="font-mono text-slate-200">67/68 (UDP)</p>
            </div>
            <div>
              <span className="text-purple-400">Rango DHCP:</span>
              <p className="font-mono text-slate-200">192.168.10.100 - 192.168.10.200</p>
            </div>
            <div>
              <span className="text-purple-400">Máscara de Red:</span>
              <p className="font-mono text-slate-200">255.255.255.0</p>
            </div>
            <div>
              <span className="text-purple-400">Duración del Arrendamiento:</span>
              <p className="font-mono text-slate-200">8 horas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Opciones DHCP
        </h3>
        <div className="space-y-3">
          <div className="bg-slate-900/50 rounded p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
              <div>
                <span className="text-purple-400">Opción 003:</span>
                <p className="font-mono text-slate-200">Router (192.168.10.1)</p>
              </div>
              <div>
                <span className="text-purple-400">Opción 006:</span>
                <p className="font-mono text-slate-200">DNS Server (192.168.10.10)</p>
              </div>
              <div>
                <span className="text-purple-400">Opción 015:</span>
                <p className="font-mono text-slate-200">Domain Name (inacap.local)</p>
              </div>
              <div>
                <span className="text-purple-400">Opción 044:</span>
                <p className="font-mono text-slate-200">WINS (Opcional)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4">Pruebas de Conectividad</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Verificar Resolución DNS</h4>
            <div className="bg-slate-900/50 rounded p-4 space-y-2 text-sm font-mono text-slate-300">
              <code>nslookup inacap.local 192.168.10.10</code>
              <code>nslookup srv-dc01.inacap.local 192.168.10.10</code>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Verificar Servicio DHCP</h4>
            <div className="bg-slate-900/50 rounded p-4 space-y-2 text-sm font-mono text-slate-300">
              <code>ipconfig /release</code>
              <code>ipconfig /renew</code>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Verificar Registros de Eventos</h4>
            <div className="bg-slate-900/50 rounded p-4 text-sm text-slate-300">
              <p>Ver eventos en: Observador de eventos → DNS / DHCP</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-300 text-sm">
          <strong>Importante:</strong> DNS y DHCP son servicios críticos. Se recomienda monitorear su funcionamiento regularmente y mantener copias de seguridad de la configuración.
        </p>
      </div>
    </div>
  );
}
