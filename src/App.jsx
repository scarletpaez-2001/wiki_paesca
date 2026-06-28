import { useState } from 'react';
import {
  BookOpen,
  Home,
  Key,
  Network,
  Server,
  Shield,
  Terminal,
  Users,
} from 'lucide-react';

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
      subtitulo: 'Portada y topología',
    },
    {
      id: 'basica',
      nombre: 'Parte A: Inst. y Conf. Servidor DC01',
      icono: Server,
      subtitulo: 'Configuración básica',
    },
    {
      id: 'activedirectory',
      nombre: 'Parte B: Active Directory + DNS',
      icono: Users,
      subtitulo: 'Roles principales',
    },
    {
      id: 'cliente',
      nombre: 'Parte C: Objetos del Dominio',
      icono: Shield,
      subtitulo: 'Unidades Organizativas (OU)',
    },
    {
      id: 'dhcp',
      nombre: 'Parte D: DHCP',
      icono: Network,
      subtitulo: 'Servicios de red dinámicos',
    },
    {
      id: 'integracion',
      nombre: 'Parte E: Cliente: incorporación al dominio',
      icono: Terminal,
      subtitulo: 'Unión de PC01',
    },
    {
      id: 'gpo',
      nombre: 'Parte F: Políticas de Grupo',
      icono: Key,
      subtitulo: 'Administración de GPO',
    },
    {
      id: 'bitacora',
      nombre: 'Bitácora de IA',
      icono: BookOpen,
      subtitulo: 'Prompts de co-creación',
    },
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
      case 'dhcp':
        return <ServiciosRed />; // Aquí usamos el componente de red para el DHCP
      case 'integracion':
        return <ClienteDominio />; // Usamos temporalmente este para la integración, puedes adaptarlo después
      case 'gpo':
        return <PoliticasGrupo />;
      case 'bitacora':
        return <BitacoraIA />;
      default:
        return <Inicio />;
    }
  };

  const seccionActual = secciones.find((item) => item.id === seccionActiva);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-purple-900/30 bg-slate-900/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Terminal className="h-8 w-8 text-purple-400" strokeWidth={2} />
            <div>
              <h1 className="text-2xl font-bold text-purple-300">Wiki PAESCA</h1>
              <p className="text-sm text-slate-400">Sistemas Operativos</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Sección activa</p>
            <p className="text-lg font-semibold text-purple-300">{seccionActual?.nombre}</p>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="sticky top-20 hidden min-h-screen w-72 border-r border-purple-900/30 bg-slate-900/70 p-6 lg:block">
          <div className="space-y-3">
            {secciones.map((seccion) => {
              const Icono = seccion.icono;
              const activo = seccionActiva === seccion.id;

              return (
                <button
                  key={seccion.id}
                  type="button"
                  onClick={() => setSeccionActiva(seccion.id)}
                  className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left transition-all duration-200 ${
                    activo
                      ? 'border-purple-500 bg-purple-900/50 shadow-lg shadow-purple-500/20'
                      : 'border-transparent bg-slate-900/40 hover:border-purple-600/30 hover:bg-purple-900/30'
                  }`}
                >
                  <Icono
                    className={`h-5 w-5 flex-shrink-0 ${
                      activo ? 'text-purple-300' : 'text-purple-400 group-hover:text-purple-300'
                    }`}
                    strokeWidth={2}
                  />
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold ${activo ? 'text-purple-200' : 'text-slate-200'}`}>
                      {seccion.nombre}
                    </p>
                    <p className="truncate text-xs text-slate-500">{seccion.subtitulo}</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-12 border-t border-purple-900/30 pt-6 text-center text-xs text-slate-500">
            <p className="mb-2 font-semibold text-purple-400">Servidor</p>
            <p>192.168.10.10</p>
            <p className="mt-4 mb-2 font-semibold text-purple-400">Dominio</p>
            <p>inacap.local</p>
          </div>
        </nav>

        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
              <span>Wiki</span>
              <span>/</span>
              <span className="font-semibold text-purple-300">{seccionActual?.nombre}</span>
            </div>

            <div className="mb-8 border-b border-purple-900/30 pb-6">
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text">
                {seccionActual?.nombre}
              </h2>
              <p className="text-slate-400">{seccionActual?.subtitulo}</p>
            </div>

            <div className="min-h-[28rem] rounded-xl border border-purple-900/20 bg-slate-900/50 p-6 shadow-2xl shadow-black/20">
              {renderizarContenido()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
