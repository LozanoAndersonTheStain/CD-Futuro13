import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonConfig } from '../../interfaces/button.interface';
import { SponsorsSliderComponent } from "../../components/sponsors-slider/sponsors-slider.component";
import { RudePiggyComponent } from "../../components/rude-piggy/rude-piggy.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent, ButtonComponent, SponsorsSliderComponent, RudePiggyComponent],
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

  buttonConfig2: ButtonConfig = {
    label: 'Ver información de donaciones',
    action: () => {
      this.openModal();
    },
    type: 'button',
    class: 'btn-secondary',
    fontSize: '1rem'
  }

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

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToJoinUs(): void {
    this.router.navigate(['/CD-Futuro13/join-us']);
  }
}
