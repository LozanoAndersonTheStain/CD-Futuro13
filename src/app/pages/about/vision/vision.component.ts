import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vision',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  buttonConfigMission: ButtonConfig = {
    label: 'Ver Misión',
    action: () => {
      this.navigateToMission();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: 'CD-Futuro13/about/mission',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

  navigateToMission(): void {
    this.router.navigate(['/about/mission']);
  }

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Visión');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Conoce la visión que tiene CD Futuro 13 con los jóvenes de la comuna 13.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, visión, conocer, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
