import { Component } from '@angular/core';
import { ButtonReturnComponent } from "../../components/button-return/button-return.component";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  imports: [ButtonReturnComponent]
})
export class ErrorPageComponent {}
