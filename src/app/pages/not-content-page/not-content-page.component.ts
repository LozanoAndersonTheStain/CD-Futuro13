import { Component, OnInit } from '@angular/core';
import { ButtonReturnComponent } from '../../components/button-return/button-return.component';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-not-content-page',
  templateUrl: './not-content-page.component.html',
  styleUrls: ['./not-content-page.component.scss'],
  imports: [ButtonReturnComponent],
})
export class NotContentPageComponent implements OnInit {
  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Contenido no disponible',
      description:
        'El contenido que buscas no está disponible en este momento. Estamos trabajando para traerte la mejor información.',
      keywords: 'CD Futuro 13, contenido no disponible, en construcción',
      url: 'https://corporaciondeportivafuturo13.com/not-content',
      type: 'website',
    });
  }
}
