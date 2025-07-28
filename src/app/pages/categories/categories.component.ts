import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/categories.interface';
import { MetaTagsService } from '../../services/meta-tags.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    {
      id: 'sub-4',
      title: 'Categoría Sub-4',
      description:
        'Esta categoría está diseñada para los jugadores más pequeños, de los 4 años de edad. Aquí se enfocan en la introducción al deporte y en el desarrollo de habilidades motoras básicas a través de juegos y actividades divertidas.',
      imageCategory: 'assets/img_carousel/image_1.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-6',
      title: 'Categoría Sub-6',
      description:
        'En esta categoria, los niños de hasta 6 años comienzan a aprender las reglas básicas del fútbol y a desarrollar habilidades técnicas fundamentales. Se promueve el trabajo en equipo y la diversión.',
      imageCategory: 'assets/img_carousel/image_2.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-8',
      title: 'Categoría Sub-8',
      description:
        'La categoría Sub-8 está dirigida a niños de hasta 8 años. Aquí se trabaja en el perfeccionamiento de las habilidades técnicas y tácticas básicas, así como en la comprensión del juego en equipo.',
      imageCategory: 'assets/img_carousel/image_3.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-10',
      title: 'Categoría Sub-10',
      description:
        'En la categoría Sub-10, los jugadores de hasta 10 años continúan desarrollando sus habilidades técnicas y tácticas. Se introduce una mayor complejidad en las estrategias de juego y se fomenta la competitividad sana.',
      imageCategory: 'assets/img_carousel/image_4.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-12',
      title: 'Categoría Sub-12',
      description:
        'La categoría Sub-12 está diseñada para jugadores de hasta 12 años. Aquí se trabaja en el desarrollo avanzado de habilidades técnicas y tácticas, así como en la preparación física y mental para la competencia.',
      imageCategory: 'assets/img_carousel/image_5.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-15',
      title: 'Categoría Sub-15',
      description:
        'En la categoría Sub-15, los jugadores de hasta 15 años se enfocan en el perfeccionamiento de sus habilidades y en la preparación para competencias de mayor nivel. Se trabaja en la estrategia, la táctica y la condición física.',
      imageCategory: 'assets/img_carousel/image_6.jpg',
      showFullDescription: false,
    },
    {
      id: 'sub-17',
      title: 'Categoría Sub-17',
      description:
        'La categoría Sub-17 está dirigida a jugadores de hasta 17 años. Aquí se prepara a los jugadores para competencias de alto nivel, con un enfoque en el desarrollo integral del atleta, incluyendo aspectos técnicos, tácticos, físicos y mentales.',
      imageCategory: 'assets/img_carousel/image_7.jpg',
      showFullDescription: false,
    },
    {
      id: 'femenina',
      title: 'Categoría Femenina',
      description:
        'La categoría femenina está abierta a jugadoras de todas las edades. Se enfoca en el desarrollo de habilidades técnicas y tácticas, así como en la promoción del fútbol femenino y la igualdad de género en el deporte.',
      imageCategory: 'assets/img_carousel/image_8.jpg',
      showFullDescription: false,
    },
  ];

  constructor(
    private metaTagsService: MetaTagsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Categorías',
      description:
        'Descubre las diferentes categorías deportivas de CD Futuro 13, desde Sub-4 hasta Sub-17 y la categoría femenina. Cada una diseñada para el desarrollo integral de nuestros jóvenes.',
      keywords:
        'CD Futuro 13, categorías, sub-4, sub-6, sub-8, sub-10, sub-12, sub-15, sub-17, femenina, fútbol infantil',
      url: 'https://corporaciondeportivafuturo13.com/categories',
      type: 'website',
    });
  }

  toggleDescription(category: Category): void {
    category.showFullDescription = !category.showFullDescription;
  }
}
