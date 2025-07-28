import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';
import { MatExpansionModule } from '@angular/material/expansion';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss',
})
export class PlayersComponent {
  players: Testimonial[] = [
    {
      name: 'Santiago',
      description: 'Jugador de la Categoría Sub 12',
      imageUrl: 'assets/img_carousel/image_1.jpg',
      testimonial:
        'Desde que llegué a CD Futuro 13, mi vida cambió completamente. No solo he mejorado mi técnica con el balón, sino que he aprendido valores importantes como el respeto y el trabajo en equipo. Los entrenadores nos enseñan que el fútbol es más que meter goles, es sobre crecer como persona.',
    },
    {
      name: 'Valentina',
      description: 'Jugadora de la Categoría Sub 11',
      imageUrl: 'assets/img_carousel/image_2.jpg',
      testimonial:
        'Al principio tenía miedo porque era la única niña en mi grupo, pero aquí me han demostrado que el fútbol no tiene género. Mis compañeros me respetan y los entrenadores me impulsan a ser mejor cada día. ¡Ahora soy la capitana de mi equipo!',
    },
    {
      name: 'Andrés',
      description: 'Jugador de la Categoría Sub 17',
      imageUrl: 'assets/img_carousel/image_3.jpg',
      testimonial:
        'Llevo 5 años en el club y cada temporada aprendo algo nuevo. Los entrenamientos son desafiantes pero divertidos. Gracias a CD Futuro 13 he podido participar en torneos importantes y ahora sueño con ser futbolista profesional. El club me ha enseñado que con disciplina todo es posible.',
    },
    {
      name: 'Isabella',
      description: 'Jugadora de la Categoría Sub 15',
      imageUrl: 'assets/img_carousel/image_4.jpg',
      testimonial:
        'CD Futuro 13 es más que un club, es una familia. Aquí he encontrado mi pasión por el fútbol y amigos para toda la vida. Los entrenadores no solo nos preparan físicamente, también nos ayudan con nuestros estudios y desarrollo personal. ¡Es increíble ser parte de este proyecto!',
    },
    {
      name: 'Lucas',
      description: 'Jugador de la Categoría Sub 8',
      imageUrl: 'assets/img_carousel/image_5.jpg',
      testimonial:
        'Me encanta venir a entrenar porque aprendo jugando. Los profes hacen que todo sea divertido y nos enseñan trucos nuevos cada día. He hecho muchos amigos y cuando jugamos juntos nos sentimos como verdaderos campeones. ¡CD Futuro 13 es lo mejor!',
    },
    {
      name: 'Daniel',
      description: 'Jugador de la Categoría Sub 6',
      imageUrl: 'assets/img_carousel/image_6.jpg',
      testimonial:
        'Aunque soy pequeño, en el club me tratan como a un grande. Los entrenadores son muy pacientes y nos enseñan con juegos divertidos. Mi mamá dice que ahora soy más responsable y ordenado. Me gusta mucho cuando hacemos mini torneos con otros equipos.',
    },
    {
      name: 'Mateo',
      description: 'Jugador de la Categoría Sub 13',
      imageUrl: 'assets/img_carousel/image_7.jpg',
      testimonial:
        'En CD Futuro 13 no solo entrenamos fútbol, también aprendemos valores importantes. Los entrenadores nos enseñan a ser líderes dentro y fuera de la cancha. Gracias al club he mejorado mis notas en el colegio y ahora sé que puedo lograr todo lo que me proponga.',
    },
  ];

  constructor(private metaTagsService: MetaTagsService) {}

  currentPlayerIndex = Math.floor(this.players.length / 2);

  updateCurrentPlayer(index: number): void {
    this.currentPlayerIndex = index;
  }

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Testimonios de Jugadores',
      description:
        'Descubre las historias inspiradoras de nuestros jugadores en CD Futuro 13. Conoce cómo el fútbol ha transformado sus vidas y les ha enseñado valores importantes.',
      keywords: 'CD Futuro 13, testimonios, jugadores, fútbol, valores',
      url: 'https://corporaciondeportivafuturo13.com/testimonials/players',
      type: 'website',
    });
  }
}
