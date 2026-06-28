# He aquí mis generosos promps y sus registros - Wiki_paesca.
# Aquí registraré las instrucciones utilizadas con la IA para el diseño, desarrollo y maquetación de la wiki técnica.

# Prompt 1: Creación de la interfaz base y estructura de la wiki: Hola. Estoy construyendo mi aplicación Wiki en React y Vite para la asignatura de Sistemas Operativos utilizando Tailwind CSS y Lucide React. Necesito que crees el componente principal de la aplicación en src/App.jsx.

# Quiero que la interfaz tenga una estética oscura muy elegante: un estilo Wiki moderno de color negro/gris muy oscuro de fondo, textos claros, y un menú de navegación lateral o superior con botones estilizados en tonos morados y violetas intensos, esos te los dejo a tu criterio.

# La app debe estructurarse de modo que mantenga un 'estado' para saber qué sección está visualizando el usuario. Por favor, incluye la estructura para navegar por las siguientes pestañas basadas en mis criterios de evaluación:

# Inicio (Portada y topología)


# 2.1.1 Configuración Básica (Servidor SRV-DC01, IP 192.168.10.10)

# 2.1.2 Active Directory (Dominio inacap.local)

# 2.1.3 Cliente Dominio (Unión de PC01)

# 2.1.4 Servicios de Red (DNS y DHCP)

# 2.1.5 Políticas de Grupo (GPO)

# Bitácora de IA (Prompts utilizados)

# Por ahora, genera la estructura del contenedor oscuro, el menú morado interactivo y déjame los componentes de las secciones listos para importar. Usa iconos de Lucide React como Server, Network 


# Prompt 2: Creación del Menú Lateral Dinámico y Enrutamiento Interno
# Hola. Actualmente tengo una página básica en React con Vite para mi Wiki técnica de Sistemas Operativos. Necesito estructurar el componente principal App.jsx para que incluya un menú lateral fijo a la izquierda con un diseño oscuro y moderno usando Tailwind CSS (tonos slate-900 y bordes sutiles morados purple-900). El menú debe tener botones interactivos con iconos de la librería lucide-react para navegar por las distintas secciones del proyecto: Inicio, Parte A (Instalación), Parte B (Active Directory), Parte C (Objetos), Parte D (DHCP), Parte F (GPO) y la Bitácora de IA. Configura un estado de React para controlar el renderizado condicional del contenido de forma que cambie dinámicamente al hacer clic, evitando recargar la página por favor

# Prompt 3: Diseño Adaptable (Responsivo) y Botón Flotante para Celulares

# Hola... tengo un pequeño problema: el menú lateral que creamos funciona excelente en computadores, pero al revisarlo en pantallas móviles el menú se oculta por completo debido a las clases responsivas y el usuario queda atrapado en la pantalla de inicio sin poder navegar. Necesito modificar App.jsx para implementar un menú verdaderamente responsivo. Añade un botón flotante permanente en la esquina superior derecha (fixed top-4 right-4) con un índice Z alto (z-50) que muestre un icono de hamburguesa (Menu) cuando esté cerrado y una X cuando esté abierto. Vincula este botón a un estado booleano (menuAbierto) para que desplace el menú lateral de forma suave mediante transiciones de Tailwind (transition-transform) y añade un fondo oscuro semitransparente con desenfoque (backdrop-blur-sm) que cubra el contenido cuando el menú esté activo en celulares 

# Prompt 4: Modularización y Arquitectura de Componentes de Evidencias

# Para mantener el código limpio y escalable, no quiero meter todo el contenido dentro de App.jsx. Necesito separar cada sección en componentes independientes dentro de la carpeta src/components/. Por favor, genera la estructura base para los archivos ActiveDirectory.jsx, ClienteDominio.jsx, ServiciosRed.jsx y PoliticasGrupo.jsx. Cada uno debe exportar una función por defecto, utilizar contenedores estructurados con Tailwind CSS en cuadrículas (grid grid-cols-1 md:grid-cols-2) y preparar etiquetas <img> con rutas estáticas apuntando a la carpeta local de recursos, asegurando que las capturas de pantalla de las evidencias técnicas se adapten al ancho de la pantalla de manera fluida