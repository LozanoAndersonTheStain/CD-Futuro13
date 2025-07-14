import { Component, OnInit } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  constructor(
    private metaTagsService: MetaTagsService
  ) {}

  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'school',
      title: 'Nuestros Profesores',
      description: 'Conoce a los profesionales que están detrás de la formación de nuestros jóvenes.',
      buttonLabel: 'Ver Profesores',
      buttonHref: '/team/teachers',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'business',
      title: 'Nuestra Administración',
      description: 'Descubre quiénes son los responsables de la gestión y administración del club.',
      buttonLabel: 'Ver Administración',
      buttonHref: '/team/administrators',
      icon: 'arrow_forward'
    }
  ];

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Equipo',
      description: 'Conoce a los profesionales que están detrás de la formación de nuestros jóvenes y a los responsables de la gestión y administración del club.',
      keywords: 'CD Futuro 13, deporte, formación, jóvenes, comuna 13, equipo, profesores',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/team',
      type: 'website'
    });
  }
}
