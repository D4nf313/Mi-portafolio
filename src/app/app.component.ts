import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { LanguageService } from './core/services/language.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portafolio-proyect';
  lang = inject(LanguageService);
  theme = inject(ThemeService);

  openWhatsapp() {
    window.open('https://wa.me/573112345678?text=Hola%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20contactarte.', '_blank');
  }
}
