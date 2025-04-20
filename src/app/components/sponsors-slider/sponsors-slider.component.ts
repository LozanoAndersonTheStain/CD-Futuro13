import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors-slider.component.html',
  styleUrls: ['./sponsors-slider.component.scss']
})
export class SponsorsSliderComponent {
  sponsors = [
    { name: 'Sponsor 1', image: 'assets/logos_sponsors/sponsor1.svg' },
    { name: 'Sponsor 2', image: 'assets/logos_sponsors/sponsor2.svg' },
    { name: 'Sponsor 3', image: 'assets/logos_sponsors/sponsor3.svg' },
    { name: 'Sponsor 4', image: 'assets/logos_sponsors/sponsor4.svg' },
    { name: 'Sponsor 5', image: 'assets/logos_sponsors/sponsor5.svg' },
    { name: 'Sponsor 6', image: 'assets/logos_sponsors/sponsor6.svg' },
    { name: 'Sponsor 7', image: 'assets/logos_sponsors/sponsor7.svg' },
    { name: 'Sponsor 8', image: 'assets/logos_sponsors/sponsor8.svg' },
    { name: 'Sponsor 9', image: 'assets/logos_sponsors/sponsor9.svg' },
    { name: 'Sponsor 10', image: 'assets/logos_sponsors/sponsor10.svg' }
  ];
}
