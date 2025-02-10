import { Component, OnInit } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'school',
      title: 'Nuestros Profesores',
      description: 'Conoce a los profesionales que están detrás de la formación de nuestros jóvenes.',
      buttonLabel: 'Ver Profesores',
      buttonHref: '/CD-Futuro13/team/teachers',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'business',
      title: 'Nuestra Administración',
      description: 'Descubre quiénes son los responsables de la gestión y administración del club.',
      buttonLabel: 'Ver Administración',
      buttonHref: '/CD-Futuro13/team/administrators',
      icon: 'arrow_forward'
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Equipo');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Conoce a los profesionales que están detrás de la formación de nuestros jóvenes y a los responsables de la gestión y administración del club.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, deporte, formación, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
