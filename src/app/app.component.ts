import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'CD-Futuro13';

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13');
    this.metaService.addTags([
      { name: 'description', content: 'CD Futuro 13 es un club deportivo comprometido con la formación de jóvenes íntegros.' },
      { name: 'keywords', content: 'CD Futuro 13, deporte, formación, jóvenes, comuna 13' },
      { name: 'author', content: 'CD Futuro 13' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }
}


