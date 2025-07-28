import { Component } from '@angular/core';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Contacto',
      description:
        'Ponte en contacto con CD Futuro 13 para más información sobre nuestras actividades, inscripciones y eventos. Estamos aquí para ayudarte.',
      keywords:
        'CD Futuro 13, contacto, información, inscripciones, eventos, comuna 13',
      url: 'https://corporaciondeportivafuturo13.com/contact',
      type: 'website',
    });
  }
}
