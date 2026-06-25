import { BookOpen, Plus, AlertCircle } from 'lucide-react';

export default function BitacoraIA() {
  return (
    <div className="space-y-8">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <p className="text-blue-300 text-sm">
          En esta sección se documentan todos los prompts y consultas realizadas a la IA para la construcción y diseño de este wiki.
        </p>
      </div>

      <div className="bg-gradient-to-br from-purple-900/30 to-slate-900/30 border border-purple-500/30 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Propósito de la Bitácora
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Esta bitácora mantiene un registro detallado de cada prompt e instrucción enviados a la IA durante el desarrollo del proyecto.
          Permite rastrear el proceso de creación, decisiones de diseño y evolución de la aplicación.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-purple-300">Historial de Prompts</h3>
          <div className="flex items-center gap-2 text-purple-400">
            <Plus className="w-5 h-5" />
            <span className="text-sm">Añadir nueva entrada</span>
          </div>
        </div>

        {/* Plantilla de entrada */}
        <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-purple-300 mb-2">Entrada #1: Creación del Componente Principal</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>
                  <span className="text-purple-400">Fecha:</span> [Añadir fecha]
                </div>
                <div>
                  <span className="text-purple-400">Prompt:</span>
                  <div className="bg-slate-900/50 rounded px-3 py-2 mt-1 font-mono text-xs text-slate-300">
                    "Crear el componente principal App.jsx con menú lateral, contenedor oscuro y estilos morados..."
                  </div>
                </div>
                <div>
                  <span className="text-purple-400">Resultado:</span>
                  <p className="text-slate-400 mt-1">Se creó la estructura base con React, Tailwind CSS y Lucide icons</p>
                </div>
                <div>
                  <span className="text-purple-400">Notas:</span>
                  <p className="text-slate-400 mt-1">Componente listo para importar módulos específicos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Plantilla vacía para nuevas entradas */}
        <div className="bg-slate-800/30 border-2 border-dashed border-purple-500/40 rounded-lg p-6 text-center">
          <div className="space-y-3">
            <BookOpen className="w-8 h-8 text-purple-400/50 mx-auto" />
            <h4 className="text-purple-300 font-semibold">Plantilla para Nueva Entrada</h4>
            <div className="text-sm text-slate-400 bg-slate-900/30 rounded p-4 font-mono">
              <div>## Entrada #[N]: [Título]</div>
              <div>**Fecha:** YYYY-MM-DD</div>
              <div>**Prompt:**</div>
              <div>```</div>
              <div>[Contenido del prompt aquí]</div>
              <div>```</div>
              <div>**Resultado:**</div>
              <div>[Descripción del resultado]</div>
              <div>**Notas:**</div>
              <div>[Observaciones adicionales]</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4">Categorías de Prompts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="text-purple-400 font-semibold mb-2">Diseño y Interfaz</h4>
            <p className="text-slate-400 text-sm">Prompts relacionados con la UI/UX y estilos visuales</p>
          </div>
          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="text-purple-400 font-semibold mb-2">Funcionalidad</h4>
            <p className="text-slate-400 text-sm">Prompts para características y lógica de la aplicación</p>
          </div>
          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="text-purple-400 font-semibold mb-2">Contenido Educativo</h4>
            <p className="text-slate-400 text-sm">Prompts para documentación y contenido de módulos</p>
          </div>
          <div className="bg-slate-900/50 rounded p-4">
            <h4 className="text-purple-400 font-semibold mb-2">Optimización</h4>
            <p className="text-slate-400 text-sm">Prompts para mejoras y refactorización de código</p>
          </div>
        </div>
      </div>

      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
        <p className="text-green-300 text-sm">
          <strong>Tip:</strong> Mantener esta bitácora actualizada ayuda a entender el proceso de desarrollo y facilita futuras referencias o modificaciones.
        </p>
      </div>
    </div>
  );
}
