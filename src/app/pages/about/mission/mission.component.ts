import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { MetaTagsService } from '../../../services/meta-tags.service';

@Component({
  selector: 'app-mission',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent implements OnInit {
  constructor(
    private metaTagsService: MetaTagsService,
    private router: Router
  ) {}

  buttonConfigVision: ButtonConfig = {
    label: 'Ver Visión',
    action: () => {
      this.navigateToVision();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    icon: 'arrow_forward',
    iconPosition: 'right'
  };

  buttonConfigHistory: ButtonConfig = {
    label: 'Ver Historia',
    action: () => {
      this.navigateToHistory();
    },
    type: 'button',
    class: 'btn-secondary',
    fontSize: '1rem',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

    navigateToVision(): void {
      this.router.navigate(['/about/vision']);
    }

    navigateToHistory(): void {
      this.router.navigate(['/about/history']);
    }

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Misión',
      description: 'Nuestra misión es formar jóvenes íntegros a través del deporte, promoviendo valores y brindando oportunidades de crecimiento personal y social.',
      keywords: 'CD Futuro 13, misión, formación, jóvenes, valores, deporte, comuna 13',
      url: 'https://lozanoandersonthestain.github.io/CD-Futuro13/about/mission',
      type: 'website'
    });
  }
}
