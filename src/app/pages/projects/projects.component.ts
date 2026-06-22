import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

export interface Project {
  nameKey: string;
  typeKey: string;
  descKey: string;
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  emoji: string;
  color: string;
  screenshot?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  lang = inject(LanguageService);

  @ViewChild('track') track!: ElementRef<HTMLDivElement>;

  projects: Project[] = [
    // ── Desplegados ──────────────────────────────────────────────────────────
    {
      nameKey: 'The Simpsons App',
      typeKey: 'project.fullstack',
      descKey: 'proj.simpsons.desc',
      stack: ['Angular 18', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Render'],
      githubUrl: 'https://github.com/D4nf313/simpson-App',
      liveUrl: 'https://simpson-frontend.onrender.com/characters',
      emoji: '🍩',
      color: '#f59e0b',
      screenshot: 'assets/projects/simpson-app.png',
    },
    {
      nameKey: 'Project Manager',
      typeKey: 'project.fullstack',
      descKey: 'proj.pm.desc',
      stack: ['Angular 18', 'Spring Boot 3', 'MySQL 8', 'Docker', 'Railway'],
      githubUrl: 'https://github.com/D4nf313/project-manager',
      liveUrl: 'https://project-manager-production-db39.up.railway.app/login',
      emoji: '📋',
      color: '#7c3aed',
      screenshot: 'assets/projects/project-manager.png'
    },
    {
      nameKey: 'InterCommerce',
      typeKey: 'project.spa',
      descKey: 'proj.intercommerce.desc',
      stack: ['React 19', 'TypeScript', 'TanStack Query', 'Zustand', 'Vercel'],
      githubUrl: 'https://github.com/D4nf313/intercommerce',
      liveUrl: 'https://intercommerce-g1lo.vercel.app/',
      emoji: '🛒',
      color: '#0ea5e9',
      screenshot: 'assets/projects/intercommerce.png'
    },
    // ── Solo repo ─────────────────────────────────────────────────────────────
    {
      nameKey: 'Olimpia Sports',
      typeKey: 'project.webapp',
      descKey: 'proj.olimpia.desc',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/D4nf313/Hackaton-tienda-deportiva-OlimpiaSport',
      emoji: '👟',
      color: '#7c3aed',
      screenshot: 'assets/projects/olimpia-sports.png'
    },
    {
      nameKey: 'Rick and Morty APP',
      typeKey: 'project.api',
      descKey: 'proj.rickmorty.desc',
      stack: ['Angular', 'REST API', 'reCAPTCHA', 'Ng Zorro', 'RxJS'],
      githubUrl: 'https://github.com/D4nf313/heroes-app',
      emoji: '🚀',
      color: '#06b6d4',
      screenshot: 'assets/projects/rick-morty.png'
    },
    {
      nameKey: 'Viajes App',
      typeKey: 'project.webapp',
      descKey: 'proj.viajes.desc',
      stack: ['Angular', 'Bootstrap', 'Leaflet', 'RxJS', 'Socket.io'],
      githubUrl: 'https://github.com/D4nf313/viajesApp',
      emoji: '🗺️',
      color: '#ec4899',
      screenshot: 'assets/projects/viajes-app.png'


    },
  ];

  scroll(direction: 'left' | 'right'): void {
    const el = this.track.nativeElement;
    // desplaza exactamente el ancho de una card (300px) + gap (20px)
    const amount = 400;
    el.scrollBy({ left: direction === 'right' ? amount : -amount, behavior: 'smooth' });
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}