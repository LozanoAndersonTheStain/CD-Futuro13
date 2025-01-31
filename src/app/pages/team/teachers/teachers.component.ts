import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { ButtonConfig } from '../../../interfaces/button.interface';
import { MatIconModule } from '@angular/material/icon';
import { Meta, Title } from '@angular/platform-browser';

interface Teachers {
  name: string;
  age: number;
  description?: string;
  categories: string[];
  imageUrl: string;
  tournaments?: string[];
  tournamentsWins?: string[];
}

@Component({
  selector: 'app-teachers',
  imports: [CommonModule, ButtonComponent, MatIconModule],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {};

  teachers: Teachers[] = [
    {
      name: 'Santos Eliecer',
      age: 43,
      description: '',
      categories: ['Categoría 1', 'Categoría 2'],
      imageUrl: 'assets/img_carousel/image_1.jpg',
      tournaments: ['Tournament 1', 'Tournament 2'],
      tournamentsWins: ['Tournament 1'],
    },
    {
      name: 'María Pérez',
      age: 35,
      description: '',
      categories: ['Categoría 3', 'Categoría 4'],
      imageUrl: 'assets/img_carousel/image_2.jpg',
      tournaments: ['Tournament 3', 'Tournament 4'],
      tournamentsWins: ['Tournament 3', 'Tournament 4'],
    },
    {
      name: 'Juan López',
      age: 40,
      description: '',
      categories: ['Categoría 5', 'Categoría 6'],
      imageUrl: 'assets/img_carousel/image_3.jpg',
      tournaments: ['Tournament 5', 'Tournament 6'],
      tournamentsWins: ['Tournament 6'],
    },
    {
      name: 'Ana García',
      age: 30,
      description: '',
      categories: ['Categoría 7', 'Categoría 8'],
      imageUrl: 'assets/img_carousel/image_4.jpg',
      tournaments: ['Tournament 7', 'Tournament 8'],
      tournamentsWins: ['Aun no ha ganado torneos'],
    },
    {
      name: 'Carlos Martínez',
      age: 45,
      description: '',
      categories: ['Categoría 9', 'Categoría 10'],
      imageUrl: 'assets/img_carousel/image_5.jpg',
      tournaments: ['Tournament 9', 'Tournament 10'],
      tournamentsWins: ['Aun no ha ganado torneos'],
    },
    {
      name: 'Laura Rodríguez',
      age: 38,
      description: '',
      categories: ['Categoría 11', 'Categoría 12'],
      imageUrl: 'assets/img_carousel/image_6.jpg',
      tournaments: ['Tournament 11', 'Tournament 12'],
      tournamentsWins: ['Tournament 12'],
    }
  ];

  currentTeacherIndex = 0;
  currentCardIndex = 0;

  get currentTeacher(): Teachers {
    return this.teachers[this.currentTeacherIndex]
  }

  updateCurrentTeacher(index: number): void {
    this.currentTeacherIndex = index;
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

  openModal(): void {
    const modal = document.getElementById('modal')

    if (modal) {
      modal.style.display = "block";
    }
  }

  closeModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = "none";
    }
  }

  nextCard(): void {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.teachers.length;
  }

  prevCard(): void {
    this.currentCardIndex = (this.currentCardIndex - 1 + this.teachers.length) % this.teachers.length;
  }

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Profesores');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Conoce a los profesores de CD Futuro 13, quienes se encargan de formar a los jóvenes en las diferentes categorías del club.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, profesores, categorías, formación, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
