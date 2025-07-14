import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';
import { MatExpansionModule } from '@angular/material/expansion';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-fathers',
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './fathers.component.html',
  styleUrls: ['./fathers.component.scss'],
})
export class FathersComponent implements OnInit {
  fathers: Testimonial[] = [
    {
      name: 'Miguel',
      description: 'Padre de Sebastián (Sub-12) y Lucas (Sub-10)',
      imageUrl: 'assets/img_carousel/image_1.jpg',
      testimonial:
        'Ver la transformación de mis hijos en CD Futuro 13 ha sido increíble. No solo han mejorado su técnica futbolística, sino que ahora son más disciplinados en sus estudios y más respetuosos en casa. El club les ha enseñado que el deporte va más allá de la cancha.',
    },
    {
      name: 'Sandra',
      description: 'Madre de Daniel (Sub-12) y Camila (Sub-10)',
      imageUrl: 'assets/img_carousel/image_2.jpg',
      testimonial:
        'Como madre soltera, encontrar CD Futuro 13 fue una bendición. Los entrenadores no solo son excelentes profesionales, sino verdaderos mentores para mis hijos. Han creado un ambiente seguro donde pueden desarrollarse mientras aprenden valores fundamentales para la vida.',
    },
    {
      name: 'Hernando',
      description: 'Padre de Daniel (Sub-12) y Felipe (Sub-10)',
      imageUrl: 'assets/img_carousel/image_3.jpg',
      testimonial:
        'Lo que más valoro de CD Futuro 13 es su compromiso con la comunidad. Mis hijos no solo entrenan fútbol, están aprendiendo a ser líderes positivos en la Comuna 13. El cambio en su autoestima y confianza ha sido notable desde que se unieron al club.',
    },
    {
      name: 'Carolina',
      description: 'Madre de Sebastián (Sub-12) y Juan (Sub-10)',
      imageUrl: 'assets/img_carousel/image_4.jpg',
      testimonial:
        'CD Futuro 13 ha sido una inversión invaluable en el futuro de mis hijos. Los valores que aprenden aquí - trabajo en equipo, perseverancia, respeto - los están preparando para ser excelentes deportistas y, más importante aún, grandes seres humanos.',
    },
    {
      name: 'Laura',
      description: 'Madre de Samara y Stefanía (Sub-12)',
      imageUrl: 'assets/img_carousel/image_5.jpg',
      testimonial:
        'Como madre de dos niñas futbolistas, aprecio enormemente cómo CD Futuro 13 promueve la igualdad en el deporte. Mis hijas han encontrado un espacio donde pueden brillar y desarrollar su pasión sin limitaciones. El club es verdaderamente inclusivo.',
    },
    {
      name: 'Ricardo',
      description: 'Padre de Santiago (Sub-12)',
      imageUrl: 'assets/img_carousel/image_6.jpg',
      testimonial:
        'La metodología de entrenamiento de CD Futuro 13 es excepcional. Mi hijo no solo ha mejorado técnicamente, sino que ha aprendido la importancia de la disciplina y el compromiso. Los entrenadores se preocupan genuinamente por el desarrollo integral de cada jugador.',
    },
    {
      name: 'Diana',
      description: 'Madre de Cristian (Sub-12)',
      imageUrl: 'assets/img_carousel/image_7.jpg',
      testimonial:
        'Desde que mi hijo se unió a CD Futuro 13, he visto un cambio increíble en su actitud. Ha aprendido a manejar mejor sus emociones, a trabajar en equipo y a perseguir sus metas con determinación. El club se ha convertido en una segunda familia para nosotros.',
    },
  ];

  constructor(private metaTagsService: MetaTagsService) {}

  currentFatherIndex = Math.floor(this.fathers.length / 2);

  updateCurrentFather(index: number): void {
    this.currentFatherIndex = index;
  }

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Testimonios de Padres',
      description:
        'Descubre los testimonios de padres que han visto el impacto positivo de CD Futuro 13 en sus hijos. Conoce sus historias y experiencias.',
      keywords:
        'CD Futuro 13, testimonios, padres, impacto positivo, historias, experiencias',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/testimonials/fathers',
      type: 'website',
    });
  }
}
