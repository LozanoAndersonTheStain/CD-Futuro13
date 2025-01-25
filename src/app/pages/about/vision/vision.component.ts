import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonConfig } from '../../../interfaces/button.interface';

@Component({
  selector: 'app-vision',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.scss'
})
export class VisionComponent {
  constructor(private router: Router) {}

  buttonConfigMission: ButtonConfig = {
    label: 'Ver Misión',
    action: () => {
      this.navigateToMission();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: '/about/mission',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

  navigateToMission(): void {
    this.router.navigate(['/about/mission']);
  }
}
