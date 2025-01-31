import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Meta, Title } from '@angular/platform-browser';

interface Administrator {
  name: string;
  age: number;
  description?: string;
  position?: string;
  imageUrl: string;
}

@Component({
  selector: 'app-administrators',
  imports: [CommonModule, ButtonComponent, MatIconModule],
  templateUrl: './administrators.component.html',
  styleUrl: './administrators.component.scss'
})
export class AdministratorsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  administrators: Administrator[] = [
    {
      name: 'Carlos Espinoza',
      age: 33,
      description: 'Carlos es el director del club, encargado de la planificación y supervisión de todas las actividades.',
      imageUrl: 'assets/img_carousel/image_1.jpg',
      position: 'Director'
    },
    {
      name: 'Camila Perez',
      age: 35,
      description: 'Camila es la subdirectora, responsable de apoyar al director y coordinar eventos especiales.',
      imageUrl: 'assets/img_carousel/image_2.jpg',
      position: 'Subdirector'
    },
    {
      name: 'Jhonfer Rodriguez',
      age: 40,
      description: 'Jhonfer es el administrador principal, encargado de la gestión diaria y la administración del club.',
      imageUrl: 'assets/img_carousel/image_3.jpg',
      position: 'Administrador'
    },
    {
      name: 'Sofía Velez',
      age: 30,
      description: 'Sofía es administradora, encargada de la logística y el soporte administrativo del club.',
      imageUrl: 'assets/img_carousel/image_4.jpg',
      position: 'Administrador'
    }
  ]

  currentAdministratorIndex = 0;
  currentCardIndex = 0;


  get currentAdministrator(): Administrator {
    return this.administrators[this.currentAdministratorIndex];
  }

  updateCurrentAdministrator(index: number): void {
    this.currentAdministratorIndex = index;
  }

  buttonConfig: ButtonConfig = {
      label: 'Ver info del Administrador',
      action: () => {
        this.openModal(this.currentAdministratorIndex);
      },
      type: 'button',
      class: 'btn-primary',
      fontSize: '1rem',
    };

    openModal(index: number): void {
      this.updateCurrentAdministrator(index);
      const modal = document.getElementById('modal');

      if (modal) {
        modal.style.display = 'block';
      }
    }


  closeModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.administrators.length;
  }

  prevCard(): void {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.administrators.length) % this.administrators.length;
  }

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Administradores');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Un equipo de administradores que se encargan de la gestión y organización de CD Futuro 13.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, deporte, administración, jovenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
