import { Component, OnInit } from '@angular/core';
import { ButtonReturnComponent } from '../../components/button-return/button-return.component';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
  imports: [ButtonReturnComponent],
})
export class ErrorPageComponent implements OnInit {
  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Página no encontrada',
      description:
        'Lo sentimos, la página que buscas no existe. Vuelve a la página principal.',
      keywords: 'CD Futuro 13, error, página no encontrada, 404',
      url: 'https://corporaciondeportivafuturo13.com/error',
      type: 'website',
    });
  }
}
