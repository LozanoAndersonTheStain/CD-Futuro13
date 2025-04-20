import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GalleryService } from '../../services/gallery.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery-details',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './gallery-details.component.html',
  styleUrl: './gallery-details.component.scss',
})
export class GalleryDetailsComponent implements OnInit {
  year: string = '';
  imageRows: string[][] = [];
  isLoading = true;
  readonly IMAGES_PER_ROW = 6;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year') || '';
    this.loadImages();
  }

  private loadImages() {
    this.galleryService.getImagesByYear(this.year).subscribe((images) => {
      this.createImageRows(images);
      this.isLoading = false;
    });
  }

  private createImageRows(images: string[]) {
    this.imageRows = [];
    for (let i = 0; i < images.length; i += this.IMAGES_PER_ROW) {
      this.imageRows.push(images.slice(i, i + this.IMAGES_PER_ROW));
    }
  }

  goBack() {
    this.router.navigate(['/gallery']);
  }
}
