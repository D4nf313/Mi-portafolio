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
    },
    {
      name: 'Tierra Viva',
      type: 'E-commerce Agro',
      description:
        'E-commerce enfocado en productos agrícolas, conectando productores locales con compradores finales.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'Spring Boot', 'MySQL'],
    },
    {
      name: 'NASA Satellite Viewer',
      type: 'Aplicación Web',
      description:
        'Aplicación que consume la API de la NASA para mostrar imágenes satelitales recientes. Permite al usuario guardar sus imágenes favoritas en LocalStorage para consultarlas después.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'NASA API'],
    },
    {
      name: 'Pokémon Finder',
      type: 'Aplicación Web',
      description:
        'Aplicación que consume la API de Pokémon (PokeAPI) para buscar y mostrar información de cualquier Pokémon. Permite guardar Pokémon favoritos en LocalStorage para consultarlos después.',
      stack: ['JavaScript Vanilla', 'Bootstrap', 'LocalStorage', 'PokeAPI'],
    },

    {
      name: 'Info Colombia API',
      type: 'Consumo de API',
      description:
        'Aplicación que consume una API pública para mostrar información relevante de Colombia como departamentos, municipios y datos generales.',
      stack: ['Angular', 'REST API', 'RxJS'],
    },
    {
      name: 'Perrito App',
      type: 'Aplicación Web',
      description:
        'Aplicación para visualizar información de perritos consumiendo una API pública, con filtros y vista detallada.',
      stack: ['Angular', 'API REST', 'CSS'],
    },
  ];
}
