import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss',
})
export class JoinUsComponent implements OnInit {
  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Únete',
      description:
        'Únete a CD Futuro 13 y forma parte de nuestra familia deportiva. Descubre cómo puedes participar en nuestras categorías y actividades.',
      keywords:
        'CD Futuro 13, únete, inscripciones, categorías, familia deportiva, participar',
      url: 'https://corporaciondeportivafuturo13.com/join-us',
      type: 'website',
    });
  }
}
