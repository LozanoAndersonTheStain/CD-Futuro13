import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  galleryCards: { year: string; images: string[]; totalImages: number }[] = [];
  isLoading = true;

  constructor(
    private router: Router,
    private galleryService: GalleryService,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit() {
    this.galleryService.getAllGalleryData().subscribe((data) => {
      this.galleryCards = Object.entries(data).map(([year, yearData]) => ({
        year,
        images: yearData.images,
        totalImages: yearData.images.length,
      }));
      this.isLoading = false;
    });

    this.metaTagsService.updateTags({
      title: 'CD Futuro 13 - Galería',
      description:
        'Descubre la galería de fotos de CD Futuro 13. Conoce nuestros logros y experiencias en el fútbol.',
      keywords: 'CD Futuro 13, galería, fotos, fútbol, logros',
      url: 'https://corporaciondeportivafuturo13.com/gallery',
      type: 'website',
    });
  }

  navigateToDetails(year: string) {
    this.router.navigate(['/gallery', year]);
  }
}
