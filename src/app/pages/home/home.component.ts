import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { Meta, Title } from '@angular/platform-browser';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonConfig } from '../../interfaces/button.interface';
import { SponsorsSliderComponent } from "../../components/sponsors-slider/sponsors-slider.component";
import { RudePiggyComponent } from "../../components/rude-piggy/rude-piggy.component";
import { MetaTagsService } from '../../services/meta-tags.service';

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
    private metaTagsService: MetaTagsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Club Deportivo de la Comuna 13',
      description: 'CD Futuro 13 es un club deportivo comprometido con la formación de jóvenes íntegros en la Comuna 13 de Medellín. Únete a nuestra familia deportiva y construye un futuro lleno de oportunidades.',
      keywords: 'CD Futuro 13, club deportivo, fútbol, comuna 13, Medellín, formación deportiva, jóvenes, deporte transformación social',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/home',
      image: 'https://lozanoandersonthestain.github.io/CD-Futuro13/assets/logo.svg',
      type: 'website'
    });
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  navigateToJoinUs(): void {
    this.router.navigate(['/join-us']);
  }
}
