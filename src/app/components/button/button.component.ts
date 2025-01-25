import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../interfaces/button.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [CommonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() config!: ButtonConfig;

  get iconPosition(): 'left' | 'right' {
    return this.config.iconPosition || 'right';
  }
}
