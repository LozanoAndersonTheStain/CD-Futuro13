import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../../interfaces/button.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() config!: ButtonConfig;
}
