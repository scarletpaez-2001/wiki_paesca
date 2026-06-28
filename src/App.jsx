import React, { useState } from 'react';
import { Menu, X, BookOpen, Layers, Cpu, Shield, Users, Laptop, Lock } from 'lucide-react';
import Inicio from './components/Inicio';
import ConfiguracionBasica from './components/ConfiguracionBasica';
import ActiveDirectory from './components/ActiveDirectory';
import ClienteDominio from './components/ClienteDominio';
import ServiciosRed from './components/ServiciosRed';
import PoliticasGrupo from './components/PoliticasGrupo';
import BitacoraA from './components/BitacoraA';

export default function App() {
  const [seccionActiva, setSeccionActiva] = useState('inicio');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const menuItems = [
    { id: 'inicio', label: 'Inicio', sub: 'Portada y topología', icon: <Layers className="w-4 h-4" /> },
    { id: 'parteA', label: 'Parte A: Inst. Servidor', sub: 'Configuración básica', icon: <Cpu className="w-4 h-4" /> },
    { id: 'parteB', label: 'Parte B: Active Directory', sub: 'Roles principales', icon: <Shield className="w-4 h-4" /> },
    { id: 'parteC', label: 'Parte C: Objetos Dominio', sub: 'Unidades Organizativas', icon: <Users className="w-4 h-4" /> },
    { id: 'parteD', label: 'Parte D: DHCP', sub: 'Servicios de red', icon: <Laptop className="w-4 h-4" /> },
    { id: 'parteF', label: 'Parte F: GPO', sub: 'Administración de directivas', icon: <Lock className="w-4 h-4" /> },
    { id: 'bitacora', label: 'Bitácora de IA', sub: 'Prompts de co-creación', icon: <BookOpen className="w-4 h-4" /> },
  ];

  const renderContenido = () => {
    switch (seccionActiva) {
      case 'inicio': return <Inicio />;
      case 'parteA': return <ConfiguracionBasica />;
      case 'parteB': return <ActiveDirectory />;
      case 'parteC': return <ClienteDominio />;
      case 'parteD': return <ServiciosRed />;
      case 'parteF': return <PoliticasGrupo />;
      case 'bitacora': return <BitacoraA />;
      default: return <Inicio />;
    }
  };

  const cambiarSeccion = (id) => {
    setSeccionActiva(id);
    setMenuAbierto(false); // Cierra el menú al hacer clic en el celular
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col md:flex-row relative">
      
      {/* BOTÓN FLOTANTE PARA CELULAR */}
      <button 
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden fixed top-4 right-4 z-50 bg-purple-600 hover:bg-purple-700 p-2.5 rounded-full shadow-lg border border-purple-400 text-white transition-all"
        aria-label="Abrir menú"
      >
        {menuAbierto ? <X className="w-6 pipe h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* MENÚ LATERAL (RESPONSIVO) */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-40
        w-72 h-screen bg-slate-900 border-r border-purple-900/30 p-6 
        flex flex-col justify-between transition-transform duration-300
        ${menuAbierto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="space-y-6">
          <div className="border-b border-purple-900/20 pb-4">
            <h1 className="text-2xl font-black text-purple-400 tracking-wider">Wiki PAESCA</h1>
            <p className="text-xs text-slate-400 font-medium">Sistemas Operativos • INACAP</p>
          </div>

          <nav className="space-y-1.5 overflow-y-auto max-h-[70vh] pr-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => cambiarSeccion(item.id)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                  seccionActiva === item.id
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-900/40'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                <div className={`mt-0.5 p-1 rounded-lg ${seccionActiva === item.id ? 'bg-purple-500' : 'bg-slate-800'}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm leading-tight">{item.label}</div>
                  <div className={`text-[10px] font-normal ${seccionActiva === item.id ? 'text-purple-200' : 'text-slate-500'}`}>
                    {item.sub}
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-purple-900/20 pt-4 text-[11px] text-slate-500 text-center font-mono">
          Desarrollado por Scarlet Páez
        </div>
      </aside>

      {/* FONDO OSCURO CUANDO EL MENÚ ESTÁ ABIERTO EN CELULAR */}
      {menuAbierto && (
        <div 
          onClick={() => setMenuAbierto(false)}
          className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
        />
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-4 md:p-8 pt-16 md:pt-8 w-full max-w-7xl mx-auto overflow-x-hidden">
        <header className="mb-6 flex justify-between items-center border-b border-purple-900/10 pb-4">
          <div>
            <span className="text-xs font-mono text-purple-500">Wiki / {menuItems.find(i => i.id === seccionActiva)?.label}</span>
            <h2 className="text-3xl font-black text-slate-100 tracking-tight mt-1">
              {menuItems.find(i => i.id === seccionActiva)?.label}
            </h2>
          </div>
        </header>

        <div className="mt-4">
          {renderContenido()}
        </div>
      </main>

    </div>
  );
}