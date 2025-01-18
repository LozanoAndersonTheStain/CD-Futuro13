import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sponsors-slider.component.html',
  styleUrls: ['./sponsors-slider.component.scss']
})
export class SponsorsSliderComponent implements OnInit {
  sponsors = [
    { name: 'Sponsor 1', image: 'assets/sponsors/sponsor1.png' },
    { name: 'Sponsor 2', image: 'assets/sponsors/sponsor2.png' },
    { name: 'Sponsor 3', image: 'assets/sponsors/sponsor3.png' },
    { name: 'Sponsor 4', image: 'assets/sponsors/sponsor4.png' },
    { name: 'Sponsor 5', image: 'assets/sponsors/sponsor5.png' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
