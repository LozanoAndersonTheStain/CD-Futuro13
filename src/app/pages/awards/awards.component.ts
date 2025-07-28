import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-awards',
  imports: [CommonModule, CardComponent, MatIconModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent implements OnInit {
  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'military_tech',
      title: 'Premios y Reconocimientos',
      description:
        'Conoce los logros y reconocimientos que ha obtenido el club en su trayectoria.',
      buttonLabel: 'Ver Premios',
      buttonHref: '/awards/player-awards',
      icon: 'arrow_forward',
    },
    {
      imageUrl: 'emoji_events',
      title: 'Copas',
      description:
        'Revive los momentos más emocionantes de los torneos y copas en los que ha participado el club.',
      buttonLabel: 'Ver Torneos',
      buttonHref: '/awards/trophy-room',
      icon: 'arrow_forward',
    },
  ];

  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Copas y Reconocimientos',
      description:
        'Conoce cuales han sido los reconocimientos que se han obtenido no solo por el club si no por nuestros jugadores en los partidos, ademas conoceras sobre las copas que hemos obtenido en nuestra trayectoria como club en los diferentes torneos.',
      keywords:
        'CD Futuro 13, premios, reconocimientos, copas, torneos, logros',
      url: 'https://corporaciondeportivafuturo13.com/awards',
      type: 'website',
    });
  }
}
