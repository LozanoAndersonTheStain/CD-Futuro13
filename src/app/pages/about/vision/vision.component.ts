import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-vision',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss',
})
export class VisionComponent implements OnInit {
  constructor(
    private metaTagsService: MetaTagsService,
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
    icon: 'arrow_back',
    iconPosition: 'left',
  };

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Visión',
      description:
        'Nuestra visión es ser reconocidos como un club deportivo líder en la formación de jóvenes talentosos y comprometidos con su comunidad.',
      keywords:
        'CD Futuro 13, visión, liderazgo, formación, jóvenes, comunidad, talento',
      url: 'https://corporaciondeportivafuturo13.com/about/vision',
      type: 'website',
    });
  }

  navigateToMission(): void {
    this.router.navigate(['/about/mission']);
  }
}
