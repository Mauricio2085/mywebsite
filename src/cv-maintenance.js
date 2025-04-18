const maintenanceCv = async () => {
  const viewMantenance = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV</title>
    <link rel="stylesheet" href="../styles/cvstyles.css">
</head>
<body>
    <main>
        <aside>
            <picture class="profile-image">
                <img src="../assets/Perfil_CV_2.jpg" alt="profile">
            </picture>
        <div class="main-topics">
        <div class="topic">
                <p class="aside-title">MEDIOS DE CONTACTO</p>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/marcador.png" alt="marcador">
                </div>
                <p class="aside-content">Risaralda, Pereira, Colombia</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/circle-phone.png" alt="phone">
                </div>
                <p class="aside-content">+57 310 6789371</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/email.png" alt="phone">
                </div>
                <p class="aside-content">maoca2085@gmail.com</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/linkedin_light.png" alt="phone">
                </div>
                <p class="aside-content">www.linkedin.com/in/jose-mauricio-ocampo-marulanda-92380a81</p>
            </div>
        </div>
        <div class="topic">
            <p class="aside-title">RESUMEN DE HABILIDADES</p>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/sparkles.png" alt="marcador">
                </div>
                <p class="aside-content">Programación de PLC's Mitsubishi</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/sparkles.png" alt="marcador">
                </div>
                <p class="aside-content">Programación de robots Yaskawa</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/sparkles.png" alt="marcador">
                </div>
                <p class="aside-content">Gestión de mantenimientos de tipo mecánico, eléctrico, electrónico, obra civil y refrigeración</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/sparkles.png" alt="marcador">
                </div>
                <p class="aside-content">Conocimientos en HTML, CSS, Javascript, GIT</p>
            </div>
        </div>
        <div class="topic">
            <p class="aside-title">IDIOMAS</p>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/globe.png" alt="marcador">
                </div>
                <p class="aside-content">Inglés B1</p>
            </div>
        </div>
        <div class="topic">
            <p class="aside-title">LOGROS</p>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/bookmark.png" alt="marcador">
                </div>
                <p class="aside-content achieves">Viajes de auditorías técnicas de compras de maquinaria a Japón, España, Brasil y México</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/bookmark.png" alt="marcador">
                </div>
                <p class="aside-content achieves">Diseño y ejecución de proyecto Celda robótica de soldadura Yaskawa para brazo oscilante de motocicletas</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/bookmark.png" alt="marcador">
                </div>
                <p class="aside-content achieves">Diseño y ejecución de proyecto Celda robótica de soldadura Panasonic para componente de tanque de combustible de motocicleta</p>
            </div>
            <div class="item-topic">
                <div class="icon-topic">
                    <img src="../assets/bookmark.png" alt="marcador">
                </div>
                <p class="aside-content achieves">Diseño y ejecución de diferentes proyectos de ahorro energético con variadores de frecuencia y automatización industrial</p>
            </div>
        </div>
        </div>
        </aside>
        <section>
            <div class="title-section">
            <h1>JOSE MAURICIO OCAMPO MARULANDA</h1>
            <span></span>
            <div class="career">
                <p>INGENIERO ELECTRÓNICO</p>
            </div>
            </div>
            <div class="professional-profile">
            <p class="titles">
                PERFIL PROFESIONAL
            </p>
            <p class="content">
                    Conocimiento en diseño e implementación de sistemas de control con PLC, variadores de frecuencia y sensores, además de manejo y programación de robots Yaskawa. Experiencia en manejo de personal técnico del área de mantenimiento y de procesos de automatización / Control industrial.
                    Excelente desempeño trabajando en equipo, trabajo bajo presión, alta disposición para aprender y afrontar retos
                </p>
            </div>
            <div class="experience-section">
            <p class="titles">
                EXPERIENCIA LABORAL
            </p>
            <div class="experience">
                <p class="experience-title">
                    Jefe de Mantenimiento
                </p>
                <p class="place-date">
                    Suzuki Motor de Colombia S.A. | Agosto 2018 - Junio 2022
                </p>
                <div class="content">
                    <ul>
                        <li>Responsable de planificar, monitorear, asignar y verificar el cumplimiento del plan de Mantenimiento de infraestructura de la planta ensambladora.</li><br>
                        <li>Control de personal técnico y profesional del área (20 personas).</li><br>
                        <li>Establecer y medir indicadores de Mantenimiento.</li><br>
                        <li>Participación en la ejecución de proyectos de mejora de la infraestructura. </li><br>
                    </ul>
                </div>
            </div>
            <div class="experience">
                <p class="experience-title">
                    Supervisor de Electrónica
                </p>
                <p class="place-date">
                    Suzuki Motor de Colombia S.A. | Agosto 2014 - Agosto 2018
                </p>
                <div class="content">
                    <ul>
                        <li>Planificar, monitorear, asignar y verificar el cumplimiento de proyectos relacionados con control y automatización industrial para mejorar maquinaria y procesos productivos. 
                        </li><br>
                        <li>Correctivos de maquinaria de tipo electrónico, automatización y control industrial.</li><br>
                        <li>Control de personal técnico y profesional (6 personas).</li><br>
                    </ul>
                </div>
            </div>
            <div class="experience">
                <p class="experience-title">
                    Operario de Mantenimiento
                </p>
                <p class="place-date">
                    Suzuki Motor de Colombia S.A. | Agosto 2007 - Junio 2014
                </p>
                <div class="content">
                    <ul>
                        <li>Ejecutar el plan de Mantenimiento de infraestructura</li><br>
                        <li>Diseñar y elaborar  circuitos de control con PLC's, relés, sensores y variadores de frecuencia.</li><br>
                        <li>Realizar diagnóstico y acciones correctivas de maquinaria, procesos de control y automatización</li><br>
                    </ul>
                </div>
            </div>
            </div>
            <div class="academic">
                <p class="titles">
                     HISTORIAL ACADÉMICO
                </p>
                <p class="experience-title">
                    Universidad Tecnológica de Pereira
                </p>
                <p class="place-date">
                    Ingeniero Electrónico | Febrero 2008 - Marzo 2014
                </p>
                </div>
        </section>
    </main>
</body>
</html>`;
  return viewMantenance;
};

export { maintenanceCv };
