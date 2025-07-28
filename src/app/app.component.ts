import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MetaTagsService } from './services/meta-tags.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'CD-Futuro13';

  constructor(private metaTagsService: MetaTagsService) {}

  ngOnInit(): void {
    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Club Deportivo de la Comuna 13',
      description:
        'CD Futuro 13 es un club deportivo comprometido con la formación de jóvenes íntegros en la Comuna 13 de Medellín.',
      keywords:
        'CD Futuro 13, deporte, formación, jóvenes, comuna 13, fútbol, Medellín',
      url: 'https://corporaciondeportivafuturo13.com/',
      type: 'website',
    });
  }
}
