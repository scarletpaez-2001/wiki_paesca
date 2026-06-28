import React from 'react';
import { BookOpen, AlertCircle, Code, Settings, Layers } from 'lucide-react';

export default function BitacoraIA() {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Alerta de Propósito */}
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-300">
          En esta sección se documentan de forma cronológica los prompts, instrucciones y consultas técnicas realizadas a la Inteligencia Artificial para el co-diseño, reestructuración y optimización de esta plataforma Wiki.
        </p>
      </div>

      {/* Propósito de la Bitácora */}
      <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Propósito de la Bitácora
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Esta bitácora mantiene un registro detallado de cada instrucción enviada a la IA durante el desarrollo del proyecto. Permite rastrear el proceso de creación, la toma de decisiones de diseño, la solución de errores de compilación y la evolución de la estructura de navegación de la aplicación.
        </p>
      </div>

      {/* Historial de Prompts */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300 border-b border-purple-900/30 pb-2">Historial de Prompts</h3>

        {/* ENTRADA 1 */}
        <div className="p-6 bg-slate-900/60 rounded-xl border border-purple-900/20 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
            <Settings className="w-4 h-4" /> ENTRADA 1: Estructuración Base del Menú y Archivos Markdown
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap">
            "Necesito organizar el menú lateral de mi Wiki en VS Code. Actualmente tengo archivos en 'docs_paesca' pero quiero que los nombres se desplieguen de forma limpia y ordenada. ¿Cómo puedo enlazar los archivos .md o estructurar los títulos para que el menú de la aplicación React refleje las partes de mi trabajo de sistemas operativos?"
          </div>
          <p className="text-xs text-slate-400">
            <strong>Impacto:</strong> Se definió la estrategia de navegación del proyecto y se identificó si la aplicación utilizaba enrutamiento dinámico basado en Markdown o un mapeo estático de componentes dentro del ecosistema de React.
          </p>
        </div>

        {/* ENTRADA 2 */}
        <div className="p-6 bg-slate-900/60 rounded-xl border border-purple-900/20 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
            <Code className="w-4 h-4" /> ENTRADA 2: Solución de Conflictos de Despliegue en Vercel
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap">
            "Tengo una duda con los deployments en Vercel. Cada vez que hago un commit y push desde VS Code veo que se genera una nueva versión en producción o da error. ¿Tengo que meterme siempre desde el último enlace generado para ver la página web actual o el link principal se actualiza solo? Explícame cómo manejar los cambios masivos."
          </div>
          <p className="text-xs text-slate-400">
            <strong>Impacto:</strong> Comprensión del ciclo de integración continua (CI/CD). Optimización del flujo de trabajo local en Git, permitiendo agrupar múltiples cambios en un único commit para evitar saturar el historial de compilación de Vercel.
          </p>
        </div>

        {/* ENTRADA 3 */}
        <div className="p-6 bg-slate-900/60 rounded-xl border border-purple-900/20 space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
            <Layers className="w-4 h-4" /> ENTRADA 3: Reestructuración de App.jsx y Separación de Secciones (DHCP e Integración)
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 whitespace-pre-wrap">
            "El archivo App.jsx tiene un código muy grande y me da miedo romper la aplicación si borro algo. Necesito modificar el arreglo de 'secciones' para agregar una octava sección, ya que debo separar la Parte D (DHCP) de la Parte E (Cliente: incorporación al dominio) con sus respectivos nombres y subtítulos académicos según la pauta."
          </div>
          <p className="text-xs text-slate-400">
            <strong>Impacto:</strong> Reconfiguración exitosa del estado global de navegación de la Wiki, actualizando los esquemas de renderizado condicional (`switch-case`) e inyectando las propiedades semánticas correctas para cada módulo académico sin alterar el diseño base.
          </p>
        </div>
      </div>
    </div>
  );
}