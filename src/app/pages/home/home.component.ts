import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonConfig } from '../../interfaces/button.interface';
import { SponsorsSliderComponent } from "../../components/sponsors-slider/sponsors-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent, ButtonComponent, SponsorsSliderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  buttonConfig: ButtonConfig = {
    label: 'Únete Ahora',
    action: () => {
      this.navigateToJoinUs();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: '/CD-Futuro13/join-us'
  };

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Home');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'CD Futuro 13 es un club deportivo comprometido con la formación de jóvenes íntegros.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, deporte, formación, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }

  navigateToJoinUs(): void {
    this.router.navigate(['/CD-Futuro13/join-us']);
  }
}
