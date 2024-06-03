import project1 from "../assets/cocoplatform.png";
import project2 from "../assets/apiecommerce.png";

export const HERO_CONTENT = `Desarrollador de software con formación profesional en
ingeniería.
Experiencia en el desarrollo de aplicaciones web, con conocimientos
en tecnologías que involucran el front-end y back-end.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Abr 2024 - Jun 2024",
    role: "Full Stack Teaching Assistant",
    company: "Henry Academy Bootcamp",
    description: [
      `Presentar propuestas y sugerencias para optimizar los procesos del Bootcamp, contribuyendo
      así a su mejora continua y eficiencia operativa.`,
      `Supervisar y dirigir un equipo de estudiantes con el fin de facilitar su integración efectiva
      en el entorno de estudio.`,
      `Brindar apoyo activo en la resolución de ejercicios y fomentar la colaboración entre los
      estudiantes a través de prácticas como la programación en pareja (Pair Programming).`,
    ],
  },
  {
    year: "Jun 2020 - Ene 2024",
    role: "Ingeniero Biomédico",
    company:
      "Centro de Imágenes Diagnósticas / Servicios de Emergencias Médicas",
    description: [
      `Supervisión del departamento de Ingeniería Biomédica, encabezando las iniciativas de gestión
        tecnológica en entornos clínicos y hospitalarios.`,
      `Implementación de programas de mantenimiento preventivo y correctivo para garantizar el
        óptimo funcionamiento de los equipos médicos de la institución.`,
      `Capacitaciones especializadas para el personal asistencial en el manejo y
        aplicación de tecnologías médicas de vanguardia`,
    ],
  },
  {
    year: "Ago 2019 - Ene 2020",
    role: "Analista de Machine Learning",
    company: "Work.r (Startup)",
    description: [
      `Asesoramiento y asistencia integral en la planificación y realización de proyectos
      relacionados con el desarrollo de software y aplicaciones web, incorporando técnicas de
      Inteligencia Artificial (IA) y adaptándose a diversos modelos de negocio.`,
      `Colaboración activa en la construcción y perfeccionamiento de modelos matemáticos mediante
      técnicas de aprendizaje automático, utilizando servicios especializados de AWS (Amazon Web
      Services) para el procesamiento avanzado de imágenes.`,
    ],
  },
  {
    year: "Ene 2017 - Jun 2019",
    role: "Tutor Académico",
    company: "Escuela Colombiana de Ingeniería Julio Garavito",
    description: [
      `Provisión de orientación académica y asistencia personalizada a estudiantes en materias
      especializadas como Bioinstrumentación, Introducción a la Ingeniería Biomédica y
      Procesamiento de Señales Médicas, mediante sesiones de tutoría individualizada o grupal.`,
      `Evaluación exhaustiva y análisis crítico de informes académicos y técnicos, garantizando la
      precisión, coherencia y calidad requeridas en la presentación de los mismos.`,
    ],
  },
];

export const PROJECTS = [
  {
    title: "Plataforma COCO+",
    image: project1,
    description: `COCO+ es un proyecto que desarrollé con otros estudiantes como parte de nuestra graduación. 
    La plataforma permite a empresas ofrecer a sus trabajadores remotos acceso a coworkings (espacios de trabajo compartidos) 
    para su desempeño laboral. La aplicación sirve a empleados, dueños de coworkings, gerentes de empresas y propietarios de la 
    plataforma, incluyendo funciones como gestión de reservas, activación y bloqueo de usuarios, sistema de tickets, reseñas y georeferenciación.`,
    technologies: ["React", "NestJS", "NextJS", "Postgres"],
    link: "https://coco-plus-front.vercel.app/",
  },
  {
    title: "Servidor Backend API E-commerce",
    image: project2,
    description: ` Creación de un servidor backend para un e-commerce, siguiendo una infraestructura y prácticas 
    de programación adecuadas, implementando tecnologías y conceptos tales como: NestJS, Autenticación (Auth), 
    Despliegue (Deployment), y Docker.`,
    technologies: ["NestJS", "Express", "JWT", "Docker", "Swagger"],
    link: "https://github.com/SebasPCDev/APIRepository",
  },
];
