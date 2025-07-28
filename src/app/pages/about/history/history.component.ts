import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-history',
  imports: [ButtonComponent, RouterModule, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent implements OnInit {
  constructor(
    private metaTagsService: MetaTagsService,
    private router: Router
  ) {}

  buttonConfig: ButtonConfig = {
    label: 'Conocer Misión',
    action: () => {
      this.navigateToMission();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
  };

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Historia',
      description:
        'La historia de CD Futuro 13 es una historia de superación y esfuerzo. Conoce más sobre nosotros aquí.',
      keywords:
        'CD Futuro 13, historia, conocer, jóvenes, comuna 13, origen, fundación',
      url: 'https://corporaciondeportivafuturo13.com/about/history',
      type: 'website',
    });
  }

  navigateToMission(): void {
    this.router.navigate(['/about/mission']);
  }
}
