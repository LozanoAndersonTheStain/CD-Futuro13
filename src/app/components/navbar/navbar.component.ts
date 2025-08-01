import { Component, OnInit, HostListener, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  isMobile = false;
  private submenuTimeout: any;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.checkScreenSize();

    // Cerrar menú móvil cuando cambie la ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.menuTrigger) {
        this.menuTrigger.closeMenu();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 768;
    } else {
      // En el servidor, asumir que no es móvil por defecto
      this.isMobile = false;
    }
  }

  closeMenu() {
    if (this.menuTrigger) {
      this.menuTrigger.closeMenu();
    }
  }

  // Métodos para manejar el delay del submenu
  onSubmenuMouseEnter(event: Event) {
    if (this.submenuTimeout) {
      clearTimeout(this.submenuTimeout);
      this.submenuTimeout = null;
    }
  }

  onSubmenuMouseLeave(event: Event) {
    this.submenuTimeout = setTimeout(() => {
      // El submenu se ocultará después de 500ms
      const submenu = event.target as HTMLElement;
      if (submenu) {
        submenu.style.opacity = '0';
        submenu.style.visibility = 'hidden';
        submenu.style.pointerEvents = 'none';
      }
    }, 500);
  }

  onMenuItemMouseEnter(event: Event) {
    if (this.submenuTimeout) {
      clearTimeout(this.submenuTimeout);
      this.submenuTimeout = null;
    }
  }
}
