import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Administrator } from '../../../interfaces/administrator.interface';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-administrators',
  imports: [CommonModule, ButtonComponent, MatIconModule],
  templateUrl: './administrators.component.html',
  styleUrl: './administrators.component.scss',
})
export class AdministratorsComponent implements OnInit {
  constructor(private metaTagsService: MetaTagsService) {}

  administrators: Administrator[] = [
    {
      name: 'Cristino Álvarez Moreno ',
      description:
        'Como Presidente del Club, Cristino lidera la planificación y supervisión de todas las actividades. Su visión estratégica y dedicación aseguran el crecimiento y éxito del club, guiando tanto a jugadores como a staff hacia objetivos comunes con excelencia y compromiso.',
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056246/Cristino_%C3%81lvarez_Moreno_Administraci%C3%B3n.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056245/Cristino_%C3%81lvarez_Moreno_Administraci%C3%B3n_Pie.jpg',
      ],
      position: 'Presidente del Club',
    },
    {
      name: 'Leisy Julie Parra Palacios',
      description:
        'En su rol de Gestora Social, Leisy se encarga de fortalecer los lazos entre el club y la comunidad. Con creatividad y empatía, organiza eventos especiales y promueve iniciativas que fomentan la inclusión y el desarrollo social a través del deporte.',
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056246/Leisy_Julie_Parra_Palacios_Administraci%C3%B3n.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056246/Leisy_Julie_Parra_Palacios_Administraci%C3%B3n_Pie.jpg',
      ],
      position: 'Gestora Social',
    },
    {
      name: 'Maria Camila Vélez Vélez',
      description:
        'Como Secretaria, Maria Camila es el pilar administrativo del club. Su organización y atención al detalle garantizan que las operaciones diarias fluyan sin problemas, apoyando tanto a directivos como a miembros del equipo con eficiencia y profesionalismo.',
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056246/Maria_Camila_V%C3%A9lez_V%C3%A9lez_Administraci%C3%B3n.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056246/Maria_Camila_V%C3%A9lez_V%C3%A9lez_Administraci%C3%B3n_Pie.jpg',
      ],
      position: 'Secretaria',
    },
    {
      name: 'Jhon Fernando Restrepo Garcia',
      description:
        'En el cargo de Jefe de Prensa, Jhon Fernando maneja la comunicación y la imagen del club. Con habilidades estratégicas y creatividad, asegura que las noticias, logros y eventos del club sean difundidos de manera efectiva, fortaleciendo su presencia en medios y redes sociales.',
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056247/Jhon_Fernando_Restrepo_Garcia_Administraci%C3%B3n.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056250/Jhon_Fernando_Restrepo_Garcia_Administraci%C3%B3n_Pie.jpg',
      ],
      position: 'Jefe de Prensa',
    },
  ];

  currentAdministratorIndex = 0;
  currentCardIndex = 0;

  get currentAdministrator(): Administrator {
    return this.administrators[this.currentAdministratorIndex];
  }

  currentAdministratorFirstImage(): string {
    return this.administrators[this.currentAdministratorIndex].imageUrl[0];
  }

  currentAdministratorSecondImage(): string {
    return this.administrators[this.currentAdministratorIndex].imageUrl[1];
  }

  updateCurrentAdministrator(index: number): void {
    this.currentAdministratorIndex = index;
  }

  buttonConfig: ButtonConfig = {
    label: 'Ver info del Administrador',
    action: () => {
      // Sincronizar el índice actual con la tarjeta activa
      this.currentAdministratorIndex = this.currentCardIndex;
      this.openModal();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
  };

  openModal(): void {
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
    this.currentCardIndex =
      (this.currentCardIndex + 1) % this.administrators.length;
    // Sincronizar también el administrador actual
    this.currentAdministratorIndex = this.currentCardIndex;
  }

  prevCard(): void {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.administrators.length) %
      this.administrators.length;
    // Sincronizar también el administrador actual
    this.currentAdministratorIndex = this.currentCardIndex;
  }

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Administradores',
      description:
        'Un equipo de administradores que se encargan de la gestión y organización de CD Futuro 13.',
      keywords:
        'CD Futuro 13, deporte, administración, jovenes, comuna 13, gestión',
      url: 'https://corporaciondeportivafuturo13.com/team/administrators',
      type: 'website',
    });
  }
}
