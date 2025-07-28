import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MetaTagsService } from './services/meta-tags.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'CD-Futuro13';

  constructor(
    private metaTagsService: MetaTagsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Configurar meta tags por defecto
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Club Deportivo de la Comuna 13',
      description:
        'CD Futuro 13 es un club deportivo comprometido con la formación de jóvenes íntegros en la Comuna 13 de Medellín.',
      keywords:
        'CD Futuro 13, deporte, formación, jóvenes, comuna 13, fútbol, Medellín',
      url: 'https://corporaciondeportivafuturo13.com/',
      type: 'website',
    });

    // Solo ejecutar en el navegador (no en el servidor)
    if (isPlatformBrowser(this.platformId)) {
      this.handleRedirectFromSPA();
      this.setupScrollToTop();
    }
  }

  /**
   * Maneja las redirecciones desde el archivo 404.html
   * Busca el parámetro 'p' en la URL y navega a esa ruta
   */
  private handleRedirectFromSPA(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('p');

    if (redirectPath) {
      console.log('🔄 Redirigiendo desde 404.html a:', redirectPath);

      try {
        // Limpiar la URL del parámetro y navegar
        const cleanUrl = window.location.origin + window.location.pathname;
        window.history.replaceState({}, '', cleanUrl);

        // Navegar a la ruta decodificada
        const decodedPath = decodeURIComponent(redirectPath);
        this.router.navigateByUrl(decodedPath);

        console.log('✅ Navegación exitosa a:', decodedPath);
      } catch (error) {
        console.error('❌ Error en la navegación:', error);
        // En caso de error, ir al home
        this.router.navigateByUrl('/home');
      }
    }
  }

  /**
   * Configura el scroll automático al cambiar de página
   */
  private setupScrollToTop(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        console.log('📍 Navegación completada a:', event.url);

        // Scroll suave al top
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
  }
}
