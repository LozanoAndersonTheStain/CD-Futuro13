import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-awards',
  imports: [CommonModule, CardComponent, MatIconModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent implements OnInit {
  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'military_tech',
      title: 'Premios y Reconocimientos',
      description: 'Conoce los logros y reconocimientos que ha obtenido el club en su trayectoria.',
      buttonLabel: 'Ver Premios',
      buttonHref: '/CD-Futuro13/awards/player-awards',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'emoji_events',
      title: 'Copas',
      description: 'Revive los momentos más emocionantes de los torneos y copas en los que ha participado el club.',
      buttonLabel: 'Ver Torneos',
      buttonHref: '/CD-Futuro13/awards/trophy-room',
      icon: 'arrow_forward'
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Copas y Reconocimientos');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Conoce cuales han sido los reconocimientos que se han obtenido no solo por el club si no por nuestros jugadores en los partidos, ademas conoceras sobre las copas que hemos obtenido en nuestra trayectoria como club en los diferentes torneos.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, premios, reconocimientos, copas, torneos',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
