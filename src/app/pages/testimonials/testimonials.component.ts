import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardConfig } from '../../interfaces/card.interface';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-testimonials',
  imports: [CardComponent, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  constructor(
    private metaTagsService: MetaTagsService
  ) {}

  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'group',
      title: 'Lo que dicen los Padres',
      description: 'Descubre que opinan de los padres sobre la formación brindada por el club.',
      buttonLabel: 'Ver Testimonios',
      buttonHref: '/testimonials/fathers',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'school',
      title: 'Lo que dicen los Alumnos',
      description: 'Nuestros alumnos cuentan sus experiencias con el club y como los ha cambiado.',
      buttonLabel: 'Ver Testimonios',
      buttonHref: '/testimonials/players',
      icon: 'arrow_forward'
    }
  ];

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Testimonios',
      description: 'Descubre las opiniones de padres y alumnos sobre la formación y experiencias en CD Futuro 13. Conoce cómo el club ha impactado positivamente en sus vidas.',
      keywords: 'CD Futuro 13, testimonios, formación, jóvenes, comuna 13, padres, alumnos',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/testimonials',
      type: 'website'
    });
  }
}
