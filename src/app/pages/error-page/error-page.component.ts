import { Component, OnInit } from '@angular/core';
import { ButtonReturnComponent } from "../../components/button-return/button-return.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  imports: [ButtonReturnComponent]
})
export class ErrorPageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Página no encontrada - CD Futuro 13');
    this.metaService.addTags([
      { name: 'description', content: 'La página que buscas no se encuentra disponible en CD Futuro 13.' },
      { name: 'keywords', content: 'CD Futuro 13, página no encontrada, error 404' },
      { name: 'author', content: 'CD Futuro 13' },
      { name: 'robots', content: 'noindex, nofollow' }
    ]);
  }
}
