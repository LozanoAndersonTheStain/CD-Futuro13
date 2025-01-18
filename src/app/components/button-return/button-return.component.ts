import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button-return',
  templateUrl: './button-return.component.html',
  styleUrls: ['./button-return.component.scss']
})
export class ButtonReturnComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
