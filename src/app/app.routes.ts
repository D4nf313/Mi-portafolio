import { Routes } from '@angular/router';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
  {
    path: 'portafolio-daniel-suarez-full-stack',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component')
            .then(m => m.AboutComponent)
      },
        {
        path: 'experience',
        loadComponent: () =>
          import('./pages/experience/experience.component')
            .then(m => m.ExperienceComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects/projects.component')
            .then(m => m.ProjectsComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component')
            .then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'portafolio-daniel-suarez-full-stack',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'portafolio-daniel-suarez-full-stack'
  }
];

