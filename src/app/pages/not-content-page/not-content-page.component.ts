import { Component, OnInit } from '@angular/core';
import { ButtonReturnComponent } from "../../components/button-return/button-return.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-content-page',
  templateUrl: './not-content-page.component.html',
  styleUrls: [ './not-content-page.component.scss' ],
  imports: [ButtonReturnComponent]
})
export class NotContentPageComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contenido no disponible - CD Futuro 13');
    this.metaService.addTags([
      { name: 'description', content: 'El contenido que buscas no está disponible en CD Futuro 13.' },
      { name: 'keywords', content: 'CD Futuro 13, contenido no disponible, error' },
      { name: 'author', content: 'CD Futuro 13' },
      { name: 'robots', content: 'noindex, nofollow' }
    ]);
  }
}
