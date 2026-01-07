import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Olimpia Sports',
      type: 'Aplicación Web',
      description:
        'Plataforma de comercio electrónico para venta de tenis, con catálogo de productos, carrito de compras y gestión de pedidos.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/D4nf313/Hackaton-tienda-deportiva-OlimpiaSport',
    },
    {
      name: 'Tierra Viva',
      type: 'E-commerce Agro',
      description:
        'E-commerce enfocado en productos agrícolas, conectando productores locales con compradores finales.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/TierraVivaa/tierra-viva-frontend',
    },
    {
      name: 'NASA Satellite Viewer',
      type: 'Aplicación Web',
      description:
        'Aplicación que consume la API de la NASA para mostrar imágenes satelitales recientes. Permite al usuario guardar sus imágenes favoritas en LocalStorage para consultarlas después.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'NASA API'],
      githubUrl: 'https://github.com/Boxwel/Lab-Api-Nasa',
    },
    {
      name: 'Pokémon Finder',
      type: 'Aplicación Web',
      description:
        'Aplicación que consume la API de Pokémon (PokeAPI) para buscar y mostrar información de cualquier Pokémon. Permite guardar Pokémon favoritos en LocalStorage para consultarlos después.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'PokeAPI'],
      githubUrl: 'https://github.com/D4nf313/web-search-pokemon',
    },

    {
      name: 'Rick and Morty APP',
      type: 'Consumo de API',
      description:
        'Es una aplicación web desarrollada con Angular 19, que utiliza tecnologías modernas y mejores prácticas para proporcionar una experiencia interactiva, con autenticación de usuario, integración de reCAPTCHA, y consumo de API externa (Rick and Morty API).',
      stack: ['Angular', 'REST API','reCAPTCHA', 'Ng Zorro','RxJS', 'SweetAlert2'],
      githubUrl: 'https://github.com/D4nf313/heroes-app',
    },
    {
      name: 'Viajes App',
      type: 'Aplicación Web',
      description:
        'Es una plataforma web que permite a los usuarios buscar ubicaciones exactas de sus destinos de viaje, teniendo un mapa donde pueden visualizar sus destinos, escogerlo y enviar la petición para que el equipo de trabajo pueda generar un plan de viaje..',
      stack: ['Angular', 'Bootstrap', 'Leaflet','RxJS','Socket.io-client'],
      githubUrl: 'https://github.com/D4nf313/viajesApp',
    },
  ];
  openGithub(url: string) {
    window.open(url, '_blank');
  }
}
