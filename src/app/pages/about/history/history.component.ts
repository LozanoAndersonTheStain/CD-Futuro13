import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-history',
  imports: [ButtonComponent, RouterModule, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  buttonConfig: ButtonConfig = {
    label: 'Ver Misión',
    action: () => {
      this.navigateToMission();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    icon: 'arrow_forward'
  };

  navigateToMission(): void {
    this.router.navigate(['/about/mission']);
  }

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Historia');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'La historia de CD Futuro 13 es una historia de superación y esfuerzo. Conoce más sobre nosotros aquí.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, historia, conocer, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
