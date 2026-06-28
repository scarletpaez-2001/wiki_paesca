import React from 'react';
import { Shield, Server, Cpu, Terminal } from 'lucide-react';

const Inicio = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Encabezado Principal Llamativo */}
      <div className="text-center py-6 bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-2xl border border-purple-500/20 p-8 shadow-xl">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-400 bg-clip-text mb-4">
          Plataforma de Documentación Corporativa: Proyecto PAESCA
        </h2>
        <p className="text-lg text-purple-200/90 font-medium tracking-wide max-w-2xl mx-auto">
          Despliegue, Configuración y Administración Avanzada de Sistemas Operativos en Entornos de Red Centralizados
        </p>
        <div className="mt-4 text-sm text-slate-400 font-mono bg-slate-950/60 inline-block px-4 py-1.5 rounded-full border border-purple-900/40">
          Asignatura: Sistemas Operativos • INACAP
        </div>
      </div>

      {/* Introducción Profunda Detallada */}
      <div className="bg-slate-900/40 rounded-xl p-6 border border-purple-900/20 shadow-md">
        <h3 className="text-xl font-bold text-purple-300 mb-3 flex items-center gap-2">
          <Terminal className="h-5 w-5 text-purple-400" /> Descripción General del Proyecto
        </h3>
        <p className="text-slate-300 leading-relaxed text-justify mb-4">
          Esta wiki técnica recopila de forma exhaustiva los procesos de arquitectura, ingeniería e implementación ejecutados en el laboratorio virtual corporativo. El propósito central es documentar el aprovisionamiento e integración de un entorno de red empresarial bajo el dominio controlado <span className="text-purple-400 font-semibold">inacap.local</span>, garantizando altos estándares de seguridad informática, disponibilidad de red y gestión centralizada.
        </p>
        <p className="text-slate-300 leading-relaxed text-justify">
          El desarrollo abarca desde la preparación física y lógica del hipervisor base, pasando por el despliegue del sistema operativo de red en el servidor principal <span className="text-purple-400 font-semibold">SRV-DC01</span>, hasta la configuración automatizada de direccionamiento y políticas globales aplicadas rigurosamente sobre el entorno de producción del cliente virtualizado.
        </p>
      </div>

      {/* Pilares del Proyecto (Cuadros de Resumen Técnico) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl bg-slate-900/60 border border-purple-900/30">
          <Server className="h-6 w-6 text-purple-400 mb-2" />
          <h4 className="font-semibold text-slate-200 mb-1">Identidad Centralizada</h4>
          <p className="text-xs text-slate-400">Implementación de Active Directory para control lógico de Unidades Organizativas, Grupos y Usuarios corporativos.</p>
        </div>
        <div className="p-5 rounded-xl bg-slate-900/60 border border-purple-900/30">
          <Cpu className="h-6 w-6 text-purple-400 mb-2" />
          <h4 className="font-semibold text-slate-200 mb-1">Servicios de Red Core</h4>
          <p className="text-xs text-slate-400">Despliegue de infraestructura DNS jerárquica y asignación dinámica de parámetros de direccionamiento IPv4 vía DHCP.</p>
        </div>
        <div className="p-5 rounded-xl bg-slate-900/60 border border-purple-900/30">
          <Shield className="h-6 w-6 text-purple-400 mb-2" />
          <h4 className="font-semibold text-slate-200 mb-1">Seguridad Estándar (GPO)</h4>
          <p className="text-xs text-slate-400">Auditoría, restricción del entorno operativo y despliegue de directivas de seguridad centralizadas sobre las estaciones de trabajo.</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;