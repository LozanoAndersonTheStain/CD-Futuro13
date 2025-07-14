import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GalleryService } from '../../services/gallery.service';
import { MatIconModule } from '@angular/material/icon';
import { MediaRow } from '../../interfaces/gallery.interface';
import { MatDialog } from '@angular/material/dialog';
import { MediaModalComponent } from '../../components/media-modal/media-modal.component';
import { MetaTagsService } from '../../services/meta-tags.service';

@Component({
  selector: 'app-gallery-details',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './gallery-details.component.html',
  styleUrl: './gallery-details.component.scss',
})
export class GalleryDetailsComponent implements OnInit {
  year: string = '';
  mediaRows: MediaRow[] = [];
  isLoading = true;
  readonly ITEMS_PER_ROW = 6;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private galleryService: GalleryService,
    private dialog: MatDialog,
    private metaTagsService: MetaTagsService
  ) {}

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year') || '';
    this.loadMedia();

    this.metaTagsService.updateTags({
      title: `CD Futuro 13 - Galería ${this.year}`,
      description: `Explora la galería de fotos y videos del año ${this.year} de CD Futuro 13. Conoce nuestros logros y experiencias en el fútbol.`,
      keywords: `CD Futuro 13, galería, fotos, videos, fútbol, logros, ${this.year}`,
      url: `https://lozanoandersonthestain.github.io/CD-Futuro13/gallery/${this.year}`,
      type: 'website',
    });
  }

  private loadMedia() {
    this.galleryService.getMediaByYear(this.year).subscribe((media) => {
      this.createMediaRows(media.images, media.videos);
      this.isLoading = false;
    });
  }

  private createMediaRows(images: string[], videos: string[]) {
    const allMedia = [
      ...images.map((url) => ({ type: 'image' as const, url })),
      ...videos.map((url) => ({ type: 'video' as const, url })),
    ];

    this.mediaRows = [];
    for (let i = 0; i < allMedia.length; i += this.ITEMS_PER_ROW) {
      const rowItems = allMedia.slice(i, i + this.ITEMS_PER_ROW);
      this.mediaRows.push({
        type: rowItems[0].type,
        urls: rowItems.map((item) => item.url),
      });
    }
  }

  goBack() {
    this.router.navigate(['/gallery']);
  }

  isVideo(url: string): boolean {
    return (
      url.toLowerCase().endsWith('.mp4') ||
      url.toLowerCase().endsWith('.webm') ||
      url.toLowerCase().endsWith('.ogg')
    );
  }

  openMedia(url: string): void {
    this.dialog.open(MediaModalComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'fullscreen-modal',
      data: {
        url,
        isVideo: this.isVideo(url),
      },
    });
  }
}
