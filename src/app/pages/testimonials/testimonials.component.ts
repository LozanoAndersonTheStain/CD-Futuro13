import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardConfig } from '../../interfaces/card.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  imports: [CardComponent, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'group',
      title: 'Lo que dicen los Padres',
      description: 'Descubre que opinan de los padres sobre la formación brindada por el club.',
      buttonLabel: 'Ver Testimonios',
      buttonHref: 'CD-Futuro13/testimonials/fathers',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'school',
      title: 'Lo que dicen los Alumnos',
      description: 'Nuestros alumnos cuentan sus experiencias con el club y como los ha cambiado.',
      buttonLabel: 'Ver Testimonios',
      buttonHref: 'CD-Futuro13/testimonials/players',
      icon: 'arrow_forward'
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Testimonios');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Descubre las opiniones de padres y alumnos sobre la formación y experiencias en CD Futuro 13. Conoce cómo el club ha impactado positivamente en sus vidas.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, testimonios, formación, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
