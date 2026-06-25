import { useState } from 'react';
import { Server, Network, Shield, Users, Key, Terminal, Home, BookOpen } from 'lucide-react';
import Inicio from './components/Inicio';
import ConfiguracionBasica from './components/ConfiguracionBasica';
import ActiveDirectory from './components/ActiveDirectory';
import ClienteDominio from './components/ClienteDominio';
import ServiciosRed from './components/ServiciosRed';
import PoliticasGrupo from './components/PoliticasGrupo';
import BitacoraIA from './components/BitacoraIA';

function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  const secciones = [
    {
      id: 'inicio',
      nombre: 'Inicio',
      icono: Home,
      subtitulo: 'Portada y topología'
    },
    {
      id: 'basica',
      nombre: '2.1.1 Configuración Básica',
      icono: Server,
      subtitulo: 'Servidor SRV-DC01'
    },
    {
      id: 'activedirectory',
      nombre: '2.1.2 Active Directory',
      icono: Users,
      subtitulo: 'Dominio inacap.local'
    },
    {
      id: 'cliente',
      nombre: '2.1.3 Cliente Dominio',
      icono: Shield,
      subtitulo: 'Unión de PC01'
    },
    {
      id: 'servicios',
      nombre: '2.1.4 Servicios de Red',
      icono: Network,
      subtitulo: 'DNS y DHCP'
    },
    {
      id: 'gpo',
      nombre: '2.1.5 Políticas de Grupo',
      icono: Key,
      subtitulo: 'Gestión de GPO'
    },
    {
      id: 'bitacora',
      nombre: 'Bitácora de IA',
      icono: BookOpen,
      subtitulo: 'Prompts utilizados'
    }
  ];

  const renderizarContenido = () => {
    switch (seccionActiva) {
      case 'inicio':
        return <Inicio />;
      case 'basica':
        return <ConfiguracionBasica />;
      case 'activedirectory':
        return <ActiveDirectory />;
      case 'cliente':
        return <ClienteDominio />;
      case 'servicios':
        return <ServiciosRed />;
      case 'gpo':
        return <PoliticasGrupo />;
      case 'bitacora':
        return <BitacoraIA />;
      default:
        return <Inicio />;
    }
  };

  const seccionActualObj = secciones.find(s => s.id === seccionActiva);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Barra superior */}
      <header className="bg-slate-900 border-b border-purple-900/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-purple-400" strokeWidth={2} />
            <div>
              <h1 className="text-2xl font-bold text-purple-300">Wiki PAESCA</h1>
              <p className="text-sm text-slate-400">Sistemas Operativos</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Módulo:</p>
            <p className="text-lg font-semibold text-purple-300">{seccionActualObj?.nombre}</p>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Menú Lateral */}
        <nav className="w-72 bg-slate-900 border-r border-purple-900/30 min-h-screen p-6 sticky top-20">
          <div className="space-y-3">
            {secciones.map((seccion) => {
              const IconoSeccion = seccion.icono;
              const esActivo = seccionActiva === seccion.id;
              
              return (
                <button
                  key={seccion.id}
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                    esActivo
                      ? 'bg-purple-900/50 border border-purple-500 shadow-lg shadow-purple-500/20'
                      : 'hover:bg-purple-900/30 border border-transparent hover:border-purple-600/30'
                  }`}
                >
                  <IconoSeccion className={`w-5 h-5 flex-shrink-0 transition-colors ${
                    esActivo ? 'text-purple-300' : 'text-purple-400 group-hover:text-purple-300'
                  }`} strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold text-sm ${
                      esActivo ? 'text-purple-200' : 'text-slate-200 group-hover:text-purple-300'
                    }`}>
                      {seccion.nombre}
                    </p>
                    <p className="text-xs text-slate-500 truncate">{seccion.subtitulo}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Información en el pie del menú */}
          <div className="mt-12 pt-6 border-t border-purple-900/30">
            <p className="text-xs text-slate-500 text-center">
              <span className="block font-semibold text-purple-400 mb-2">IP Servidor</span>
              192.168.10.10
            </p>
            <p className="text-xs text-slate-500 text-center mt-4">
              <span className="block font-semibold text-purple-400 mb-2">Dominio</span>
              inacap.local
            </p>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl">
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm">
              <span className="text-slate-400">Wiki</span>
              <span className="text-purple-400">/</span>
              <span className="text-purple-300 font-semibold">{seccionActualObj?.nombre}</span>
            </div>

            {/* Título de la sección */}
            <div className="mb-8 pb-6 border-b border-purple-900/30">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 mb-2">
                {seccionActualObj?.nombre}
              </h2>
              <p className="text-slate-400">{seccionActualObj?.subtitulo}</p>
            </div>

            {/* Contenido de la sección */}
            <div className="bg-slate-900/50 rounded-lg border border-purple-900/20 p-8 min-h-96">
              {renderizarContenido()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

