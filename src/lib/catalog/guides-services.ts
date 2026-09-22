import type { Guide } from './types';

/**
 * Tercera tanda de CA Explica (22 de septiembre de 2026): cubre las líneas de
 * servicio que aún no tenían guía. Infraestructura TI y clases son servicios
 * presenciales en México, así que sus guías solo existen en es-MX.
 */
export const serviceGuides: Guide[] = [
    // ─── Infraestructura TI (solo México) ────────────────────────────────
    {
        id: 'que-es-un-firewall',
        category: 'infraestructura',
        slug: { 'es-MX': 'que-es-un-firewall' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: [],
        relatedGuides: ['respaldos-de-informacion-empresa', 'camaras-cctv-para-negocio'],
        content: {
            'es-MX': {
                title: '¿Qué es un firewall y lo necesita tu pyme?',
                shortTitle: '¿Qué es un firewall?',
                description: 'Qué es un firewall, en qué se diferencia un firewall de nueva generación y cuándo una pyme necesita uno además del módem del proveedor de internet.',
                keywords: ['qué es un firewall', 'firewall para pymes', 'firewall de nueva generación', 'seguridad de red para empresas'],
                badge: 'Ciberseguridad',
                hostLine: 'El módem que te instaló tu proveedor de internet no está pensado para proteger la red de una empresa.',
                quickAnswer: 'Un firewall es un equipo de seguridad que vigila, filtra y controla el tráfico que entra y sale de tu red según reglas definidas. Una pyme lo necesita cuando tiene varios equipos, datos de clientes, acceso remoto o un servidor propio: separa redes, bloquea tráfico no autorizado y da visibilidad de lo que pasa en la red.',
                keyFacts: [
                    { label: 'Qué hace', value: 'Vigila, filtra y controla el tráfico de entrada y salida según reglas' },
                    { label: 'Nueva generación (NGFW)', value: 'Suma prevención de intrusiones y filtrado por aplicación' },
                    { label: 'Señales de que lo necesitas', value: 'Varios equipos, datos de clientes, acceso remoto o servidor propio' },
                    { label: 'Servicio de CA', value: 'Instalación y configuración presencial en México, sujeta a cobertura' },
                ],
                sections: [
                    {
                        id: 'que-hace',
                        title: '¿Qué hace un firewall en una oficina?',
                        paragraphs: [
                            'Se coloca entre internet y tu red interna. Decide qué conexiones pasan y cuáles no, con reglas que define quien lo administra. Así evita que un equipo expuesto o una conexión no autorizada lleguen a tus computadoras, cámaras o servidor.',
                        ],
                        bullets: [
                            'Separar la red de invitados de la red de trabajo.',
                            'Dar acceso remoto seguro al equipo con VPN.',
                            'Bloquear sitios o aplicaciones de riesgo.',
                            'Registrar qué pasa en la red para detectar problemas.',
                        ],
                    },
                    {
                        id: 'nueva-generacion',
                        title: '¿Qué es un firewall de nueva generación?',
                        paragraphs: [
                            'Un firewall de nueva generación (NGFW) combina el filtrado tradicional con funciones como prevención de intrusiones, filtrado a nivel de aplicación y detección de amenazas. En lugar de ver solo puertos y direcciones, entiende qué aplicación genera el tráfico.',
                        ],
                    },
                    {
                        id: 'cuando-lo-necesitas',
                        title: '¿Cuándo lo necesita una pyme?',
                        paragraphs: [
                            'Si en tu oficina hay varios equipos conectados, guardas información de clientes, alguien trabaja desde fuera o tienes un servidor o cámaras en red, un firewall deja de ser un lujo. El módem del proveedor de internet cubre lo básico de una casa, no la red de una empresa.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿El antivirus no es suficiente?', answer: 'No. El antivirus protege cada computadora; el firewall protege la red completa, incluidos equipos que no tienen antivirus, como cámaras o impresoras.' },
                    { question: '¿Un firewall hace lenta la conexión?', answer: 'Un equipo dimensionado para tu velocidad de internet y número de usuarios no debería notarse. Por eso se elige según tu red, no por precio.' },
                    { question: '¿CA instala firewalls fuera de México?', answer: 'No. La instalación de infraestructura es presencial y se ofrece en México, sujeta a cobertura.' },
                ],
                sources: [
                    { label: 'Fortinet — ¿Qué es un firewall?', url: 'https://www.fortinet.com/resources/cyberglossary/firewall' },
                ],
                midCta: '¿Tu red de trabajo y la de invitados son la misma?',
                finalCta: '¿Quieres revisar la seguridad de la red de tu oficina?',
            },
        },
    },
    {
        id: 'respaldos-de-informacion-empresa',
        category: 'infraestructura',
        slug: { 'es-MX': 'respaldos-de-informacion-empresa' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: [],
        relatedGuides: ['que-es-un-firewall'],
        content: {
            'es-MX': {
                title: '¿Cómo respaldar la información de tu empresa? La regla 3-2-1',
                shortTitle: 'Respaldos: la regla 3-2-1',
                description: 'Cómo respaldar la información de una empresa con la regla 3-2-1, qué papel juega un NAS y por qué hay que probar que los respaldos se pueden restaurar.',
                keywords: ['cómo respaldar información de una empresa', 'regla 3-2-1 respaldos', 'qué es un NAS', 'respaldo contra ransomware'],
                badge: 'Continuidad',
                hostLine: 'Un respaldo que nunca has intentado restaurar es solo una esperanza.',
                quickAnswer: 'La regla 3-2-1 dice: guarda 3 copias de cada archivo importante (el original y 2 respaldos), en 2 tipos de medio distintos y con 1 copia fuera de tu oficina. Un NAS sirve como respaldo local automático; la copia externa puede ir a la nube. Y los respaldos deben probarse para confirmar que se pueden restaurar.',
                keyFacts: [
                    { label: 'Regla 3-2-1', value: '3 copias, 2 tipos de medio, 1 fuera del sitio' },
                    { label: 'Frecuencia', value: 'Automática y periódica, sin depender de que alguien se acuerde' },
                    { label: 'NAS', value: 'Almacenamiento en red para respaldos locales y archivos compartidos' },
                    { label: 'Contra ransomware', value: 'Copias protegidas, cifradas o desconectadas de la red' },
                    { label: 'Servicio de CA', value: 'Instalación presencial de NAS en México, sujeta a cobertura' },
                ],
                sections: [
                    {
                        id: 'regla-3-2-1',
                        title: '¿Qué es la regla 3-2-1?',
                        paragraphs: [
                            'Es la recomendación básica de agencias de ciberseguridad como CISA: mantener tres copias de cada archivo importante (una principal y dos respaldos), en dos tipos de medio distintos para protegerte de fallas diferentes, y una copia fuera de tu oficina por si hay robo, incendio o inundación.',
                        ],
                    },
                    {
                        id: 'nas',
                        title: '¿Qué papel juega un NAS?',
                        paragraphs: [
                            'Un NAS es un equipo de almacenamiento conectado a la red. En una oficina suele cumplir dos funciones: carpeta compartida para el equipo y destino de respaldos automáticos de las computadoras. Con eso cubres las copias locales; la copia externa puede sincronizarse a la nube.',
                        ],
                    },
                    {
                        id: 'ransomware',
                        title: '¿Cómo proteger los respaldos del ransomware?',
                        paragraphs: ['Un ataque que cifra tus archivos también puede cifrar los respaldos si están siempre conectados. Por eso se recomienda:'],
                        bullets: [
                            'Que los respaldos se hagan solos y con regularidad.',
                            'Proteger las copias con cifrado, acceso restringido o copias desconectadas.',
                            'Probar la restauración completa y parcial de forma periódica.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Guardar todo en la nube ya es un respaldo?', answer: 'No necesariamente. Si la carpeta se sincroniza, un archivo borrado o cifrado también se sincroniza. Un respaldo guarda versiones anteriores.' },
                    { question: '¿Cada cuánto hay que respaldar?', answer: 'Depende de cuánta información puedes permitirte perder. Si pierdes un día de trabajo y es grave, el respaldo debe ser al menos diario.' },
                    { question: '¿CA instala NAS fuera de México?', answer: 'No. La instalación es presencial y se ofrece en México, sujeta a cobertura.' },
                ],
                sources: [
                    { label: 'CISA — Back Up Business Data', url: 'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/back-up-business-data' },
                    { label: 'CISA — Data Backup Options (PDF)', url: 'https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf' },
                ],
                midCta: '¿Sabes cuándo fue la última vez que restauraste un respaldo?',
                finalCta: '¿Quieres un esquema de respaldos automático para tu oficina?',
            },
        },
    },
    {
        id: 'camaras-cctv-para-negocio',
        category: 'infraestructura',
        slug: { 'es-MX': 'camaras-cctv-para-negocio' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: [],
        relatedGuides: ['que-es-un-firewall', 'aviso-de-privacidad-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Qué considerar antes de instalar cámaras de seguridad en tu negocio?',
                shortTitle: 'Cámaras CCTV para tu negocio',
                description: 'Qué considerar antes de instalar cámaras CCTV en un negocio: zonas a cubrir, grabación, acceso remoto seguro y aviso de privacidad por videovigilancia.',
                keywords: ['cámaras de seguridad para negocio', 'instalar CCTV en local', 'cuántas cámaras necesito', 'aviso de privacidad videovigilancia'],
                badge: 'Videovigilancia',
                hostLine: 'Una cámara que graba pero que nadie puede revisar a tiempo no evita nada.',
                quickAnswer: 'Antes de instalar cámaras define qué zonas debes cubrir (accesos, caja, almacén), cuántos días necesitas conservar la grabación y quién la puede ver desde fuera. Las cámaras deben ir en una red protegida, no expuestas a internet. Y como graban a personas, tu negocio debe informar la videovigilancia con un aviso de privacidad.',
                keyFacts: [
                    { label: 'Zonas prioritarias', value: 'Accesos, caja, almacén y zonas de carga' },
                    { label: 'Grabación', value: 'Días de retención según tu operación y el espacio del grabador' },
                    { label: 'Acceso remoto', value: 'Por una conexión segura, no con las cámaras expuestas a internet' },
                    { label: 'Privacidad', value: 'Las imágenes que identifican a una persona son datos personales' },
                    { label: 'Servicio de CA', value: 'Instalación presencial en México, sujeta a cobertura' },
                ],
                sections: [
                    {
                        id: 'que-cubrir',
                        title: '¿Qué zonas debe cubrir el sistema?',
                        paragraphs: [
                            'Empieza por los puntos donde ocurre la mayoría de los incidentes: entradas y salidas, caja, almacén y zonas de carga. Es mejor cubrir bien esos puntos con la cámara adecuada que llenar el local de cámaras que no distinguen un rostro.',
                        ],
                    },
                    {
                        id: 'grabacion-y-acceso',
                        title: '¿Cómo se graba y quién puede verlo?',
                        paragraphs: [
                            'La grabación se guarda en un grabador o en la nube. Define cuántos días debes conservarla y quién tiene acceso. Para ver las cámaras desde el celular, la conexión debe pasar por una red protegida; una cámara expuesta directamente a internet es una puerta de entrada a tu red.',
                        ],
                    },
                    {
                        id: 'privacidad',
                        title: '¿Necesito aviso de privacidad por las cámaras?',
                        paragraphs: [
                            'La Ley Federal de Protección de Datos Personales en Posesión de los Particulares considera dato personal cualquier información que identifica o hace identificable a una persona, y las imágenes de video pueden hacerlo. Por eso conviene informar la videovigilancia con un aviso visible y contar con su aviso de privacidad.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Cuántas cámaras necesito?', answer: 'Depende del tamaño y la distribución del local. Se define en una visita, a partir de los puntos que hay que cubrir.' },
                    { question: '¿Puedo ver las cámaras desde el celular?', answer: 'Sí, configurando un acceso remoto seguro. Lo que no conviene es dejar las cámaras expuestas directamente a internet.' },
                    { question: '¿CA instala cámaras fuera de México?', answer: 'No. La instalación es presencial y se ofrece en México, sujeta a cobertura.' },
                ],
                sources: [
                    { label: 'Cámara de Diputados — Ley Federal de Protección de Datos Personales en Posesión de los Particulares (texto vigente)', url: 'https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf' },
                ],
                midCta: '¿Tus cámaras se pueden ver desde internet sin protección?',
                finalCta: '¿Quieres un sistema de cámaras bien planeado para tu negocio?',
            },
        },
    },

    // ─── Clases (solo México) ─────────────────────────────────────────────
    {
        id: 'clases-de-computacion-que-aprender',
        category: 'clases',
        slug: { 'es-MX': 'clases-de-computacion-que-aprender' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: [],
        relatedGuides: ['automatizar-procesos-n8n-make', 'inteligencia-artificial-para-empresas'],
        content: {
            'es-MX': {
                title: '¿Qué aprender en clases de computación para el trabajo?',
                shortTitle: 'Clases de computación: qué aprender',
                description: 'Qué aprender en clases de computación según tu objetivo: ofimática para la oficina, programación para crear herramientas o marketing digital para vender.',
                keywords: ['clases de computación para adultos', 'curso de Excel para el trabajo', 'aprender programación desde cero', 'clases de marketing digital'],
                badge: 'Capacitación',
                hostLine: 'La mejor clase es la que resuelve un problema que tienes el lunes en la oficina.',
                quickAnswer: 'Depende de tu objetivo. Para trabajar mejor en la oficina, empieza por ofimática: hojas de cálculo, documentos y correo. Para crear herramientas o automatizar tareas, programación. Para vender en internet, marketing digital. Lo que más rinde es aprender con tus propios archivos y casos del trabajo, no con ejemplos genéricos.',
                keyFacts: [
                    { label: 'Para la oficina', value: 'Ofimática: hojas de cálculo, documentos, presentaciones y correo' },
                    { label: 'Para crear herramientas', value: 'Programación y desarrollo web' },
                    { label: 'Para vender', value: 'Marketing digital y redes sociales' },
                    { label: 'Formato en CA', value: 'Clases personalizadas; el precio depende de horas y plan' },
                ],
                sections: [
                    {
                        id: 'ofimatica',
                        title: '¿Por dónde empezar si trabajas en oficina?',
                        paragraphs: [
                            'Por las hojas de cálculo. Fórmulas, tablas y filtros ahorran horas cada semana y son la base para después automatizar. Luego documentos y presentaciones con formato profesional, y el manejo ordenado del correo y la nube.',
                        ],
                    },
                    {
                        id: 'programacion',
                        title: '¿Cuándo conviene aprender programación?',
                        paragraphs: [
                            'Cuando quieres crear tus propias herramientas: una página, un sistema pequeño o automatizaciones. No hace falta ser ingeniero para empezar; sí hace falta constancia y un proyecto real que motive a terminar.',
                        ],
                    },
                    {
                        id: 'marketing',
                        title: '¿Y si lo que quieres es vender más?',
                        paragraphs: [
                            'Marketing digital: cómo planear contenido, usar las redes del negocio con intención, medir resultados y entender la publicidad pagada. Es la opción para dueños de negocio que quieren dejar de depender por completo de terceros.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Las clases son para cualquier nivel?', answer: 'Sí. Se adaptan desde lo básico hasta temas avanzados de programación y marketing.' },
                    { question: '¿Puedo tomar clases con los archivos de mi trabajo?', answer: 'Sí, y es lo más recomendable: aprendes resolviendo lo que usas a diario.' },
                    { question: '¿Cuánto cuestan?', answer: 'Dependen de las horas y el plan. Escríbenos para armar un plan a tu medida.' },
                ],
                sources: [],
                midCta: '¿Tu equipo pierde horas en tareas que una hoja de cálculo resolvería?',
                finalCta: '¿Quieres un plan de clases a la medida de tu trabajo?',
            },
        },
    },

    // ─── Marketing ────────────────────────────────────────────────────────
    {
        id: 'cuanto-cuesta-un-logotipo',
        category: 'marketing',
        slug: { 'es-MX': 'cuanto-cuesta-un-logotipo', 'en': 'how-much-does-a-logo-cost' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['diseno-de-marca', 'pagina-web', 'gestion-de-redes-sociales'],
        relatedGuides: ['cuanto-cuesta-gestion-de-redes-sociales', 'como-crear-una-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Cuánto cuesta un logotipo y qué incluye una identidad de marca?',
                shortTitle: '¿Cuánto cuesta un logotipo?',
                description: 'Cuánto cuesta diseñar un logotipo, qué diferencia hay con una identidad de marca completa y por qué el registro ante el IMPI es un trámite aparte.',
                keywords: ['cuánto cuesta un logotipo', 'precio diseño de logo México', 'qué incluye una identidad de marca', 'registrar mi marca IMPI'],
                badge: 'Precios 2026',
                hostLine: 'Un logotipo es la firma de tu negocio. La identidad es cómo se ve todo lo demás.',
                quickAnswer: 'En CA, el diseño de un logotipo empieza en $2,500 MXN. Una identidad de marca completa, con paleta de colores, tipografías y manual de uso, cuesta más porque define cómo se ve tu negocio en todos lados. El registro de la marca ante el IMPI es un trámite legal aparte, que no forma parte del diseño.',
                keyFacts: [
                    { label: 'Logotipo en CA', value: 'Desde $2,500 MXN' },
                    { label: 'Identidad de marca', value: 'Logotipo, paleta, tipografías y manual de uso' },
                    { label: 'Entregables', value: 'Archivos editables y versiones para web e impresión' },
                    { label: 'Registro de marca', value: 'Trámite aparte ante el IMPI, que se puede hacer en línea' },
                ],
                sections: [
                    {
                        id: 'logo-o-identidad',
                        title: '¿Logotipo o identidad de marca?',
                        paragraphs: [
                            'Un logotipo resuelve cómo se firma tu negocio. Una identidad resuelve cómo se ve todo: colores, tipografías, usos correctos e incorrectos y aplicaciones en redes, papelería o fachada. Si vas a tener varias personas creando material, la identidad evita que cada pieza se vea distinta.',
                        ],
                    },
                    {
                        id: 'que-recibes',
                        title: '¿Qué archivos debes recibir?',
                        paragraphs: ['Pide siempre, por escrito, que la entrega incluya:'],
                        bullets: [
                            'Archivo editable del logotipo.',
                            'Versiones para fondo claro y oscuro.',
                            'Formatos para web (PNG, SVG) e impresión (PDF).',
                            'En identidad completa, el manual con colores y tipografías.',
                        ],
                    },
                    {
                        id: 'registro',
                        title: '¿El diseño incluye el registro de la marca?',
                        paragraphs: [
                            'No. En México, el registro de marca se tramita ante el Instituto Mexicano de la Propiedad Industrial (IMPI), que permite capturar, pagar, firmar y enviar la solicitud en línea con la plataforma Marca en línea. Conviene revisar que el nombre esté disponible antes de invertir en el diseño.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Los archivos del logotipo son míos?', answer: 'En CA, sí: al liquidar el proyecto recibes los archivos finales para usarlos en tu negocio.' },
                    { question: '¿Cuánto cuesta una identidad completa?', answer: 'Aparece en la ficha de diseño de marca, en la tabla de precios por nivel.' },
                    { question: '¿Dónde registro mi marca?', answer: 'En el IMPI. El trámite se puede hacer en línea; si tienes dudas legales, consulta a un especialista en propiedad industrial.' },
                ],
                sources: [
                    { label: 'IMPI — Tramita tu marca o patente en línea', url: 'https://www.gob.mx/impi/acciones-y-programas/tramita-tu-marca-o-patente-en-linea' },
                ],
                midCta: '¿Tu marca se ve distinta en cada red, folleto y fachada?',
                finalCta: '¿Quieres un logotipo o una identidad de marca completa?',
            },
            'en': {
                title: 'How much does a logo cost and what does a brand identity include?',
                shortTitle: 'How much does a logo cost?',
                description: 'How much a logo design costs, how it differs from a full brand identity and why trademark registration is a separate legal process.',
                keywords: ['how much does a logo cost', 'logo design pricing', 'what does a brand identity include', 'brand guidelines cost'],
                badge: '2026 pricing',
                hostLine: 'A logo is your business signature. The identity is how everything else looks.',
                quickAnswer: 'At CA, logo design starts at $160 USD. A full brand identity, with color palette, typography and usage guidelines, costs more because it defines how your business looks everywhere. Trademark registration is a separate legal process with your country’s intellectual property office and is not part of the design.',
                keyFacts: [
                    { label: 'Logo at CA', value: 'From $160 USD' },
                    { label: 'Brand identity', value: 'Logo, palette, typography and usage guidelines' },
                    { label: 'Deliverables', value: 'Editable files and versions for web and print' },
                    { label: 'Trademark', value: 'Separate filing with your intellectual property office' },
                ],
                sections: [
                    {
                        id: 'logo-or-identity',
                        title: 'Logo or brand identity?',
                        paragraphs: [
                            'A logo solves how your business signs. An identity solves how everything looks: colors, typography, correct and incorrect uses, and applications on social media, stationery or signage. If several people will create material, an identity keeps every piece consistent.',
                        ],
                    },
                    {
                        id: 'what-you-get',
                        title: 'Which files should you receive?',
                        paragraphs: ['Always ask, in writing, for the delivery to include:'],
                        bullets: [
                            'Editable logo file.',
                            'Versions for light and dark backgrounds.',
                            'Formats for web (PNG, SVG) and print (PDF).',
                            'For a full identity, guidelines with colors and typography.',
                        ],
                    },
                    {
                        id: 'trademark',
                        title: 'Does design include trademark registration?',
                        paragraphs: [
                            'No. Trademark registration is a legal filing with your country’s intellectual property office. Check that the name is available before investing in the design.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Do I own the logo files?', answer: 'At CA, yes: once the project is paid in full you receive the final files to use in your business.' },
                    { question: 'How much does a full identity cost?', answer: 'It is listed on the brand design page, in the per-tier pricing table.' },
                    { question: 'Where do I register my trademark?', answer: 'With your country’s intellectual property office. For legal questions, consult a trademark specialist.' },
                ],
                sources: [],
                midCta: 'Does your brand look different on every network, flyer and sign?',
                finalCta: 'Want a logo or a full brand identity?',
            },
        },
    },

    // ─── Sistemas ─────────────────────────────────────────────────────────
    {
        id: 'que-es-un-saas',
        category: 'sistemas',
        slug: { 'es-MX': 'que-es-un-saas', 'en': 'what-is-saas' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['plataforma-saas', 'pasarelas-de-pago', 'sistema-web-a-medida'],
        relatedGuides: ['como-cobrar-en-linea', 'que-es-un-erp'],
        content: {
            'es-MX': {
                title: '¿Qué es un SaaS y cuánto cuesta desarrollar uno?',
                shortTitle: '¿Qué es un SaaS?',
                description: 'Qué es un SaaS (software como servicio), qué necesita para funcionar, cómo validar la idea antes de invertir y cuánto cuesta desarrollar uno.',
                keywords: ['qué es un SaaS', 'software como servicio', 'cuánto cuesta desarrollar un SaaS', 'crear una plataforma por suscripción'],
                badge: 'Guía básica',
                hostLine: 'Un SaaS no se valida con funciones: se valida cuando alguien paga el primer mes.',
                quickAnswer: 'Un SaaS (software como servicio) es un programa que tus clientes usan desde el navegador y pagan por suscripción, en lugar de comprarlo e instalarlo. Necesita cuentas de usuario, planes, cobro recurrente e infraestructura en la nube. En CA, desarrollar la primera versión de una plataforma SaaS empieza en $45,000 MXN.',
                keyFacts: [
                    { label: 'Modelo', value: 'Software en la nube que se paga por suscripción' },
                    { label: 'Piezas mínimas', value: 'Cuentas, planes, cobro recurrente y panel de administración' },
                    { label: 'Costos aparte', value: 'Servidores, pasarela de pago y servicios de terceros' },
                    { label: 'En CA', value: 'Desde $45,000 MXN; 4–10 semanas estimadas' },
                ],
                sections: [
                    {
                        id: 'como-funciona',
                        title: '¿Cómo funciona un SaaS?',
                        paragraphs: [
                            'El software vive en la nube y cada cliente entra con su cuenta. Tú mantienes una sola versión, la actualizas para todos a la vez y cobras cada mes o cada año. Para el cliente no hay instalación; para ti hay ingresos recurrentes y un producto que mejora continuamente.',
                        ],
                    },
                    {
                        id: 'validar',
                        title: '¿Cómo validar la idea antes de invertir?',
                        paragraphs: ['Antes de construir todo, conviene confirmar que alguien pagaría:'],
                        bullets: [
                            'Define el problema concreto que resuelves y para quién.',
                            'Construye la versión mínima que resuelve ese problema.',
                            'Consigue los primeros clientes que paguen, aunque sean pocos.',
                            'Agrega funciones según lo que esos clientes piden.',
                        ],
                    },
                    {
                        id: 'costos',
                        title: '¿Qué costos tiene además del desarrollo?',
                        paragraphs: [
                            'Servidores o servicios en la nube, comisiones de la pasarela de pago, correo transaccional y el mantenimiento continuo. Estos costos crecen con el número de clientes, así que conviene incluirlos en el precio de tus planes desde el inicio.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿SaaS y aplicación web son lo mismo?', answer: 'Un SaaS es una aplicación web con modelo de negocio por suscripción y varios clientes independientes en la misma plataforma.' },
                    { question: '¿El código de mi SaaS es mío?', answer: 'La propiedad y las licencias del código se establecen en el contrato de cada proyecto.' },
                    { question: '¿Cuánto tarda la primera versión?', answer: 'En CA, entre 4 y 10 semanas estimadas, según módulos e integraciones.' },
                ],
                sources: [],
                midCta: '¿Tienes una idea de software que ya te piden tus clientes?',
                finalCta: '¿Quieres construir la primera versión de tu SaaS?',
            },
            'en': {
                title: 'What is SaaS and how much does it cost to build one?',
                shortTitle: 'What is SaaS?',
                description: 'What SaaS (software as a service) is, what it needs to work, how to validate the idea before investing and how much it costs to build.',
                keywords: ['what is SaaS', 'software as a service', 'how much does it cost to build a SaaS', 'build a subscription platform'],
                badge: 'Basics',
                hostLine: 'A SaaS is not validated by features: it is validated when someone pays for the first month.',
                quickAnswer: 'SaaS (software as a service) is software your customers use from the browser and pay for by subscription instead of buying and installing it. It needs user accounts, plans, recurring billing and cloud infrastructure. At CA, building the first version of a SaaS platform starts at $2,800 USD.',
                keyFacts: [
                    { label: 'Model', value: 'Cloud software paid by subscription' },
                    { label: 'Minimum pieces', value: 'Accounts, plans, recurring billing and admin panel' },
                    { label: 'Separate costs', value: 'Servers, payment gateway and third-party services' },
                    { label: 'At CA', value: 'From $2,800 USD; an estimated 4–10 weeks' },
                ],
                sections: [
                    {
                        id: 'how-it-works',
                        title: 'How does SaaS work?',
                        paragraphs: [
                            'The software lives in the cloud and each customer logs in with their account. You maintain a single version, update it for everyone at once and bill monthly or yearly. Customers install nothing; you get recurring revenue and a product that keeps improving.',
                        ],
                    },
                    {
                        id: 'validate',
                        title: 'How do you validate the idea before investing?',
                        paragraphs: ['Before building everything, confirm someone would pay:'],
                        bullets: [
                            'Define the specific problem you solve and for whom.',
                            'Build the minimum version that solves it.',
                            'Win your first paying customers, even if few.',
                            'Add features based on what those customers ask for.',
                        ],
                    },
                    {
                        id: 'costs',
                        title: 'What costs are there besides development?',
                        paragraphs: [
                            'Servers or cloud services, payment gateway fees, transactional email and ongoing maintenance. These grow with your customer count, so build them into your plan pricing from the start.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Are SaaS and web apps the same?', answer: 'A SaaS is a web app with a subscription business model and many independent customers on the same platform.' },
                    { question: 'Do I own my SaaS code?', answer: 'Code ownership and licensing are set out in each project contract.' },
                    { question: 'How long does the first version take?', answer: 'At CA, an estimated 4 to 10 weeks depending on modules and integrations.' },
                ],
                sources: [],
                midCta: 'Do you have a software idea your customers already ask for?',
                finalCta: 'Want to build the first version of your SaaS?',
            },
        },
    },

    // ─── Automatización ───────────────────────────────────────────────────
    {
        id: 'como-cobrar-en-linea',
        category: 'automatizacion',
        slug: { 'es-MX': 'como-cobrar-en-linea', 'en': 'how-to-accept-online-payments' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['pasarelas-de-pago', 'pagina-web', 'plataforma-saas'],
        relatedGuides: ['que-es-un-saas', 'como-crear-una-pagina-web'],
        content: {
            'es-MX': {
                title: '¿Cómo cobrar en línea en tu página web en México?',
                shortTitle: 'Cómo cobrar en línea',
                description: 'Cómo cobrar en línea desde tu página web en México: qué es una pasarela de pago, cómo cobran comisión y qué conviene revisar antes de elegir una.',
                keywords: ['cómo cobrar en línea México', 'pasarela de pago para página web', 'aceptar pagos con tarjeta en mi sitio', 'Stripe México'],
                badge: 'Pagos',
                hostLine: 'Cada paso de más en el pago es un cliente que se va a medio camino.',
                quickAnswer: 'Para cobrar en línea necesitas una pasarela de pago, como Stripe o PayPal, integrada en tu sitio o sistema. La pasarela procesa la tarjeta y te deposita el dinero, y cobra una comisión por cada venta; algunas, como Stripe en México, no cobran mensualidad ni instalación. En CA, integrar una pasarela empieza en $3,000 MXN.',
                keyFacts: [
                    { label: 'Qué necesitas', value: 'Una cuenta en una pasarela de pago y su integración en tu sitio' },
                    { label: 'Cómo cobran', value: 'Comisión por transacción; la tarifa varía por pasarela y método' },
                    { label: 'Stripe en México', value: 'Sin mensualidad ni costo de instalación; paga por transacción' },
                    { label: 'En CA', value: 'Integración desde $3,000 MXN' },
                ],
                sections: [
                    {
                        id: 'que-es',
                        title: '¿Qué es una pasarela de pago?',
                        paragraphs: [
                            'Es el servicio que procesa el pago con tarjeta u otros métodos, verifica la operación y deposita el dinero en tu cuenta. Tu sitio nunca guarda los datos completos de la tarjeta: los maneja la pasarela.',
                        ],
                    },
                    {
                        id: 'como-elegir',
                        title: '¿Qué revisar antes de elegir una?',
                        paragraphs: ['Compara con tus números reales, no solo con la comisión que se anuncia:'],
                        bullets: [
                            'Comisión por venta y si hay cuota fija por transacción.',
                            'Si cobra mensualidad o costo de instalación.',
                            'Métodos de pago que aceptan tus clientes.',
                            'Tiempo en que te deposita el dinero.',
                            'Si permite suscripciones, si las necesitas.',
                        ],
                    },
                    {
                        id: 'boton-o-integracion',
                        title: '¿Botón de pago o integración completa?',
                        paragraphs: [
                            'Un botón o enlace de pago es rápido y funciona para vender pocos productos. Una integración completa permite cobrar dentro de tu sitio o sistema, manejar carritos, suscripciones y registrar cada pago automáticamente en tus ventas.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿Cuánto cobra la pasarela por venta?', answer: 'Depende de la pasarela, el método de pago y si la tarjeta es nacional o internacional. Consulta la tarifa vigente en su sitio antes de decidir.' },
                    { question: '¿Las comisiones están incluidas en la integración?', answer: 'No. La pasarela cobra sus comisiones directamente por cada transacción.' },
                    { question: '¿Cuánto cuesta una integración completa?', answer: 'Aparece en la ficha de pasarelas de pago, en la tabla de precios por nivel.' },
                ],
                sources: [
                    { label: 'Stripe México — Precios', url: 'https://stripe.com/mx/pricing' },
                ],
                midCta: '¿Tus clientes todavía te pagan por transferencia y te mandan el comprobante?',
                finalCta: '¿Quieres cobrar en línea desde tu sitio o sistema?',
            },
            'en': {
                title: 'How do you accept online payments on your website?',
                shortTitle: 'How to accept online payments',
                description: 'How to accept online payments on your website: what a payment gateway is, how fees work and what to check before choosing one.',
                keywords: ['how to accept online payments', 'payment gateway for website', 'accept card payments on my site', 'Stripe integration'],
                badge: 'Payments',
                hostLine: 'Every extra step at checkout is a customer who drops off halfway.',
                quickAnswer: 'To accept online payments you need a payment gateway, such as Stripe or PayPal, integrated into your site or system. The gateway processes the card, deposits the money and charges a fee on each sale; some have no monthly or setup fee. At CA, integrating a payment gateway starts at $190 USD.',
                keyFacts: [
                    { label: 'What you need', value: 'A payment gateway account and its integration on your site' },
                    { label: 'How they charge', value: 'Per-transaction fees; rates vary by gateway and method' },
                    { label: 'Monthly fees', value: 'Some gateways have none; check each provider' },
                    { label: 'At CA', value: 'Integration from $190 USD' },
                ],
                sections: [
                    {
                        id: 'what-is-it',
                        title: 'What is a payment gateway?',
                        paragraphs: [
                            'It is the service that processes card and other payments, verifies the transaction and deposits the money in your account. Your site never stores full card details: the gateway handles them.',
                        ],
                    },
                    {
                        id: 'how-to-choose',
                        title: 'What should you check before choosing one?',
                        paragraphs: ['Compare against your real numbers, not just the advertised fee:'],
                        bullets: [
                            'Per-sale percentage and any fixed per-transaction fee.',
                            'Whether there is a monthly or setup fee.',
                            'Payment methods your customers use.',
                            'How long payouts take.',
                            'Subscription support, if you need it.',
                        ],
                    },
                    {
                        id: 'button-or-integration',
                        title: 'Payment button or full integration?',
                        paragraphs: [
                            'A payment button or link is quick and works for selling a few products. A full integration lets you charge inside your site or system, handle carts and subscriptions, and log every payment in your sales automatically.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'How much does the gateway charge per sale?', answer: 'It depends on the gateway, payment method and whether the card is domestic or international. Check the current rate on the provider’s site before deciding.' },
                    { question: 'Are fees included in the integration?', answer: 'No. The gateway charges its fees directly on each transaction.' },
                    { question: 'How much does a full integration cost?', answer: 'It is listed on the payment gateways page, in the per-tier pricing table.' },
                ],
                sources: [],
                midCta: 'Do customers still pay you by bank transfer and send a receipt?',
                finalCta: 'Want to accept online payments on your site or system?',
            },
        },
    },
    {
        id: 'inteligencia-artificial-para-empresas',
        category: 'automatizacion',
        slug: { 'es-MX': 'inteligencia-artificial-para-empresas', 'en': 'ai-for-small-business' },
        datePublished: '2026-09-22',
        dateModified: '2026-09-22',
        relatedProducts: ['inteligencia-artificial-integrada', 'bot-de-whatsapp', 'integraciones-api'],
        relatedGuides: ['automatizar-procesos-n8n-make', 'bot-de-whatsapp-para-negocios'],
        content: {
            'es-MX': {
                title: '¿Cómo usar inteligencia artificial en tu empresa sin perder el control?',
                shortTitle: 'IA para empresas',
                description: 'Cómo usar inteligencia artificial en una pyme: qué tareas conviene delegar, cómo empezar con un caso medible y qué riesgos cuidar con los datos.',
                keywords: ['inteligencia artificial para empresas', 'cómo usar IA en mi negocio', 'IA para pymes', 'automatizar con inteligencia artificial'],
                badge: 'Inteligencia artificial',
                hostLine: 'La IA rinde cuando resuelve una tarea concreta. Como idea general, solo genera expectativas.',
                quickAnswer: 'Empieza por una tarea concreta y repetitiva donde la IA ahorre tiempo medible: clasificar mensajes, resumir documentos, redactar respuestas o consultar información interna. Define qué datos puede usar, en qué casos una persona revisa el resultado y cómo medirás el ahorro. En CA, integrar IA en tus procesos empieza en $10,000 MXN.',
                keyFacts: [
                    { label: 'Dónde rinde', value: 'Tareas repetitivas con texto: clasificar, resumir, redactar, consultar' },
                    { label: 'Primer paso', value: 'Un caso de uso medible, no un proyecto general' },
                    { label: 'Control', value: 'Revisión humana en los casos delicados' },
                    { label: 'Costos aparte', value: 'Consumo de modelos y APIs según el uso' },
                    { label: 'En CA', value: 'IA integrada desde $10,000 MXN' },
                ],
                sections: [
                    {
                        id: 'que-delegar',
                        title: '¿Qué tareas conviene delegar a la IA?',
                        paragraphs: ['Las que implican mucho texto y reglas claras:'],
                        bullets: [
                            'Clasificar correos o mensajes y enviarlos al área correcta.',
                            'Resumir documentos, contratos o reuniones.',
                            'Redactar borradores de respuestas para que una persona los revise.',
                            'Responder preguntas usando la información interna del negocio.',
                        ],
                    },
                    {
                        id: 'como-empezar',
                        title: '¿Cómo empezar sin gastar de más?',
                        paragraphs: [
                            'Con un piloto: una tarea, ejemplos reales de entrada y del resultado esperado, y una medida de éxito (horas ahorradas, tiempo de respuesta, errores). Si el piloto no mejora esa medida, se ajusta o se descarta antes de escalar.',
                        ],
                    },
                    {
                        id: 'riesgos',
                        title: '¿Qué riesgos hay que cuidar?',
                        paragraphs: [
                            'Que la IA se equivoque con seguridad, que use datos sensibles sin control o que nadie revise sus respuestas. Se mitiga definiendo qué información puede consultar, dónde se procesan los datos y qué casos pasan siempre por una persona.',
                        ],
                    },
                ],
                faqs: [
                    { question: '¿La IA puede equivocarse?', answer: 'Sí. Por eso se definen los casos en que una persona revisa el resultado antes de usarlo.' },
                    { question: '¿Cuánto cuesta el consumo del modelo?', answer: 'Depende del volumen de uso. El consumo de APIs y modelos es de terceros y se cotiza aparte.' },
                    { question: '¿Mis datos se usan para entrenar la IA?', answer: 'Depende del proveedor y del tipo de cuenta. Se revisa en cada proyecto y se elige la opción que respete la privacidad requerida.' },
                ],
                sources: [],
                midCta: '¿Qué tarea de texto repite tu equipo todos los días?',
                finalCta: '¿Quieres probar la IA en una tarea concreta de tu empresa?',
            },
            'en': {
                title: 'How do you use AI in your business without losing control?',
                shortTitle: 'AI for small business',
                description: 'How to use AI in a small business: which tasks to delegate, how to start with a measurable use case and which data risks to manage.',
                keywords: ['AI for small business', 'how to use AI in my business', 'AI automation for companies', 'business AI use cases'],
                badge: 'Artificial intelligence',
                hostLine: 'AI pays off when it solves a specific task. As a general idea, it only creates expectations.',
                quickAnswer: 'Start with one concrete, repetitive task where AI saves measurable time: classifying messages, summarizing documents, drafting replies or querying internal information. Define which data it may use, when a person reviews the output and how you will measure the savings. At CA, integrating AI into your processes starts at $625 USD.',
                keyFacts: [
                    { label: 'Where it pays off', value: 'Repetitive text tasks: classify, summarize, draft, query' },
                    { label: 'First step', value: 'One measurable use case, not a general project' },
                    { label: 'Control', value: 'Human review for sensitive cases' },
                    { label: 'Separate costs', value: 'Model and API usage based on volume' },
                    { label: 'At CA', value: 'AI integration from $625 USD' },
                ],
                sections: [
                    {
                        id: 'what-to-delegate',
                        title: 'Which tasks should you delegate to AI?',
                        paragraphs: ['Those involving lots of text and clear rules:'],
                        bullets: [
                            'Classifying emails or messages and routing them to the right team.',
                            'Summarizing documents, contracts or meetings.',
                            'Drafting replies for a person to review.',
                            'Answering questions using the business’s internal information.',
                        ],
                    },
                    {
                        id: 'how-to-start',
                        title: 'How do you start without overspending?',
                        paragraphs: [
                            'With a pilot: one task, real input examples with the expected output, and a success measure (hours saved, response time, errors). If the pilot does not improve that measure, adjust it or drop it before scaling.',
                        ],
                    },
                    {
                        id: 'risks',
                        title: 'Which risks do you need to manage?',
                        paragraphs: [
                            'AI being confidently wrong, using sensitive data without control, or nobody reviewing its answers. Mitigate it by defining what information it can access, where data is processed and which cases always go to a person.',
                        ],
                    },
                ],
                faqs: [
                    { question: 'Can AI make mistakes?', answer: 'Yes. That is why you define when a person reviews the output before it is used.' },
                    { question: 'How much does model usage cost?', answer: 'It depends on usage volume. API and model usage are third-party costs quoted separately.' },
                    { question: 'Is my data used to train the AI?', answer: 'It depends on the provider and account type. It is reviewed in each project to pick the option that meets your privacy needs.' },
                ],
                sources: [],
                midCta: 'Which text task does your team repeat every day?',
                finalCta: 'Want to try AI on one specific task in your business?',
            },
        },
    },
];
