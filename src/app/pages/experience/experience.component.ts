import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  
   experiences = [
    {
      company: 'Broers',
      date: '06/2025 – Presente',
      role: 'Desarrollador Full Stack',
      location: 'Medellín',
      details: [
        'Desarrollé funcionalidades frontend y backend para el sistema de hechos económicos de la UGPP, reduciendo tiempos de procesamiento y mejorando la experiencia del usuario en un 20%.',
        'Lideré equipos de desarrollo, logrando un cumplimiento del 95% en tiempos y reduciendo retrabajos en un 30%.',
        'Gestioné reuniones con el cliente para definir requerimientos, disminuyendo cambios posteriores en un 25%.',
        'Optimizé y refactoricé la versión 2.0 del sistema, mejorando rendimiento y estabilidad en un 40%.'
      ]
    },
    {
      company: 'Mic System',
      date: '06/2023 – 11/2024',
      role: 'Desarrollador Frontend',
      location: 'Bogotá',
      details: [
        'Desarrollé funcionalidades en Publindex y MinOferta, integrando Mapbox y ArcGIS, alcanzando una satisfacción del cliente del 90%.',
        'Diseñé la primera versión de CvLAC con formularios dinámicos, filtros avanzados y multilenguaje, aumentando la usabilidad en un 60%.',
        'Documenté código y realicé pruebas unitarias con Jasmine y Karma, reduciendo incidencias post-producción en un 45%.'
      ]
    },
    {
      company: 'Agencia Nacional Digital',
      date: '01/2022 – 10/2022',
      role: 'Desarrollador Frontend Jr',
      location: 'Bogotá',
      details: [
        'Desarrollé componentes e historias de usuario para SIGMI y otros proyectos, acelerando el backlog en un 20%.',
        'Implementé mantenimiento, documentación y pruebas funcionales, reduciendo errores recurrentes en un 25%.',
        'Trabajé bajo metodología Scrum, cumpliendo el 100% de los entregables asignados.'
      ]
    }
  ];
}
