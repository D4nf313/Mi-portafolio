import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  lang = inject(LanguageService);

  projects = [
    {
      nameKey: 'Olimpia Sports',
      typeKey: 'project.webapp',
      descKey: 'proj.olimpia.desc',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/D4nf313/Hackaton-tienda-deportiva-OlimpiaSport',
      emoji: '👟',
      color: '#7c3aed',
    },
    {
      nameKey: 'Tierra Viva',
      typeKey: 'project.ecommerce',
      descKey: 'proj.tierra.desc',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/TierraVivaa/tierra-viva-frontend',
      emoji: '🌱',
      color: '#059669',
    },
    {
      nameKey: 'NASA Satellite Viewer',
      typeKey: 'project.webapp',
      descKey: 'proj.nasa.desc',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'NASA API'],
      githubUrl: 'https://github.com/Boxwel/Lab-Api-Nasa',
      emoji: '🛰️',
      color: '#0284c7',
    },
    {
      nameKey: 'Pokémon Finder',
      typeKey: 'project.webapp',
      descKey: 'proj.pokemon.desc',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'PokeAPI'],
      githubUrl: 'https://github.com/D4nf313/web-search-pokemon',
      emoji: '⚡',
      color: '#d97706',
    },
    {
      nameKey: 'Rick and Morty APP',
      typeKey: 'project.api',
      descKey: 'proj.rickmorty.desc',
      stack: ['Angular', 'REST API', 'reCAPTCHA', 'Ng Zorro', 'RxJS'],
      githubUrl: 'https://github.com/D4nf313/heroes-app',
      emoji: '🚀',
      color: '#06b6d4',
    },
    {
      nameKey: 'Viajes App',
      typeKey: 'project.webapp',
      descKey: 'proj.viajes.desc',
      stack: ['Angular', 'Bootstrap', 'Leaflet', 'RxJS', 'Socket.io'],
      githubUrl: 'https://github.com/D4nf313/viajesApp',
      emoji: '🗺️',
      color: '#ec4899',
    },
  ];

  openGithub(url: string) {
    window.open(url, '_blank');
  }
}
