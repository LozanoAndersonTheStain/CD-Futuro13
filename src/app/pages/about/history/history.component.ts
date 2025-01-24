import { Component } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-history',
  imports: [ButtonComponent, RouterModule, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  constructor(private router: Router) {}

  buttonConfig: ButtonConfig = {
    label: 'Ver Misión',
    action: () => {
      this.navigateToMission();
    },
    type: 'button',
    class: 'btn-primary',
    fontSize: '1rem',
    href: '/about/mission',
    icon: 'arrow_forward'
  };

  navigateToMission(): void {
    this.router.navigate(['/join-us']);
  }
}
