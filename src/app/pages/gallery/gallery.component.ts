import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';

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
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.galleryService.getAllGalleryData().subscribe(data => {
      this.galleryCards = Object.entries(data).map(([year, yearData]) => ({
        year,
        images: yearData.images,
        totalImages: yearData.images.length
      }));
      this.isLoading = false;
    });
  }

  navigateToDetails(year: string) {
    this.router.navigate(['/gallery', year]);
  }
}
