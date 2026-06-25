import { Users, Lock, Database, AlertCircle } from 'lucide-react';

export default function ActiveDirectory() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          Configuración de Active Directory en el dominio inacap.local. Este es el componente central de gestión centralizada de usuarios y equipos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" />
            Información del Dominio
          </h3>
          <div className="space-y-3 text-slate-300 text-sm">
            <div>
              <span className="text-purple-400">Nombre del Dominio:</span>
              <p className="font-mono text-slate-200">inacap.local</p>
            </div>
            <div>
              <span className="text-purple-400">Tipo de Bosque:</span>
              <p className="font-mono text-slate-200">2016 o superior</p>
            </div>
            <div>
              <span className="text-purple-400">Nivel de Funcionalidad:</span>
              <p className="font-mono text-slate-200">Windows Server 2016</p>
            </div>
            <div>
              <span className="text-purple-400">NetBIOS:</span>
              <p className="font-mono text-slate-200">INACAP</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" />
            Estructura Organizativa
          </h3>
          <div className="space-y-2 text-slate-300 text-sm">
            <div className="font-mono">
              <div className="text-purple-400">inacap.local</div>
              <div className="ml-4 text-slate-300">├── Users (Usuarios)</div>
              <div className="ml-4 text-slate-300">├── Computers (Equipos)</div>
              <div className="ml-4 text-slate-300">├── OU_Administrativos</div>
              <div className="ml-4 text-slate-300">└── OU_Estudiantes</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Usuarios y Grupos Principales
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Cuentas de Usuario</h4>
            <div className="bg-slate-900/50 rounded p-4 space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <span><span className="text-purple-400">Usuario:</span> Administrator</span>
                <span className="text-yellow-400">Administrador del dominio</span>
              </div>
              <div className="flex justify-between">
                <span><span className="text-purple-400">Usuario:</span> [Crear usuarios]</span>
                <span className="text-slate-500">Pendiente de creación</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-purple-300 mb-2">Grupos de Seguridad</h4>
            <div className="bg-slate-900/50 rounded p-4 space-y-2 text-sm text-slate-300">
              <div className="flex justify-between">
                <span><span className="text-purple-400">Grupo:</span> Domain Admins</span>
                <span className="text-purple-400">Acceso total al dominio</span>
              </div>
              <div className="flex justify-between">
                <span><span className="text-purple-400">Grupo:</span> Domain Users</span>
                <span className="text-purple-400">Usuarios estándar del dominio</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
        <p className="text-yellow-300 text-sm">
          <strong>Próximos pasos:</strong> Una vez configurado Active Directory, proceder con la unión de clientes al dominio y la configuración de políticas de grupo.
        </p>
      </div>
    </div>
  );
}
