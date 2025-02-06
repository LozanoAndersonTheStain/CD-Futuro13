import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Testimonial } from '../../../interfaces/testimonial.interface';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  standalone: true,
  imports: [CommonModule, MatExpansionModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})
export class PlayersComponent {
  players: Testimonial[] = [
    { name: 'Mike', description: 'Jugador de la Categoria Sub 12', imageUrl: 'assets/img_carousel/image_1.jpg', testimonial: 'Desde que entré al club, he mejorado mucho en el fútbol. Además, he aprendido a trabajar en equipo y a ser más disciplinado en mi vida diaria.'},
    { name: 'Samite', description: 'Jugadora de la Categoria Sub 11', imageUrl: 'assets/img_carousel/image_2.jpg', testimonial: 'El club me ha enseñado a no rendirme nunca. Aquí he encontrado amigos y entrenadores que me apoyan en cada paso.'},
    { name: 'Hashi', description: 'Jugador de la Categoria Sub 17', imageUrl: 'assets/img_carousel/image_3.jpg', testimonial: 'El club no solo me ha ayudado a mejorar mi técnica, sino también a ser más responsable y a valorar el esfuerzo en todo lo que hago.'},
    { name: 'Kaity', description: 'Jugadora de la Categoria Sub 15', imageUrl: 'assets/img_carousel/image_4.jpg', testimonial: 'Aquí he aprendido que el fútbol no es solo un juego, es una pasión que requiere dedicación y compromiso. ¡Gracias al club por creer en mí!'},
    { name: 'Lauren', description: 'Jugadora de la Categoria Sub 8', imageUrl: 'assets/img_carousel/image_5.jpg', testimonial: 'Me encanta jugar en el club porque aquí me siento como en casa. He aprendido a ser más valiente y a nunca tener miedo de intentar cosas nuevas.'},
    { name: 'Ryan', description: 'Jugador de la Categoria Sub 6', imageUrl: 'assets/img_carousel/image_6.jpg', testimonial: 'El club es muy divertido. He hecho muchos amigos y siempre aprendo algo nuevo en cada entrenamiento.'},
    { name: 'Dakes', description: 'Jugador de la Categoria Sub 13', imageUrl: 'assets/img_carousel/image_7.jpg', testimonial: 'El club me ha enseñado que con esfuerzo y dedicación puedo lograr todo lo que me proponga. ¡Aquí he crecido como jugador y como persona!'}
  ]

  currentPlayerIndex = Math.floor(this.players.length / 2);

  updateCurrentPlayer(index: number): void {
    this.currentPlayerIndex = index;
  }

  ngOnInit(): void {}
}
