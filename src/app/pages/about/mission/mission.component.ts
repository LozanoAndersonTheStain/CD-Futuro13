import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../../interfaces/button.interface';

@Component({
  selector: 'app-mission',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {
  constructor(private router: Router) {}

  buttonConfigVision: ButtonConfig = {
    label: 'Ver Visión',
    action: () => {
      this.navigateToVision();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: '/about/vision',
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
    href: '/about/history',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

    navigateToVision(): void {
      this.router.navigate(['/about/vision']);
    }

    navigateToHistory(): void {
      this.router.navigate(['/about/history']);
    }
}
