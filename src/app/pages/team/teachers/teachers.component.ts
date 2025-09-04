import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Teachers } from '../../../interfaces/teachers.interface';
import { MatIconModule } from '@angular/material/icon';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-teachers',
  imports: [CommonModule, ButtonComponent, MatIconModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss',
})
export class TeachersComponent implements OnInit {
  constructor(private metaTagsService: MetaTagsService) {}

  teachers: Teachers[] = [
    {
      name: 'Jhon Nelson Salazar Villa',
      description:
        'Especialista en categorías Sub4 a Sub7, Jhon Nelson enfoca su enseñanza en habilidades motoras, coordinación y diversión. Con metodología lúdica, sienta las bases futbolísticas y personales de los más pequeños, fomentando el amor por el deporte desde temprana edad.',
      categories: [
        'Categoría Sub4',
        'Categoría Sub5',
        'Categoría Sub6',
        'Categoría Sub7',
      ],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Jhon_Nelson_Salazar_Villa_2_bdfxia.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Jhon_Nelson_Salazar_Villa_1_sl74je.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Juan Esteban Garcia Vanegas',
      description:
        'Trabaja con Sub8 y Sub9, perfeccionando técnicas básicas como control, pase y conducción. Su enfoque en valores como disciplina y trabajo en equipo lo convierte en un guía ideal para niños que inician su camino en el fútbol de manera más seria.',
      categories: ['Categoría Sub8', 'Categoría Sub9'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Juan_Esteban_Garcia_Vanegas_2_bde2og.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Juan_Esteban_Garcia_Vanegas_1_cykowl.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Cristino Álvarez Moreno',
      description:
        'Experto en Sub10 y Sub11, Cristino desarrolla habilidades técnicas y tácticas, enfocándose en la inteligencia deportiva y la toma de decisiones. Prepara a los jóvenes para desafíos más complejos, consolidando su crecimiento futbolístico con un enfoque integral.',
      categories: ['Categoría Sub10', 'Categoría Sub11'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Cristino_%C3%81lvarez_Moreno_1_stwdgz.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Cristino_%C3%81lvarez_Moreno_2_xabvlw.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Juan Esteban Perea Andrade',
      description:
        'Especializado en Sub12, fortalece las habilidades físicas y técnicas de los jugadores. Su enfoque en disciplina y esfuerzo constante prepara a los jóvenes para la transición a categorías más avanzadas, ayudándoles a alcanzar su máximo potencial.',
      categories: ['Categoría Sub12'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.30.57_f49fea6b_ys8qhv.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.30.57_23cd5ee4_nikdql.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Carlos Javier Aguilar Ruiz',
      description:
        'Trabaja con Sub13 y Sub14, combinando técnica, táctica y preparación física. Su metodología incluye mentalidad competitiva, preparando a los jóvenes para torneos y desafíos con confianza y determinación, impulsando su desarrollo integral.',
      categories: ['Categoría Sub13', 'Categoría Sub14'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.33.59_57aa5911_cr7b2r.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.33.59_4ebe8cbc_tvqmxj.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Ferley Palacios Palacios',
      description:
        'Especialista en Sub15 a Sub17, Ferley enfoca su enseñanza en táctica avanzada, preparación física y mentalidad ganadora. Es clave para jóvenes que buscan dar el salto al fútbol profesional, puliendo su talento y preparándolos para el alto rendimiento.',
      categories: ['Categoría Sub15', 'Categoría Sub16', 'Categoría Sub17'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.35.34_4499c2eb_tsmjsa.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056222/Imagen_de_WhatsApp_2025-03-03_a_las_19.35.34_05c6eefc_dy6sij.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
    {
      name: 'Duban David Fuentes Barrios',
      description:
        'Entrenador de arqueros, Duban David desarrolla habilidades técnicas, posicionamiento y lectura del juego. Con un enfoque en la mentalidad fuerte bajo presión, forma porteros excepcionales, preparándolos para destacar en esta posición clave dentro del fútbol.',
      categories: ['Arqueros'],
      imageUrl: [
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Imagen_de_WhatsApp_2025-03-03_a_las_19.37.06_0c4199cc_djnrrw.jpg',
        'https://res.cloudinary.com/dy6jglszo/image/upload/v1741056223/Imagen_de_WhatsApp_2025-03-03_a_las_19.37.06_b0ef162d_k84nuh.jpg',
      ],
      tournaments: ['Sin Registro'],
      tournamentsWins: ['Sin Registro'],
    },
  ];

  currentTeacherIndex = 0;
  currentCardIndex = 0;

  get currentTeacher(): Teachers {
    return this.teachers[this.currentTeacherIndex];
  }

  get currentTeacherFirstImage(): string {
    return this.teachers[this.currentTeacherIndex].imageUrl[0];
  }

  get currentTeacherSecondImage(): string {
    return this.teachers[this.currentTeacherIndex].imageUrl[1];
  }

  buttonConfig: ButtonConfig = {
    label: 'Ver info del Profesor',
    action: () => {
      this.openModal();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
  };

  updateCurrentTeacher(index: number): void {
    this.currentTeacherIndex = index;
    this.currentCardIndex = index;
  }

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
    this.currentCardIndex = (this.currentCardIndex + 1) % this.teachers.length;
    // Sincronizar también el profesor actual
    this.currentTeacherIndex = this.currentCardIndex;
  }

  prevCard(): void {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.teachers.length) % this.teachers.length;
    // Sincronizar también el profesor actual
    this.currentTeacherIndex = this.currentCardIndex;
  }

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Profesores',
      description:
        'Conoce a los profesores de CD Futuro 13, quienes se encargan de formar a los jóvenes en las diferentes categorías del club.',
      keywords:
        'CD Futuro 13, profesores, categorías, formación, jóvenes, comuna 13, entrenadores',
      url: 'https://corporaciondeportivafuturo13.com/team/teachers',
      type: 'website',
    });
  }
}
