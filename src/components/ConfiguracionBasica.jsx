import { Server, Network, Settings, AlertCircle } from 'lucide-react';

export default function ConfiguracionBasica() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          En esta sección se documenta la configuración inicial del servidor de dominio SRV-DC01
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
              <p className="font-mono text-slate-200">192.168.10.1</p>
            </div>
          </div>
        </div>

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

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Pasos de Configuración
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                1
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Configuración de IP Estática</h4>
              <p className="text-slate-400 text-sm mt-1">Establecer la dirección IP 192.168.10.10 de manera permanente en el adaptador de red</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                2
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Instalación de Roles y Características</h4>
              <p className="text-slate-400 text-sm mt-1">Instalar Active Directory, DNS y otros componentes necesarios</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                3
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Validación de Conectividad</h4>
              <p className="text-slate-400 text-sm mt-1">Verificar que el servidor pueda comunicarse con otros equipos de la red</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-300 text-sm">
          <strong>Nota importante:</strong> La configuración correcta de la red es fundamental antes de proceder con la instalación de Active Directory.
        </p>
      </div>
    </div>
  );
}
