import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-join-us',
  imports: [CommonModule],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss'
})
export class JoinUsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('CD Futuro 13 - Únete');
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Unete a CD Futuro 13 para formar parte de un club en el cual no solo aprenderas deporte, sino que tambien te formaras como persona.',
      },
      {
        name: 'keywords',
        content: 'CD Futuro 13, deporte, formación, jóvenes, comuna 13',
      },
      { name: 'author', content: 'CD Futuro 13' },
    ]);
  }
}
