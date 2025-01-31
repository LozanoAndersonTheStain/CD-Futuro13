import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../components/button/button.component";
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ButtonConfig } from '../../../interfaces/button.interface';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mission',
  imports: [ButtonComponent, MatIconModule, RouterModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
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
    href: 'CD-Futuro13/about/vision',
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
    href: 'CD-Futuro13/about/history',
    icon: 'arrow_back',
    iconPosition: 'left'
  };

    navigateToVision(): void {
      this.router.navigate(['CD-Futuro13/about/vision']);
    }

    navigateToHistory(): void {
      this.router.navigate(['CD-Futuro13/about/history']);
    }

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Misión');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Conoce la misión que tiene CD Futuro 13 con los jóvenes de la comuna 13.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, misión, conocer, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
