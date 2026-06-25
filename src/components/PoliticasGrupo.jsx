import { Key, ShieldCheck, Lock, AlertCircle } from 'lucide-react';

export default function PoliticasGrupo() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          Las Políticas de Grupo (GPO) permiten administrar de forma centralizada la configuración de usuarios y equipos en el dominio inacap.local.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Key className="w-5 h-5" />
            Tipos de GPO
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Ámbito:</span>
              <p>Computer Policy (Equipos)</p>
              <p className="text-xs text-slate-400 mt-1">Aplicadas al arrancar el equipo</p>
            </div>
            <div>
              <span className="text-purple-400">Ámbito:</span>
              <p>User Policy (Usuarios)</p>
              <p className="text-xs text-slate-400 mt-1">Aplicadas al iniciar sesión</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            Herramientas
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div className="font-mono">
              <p className="text-purple-400">Group Policy Management:</p>
              <p className="text-slate-200">gpmc.msc</p>
            </div>
            <div className="font-mono">
              <p className="text-purple-400">Local Group Policy:</p>
              <p className="text-slate-200">gpedit.msc</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Políticas Comunes
        </h3>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="font-semibold text-purple-300 mb-2">Seguridad</h4>
            <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Política de Contraseñas</li>
              <li>Bloqueo de Cuenta tras intentos fallidos</li>
              <li>Deshabilitación de Servicios innecesarios</li>
              <li>Auditoría de Eventos de Seguridad</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="font-semibold text-purple-300 mb-2">Restricciones de Usuario</h4>
            <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Acceso a Unidades de Disco</li>
              <li>Instalación de Software</li>
              <li>Cambio de Contraseña</li>
              <li>Mapeo de Unidades de Red</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="font-semibold text-purple-300 mb-2">Configuración de Equipos</h4>
            <ul className="space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Instalación de Actualizaciones</li>
              <li>Firewall y Antivirus</li>
              <li>Scripts de Inicio</li>
              <li>Redirección de Carpetas</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4">Procesamiento de GPO</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                1
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Crear o Modificar GPO</h4>
              <p className="text-slate-400 text-sm mt-1">Desde la consola de administración de Group Policy</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                2
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Vincular a OU</h4>
              <p className="text-slate-400 text-sm mt-1">Asociar la GPO a una Unidad Organizativa específica</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                3
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Replicación</h4>
              <p className="text-slate-400 text-sm mt-1">Se replica automáticamente a todos los controladores de dominio</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                4
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-300">Aplicación</h4>
              <p className="text-slate-400 text-sm mt-1">Los equipos y usuarios afectados aplican la política</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-300 text-sm">
          <strong>Comando para actualizar GPO:</strong> Ejecutar <code className="bg-yellow-900/50 px-2 py-1 rounded">gpupdate /force</code> en el cliente para aplicar cambios inmediatamente.
        </p>
      </div>
    </div>
  );
}
