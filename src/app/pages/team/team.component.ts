import { Component } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
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
}
