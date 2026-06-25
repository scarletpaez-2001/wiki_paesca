import { Shield, Network, CheckCircle, AlertCircle } from 'lucide-react';

export default function ClienteDominio() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          Proceso de unión del cliente PC01 al dominio inacap.local. Este equipo será administrado de forma centralizada por Active Directory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Network className="w-5 h-5" />
            Configuración del Cliente
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Nombre del Equipo:</span>
              <p className="font-mono text-slate-200">PC01</p>
            </div>
            <div>
              <span className="text-purple-400">IP Asignada:</span>
              <p className="font-mono text-slate-200">DHCP (192.168.10.x)</p>
            </div>
            <div>
              <span className="text-purple-400">DNS Primario:</span>
              <p className="font-mono text-slate-200">192.168.10.10</p>
            </div>
            <div>
              <span className="text-purple-400">Sistema Operativo:</span>
              <p className="font-mono text-slate-200">Windows 10/11</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Estado de Unión al Dominio
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Dominio:</span>
              <p className="font-mono text-slate-200">inacap.local</p>
            </div>
            <div>
              <span className="text-purple-400">Estado:</span>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-yellow-400">Pendiente de configuración</span>
              </div>
            </div>
            <div>
              <span className="text-purple-400">Cuenta del Equipo:</span>
              <p className="font-mono text-slate-200">[Se crea automáticamente]</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4">Procedimiento de Unión al Dominio</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                1
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Verificar Conectividad de Red</h4>
              <p className="text-slate-400 text-sm mt-1">Confirmar que el cliente puede alcanzar el servidor DC01 (192.168.10.10)</p>
              <code className="block bg-slate-900/50 rounded px-2 py-1 mt-2 text-xs text-slate-300">ping 192.168.10.10</code>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                2
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Resolver Nombre del Dominio</h4>
              <p className="text-slate-400 text-sm mt-1">Verificar que el cliente pueda resolver inacap.local</p>
              <code className="block bg-slate-900/50 rounded px-2 py-1 mt-2 text-xs text-slate-300">nslookup inacap.local</code>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                3
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Acceder a Propiedades del Sistema</h4>
              <p className="text-slate-400 text-sm mt-1">Cambiar nombre del equipo y unirse al dominio inacap.local</p>
              <code className="block bg-slate-900/50 rounded px-2 py-1 mt-2 text-xs text-slate-300">sysdm.cpl</code>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                4
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Reiniciar el Equipo</h4>
              <p className="text-slate-400 text-sm mt-1">Reiniciar para que se apliquen los cambios y se cree la cuenta de equipo en el dominio</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 flex gap-3 items-start">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
        <p className="text-green-300 text-sm">
          Una vez que PC01 esté unido al dominio, podrá iniciar sesión con cuentas de usuario del dominio y recibirá políticas de grupo desde el servidor.
        </p>
      </div>
    </div>
  );
}
