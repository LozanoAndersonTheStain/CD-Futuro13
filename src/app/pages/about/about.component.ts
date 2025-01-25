import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CardConfig } from '../../interfaces/card.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cardConfigs: CardConfig[] = [
    {
      imageUrl: 'info',
      title: 'Historia del Club',
      description: 'Hace algunos años, en el corazón de la comuna 13, un grupo de padres, entrenadores y líderes comunitarios compartían una preocupación común...',
      buttonLabel: 'Leer más',
      buttonHref: '/about/history',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'flag',
      title: 'Nuestra Misión',
      description: 'En CD Futuro 13, nuestra misión es impactar positivamente en la vida de los jóvenes y sus familias a través del deporte, promoviendo valores que trasciendan más allá del campo de juego...',
      buttonLabel: 'Leer más',
      buttonHref: '/about/mission',
      icon: 'arrow_forward'
    },
    {
      imageUrl: 'group',
      title: 'Nuestra Visión',
      description: 'Nuestra visión es ser reconocidos como un modelo de excelencia y transformación social en el ámbito deportivo, trascendiendo las fronteras de la comuna 13 y llevando nuestra filosofía...',
      buttonLabel: 'Leer más',
      buttonHref: '/about/vision',
      icon: 'arrow_forward'
    }
  ];
}
