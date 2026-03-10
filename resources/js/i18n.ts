import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        nav: {
            home: 'Home',
            study: 'Study in Canada',
            immigrate: 'Immigrate',
            about: 'About Us',
            contact: 'Contact Us',
            book_consultation: 'Book Consultation',
            language: 'Language',
            login: 'Log in',
            register: 'Register',
            dashboard: 'Dashboard'
        },
        hero: {
            badge: 'Your trusted path to Canada',
            title1: 'Build Your Future in ',
            canada: 'Canada',
            desc1: 'Expert guidance for your study, work, and immigration journey. We make the complex process simple, transparent, and successful.',
            button_start: 'Start Your Assessment',
            button_view: 'View Programs',
            floating1_title: 'Trusted Guidance',
            floating1_subtitle: 'For your Canadian journey',
            floating2_title: 'Professional Support',
            floating2_subtitle: 'Start your career today',
            floating3_title: 'Expert Assessment',
            floating3_subtitle: 'Find your pathway',
            tag2: 'Study, Work & Live',
            title2: 'Unlock Your Potential in ',
            desc2: 'Comprehensive support for university admissions, securing your Canadian study permit, and planning your career path.',
            tag3: 'Expert Immigration Services',
            title3: 'Start Your New Life in ',
            desc3: 'Professional assistance with work permits, Express Entry, Permanent Residency, and family sponsorship applications.'
        },
        study: {
            hero: {
                title: 'Achieve Academic Excellence in ',
                canada: 'Canada',
                desc: 'Access world-class education at top Canadian institutions. From language programs to university degrees, we guide you through the entire admissions and study permit process.',
                button: 'Find Your Program'
            },
            programs: {
                title: 'Educational Programs',
                subtitle: 'Discover the perfect educational pathway tailored to your career goals and current academic standing.',
                language: {
                    title: 'Language Courses',
                    desc: 'Immerse yourself in English or French programs designed to meet university entry requirements or improve your professional prospects.'
                },
                highschool: {
                    title: 'Middle & High School',
                    desc: 'Enroll your children in top public or private schools across Canada with comprehensive custody and support services.'
                },
                college: {
                    title: 'College Diplomas',
                    desc: 'Gain practical, industry-focused skills through 1-3 year diploma and advanced diploma programs aligned with labor market needs.'
                },
                university: {
                    title: 'University Degrees',
                    desc: 'Pursue Bachelor\'s, Master\'s, or PhD programs at globally recognized universities. We handle the complex application procedures.'
                }
            }
        },
        immigrate: {
            hero: {
                title: 'Your Permanent Pathway to ',
                canada: 'Canada',
                desc: 'Navigate the complex Canadian immigration system with confidence. Our certified RCIC consultants provide strategic advice and flawless application processing.',
                button: 'Assess Eligibility'
            },
            services: {
                title: 'Immigration Services',
                subtitle: 'Secure your future in Canada through tailored immigration strategies designed for professionals, trades workers, and families.',
                express: {
                    title: 'Express Entry',
                    desc: 'Fast-track your permanent residency through the Federal Skilled Worker, Canadian Experience Class, or Federal Skilled Trades programs.'
                },
                work: {
                    title: 'Work Permits',
                    desc: 'Assistance with LMIA-backed job offers, Post-Graduation Work Permits (PGWP), and open work permits for spouses.'
                },
                family: {
                    title: 'Family Sponsorship',
                    desc: 'Reunite with your loved ones. We process sponsorship applications for spouses, common-law partners, parents, and children.'
                },
                pnp: {
                    title: 'Provincial Nominee (PNP)',
                    desc: 'Explore alternative pathways to residency through province-specific programs tailored to regional economic needs.'
                }
            }
        },
        about: {
            hero: {
                title: 'Dedicated to your Canadian Success',
                desc: 'Since 2017, ExperienceCanada has been the bridge connecting ambitious individuals to endless opportunities in Canada. Built by immigrants, for immigrants.'
            },
            values: {
                title: 'Our Core Values',
                subtitle: 'The principles that guide our work and ensure the success of our clients.',
                experience: {
                    title: 'Proven Experience',
                    desc: 'Over 7 years of specialized experience handling complex academic and immigration cases.'
                },
                trust: {
                    title: 'Certified Trust',
                    desc: 'All immigration advice is provided by registered RCIC consultants in good standing.'
                },
                care: {
                    title: 'Personalized Care',
                    desc: 'We treat every application as if it were our own, offering tailored, compassionate support.'
                },
                success: {
                    title: 'Commitment to Success',
                    desc: 'A flawless track record built on transparency, rigorous preparation, and dedication.'
                }
            }
        },
        contact: {
            hero: {
                title: 'Let\'s Talk About Your Future',
                desc: 'Ready to take the first step? Reach out to our team of experts in Montreal to schedule your initial consultation.'
            },
            info: {
                title: 'Get in Touch',
                office: 'Main Office',
                phone: 'Contact Number',
                email: 'Email Address',
                hours: 'Business Hours',
                hours_desc: 'Monday - Friday: 9:00 AM - 5:00 PM EST'
            },
            form: {
                title: 'Send us a message',
                name: 'Full Name',
                email: 'Email Address',
                phone: 'Phone Number',
                interest: 'Primary Interest',
                interest_other: 'Other Inquiry',
                message: 'How can we help you?',
                submit: 'Send Message',
                success: 'Thank you! Your message has been sent successfully. We will contact you shortly.'
            }
        },
        stats: {
            years: 'Years Experience',
            cities: 'Target Cities',
            satisfaction: 'Client Satisfaction',
            founded: 'Founded in Montreal',
        },
        services: {
            title: 'Our Core Services',
            subtitle: 'Comprehensive solutions designed to turn your Canadian dreams into reality. We support you at every step of your journey.',
            study: {
                title: 'Study in Canada',
                desc: 'Get admission into top Canadian universities & colleges. We help with program selection, applications, and study permits.'
            },
            work: {
                title: 'Work Permits',
                desc: 'Navigate the complex LMIA process and secure your work permit. Open work permits, Express Entry, and post-graduation.'
            },
            pr: {
                title: 'Logistics & Procedures',
                desc: 'We support you with hosting services, airport pickup, medical insurance and custody for minors.'
            }
        },
        why_us: {
            title: 'Why Choose ExperienceCanada?',
            subtitle: "We don't just process applications; we build relationships. Our RCIC certified consultants ensure your application has the highest chance of success.",
            bullet1: 'Personalized study plans tailored to your goals',
            bullet2: 'End-to-end visa and immigration assistance',
            bullet3: 'Pre-departure orientation and post-arrival support',
            bullet4: 'Career counseling and networking opportunities',
            button: 'Read Success Stories'
        },
        partners: {
            title: 'Trusted by Leading Canadian Institutions'
        },
        testimonials: {
            badge: 'Success Stories',
            title: 'Hear From Our Students',
            subtitle: 'Discover how we\'ve helped thousands of international students and professionals achieve their Canadian dream.',
            student1: {
                role: 'University Student',
                text: 'The team at ExperienceCanada made my university application process incredibly smooth. They handled my study permit flawlessly and even helped me find housing in Montreal.'
            },
            student2: {
                role: 'Skilled Worker (PR)',
                text: 'After navigating the complex Express Entry pool alone, I hired their RCIC consultants. Within 6 months, I received my ITA and now hold Permanent Residency.'
            },
            student3: {
                role: 'College Graduate',
                text: 'From choosing the right college diploma to securing my Post-Graduation Work Permit (PGWP), their guidance has been the foundation of my success in Canada.'
            }
        },
        faqs: {
            title: 'Frequently Asked Questions',
            subtitle: 'Find quick answers to common questions about studying and immigrating to Canada.',
            q1: {
                q: 'Do I need to speak English or French to study in Canada?',
                a: 'Yes, most universities and colleges require proof of language proficiency (IELTS, TOEFL, TEF, etc.). However, we offer specific Language Pathway programs that allow you to study language first and conditionally enter college without an official test score.'
            },
            q2: {
                q: 'Can I work while I study?',
                a: 'Yes! Most international students pursuing an academic, professional, or vocational training program at a DLI are allowed to work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks.'
            },
            q3: {
                q: 'What is a Post-Graduation Work Permit (PGWP)?',
                a: 'A PGWP allows students who have graduated from eligible Canadian designated learning institutions (DLIs) to obtain an open work permit to gain valuable Canadian work experience, which is crucial for Permanent Residency.'
            },
            q4: {
                q: 'Are your immigration consultants certified?',
                a: 'Absolutely. All immigration advice and application representation is handled strictly by our in-house network of Regulated Canadian Immigration Consultants (RCICs) who are in good standing with the CICC.'
            }
        },
        cta: {
            title: 'Ready to Start Your Journey?',
            subtitle: 'Book a free consultation with our immigration experts today and take the first step towards your Canadian dream.',
            button: 'Get Free Assessment'
        },
        footer: {
            brand: 'Experience ',
            accent: 'Canada',
            desc: 'Your trusted partner in making your Canadian dream a reality. Expert guidance for studies, work, and immigration to Canada.',
            links: 'Quick Links',
            contact: 'Contact',
            rights: 'All rights reserved.'
        },
        meta: {
            title_home: 'Study & Immigrate to Canada',
            title_study: 'Study in Canada - ExperienceCanada',
            title_immigrate: 'Immigrate to Canada - ExperienceCanada',
            title_about: 'About Us - ExperienceCanada',
            title_contact: 'Contact Us - ExperienceCanada'
        },
        auth: {
            login: 'Log in',
            email: 'Email',
            password: 'Password',
            remember_me: 'Remember me',
            forgot_password: 'Forgot your password?',
            register: 'Register',
            name: 'Name',
            confirm_password: 'Confirm Password',
            already_registered: 'Already registered?',
            forgot_password_title: 'Forgot Password',
            forgot_password_desc: 'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.',
            email_password_reset_link: 'Email Password Reset Link',
            reset_password: 'Reset Password',
            confirm_password_title: 'Confirm Password',
            confirm_password_desc: 'This is a secure area of the application. Please confirm your password before continuing.',
            confirm: 'Confirm',
            verify_email_title: 'Email Verification',
            verify_email_desc: 'Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn\'t receive the email, we will gladly send you another.',
            verify_email_success: 'A new verification link has been sent to the email address you provided during registration.',
            resend_verification_email: 'Resend Verification Email',
            log_out: 'Log Out'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            study: 'Estudiar en Canadá',
            immigrate: 'Inmigrar',
            about: 'Nosotros',
            contact: 'Contáctanos',
            book_consultation: 'Solicitar Asesoría',
            language: 'Idioma',
            login: 'Entrar',
            register: 'Registro',
            dashboard: 'Portal'
        },
        hero: {
            badge: 'Tu camino confiable a Canadá',
            title1: 'Construye tu futuro en ',
            canada: 'Canadá',
            desc1: 'Te asesoramos en cada paso para que logres tu sueño de estudiar, trabajar y vivir en Canadá. Hacemos el proceso simple y exitoso.',
            button_start: 'Iniciar Evaluación',
            button_view: 'Ver Programas',
            floating1_title: 'Guía Confiable',
            floating1_subtitle: 'Para tu viaje a Canadá',
            floating2_title: 'Apoyo Profesional',
            floating2_subtitle: 'Inicia tu carrera hoy',
            floating3_title: 'Evaluación Experta',
            floating3_subtitle: 'Encuentra tu camino',
            tag2: 'Estudia, Trabaja & Vive',
            title2: 'Desbloquea tu potencial en ',
            desc2: 'Apoyo integral para admisiones escolares, cursos de idiomas y programas que te permiten ganar experiencia profesional.',
            tag3: 'Expertos en Inmigración',
            title3: 'Inicia tu nueva vida en ',
            desc3: 'Trámites seguros realizados por consultores migratorios certificados. Permisos de estudio, trabajo y residencia permanente.'
        },
        study: {
            hero: {
                title: 'Alcanza la excelencia académica en ',
                canada: 'Canadá',
                desc: 'Accede a educación de primer nivel en las mejores instituciones canadienses. Desde cursos de idiomas hasta títulos universitarios, te guiamos en todo el proceso de admisión y permiso de estudio.',
                button: 'Encuentra tu Programa'
            },
            programs: {
                title: 'Programas Educativos',
                subtitle: 'Descubre el camino educativo perfecto adaptado a tus metas profesionales y nivel académico actual.',
                language: {
                    title: 'Cursos de Idiomas',
                    desc: 'Sumérgete en programas de inglés o francés diseñados para cumplir con los requisitos de ingreso a la universidad o mejorar tus perspectivas profesionales.'
                },
                highschool: {
                    title: 'Secundaria y Preparatoria',
                    desc: 'Inscribe a tus hijos en las mejores escuelas públicas o privadas de Canadá con servicios integrales de custodia y apoyo.'
                },
                college: {
                    title: 'Diplomados Universitarios',
                    desc: 'Adquiere habilidades prácticas a través de programas de diploma de 1 a 3 años alineados con las necesidades del mercado laboral.'
                },
                university: {
                    title: 'Títulos Universitarios',
                    desc: 'Estudia licenciaturas, maestrías o doctorados en universidades reconocidas mundialmente. Nosotros manejamos los complejos trámites de postulación.'
                }
            }
        },
        immigrate: {
            hero: {
                title: 'Tu camino permanente hacia ',
                canada: 'Canadá',
                desc: 'Navega por el complejo sistema de inmigración canadiense con confianza. Nuestros consultores RCIC certificados brindan asesoramiento estratégico y procesamiento impecable de solicitudes.',
                button: 'Evaluar Elegibilidad'
            },
            services: {
                title: 'Servicios de Inmigración',
                subtitle: 'Asegura tu futuro en Canadá a través de estrategias de inmigración personalizadas diseñadas para profesionales, trabajadores de oficios y familias.',
                express: {
                    title: 'Express Entry',
                    desc: 'Acelera tu residencia permanente a través de los programas Federal Skilled Worker, Canadian Experience Class o Federal Skilled Trades.'
                },
                work: {
                    title: 'Permisos de Trabajo',
                    desc: 'Asistencia con ofertas de trabajo respaldadas por LMIA, Permisos de Trabajo Post-Graduación (PGWP) y permisos de trabajo abiertos para cónyuges.'
                },
                family: {
                    title: 'Apadrinamiento Familiar',
                    desc: 'Reúnete con tus seres queridos. Procesamos solicitudes de apadrinamiento para cónyuges, parejas de hecho, padres e hijos.'
                },
                pnp: {
                    title: 'Nominación Provincial (PNP)',
                    desc: 'Explora vías alternativas de residencia a través de programas específicos de cada provincia adaptados a las necesidades económicas regionales.'
                }
            }
        },
        about: {
            hero: {
                title: 'Dedicados a tu éxito en Canadá',
                desc: 'Desde 2017, ExperienceCanada ha sido el puente que conecta a personas ambiciosas con infinitas oportunidades en Canadá. Construido por inmigrantes, para inmigrantes.'
            },
            values: {
                title: 'Nuestros Valores Fundamentales',
                subtitle: 'Los principios que guían nuestro trabajo y garantizan el éxito de nuestros clientes.',
                experience: {
                    title: 'Experiencia Comprobada',
                    desc: 'Más de 7 años de experiencia especializada manejando casos académicos y migratorios complejos.'
                },
                trust: {
                    title: 'Confianza Certificada',
                    desc: 'Todo asesoramiento migratorio es proporcionado por consultores RCIC registrados y acreditados.'
                },
                care: {
                    title: 'Atención Personalizada',
                    desc: 'Tratamos cada solicitud como si fuera nuestra, ofreciendo apoyo personalizado y humano.'
                },
                success: {
                    title: 'Compromiso con el Éxito',
                    desc: 'Un historial impecable construido sobre transparencia, preparación rigurosa y dedicación.'
                }
            }
        },
        contact: {
            hero: {
                title: 'Hablemos de tu Futuro',
                desc: '¿Listo para dar el primer paso? Contacta a nuestro equipo de expertos en Montreal para programar tu consulta inicial.'
            },
            info: {
                title: 'Ponte en contacto',
                office: 'Oficina Principal',
                phone: 'Número de Contacto',
                email: 'Correo Electrónico',
                hours: 'Horario de Atención',
                hours_desc: 'Lunes - Viernes: 9:00 AM - 5:00 PM EST'
            },
            form: {
                title: 'Envíanos un mensaje',
                name: 'Nombre Completo',
                email: 'Correo Electrónico',
                phone: 'Número de Teléfono',
                interest: 'Interés Principal',
                interest_other: 'Otra Consulta',
                message: '¿En qué te podemos ayudar?',
                submit: 'Enviar Mensaje',
                success: '¡Gracias! Tu mensaje ha sido enviado exitosamente. Nos comunicaremos contigo pronto.'
            }
        },
        stats: {
            years: 'Años de Experiencia',
            cities: 'Ciudades Destino',
            satisfaction: 'Satisfacción del Cliente',
            founded: 'Fundada en Montreal',
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Soluciones integrales diseñadas para convertir tu sueño canadiense en realidad. Desde tu escuela hasta tu llegada al aeropuerto.',
            study: {
                title: 'Asesoría Educativa',
                desc: 'Ingresa a las mejores escuelas privadas y públicas (College y Vocacional). Te guiamos en tu registro escolar y proceso de admisión.'
            },
            work: {
                title: 'Estudio y Trabajo',
                desc: 'Programas diseñados para estudiar mientras ganas experiencia profesional en Canadá. Abre las puertas al mercado laboral internacional.'
            },
            pr: {
                title: 'Logística y Trámites',
                desc: 'Te apoyamos con servicios de hospedaje, recibimiento en aeropuerto, seguro médico y custodia para menores de edad.'
            }
        },
        why_us: {
            title: '¿Por qué elegir Experience Canada?',
            subtitle: 'No solo tramitamos aplicaciones; construimos relaciones. Integrados por profesionales con experiencia propia en migración desde 2017.',
            bullet1: 'Asesoría en todo momento como si fueras de nuestra familia',
            bullet2: 'Trámites migratorios realizados por consultores certificados',
            bullet3: 'Gestión integral: desde inscripción hasta tu hospedaje',
            bullet4: 'Alianzas con las mejores instituciones en Canadá',
            button: 'Conoce a Nuestro Equipo'
        },
        partners: {
            title: 'Con el Respaldo de Instituciones Canadienses Líderes'
        },
        testimonials: {
            badge: 'Casos de Éxito',
            title: 'Lo que dicen nuestros estudiantes',
            subtitle: 'Descubre cómo hemos ayudado a miles de estudiantes internacionales y profesionales a lograr su sueño canadiense.',
            student1: {
                role: 'Estudiante Universitaria',
                text: 'El equipo de Experience Canada hizo que mi proceso de postulación a la universidad fuera increíblemente sencillo. Manejaron mi permiso de estudio sin problemas.'
            },
            student2: {
                role: 'Trabajador Calificado (PR)',
                text: 'Trabajar con sus consultores RCIC fue la mejor decisión. En 6 meses recibí mi invitación (ITA) a través de Express Entry y ahora tengo Residencia Permanente.'
            },
            student3: {
                role: 'Graduada de College',
                text: 'Desde elegir el diplomado correcto hasta obtener mi permiso de trabajo de posgrado (PGWP), su guía ha sido la base de mi éxito en Canadá.'
            }
        },
        faqs: {
            title: 'Preguntas Frecuentes',
            subtitle: 'Encuentra respuestas rápidas a las dudas comunes sobre el estudio y la inmigración en Canadá.',
            q1: {
                q: '¿Necesito saber inglés o francés para estudiar en Canadá?',
                a: 'Sí, la mayoría de instituciones exigen un certificado oficial (IELTS, TOEFL, TEF). Sin embargo, ofrecemos vías de acceso (Pathway) que te permiten estudiar primero el idioma y entrar al college sin presentar la prueba oficial.'
            },
            q2: {
                q: '¿Puedo trabajar mientras estudio?',
                a: '¡Sí! La mayoría de estudiantes de programas académicos o vocacionales en instituciones designadas (DLI) pueden trabajar hasta 20 horas semanales durante clases y tiempo completo en vacaciones.'
            },
            q3: {
                q: '¿Qué es el Permiso de Trabajo de Posgrado (PGWP)?',
                a: 'El PGWP es un permiso abierto que permite a los graduados de instituciones elegibles adquirir valiosa experiencia laboral canadiense, lo cual es fundamental para solicitar la Residencia Permanente.'
            },
            q4: {
                q: '¿Están certificados sus consultores de inmigración?',
                a: 'Absolutamente. Todos los consejos y representaciones de aplicaciones son manejados estrictamente por nuestra red de Consultores de Inmigración Reglamentados de Canadá (RCIC), quienes están registrados y acreditados.'
            }
        },
        cta: {
            title: '¿Listo para Iniciar tu Sueño?',
            subtitle: 'Reserva tu cita para una asesoría detallada y da el primer paso hacia tu vida en Canadá con Experience Canada.',
            button: 'Solicitar Asesoría'
        },
        footer: {
            brand: 'Experience ',
            accent: 'Canada',
            desc: 'Tu compañero confiable para hacer realidad tu sueño canadiense. Guía experta para estudios, trabajo e inmigración a Canadá.',
            links: 'Enlaces Rápidos',
            contact: 'Contacto',
            rights: 'Todos los derechos reservados.'
        },
        meta: {
            title_home: 'Estudiar e Inmigrar a Canadá',
            title_study: 'Estudiar en Canadá - ExperienceCanada',
            title_immigrate: 'Inmigrar a Canadá - ExperienceCanada',
            title_about: 'Nosotros - ExperienceCanada',
            title_contact: 'Contáctanos - ExperienceCanada'
        },
        auth: {
            login: 'Entrar',
            email: 'Correo Electrónico',
            password: 'Contraseña',
            remember_me: 'Recordarme',
            forgot_password: '¿Olvidaste tu contraseña?',
            register: 'Registro',
            name: 'Nombre',
            confirm_password: 'Confirmar Contraseña',
            already_registered: '¿Ya estás registrado?',
            forgot_password_title: 'Recuperar Contraseña',
            forgot_password_desc: '¿Olvidaste tu contraseña? No hay problema. Solo indícanos tu dirección de correo electrónico y te enviaremos un enlace para restablecerla.',
            email_password_reset_link: 'Enviar enlace de recuperación',
            reset_password: 'Restablecer Contraseña',
            confirm_password_title: 'Confirmar Contraseña',
            confirm_password_desc: 'Esta es una zona segura de la aplicación. Por favor, confirma tu contraseña antes de continuar.',
            confirm: 'Confirmar',
            verify_email_title: 'Verificación de Correo',
            verify_email_desc: '¡Gracias por registrarte! Antes de comenzar, ¿podrías verificar tu dirección de correo electrónico haciendo clic en el enlace que te acabamos de enviar? Si no recibiste el correo, te enviaremos otro con gusto.',
            verify_email_success: 'Se ha enviado un nuevo enlace de verificación a la dirección de correo electrónico que proporcionaste durante el registro.',
            resend_verification_email: 'Reenviar correo de verificación',
            log_out: 'Cerrar Sesión'
        }
    },
    fr: {
        nav: {
            home: 'Accueil',
            study: 'Étudier au Canada',
            immigrate: 'Immigrer',
            about: 'À Propos',
            contact: 'Contactez-nous',
            book_consultation: 'Demander une Consultation',
            language: 'Langue',
            login: 'Connexion',
            register: 'S\'inscrire',
            dashboard: 'Tableau de bord'
        },
        hero: {
            badge: 'Votre chemin de confiance vers le Canada',
            title1: 'Construisez votre avenir au ',
            canada: 'Canada',
            desc1: "Nous vous guidons à chaque étape pour réaliser votre rêve d'étudier, de travailler et de vivre au Canada. Nous rendons le processus simple et réussi.",
            button_start: "Commencer l'Évaluation",
            button_view: 'Voir les Programmes',
            floating1_title: 'Conseils de Confiance',
            floating1_subtitle: 'Pour votre projet canadien',
            floating2_title: 'Soutien Professionnel',
            floating2_subtitle: 'Commencez votre carrière',
            floating3_title: 'Évaluation Experte',
            floating3_subtitle: 'Trouvez votre voie',
            tag2: 'Étudier, Travailler & Vivre',
            title2: 'Libérez votre potentiel au ',
            desc2: "Soutien complet pour les admissions universitaires, les cours de langues et les programmes qui vous permettent d'acquérir une expérience professionnelle.",
            tag3: 'Experts en Immigration',
            title3: 'Commencez votre nouvelle vie au ',
            desc3: "Démarches sécurisées effectuées par des consultants en immigration certifiés. Permis d'études, de travail et résidence permanente."
        },
        study: {
            hero: {
                title: 'Atteignez l\'excellence académique au ',
                canada: 'Canada',
                desc: 'Accédez à un enseignement de classe mondiale dans les meilleures institutions canadiennes. Des programmes linguistiques aux diplômes universitaires, nous vous guidons tout au long du processus d\'admission et de permis d\'études.',
                button: 'Trouvez Votre Programme'
            },
            programs: {
                title: 'Programmes Éducatifs',
                subtitle: 'Découvrez le parcours éducatif parfait adapté à vos objectifs professionnels et à votre niveau académique actuel.',
                language: {
                    title: 'Cours de Langues',
                    desc: 'Plongez dans des programmes d\'anglais ou de français conçus pour répondre aux exigences d\'entrée à l\'université ou améliorer vos perspectives professionnelles.'
                },
                highschool: {
                    title: 'Collège et Lycée',
                    desc: 'Inscrivez vos enfants dans les meilleures écoles publiques ou privées à travers le Canada avec des services complets de garde et de soutien.'
                },
                college: {
                    title: 'Diplômes Collégiaux',
                    desc: 'Acquérez des compétences pratiques axées sur l\'industrie grâce à des programmes de diplôme de 1 à 3 ans alignés sur les besoins du marché du travail.'
                },
                university: {
                    title: 'Diplômes Universitaires',
                    desc: 'Poursuivez des programmes de baccalauréat, de maîtrise ou de doctorat dans des universités mondialement reconnues. Nous gérons les procédures de candidature complexes.'
                }
            }
        },
        immigrate: {
            hero: {
                title: 'Votre voie permanente vers le ',
                canada: 'Canada',
                desc: 'Naviguez dans le système d\'immigration canadien complexe en toute confiance. Nos consultants CRIC certifiés fournissent des conseils stratégiques et un traitement impeccable des demandes.',
                button: 'Évaluer l\'admissibilité'
            },
            services: {
                title: 'Services d\'Immigration',
                subtitle: 'Assurez votre avenir au Canada grâce à des stratégies d\'immigration personnalisées conçues pour les professionnels, les travailleurs de métier et les familles.',
                express: {
                    title: 'Entrée Express',
                    desc: 'Accélérez votre résidence permanente grâce aux programmes des travailleurs qualifiés (fédéral), de l\'expérience canadienne ou des travailleurs de métiers spécialisés (fédéral).'
                },
                work: {
                    title: 'Permis de Travail',
                    desc: 'Assistance avec les offres d\'emploi appuyées par une EIMT, les permis de travail postdiplôme (PTPD) et les permis de travail ouverts pour les conjoints.'
                },
                family: {
                    title: 'Parrainage Familial',
                    desc: 'Retrouvez vos proches. Nous traitons les demandes de parrainage pour les conjoints, les conjoints de fait, les parents et les enfants.'
                },
                pnp: {
                    title: 'Candidats des Provinces (PCP)',
                    desc: 'Explorez des voies alternatives vers la résidence grâce à des programmes spécifiques aux provinces, adaptés aux besoins économiques régionaux.'
                }
            }
        },
        about: {
            hero: {
                title: 'Dédiés à votre succès Canadien',
                desc: 'Depuis 2017, ExperienceCanada a été le pont reliant des personnes ambitieuses à des opportunités infinies au Canada. Construit par des immigrants, pour des immigrants.'
            },
            values: {
                title: 'Nos Valeurs Fondamentales',
                subtitle: 'Les principes qui guident notre travail et assurent le succès de nos clients.',
                experience: {
                    title: 'Expérience Éprouvée',
                    desc: 'Plus de 7 ans d\'expérience spécialisée dans le traitement de dossiers académiques et d\'immigration complexes.'
                },
                trust: {
                    title: 'Confiance Certifiée',
                    desc: 'Tous les conseils en immigration sont fournis par des consultants CRIC agréés et en règle.'
                },
                care: {
                    title: 'Soin Personnalisé',
                    desc: 'Nous traitons chaque demande comme si c\'était la nôtre, en offrant un soutien sur mesure et compatissant.'
                },
                success: {
                    title: 'Engagement envers le Succès',
                    desc: 'Un historique impeccable fondé sur la transparence, une préparation rigoureuse et le dévouement.'
                }
            }
        },
        contact: {
            hero: {
                title: 'Parlons de votre Avenir',
                desc: 'Prêt à faire le premier pas ? Contactez notre équipe d\'experts à Montréal pour planifier votre consultation initiale.'
            },
            info: {
                title: 'Prendre Contact',
                office: 'Bureau Principal',
                phone: 'Numéro de Contact',
                email: 'Adresse E-mail',
                hours: 'Heures d\'Ouverture',
                hours_desc: 'Lundi - Vendredi : 9h00 - 17h00 EST'
            },
            form: {
                title: 'Envoyez-nous un message',
                name: 'Nom Complet',
                email: 'Adresse E-mail',
                phone: 'Numéro de Téléphone',
                interest: 'Intérêt Principal',
                interest_other: 'Autre Demande',
                message: 'Comment pouvons-nous vous aider ?',
                submit: 'Envoyer le Message',
                success: 'Merci ! Votre message a été envoyé avec succès. Nous vous contacterons sous peu.'
            }
        },
        stats: {
            years: "Années d'Expérience",
            cities: 'Villes Cibles',
            satisfaction: 'Satisfaction Client',
            founded: 'Fondée à Montréal',
        },
        services: {
            title: 'Nos Services',
            subtitle: "Des solutions complètes conçues pour faire de votre rêve canadien une réalité. De votre école jusqu'à votre arrivée à l'aéroport.",
            study: {
                title: 'Conseil Éducatif',
                desc: "Accédez aux meilleures écoles privées et publiques (Collège et Formation professionnelle). Nous vous guidons dans votre inscription scolaire et le processus d'admission."
            },
            work: {
                title: 'Étudier et Travailler',
                desc: "Programmes conçus pour étudier tout en acquérant une expérience professionnelle au Canada. Ouvrez les portes du marché du travail international."
            },
            pr: {
                title: 'Logistique et Démarches',
                desc: "Nous vous accompagnons avec des services d'hébergement, d'accueil à l'aéroport, d'assurance médicale et de garde pour les mineurs."
            }
        },
        why_us: {
            title: 'Pourquoi choisir Experience Canada ?',
            subtitle: 'Nous ne traitons pas seulement des candidatures ; nous construisons des relations. Composé de professionnels ayant une expérience personnelle en immigration depuis 2017.',
            bullet1: 'Des conseils à tout moment comme si vous faisiez partie de notre famille',
            bullet2: "Procédures d'immigration effectuées par des consultants certifiés",
            bullet3: "Gestion complète : de l'inscription à votre hébergement",
            bullet4: 'Partenariats avec les meilleures institutions au Canada',
            button: 'Rencontrez Notre Équipe'
        },
        partners: {
            title: 'Soutenu par de Grandes Institutions Canadiennes'
        },
        testimonials: {
            badge: 'Histoires de Réussite',
            title: 'Ce que disent nos étudiants',
            subtitle: 'Découvrez comment nous avons aidé des milliers d\'étudiants et de professionnels à réaliser leur rêve canadien.',
            student1: {
                role: 'Étudiante Universitaire',
                text: 'L\'équipe de Experience Canada a rendu mon processus de demande d\'admission universitaire incroyablement simple. Ils ont géré mon permis d\'études sans faille.'
            },
            student2: {
                role: 'Travailleur Qualifié (RP)',
                text: 'Faire appel à leurs consultants CRIC a été la meilleure décision. En 6 mois, j\'ai reçu mon invitation et j\'ai maintenant la Résidence Permanente.'
            },
            student3: {
                role: 'Diplômée du Collège',
                text: 'Du choix du bon diplôme à l\'obtention de mon permis de travail postdiplôme (PTPD), leurs conseils ont été la base de ma réussite.'
            }
        },
        faqs: {
            title: 'Questions Fréquemment Posées',
            subtitle: 'Trouvez des réponses rapides aux questions courantes sur les études et l\'immigration au Canada.',
            q1: {
                q: 'Dois-je parler anglais ou français pour étudier au Canada ?',
                a: 'Oui, la plupart des institutions exigent une preuve de compétence linguistique (IELTS, TOEFL, TEF). Cependant, nous proposons des programmes "Pathway" qui vous permettent d\'étudier d\'abord la langue et d\'entrer au collège sans test officiel.'
            },
            q2: {
                q: 'Puis-je travailler pendant mes études ?',
                a: 'Oui ! La plupart des étudiants inscrits à un programme académique ou professionnel dans un EED sont autorisés à travailler jusqu\'à 20 heures par semaine pendant les cours et à temps plein pendant les vacances.'
            },
            q3: {
                q: 'Qu\'est-ce que le Permis de Travail Postdiplôme (PTPD) ?',
                a: 'Le PTPD permet aux diplômés d\'établissements d\'enseignement désignés (EED) d\'obtenir un permis de travail ouvert pour acquérir une expérience de travail canadienne, essentielle pour la Résidence Permanente.'
            },
            q4: {
                q: 'Vos consultants en immigration sont-ils certifiés ?',
                a: 'Absolument. Tous les conseils en immigration et la représentation des demandes sont strictement gérés par notre réseau de Consultants Réglementés en Immigration Canadienne (CRIC) en règle.'
            }
        },
        cta: {
            title: 'Prêt à Commencer Votre Rêve ?',
            subtitle: 'Réservez votre consultation pour des conseils détaillés et faites le premier pas vers votre vie au Canada avec Experience Canada.',
            button: 'Demander une Consultation'
        },
        footer: {
            brand: 'Experience ',
            accent: 'Canada',
            desc: "Votre partenaire de confiance pour faire de votre rêve canadien une réalité. Des conseils d'experts pour les études, le travail et l'immigration au Canada.",
            links: 'Liens Rapides',
            contact: 'Contact',
            rights: 'Tous droits réservés.'
        },
        meta: {
            title_home: 'Étudier et Immigrer au Canada',
            title_study: 'Étudier au Canada - ExperienceCanada',
            title_immigrate: 'Immigrer au Canada - ExperienceCanada',
            title_about: 'À Propos - ExperienceCanada',
            title_contact: 'Contactez-nous - ExperienceCanada'
        },
        auth: {
            login: 'Connexion',
            email: 'Adresse e-mail',
            password: 'Mot de passe',
            remember_me: 'Se souvenir de moi',
            forgot_password: 'Mot de passe oublié ?',
            register: 'S\'inscrire',
            name: 'Nom',
            confirm_password: 'Confirmer le mot de passe',
            already_registered: 'Déjà inscrit ?',
            forgot_password_title: 'Mot de passe oublié',
            forgot_password_desc: 'Mot de passe oublié ? Pas de problème. Indiquez-nous simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation de mot de passe qui vous permettra d\'en choisir un nouveau.',
            email_password_reset_link: 'Envoyer le lien de réinitialisation',
            reset_password: 'Réinitialiser le mot de passe',
            confirm_password_title: 'Confirmer le mot de passe',
            confirm_password_desc: 'Il s\'agit d\'une zone sécurisée de l\'application. Veuillez confirmer votre mot de passe avant de continuer.',
            confirm: 'Confirmer',
            verify_email_title: 'Vérification de l\'e-mail',
            verify_email_desc: 'Merci pour votre inscription ! Avant de commencer, pourriez-vous vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer ? Si vous n\'avez pas reçu l\'e-mail, nous vous en enverrons un autre avec plaisir.',
            verify_email_success: 'Un nouveau lien de vérification a été envoyé à l\'adresse e-mail que vous avez fournie lors de l\'inscription.',
            resend_verification_email: 'Renvoyer l\'e-mail de vérification',
            log_out: 'Déconnexion'
        }
    }
};

const savedLocale = localStorage.getItem('locale') || 'es';

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: savedLocale, // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;
