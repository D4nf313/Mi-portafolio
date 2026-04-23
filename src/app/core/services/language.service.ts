import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // NAV
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contáctame',
    // HOME
    'home.subtitle': 'Full Stack Developer',
    'home.cta': 'Ver Proyectos',
    // ABOUT
    'about.title': 'Sobre Mí',
    'about.who': '¿Quién soy? 💬',
    'about.bio': 'Full Stack Developer con más de dos años de experiencia en el desarrollo de aplicaciones web usando Angular, Spring Boot y MySQL. He participado en proyectos de alto impacto para entidades gubernamentales, liderando entregas técnicas y optimizando funcionalidades para mejorar el rendimiento y la mantenibilidad. Trabajo bajo buenas prácticas de desarrollo, pruebas unitarias y patrones de arquitectura. Además, tengo conocimientos en Python aplicados a IA y análisis de datos. Me caracterizo por mi pensamiento analítico, trabajo en equipo y enfoque en construir soluciones eficientes y de calidad.',
    'about.techSkills': 'Habilidades técnicas',
    'about.softSkills': 'Habilidades blandas',
    'soft.responsibility': '▶ Responsabilidad',
    'soft.scrum': '▶ Scrum',
    'soft.teamwork': '▶ Trabajo en equipo',
    'soft.perseverance': '▶ Perseverancia',
    'soft.dedication': '▶ Dedicación',
    // EXPERIENCE
    'experience.title': 'Experiencia Laboral',
    // PROJECTS
    'projects.title': 'Proyectos',
    'projects.github': 'GitHub',
    // PROJECT TYPES
    'project.webapp': 'Aplicación Web',
    'project.ecommerce': 'E-commerce Agro',
    'project.api': 'Consumo de API',
    // PROJECT DESCRIPTIONS
    'proj.olimpia.desc': 'Plataforma de comercio electrónico para venta de tenis, con catálogo de productos, carrito de compras y gestión de pedidos.',
    'proj.tierra.desc': 'E-commerce enfocado en productos agrícolas, conectando productores locales con compradores finales.',
    'proj.nasa.desc': 'Aplicación que consume la API de la NASA para mostrar imágenes satelitales recientes. Permite al usuario guardar sus imágenes favoritas en LocalStorage.',
    'proj.pokemon.desc': 'Aplicación que consume la API de Pokémon (PokeAPI) para buscar y mostrar información de cualquier Pokémon.',
    'proj.rickmorty.desc': 'Aplicación web desarrollada con Angular 19 con autenticación de usuario e integración de API de Rick and Morty.',
    'proj.viajes.desc': 'Plataforma web que permite buscar ubicaciones de destinos de viaje y visualizarlos en un mapa interactivo.',
    // CONTACT
    'contact.title': 'Contáctame',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.nameRequired': 'El nombre es obligatorio',
    'contact.emailRequired': 'El email es obligatorio',
    'contact.emailInvalid': 'Ingresa un email válido',
    'contact.messageRequired': 'El mensaje es obligatorio',
    // FOOTER
    'footer.contact': 'Contacto',
    'footer.portfolio': 'Portafolio',
    'footer.download': 'Descargar CV',
    'footer.rights': 'Todos los derechos reservados.',
    // WHATSAPP
    'whatsapp.label': 'Chat conmigo',
  },
  en: {
    // NAV
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    // HOME
    'home.subtitle': 'Full Stack Developer',
    'home.cta': 'View Projects',
    // ABOUT
    'about.title': 'About Me',
    'about.who': 'Who am I? 💬',
    'about.bio': 'Full Stack Developer with over two years of experience building web applications using Angular, Spring Boot, and MySQL. I have contributed to high-impact projects for government entities, leading technical deliveries and optimizing features to improve performance and maintainability. I follow best development practices, write unit tests, and apply architectural patterns.',
    'about.techSkills': 'Technical Skills',
    'about.softSkills': 'Soft Skills',
    'soft.responsibility': '▶ Responsibility',
    'soft.scrum': '▶ Scrum',
    'soft.teamwork': '▶ Teamwork',
    'soft.perseverance': '▶ Perseverance',
    'soft.dedication': '▶ Dedication',
    // EXPERIENCE
    'experience.title': 'Work Experience',
    // PROJECTS
    'projects.title': 'Projects',
    'projects.github': 'GitHub',
    // PROJECT TYPES
    'project.webapp': 'Web Application',
    'project.ecommerce': 'Agro E-commerce',
    'project.api': 'API Integration',
    // PROJECT DESCRIPTIONS
    'proj.olimpia.desc': 'E-commerce platform for sports shoe sales with product catalog, shopping cart, and order management.',
    'proj.tierra.desc': 'E-commerce focused on agricultural products, connecting local producers with end buyers.',
    'proj.nasa.desc': 'App consuming NASA\'s API to display recent satellite imagery.',
    'proj.pokemon.desc': 'App consuming the PokéAPI to search and display info about any Pokémon.',
    'proj.rickmorty.desc': 'Angular 19 web app with user authentication and Rick and Morty API integration.',
    'proj.viajes.desc': 'Web platform to search travel destination locations and view them on an interactive map.',
    // CONTACT
    'contact.title': 'Contact Me',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.nameRequired': 'Name is required',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Enter a valid email',
    'contact.messageRequired': 'Message is required',
    // FOOTER
    'footer.contact': 'Contact',
    'footer.portfolio': 'Portfolio',
    'footer.download': 'Download CV',
    'footer.rights': 'All rights reserved.',
    // WHATSAPP
    'whatsapp.label': 'Chat with me',
  }
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private _lang = signal<Lang>('es');
  lang = this._lang.asReadonly();

  constructor() {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'es') {
      this._lang.set(saved);
    }
  }

  setLang(l: Lang) {
    this._lang.set(l);
    localStorage.setItem('lang', l);
  }

  t(key: string): string {
    return translations[this._lang()][key] ?? key;
  }
}
